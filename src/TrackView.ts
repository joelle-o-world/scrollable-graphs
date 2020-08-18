import {SignalGraph} from "./SignalGraph";
import {MarkerGraph} from "./MarkerGraph";
import {CoordinateGraph} from "./CoordinateGraph";
import { PolygonGraph } from "./PolygonGraph";

type Graph = (MarkerGraph | SignalGraph | CoordinateGraph | PolygonGraph)

/** 
 * The `TrackView` class coordinates multiple layers of information that share the same time axis. It renders a certian time-windowed section of these graphs onto a canvas element.
 *
 * E.g./
 * ```
 * // Create a new track view using an existing canvas element.
 * let canvas = document.getElementById('mycanvas');
 * let view = new TrackView(canvas);
 *
 * // Add graphs to view
 * view.addGraph(
 *      new SignalGraph([1,2,3,4,1], 2),
 *      new SignalGraph([5,6,7], 1.5),
 * );
 *
 * // Render...
 * view.draw();
 * ```
 */
export class TrackView {
  /** Reference to the DOM canvas element where the graphs will be drawn. */
  canvas: HTMLCanvasElement;

  /** Canvas rendering context */
  ctx: CanvasRenderingContext2D | null;

  /** If true, the graph will automatically scroll with the playhead when audio is playing.*/
  lockedToPlayhead: boolean;

  /** 
   * @ignore */
  playheadOffset: number | null;

  /** Time at left-most edge of the time-window. */
  t0: number;

  /** Time at right-most edge of the time-window. */
  t1: number;

  /** The minimum time that can be shown on the graph. */
  tMin: number | null;

  /** The maximum time that can be shown on the graph. I.e. when audio ends. */
  tMax: number | null;

  /** Minimum duration that can be displayed at any time. This effectively sets a hard limit on zoom */
  tSpanMin: number;
 
  /** The graphs objects that belong to the track view */
  graphs: Graph[];

  /** Should the playhead be visible? */
  cursorVisible: boolean;

  /** Web audio context for audio playback. */
  audioctx: AudioContext;

  /** The audio sample under analysis. */
  audiobuffer: AudioBuffer;

  /** 
   * Timer reference for updating playhead position.
   * @internal
   */
  cursorInterval: number;

  /** 
   * The currently playing buffer source node (if audio is playing). 
   * @internal 
   * */
  playingSource: AudioBufferSourceNode;

  /** Create a new `TrackView` with the given canvas element. If no canvas argument provided a new one will be created. */
  constructor(canvas:HTMLCanvasElement=document.createElement('canvas')) {
    this.canvas = canvas
    this.ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

    this.lockedToPlayhead = false
    this.playheadOffset = null

    this.t0 = 0
    this.t1 = 100

    this.tMin = null
    this.tMax = null
    this.tSpanMin = 200/44100

    this.graphs = []
  }

  /** Add one or more graphs to the TrackView. */
  addGraph(...graphs:Graph[]) {
      this.graphs.push(...graphs)
  }

  /** Render the track view, and all its graphs, to the canvas. */
  draw() {
    if(!this.ctx)
      throw 'Unable to draw because canvas context is undefined'
    let t = this.tPlayhead

    if(this.lockedToPlayhead) {
      if(t === null)
        throw "tPlayhead is null";
      let span = this.tSpan
      let t1 = t + 2/3 * span
      if(this.tMax && t1 < this.tMax) {
        this.t0 = t - 1/3 * span
        this.t1 = t1
      } else
        this.lockedToPlayhead = false
    }


    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    this.cursorVisible = false

    for(let G of this.graphs)
      G.draw(this)

    if(t != null) {
      let x = this.xAtT(t)
      if(x > 0 && x < this.canvas.width) {
        this.ctx.beginPath()
        this.ctx.strokeStyle = '#ffff00'
        this.ctx.moveTo(x,0)
        this.ctx.lineTo(x,this.canvas.height)
        this.ctx.stroke()

        this.cursorVisible = true
      }
    }
  }

  /** Get the time represented at a specific x-position on the graph */
  tAtX(x:number) {
    return this.t0 + (x/this.canvas.width) * (this.t1-this.t0)
  }

  /** Get the x-position of a given time on the graph. */
  xAtT(t:number) {
    return (t-this.t0)/(this.t1 - this.t0) * this.canvas.width
  }

  /** Time resolution. Number of pixels representing each second of audio on the x-axis */
  get pixelsPerSecond() {
    return this.canvas.width / this.tSpan
  }

  /** 
   * The duration of the time window represented by the graph. (right edge - left edge. `t1-t0`)
   */
  get tSpan() {
    return this.t1-this.t0
  }

  /**
   * The current time of the playhead / audio playback.
   */
  get tPlayhead() {
    if(this.playheadOffset == null)
      return null
    else
      return this.audioctx.currentTime + this.playheadOffset
  }

  /**
   * Start audio playback.
   * @param offset Time within the audio file at which to start playback.
   */
  play(offset:number) {
    if(!this.audiobuffer)
      return null

    if(!this.audioctx)
      this.audioctx = new AudioContext

    this.stop()

    this.lockedToPlayhead = true
    this.cursorInterval = setInterval(() => {
      if(this.playheadOffset === null)
        throw "playheadOffset is null";
      let t = this.audioctx.currentTime + this.playheadOffset
      let x = this.xAtT(t)
      if(
        (x > 0 && x < this.canvas.width)
        || this.cursorVisible
        || this.lockedToPlayhead
      )
        this.draw()
    }, 50)

    let source = this.audioctx.createBufferSource()
    source.buffer = this.audiobuffer
    source.connect(this.audioctx.destination)

    source.start(0, offset)
    let tStart = this.audioctx.currentTime
    this.playingSource = source
    this.playheadOffset = offset - this.audioctx.currentTime
  }

  /**
   * Stop audio playback.
   */
  stop() {
    if(this.playingSource)
      this.playingSource.stop()

    if(this.cursorInterval)
      clearInterval(this.cursorInterval)
  }

  /**
   * Track the graph forwards or backwards in time while preserving zoom.
   * ```
   * view.scroll(1);    // Move time window 1 second later
   * view.scroll(-5);   // Move time window 5 seconds earlier
   * ```
   *
   * @param amount How far, in seconds, to move the time window.
   */
  scroll(amount:number) {
    let t0 = this.t0 + amount
    let t1 = this.t1 + amount
    if((this.tMin == null || t0 > this.tMin) && (this.tMax == null || t1 < this.tMax)) {
      this.t0 = t0
      this.t1 = t1
    }
    this.enforceLimits()
  }

  /**
   * Zoom in or out around a given point in time.
   * 
   * eg/
   * ```
   * view.zoom(2); // Zoom in by 200%
   * view.zoom(1/2, 0); // Zoom out by 50% taking t=0 as the anchor point.
   * ```
   *
   * @param scaleFactor Zoom scale factor.
   * @param anchor Anchor time-point.
   */
  zoom(scaleFactor=1.5, anchor=(this.t0+this.t1)/2) {
    if(this.lockedToPlayhead && this.tPlayhead != null)
      anchor = this.tPlayhead;

    if(this.tSpanMin != null && this.tSpan/scaleFactor < this.tSpanMin)
      scaleFactor = this.tSpan / this.tSpanMin;
    

    this.t0 = (this.t0-anchor)/scaleFactor + anchor;
    this.t1 = (this.t1-anchor)/scaleFactor + anchor;
    this.enforceLimits();
  }

  /**
   * Enforce the restrictions outlined by `tMin` and `tMax`. Corrects `t0` and `t1` if they are outside the bounds.
   */
  enforceLimits() {
    if(this.tMin != null && this.t0 < this.tMin)
      this.t0 = this.tMin
    if(this.tMax != null && this.t1 > this.tMax)
      this.t1 = this.tMax
  }
}
