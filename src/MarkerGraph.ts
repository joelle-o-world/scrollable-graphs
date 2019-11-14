import {TrackView} from "./TrackView";

/**
 * Graph for representing a series of instantanteous time points.
 */
export class MarkerGraph {
  points: number[];
  y: number;
  height: number;
  color: string;
  constructor(points:number[]) {
    this.points = points
    this.y = 0
    this.height = 8
    this.color = '#ffffff'
  }

  draw(display:TrackView) {
    if(!display.ctx)
      throw "Unable to draw TrackView because canvas context is null"

    let {t0, t1} = display
    let points = this.points.filter(t => t >= t0 && t <= t1)

    let step = 1

    while(points.length/step > 100)
      step *= 2

    let ctx = display.ctx
    
    let y0 = this.y-this.height/2
    let y1 = this.y+this.height/2
    for(let i=0; i<points.length; i+=step) {
      let t = points[i]
      let x = display.xAtT(t)
      ctx.beginPath()
      ctx.moveTo(x, y0)
      ctx.lineTo(x, y1)
      ctx.strokeStyle = this.color
      ctx.stroke()
    }

    return this
  }
}

