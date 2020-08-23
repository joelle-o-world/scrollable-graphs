# scrollable-graphs

Create interactive SVG time-series graphs in React.

This library was designed for representing the results of music information retrieval algorithms. As such it assumes that the x-axis for all graphs represents time.

## Install

Intstall `scrollable-graphs` with `npm`,
```
npm install --save scrollable-graphs
```

## Usage

To display a graph, the first thing you need is an `AudioGraphView` or an `InteractiveAudioGraph`, and one or more `SVGPlot` components.

```typescript
import { InteractiveAudioGraph, SVGPlot } from 'scrollable-graphs';

const myGraph = <InteractiveAudioGraph>
  <SVGPlot>
    // Graph layers go here...
  </SVGPlot>
</InteractiveAudioGraph>
```

The main responsibility of the `AudioGraphView`/`InteractiveAudioGraph` component is to keep track of the time axis and its scale. In `AudioGraphView` this is controlled by the `tLeft` and `tRight` props which are the time (in seconds) of the left-most and right-most edges of the graph respectively. In `InteractiveAudioGraph` represent initial values, but the user can freely adjust these values using mouse gestures.

Each `SVGPlot` creates its own `<svg></svg>` image. We can add many layers of information between the `<SVGPlot>` tags to overlay the graphics, or use multiple `<SVGPlot>`s to show the information seperately.

The `SignalGraph` component visualises a array of scalar values evenly spaced accross time, such as PCM audio data (as found in .WAV files and Web Audio API's `AudioBuffer` class. The data is passed to `SignalGraph` using the `data` prop. The `interval` prop controls the time between each pair of consecutive values.

```javascript
const myAudioBuffer

let leftChannelData = myAudioBuffer.getChannelData(0);
let rightChannelData = myAudioBuffer.getChannelData(1);

const myGraph = <AudioGraphView tLeft={0} tRight={myAudioBuffer.duration}>
  <SVGPlot>
    <SignalGraph data={leftChannelData} interval={sampleInterval} color="black" />
    <SignalGraph data={rightChannelData} interval={sampleInterval} color="ref" />
  </SVGPlot>
</AudioGraphView>
```

The `SignalGraph` components automatically creates lower resolution RMS versions of the data when there is too much information to fit in the view.
