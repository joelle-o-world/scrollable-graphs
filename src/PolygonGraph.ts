import TrackView from "./TrackView";

import * as Color from 'color';
import { rgbToHsl, hslToRgb } from "./colorTransform";
import { Polygon } from "./graphical-definitions";

class PolygonGraph {
  polygons: Polygon[];
  scale: (y: number) => number;
  y: number;
  largerScaleGraph: PolygonGraph | null
  _height: number; // pixels
  heightConstant: number;
  useNormalisedColors: true | false | undefined

  constructor(polygons:Polygon[] = []) {
    this.polygons = polygons
    this.scale = y => y
    this.y = 0
    this.height = 161
    this.largerScaleGraph = null
    this.useNormalisedColors = undefined
  }

  /** Draw the graph on the canvas of the given track view. */
  draw(display:TrackView):PolygonGraph {
    // Estimate and correct leftmost polygon index
    let tSpan = this.t1 - this.t0
    if(this.largerScaleGraph && this.polygons.length * display.tSpan / tSpan > 200)
      return this.largerScaleGraph.draw(display)

    let i0 = Math.floor(((display.t0 - this.t0)/tSpan) * this.polygons.length)
    while(i0 >= this.polygons.length || (i0 > 0 && this.polygons[i0].t0 > display.t0))
      i0--
    while(i0 < 0 || (i0+1 < this.polygons.length && this.polygons[i0].t1 < display.t0))
      i0++
    
    // Estimate and correct rightmost polygon index
    let i1 = Math.floor(((display.t1 - this.t0)/tSpan) * this.polygons.length)
    while(i1 >= this.polygons.length || (i0 > 0 && this.polygons[i0].t0 > display.t1))
      i1--
    while(i1 < 0 || (i1+1 < this.polygons.length && this.polygons[i1].t1 < display.t1))
      i1++

    let ctx = display.ctx
    if(!ctx)
      throw 'No rendering context found.'

    for(let i=0; i<this.polygons.length; i++) {
      let polygon = this.polygons[i]
      let x0 = Math.floor(display.xAtT(polygon.t0))
      let x1 = Math.ceil(display.xAtT(polygon.t1))
      let h0 = this.scale(polygon.h0) * this.heightConstant
      let h1 = this.scale(polygon.h1) * this.heightConstant

      ctx.beginPath()
      ctx.moveTo(x0, this.y-h0)
      ctx.lineTo(x0, this.y+h0)
      ctx.lineTo(x1, this.y+h1)
      ctx.lineTo(x1, this.y-h1)
      ctx.lineTo(x0, this.y-h0)
      ctx.fillStyle = this.useNormalisedColors 
        ? (polygon.normalisedColor || polygon.color )
        : polygon.color
      ctx.fill()
    }

    return this
  }

  addPolygon(polygon: Polygon) {
    this.polygons.push(polygon)
  }

  /** Normalise the polygon dimensions using a linear scale. Replaces the `scale` property on the graph. */
  normaliseScale(MIN:number=0, MAX:number=1) {
    let RANGE = MAX - MIN

    let max:number, min: number 
    min = max = this.polygons[0].h1

    for(let i=0; i<this.polygons.length; i++) {
      let polygon = this.polygons[i]
      if(polygon.h0 > max)
        max = polygon.h0
      if(polygon.h1 > max)
        max = polygon.h1
      if(polygon.h0 < min)
        min = polygon.h0
      if(polygon.h1 < min)
        min = polygon.h1
    }

    let range = max-min
    this.scale = y => MIN + RANGE * ((y-min)/range)

    return this.scale
  }

  normaliseColors(transform:(color:string) => string=defaultColorTransform) {
    let min = 0
    let max = 0

    // Decode colour strings
    let colors:number[][] = this.polygons.map(
      polygon => Color(polygon.color).rgb().array()
    )

    // Find minimum and maximum R|G|B values
    for(let color of colors) {
      let [r,g,b] = color
      min = Math.min(min, r, g, b)
      max = Math.max(max, r, g, b)
    }

    // Rescale values and attach to polygons
    let k = 256 / (max-min)
    for(let i in this.polygons) {
      let [r,g,b] = colors[i].map(x => (x-min)*k)
      let normalised = Color.rgb(r,g,b).toString()
      let final = transform ? transform(normalised) : normalised
      this.polygons[i].normalisedColor = final
    }

    if(this.useNormalisedColors === undefined)
      this.useNormalisedColors = true
  }

  set height(h) {
    this._height = h
    this.heightConstant = h/2
  }
  get height() {
    return this._height
  }

  /** Start time of first polygon */
  get t0() {
    return this.polygons[0].t0
  }
  
  /** End time of last polygon */
  get t1() {
    return this.polygons[this.polygons.length-1].t1
  }

  /** Average polygons per second of audio */
  get density() {
    return this.polygons.length / (this.t1-this.t0)
  }
}
export {PolygonGraph}

const defaultColorTransform = (color:string) => {
  let [r,g,b] = Color(color).rgb().array()
  let [h,s,l] = rgbToHsl(r,g,b)
  h -= 0.01
  s = 1
  l += 0.021

  return 'rgb(' + hslToRgb(h,s,l).join(',') + ')'
}