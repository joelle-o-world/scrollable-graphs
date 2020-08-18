import {TrackView} from "./TrackView";

/**
 * The `MarkerGraph` class represents a series of unlabelled time-points.
 *
 * e.g./
 * ```
 * // Create a marker graph
 * let markers = new MarkerGraph([570, 1789, 1848, 1865, 1991, 1994]);
 * 
 * // Render the graph
 * let view = new TrackView;
 * view.addGraph(markers);
 * view.draw()
 * ```
 */
class MarkerGraph {

  /** The time-points data. */
  points: number[];

  /** At what position should the markers the be drawn on the y-axis? */
  y: number;

  /** How tall should the markers be drawn? */
  height: number;

  /** In what colour should the markers be drawn */
  color: string;

  /** 
   * Create a new `MarkerGraph` from an array of time points. 
   *
   * e.g./
   * ```
   * let graph = new MarkerGraph([570, 1789, 1848, 1991, 1994]);
   * ```
   *
   * @param points An array of time points to be marked on the graph.
   * */
  constructor(points:number[]) {
    this.points = points
    this.y = 0
    this.height = 8
    this.color = '#ffffff'
  }

  /** 
   * Render the graph.
   * @internal
   */
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

export {MarkerGraph}
