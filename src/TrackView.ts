import {SignalGraph} from "./SignalGraph";
import {MarkerGraph} from "./MarkerGraph";
import {CoordinateGraph} from "./CoordinateGraph";
import { PolygonGraph } from "./PolygonGraph";
import { Canvas } from "canvas/types";

type Graph = (MarkerGraph | SignalGraph | CoordinateGraph | PolygonGraph)

/** Class for rendering multiple graphs on a canvas element. 
 * Allowing the user to zoom and pan with the mouse wheel.
 */
export class TrackView {
  canvas: HTMLCanvasElement|Canvas;
  ctx: CanvasRenderingContext2D | null;
  lockedToPlayhead: boolean;
  playheadOffset: number | null;
  t0: number;
  t1: number;
  tMin: number | null;
  tMax: number | null;
  tSpanMin: number;
  graphs: Graph[];
  cursorVisible: boolean;
  audioctx: any;
  audiobuffer: any;
  cursorInterval: NodeJS.Timeout;
  playingSource: any;
  constructor(canvas:HTMLCanvasElement|Canvas=document.createElement('canvas')) {
    this.canvas = canvas
    //canvas.width = 1000
    //canvas.height = 300
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

  addGraph(...graphs:Graph[]) {
      this.graphs.push(...graphs)
      //this.draw()
  }

  draw() {
    if(!this.ctx)
      throw 'Unable to draw because canvas context is undefined'
    let t = this.tPlayhead

    if(this.lockedToPlayhead) {
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

  tAtX(x:number) {
    return this.t0 + (x/this.canvas.width) * (this.t1-this.t0)
  }

  xAtT(t:number) {
    return (t-this.t0)/(this.t1 - this.t0) * this.canvas.width
  }

  get pixelsPerSecond() {
    return this.canvas.width / this.tSpan
  }

  get tSpan() {
    return this.t1-this.t0
  }

  get tPlayhead() {
    if(this.playheadOffset == null)
      return null
    else
      return this.audioctx.currentTime + this.playheadOffset
  }

  play(offset:number) {
    if(!this.audiobuffer)
      return null

    if(!this.audioctx)
      this.audioctx = new AudioContext

    this.stop()

    this.lockedToPlayhead = true
    this.cursorInterval = setInterval(() => {
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

  stop() {
    if(this.playingSource)
      this.playingSource.stop()

    if(this.cursorInterval)
      clearInterval(this.cursorInterval)
  }

  scroll(amount:number) {
    let t0 = this.t0 + amount
    let t1 = this.t1 + amount
    if((this.tMin == null || t0 > this.tMin) && (this.tMax == null || t1 < this.tMax)) {
      this.t0 = t0
      this.t1 = t1
    }
    this.enforceLimits()
  }

  zoom(sf=1.5, o=(this.t0+this.t1)/2) {
    if(this.lockedToPlayhead && this.tPlayhead != null)
      o = this.tPlayhead

    if(this.tSpanMin != null && this.tSpan/sf < this.tSpanMin) {
      sf = this.tSpan / this.tSpanMin
    }

    this.t0 = (this.t0-o)/sf + o
    this.t1 = (this.t1-o)/sf + o
    this.enforceLimits()
  }

  enforceLimits() {
    if(this.tMin != null && this.t0 < this.tMin)
      this.t0 = this.tMin
    if(this.tMax != null && this.t1 > this.tMax)
      this.t1 = this.tMax
  }
}
