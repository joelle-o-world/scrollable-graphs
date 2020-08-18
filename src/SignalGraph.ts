import {TrackView} from "./TrackView";

const sq = (x: number) => x*x

/** 
 * The `SignalGraph` graph class represents a fixed-interval scalar time series (Such as PCM audio). It automatically creates lower resolution versions of itself as required.
 *
 * e.g./
 * ```
 * // From an AudioBuffer
 * let sampleInterval = 1 / audiobuffer.sampleRate;
 * let left = new SignalGraph(audiobuffer.getChannelData(0), sampleInterval);
 * let right = new SignalGraph(audiobuffer.getChannelData(1), sampleInterval);
 *
 * // Apply colour
 * left.color = '#000000';
 * right.color = '#ff0000';
 * 
 * // Render the results
 * let view = new TrackView();
 * view.addGraphs(left, right);
 * view.draw();
 * ```
 */
class SignalGraph {
  /** The time series data points. */
  data: number[] | Float32Array;

  /** The time interval between each pair of adjacent points. */
  interval: number;

  /** A scaling function that maps data points to their positions on the y-axis. */
  scale: (y: number) => any;

  /** HTML color-string. What colour should be used for drawing the graph. This property is inherited by lower-resolution versions of the graph.*/
  color: string;

  /** Style of the graph. 
   *
   * Set to `"line"` for a simple line graph.
   * Set to `reflectAndFille` to reflect values over zero to make a filled polygon (a convention for low resolution audio waveforms). 
   *
   * This property is inherited by lower resolution versions of the graph.
   * */
  style: 'line' | 'reflectAndFill';

  /** 
   * The generated lower resolution version of the graph (if it exists).
   * @internal
   */
  _rmsGraph: SignalGraph | null;

  /**
   * The higher resolution graph from which this graph was generated.
   */
  parentGraph: SignalGraph;

  constructor(data:number[]|Float32Array, interval=1) {
    this.interval = interval
    this.data = data
    this.scale = y => y

    this.color = '#000000'
    this.style = 'line'
  }

  /** 
   * Render the graph. Should be called by the `TrackView` class. 
   * @internal
   */
  draw(display: TrackView) :this|SignalGraph {
    let nPoints = (display.t1-display.t0)/this.interval

    if(nPoints > 250)
      return this.rmsGraph.draw(display)

    let ctx = display.ctx
    if(!ctx)
      throw "Unable to draw SignalGraph because canvas context is null"

    let {width, height} = display.canvas

    let points = []
    ctx.beginPath()
    let i0 = Math.floor(display.t0/this.interval)
    for(let i=i0; i<this.data.length; i++) {
      let x = display.xAtT(i * this.interval)
      let y = this.scale(this.data[i])
      y = height * (1 - y)

      if(i == i0)
        ctx.moveTo(x,y)
      else
        ctx.lineTo(x, y)

      points.push({x:x, y:y})

      if(x > width)
        break
    }

    if(this.style == 'line') {
      ctx.strokeStyle = this.color
      ctx.stroke()
    } else if(this.style == 'reflectAndFill') {
      let r = display.canvas.height * (1-this.scale(0))
      for(let i=points.length-1; i>=0; i--)
        ctx.lineTo(points[i].x, 2*r - points[i].y)

      ctx.fillStyle = this.color
      ctx.fill()
    }

    return this
  }

  /** Generates a lower resolution version of the graph, or fetch it if it already exists. */
  get rmsGraph() {
    if(this._rmsGraph)
      return this._rmsGraph

    let redux = 4

    let newData = []
    for(let i=0; i<this.data.length; i+=redux) {
      let sum = 0
      for(let j=0; j<redux; j++)
        sum += sq(this.data[i+j])

      newData.push(Math.sqrt(sum/redux))
    }

    let graph = new SignalGraph(newData, this.interval * redux)
    this._rmsGraph = graph
    graph.parentGraph = this

    graph.color = this.color
    graph.style = this.style//'reflectAndFill'

    graph.scale = this.scale

    return graph
  }

  /** 
   * Normalises the scale of the graph to the given range. This is done by creating and assigning a new `scale` function, not by changing the data.
   * @param MIN The minimum normalised value.
   * @param MAX The maximum normalised value.
   */
  normaliseScale(MIN=0, MAX=1) {
    let RANGE = MAX - MIN

    let data = this.data

    let min = data[0]
    let max = data[0]

    for(let i=0; i<data.length; i++) {
      if(data[i] < min)
        min = data[i]
      if(data[i] > max)
        max = data[i]
    }

    let range = max-min
    this.scale = y => MIN + RANGE * ((y-min)/range)

    return this.scale
  }
}

export {SignalGraph}
