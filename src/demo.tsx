import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {AudioGraphView} from 'components/AudioGraphView';
import {InteractiveAudioGraph} from 'components/InteractiveAudioGraph';
import {MarkerGraph} from 'components/MarkerGraph';
import {SignalGraph} from 'components/SignalGraph';
import {CoordinateGraph} from 'components/CoordinateGraph';
import {SVGPlot} from 'components/SVGPlot';

window.onload = () => {
  const wrapper = document.createElement('div');
  document.body.appendChild(wrapper);

  const noise = new Array(10000).fill(0).map(() => Math.random());


  ReactDOM.render(
    <InteractiveAudioGraph tLeft={0} tRight={10} tMin={0} tMax={10}>
      <SVGPlot width="100%" height="100px" viewBox="0 0 1000 100">
        <MarkerGraph data={[1,2,4]} />
        <SignalGraph data={noise} interval={1/10000} />
        <CoordinateGraph data={[{t:0, y:1/2}, {t:2, y:1}, {t:2.1, y:.1}]} kind="line" />
      </SVGPlot>  
    </InteractiveAudioGraph>,

    wrapper
  );
}
