import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {AudioGraphView} from 'components/AudioGraphView';
import {InteractiveAudioGraph} from 'components/InteractiveAudioGraph';
import {MarkerGraph} from 'components/MarkerGraph';

window.onload = () => {
  const wrapper = document.createElement('div');
  document.body.appendChild(wrapper);

  ReactDOM.render(
    <InteractiveAudioGraph tLeft={0} tRight={10} tMin={0} tMax={10}>
      <MarkerGraph data={[1,2,4]} />
    </InteractiveAudioGraph>,
    wrapper
  );
}
