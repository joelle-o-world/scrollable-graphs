import { doBeatTracking } from "../beat-tracking/doBeatTracking";
import { Readable } from "stream";
import { collectAudio } from "../util/collect";
import SignalGraph from "./SignalGraph";
import MarkerGraph from "./MarkerGraph";
import CoordinateGraph from "./CoordinateGraph";
import { InteractiveTrackView } from "./InteractiveTrackView";

async function visualiseBeatTracking(audio:Readable | AudioBuffer) {
  // Collect audio stream into audio buffer.
  let buffer
  if(audio instanceof Readable)
    buffer = await collectAudio(audio)
  else
    buffer = audio
  
  console.log('## doing beat analysis')

  // Do beat tracking with returnExtra enabled.
  let {
    bpm, 
    beats, 
    onsets, 
    agents, 
    spectralFlux,
    hopSize,
    ioiHistogram,
  } = await doBeatTracking(buffer, {}, true)

  console.log('## finished beat analysis')

  // Check for problems
  if(!spectralFlux || !hopSize || !ioiHistogram)
    throw "Something bad happened."

  let fftInterval = hopSize / buffer.sampleRate

  // Time graph for whole track 
  let view1 = new InteractiveTrackView
  view1.t0 = view1.tMin = 0
  view1.t1 = view1.tMax = buffer.length / buffer.sampleRate
  view1.audiobuffer = buffer

  // Second graph for histogram/agent results.
  let view2 = new InteractiveTrackView
  view2.t0 = view2.tMin = 0
  view2.t1 = view2.tMax = ioiHistogram.maxIOI

  // Add raw audio data graph.
  let audioGraph = new SignalGraph(
    buffer.getChannelData(0), 
    1 / buffer.sampleRate
  )
  audioGraph.scale = y => 0.5 + y/2
  audioGraph.color = 'rgba(256,256,256,0.2)'
  audioGraph.rmsGraph.style = 'reflectAndFill'
  view1.addGraph(audioGraph)

  // Add spectral flux graph.
  let fluxGraph = new SignalGraph(spectralFlux, fftInterval)
  fluxGraph.color = 'rgba(200,200,256,.3)'
  fluxGraph.style = 'reflectAndFill'
  fluxGraph.normaliseScale(0, 1/2)
  view1.addGraph(fluxGraph)

  // Plot onset points
  let onsetGraph = new MarkerGraph(onsets.map(e => e.time))
  onsetGraph.height = 50
  onsetGraph.y = view1.canvas.height
  onsetGraph.color = '#00ff00'
  view1.addGraph(onsetGraph)

  // Plot IOI clusters on second graph.
  let ioiGraph = new CoordinateGraph(ioiHistogram.clusters.map(
    ({ioi, score}) => ({x: ioi, y: score || 0,})
  ))
  ioiGraph.color = 'rgba(128,255,128, 0.5)'
  ioiGraph.normaliseScale()
  view2.addGraph(ioiGraph)

  // Plot tempo estimations.
  let agentGraph = new CoordinateGraph(agents.map(
    agent => ({x: agent.beatInterval, y:agent.score})
  ))
  agentGraph.color = 'rgba(0,0,256,0.5)'
  agentGraph.normaliseScale()
  view2.addGraph(agentGraph)

  // Plot beat tracking of the winning agent
  let beatGraph = new MarkerGraph(beats)
  beatGraph.height = 50
  beatGraph.color = '#00f'
  view1.addGraph(beatGraph)

  return [view1, view2]
}

export {visualiseBeatTracking}