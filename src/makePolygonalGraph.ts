import { Readable } from "stream";
import { makeWaveformGraphs } from "../waveform/makeWaveformGraphs";
import { InteractiveTrackView } from "./InteractiveTrackView";
import { makeWaveformConfig } from "../waveform/defaults";

const convertPolygon = (ap:AudioPolygon) => {
  
  let totalBandIntensity = 0
  for(let I of ap.bandIntensities)
    totalBandIntensity += I

  
  if(ap.bandIntensities.length != 3)
    throw 'Incompatible band intensities'

  let [r, g, b] = ap.bandIntensities.map(I => Math.floor(256 * I / totalBandIntensity))

  let color = 'rgb(' + r + ',' + g + ',' + b + ')'

  return {
    t0: ap.t0,
    t1: ap.t1,
    h0: ap.I0,
    h1: ap.I1,
    color
  }
}

async function makePolygonalGraph(audio:Readable | AudioBuffer) {
  // @ts-ignore
  let graphs = makeWaveformGraphs(audio, makeWaveformConfig({
    makeKRateGraph: true,
    makeOnsetGraph: true,
    makeOverviewGraph: true,
  }))

  if(!graphs.onsetGraph 
    || !graphs.kRateGraph 
    || !graphs.overviewGraph
  )
    throw 'Something bad happened'

  const onsetGraph = await graphs.onsetGraph
  const kRateGraph = await graphs.kRateGraph
  const overviewGraph = await graphs.overviewGraph

  const view = new InteractiveTrackView

  onsetGraph.normaliseScale()
  kRateGraph.normaliseScale()
  overviewGraph.normaliseScale()
  onsetGraph.y = kRateGraph.y = overviewGraph.y = view.canvas.height /2

  kRateGraph.largerScaleGraph = onsetGraph
  onsetGraph.largerScaleGraph = overviewGraph  
  view.addGraph(kRateGraph)

  view.t0 = view.tMin = 0
  view.t1 = view.tMax = kRateGraph.t1

  if(!(audio instanceof Readable))
    view.audiobuffer = audio

  view.draw()
  return view
}
export {makePolygonalGraph}