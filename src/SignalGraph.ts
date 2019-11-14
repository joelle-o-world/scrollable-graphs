import TrackView from "./TrackView";

const sq = (x: number) => x*x

/** A graph representing a time series at a fixed interval. 
 * Automatically produces larger scale graphs using RMS. */
class SignalGraph {
  data: PCMData;
  interval: Seconds;
  scale: (y: number) => any;
  color: string;
  style: 'line' | 'reflectAndFill';
  _rmsGraph: SignalGraph | null;
  parentGraph: this;
  constructor(data:PCMData, interval=1) {
    this.interval = interval
    this.data = data
    this.scale = y => y

    this.color = '#000000'
    this.style = 'line'
  }

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

export default SignalGraph
