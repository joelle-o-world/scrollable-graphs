import {TrackView} from "./TrackView";

type Coordinate = {x:number, y:number}

/** Graph for representing a series of <time, y-value> pairs. */
export class CoordinateGraph {
  points: Coordinate[];
  mode: 'bar';
  barWidth: number;
  color: string;
  scale: (y: number) => number;

  constructor(points: Coordinate[]) {
    this.points = points
    this.mode = 'bar'
    this.barWidth = 8
    this.color = '#ffffff'
    this.scale = (y:number) => y
  }

  sortPoints() {
    this.points.sort((a,b) => a.x-b.x)
    return this
  }

  draw(display: TrackView) {
    let i0 = this.points.findIndex(p => p.x >= display.t0)
    if(i0 == -1)
      return
    if(i0 > 0)
      i0--

    let i1 = i0 + 1
    while(i1 < this.points.length && this.points[i1].x < display.t1)
      i1++

    const ctx = display.ctx
    if(!ctx)
      throw 'Unable to draw coordinate graph.'

    if(this.mode == 'bar')
      for(let i=i0; i<i1; i++) {
        // Draw point
        let point = this.points[i]
        let x = display.xAtT(point.x)
        let y = this.scale(point.y)
        y = display.canvas.height * (1 - y)

        let top = y,
            left = x - this.barWidth/2,
            width = this.barWidth,
            height = display.canvas.height - top

        ctx.beginPath()
        ctx.rect(left, top, width, height)
        ctx.fillStyle = this.color
        ctx.fill()
      }
  }

  normaliseScale(MIN=0, MAX=1) {
    let RANGE = MAX - MIN

    let data = this.points

    let min = data[0].y
    let max = data[0].y

    for(let i=0; i<data.length; i++) {
      if(data[i].y < min)
        min = data[i].y
      if(data[i].y > max)
        max = data[i].y
    }

    let range = max-min
    this.scale = y => MIN + RANGE * ((y-min)/range)

    return this.scale
  }
}