import * as React from 'react';
import {FunctionComponent, useState, useCallback} from 'react';
import {AudioGraphView, AudioGraphWheelEvent} from './AudioGraphView';

export interface InteractiveAudioGraphProps {
  tLeft: number;
  tRight: number;
  tMin?: number;
  tMax?: number;
  audio?: AudioBuffer;
  breakFollowThreshold?: number;
  followOnPlay?: boolean;
}

export const InteractiveAudioGraph:FunctionComponent<InteractiveAudioGraphProps> = props => {
  const {tMin, tMax, followOnPlay = true, breakFollowThreshold=10} = props;
  const [tWindow, setTWindow] = useState({tLeft: props.tLeft || 0, tRight: props.tRight || 10});
  const {tLeft, tRight} = tWindow;
  const [following, setFollowing] = useState(null as null|number);

  const handleWheel = useCallback((e:AudioGraphWheelEvent) => {
    e.event.preventDefault()
    const {deltaT, deltaX} = e;
    const zoom = Math.pow(1.01, -e.deltaY);

    if(Math.abs(deltaX) >= breakFollowThreshold)
      setFollowing(null);


    if(following && Math.abs(deltaX) < breakFollowThreshold) {
      setFollowing(following => following ? following * zoom : null);
      
    } else {
      setTWindow(({tLeft, tRight}) => {

        const anchor = e.t;
        
        const shift = deltaT * zoom;

        let l = (tLeft - anchor) * zoom + anchor + shift;
        let r = (tRight - anchor) * zoom + anchor + shift;

        if(tMin != undefined && l < tMin)
          l = tMin;
        if(tMax != undefined && r > tMax)
          r = tMax;

        return {
          tLeft: l,
          tRight: r,
        }
      });
    }
  }, [following, tMin, tMax,])

  const handlePlay = useCallback(function() {
    if(followOnPlay)
      setFollowing(tRight - tLeft);
  }, [followOnPlay, tRight, tLeft]);

  const handlePlayheadUpdate = useCallback((t:number) => {
    if(following) {
      setTWindow({
        tLeft: t - following * .3,
        tRight: t + following * .7,
      });
    }
  }, [following])

  function handleStop() {
    setFollowing(null);
  }

  return <AudioGraphView 
    onWheel={handleWheel} 
    tLeft={tLeft} 
    tRight={tRight} 
    audio={props.audio} 
    controls
    onPlay={handlePlay}
    onPlayheadUpdate={handlePlayheadUpdate}
    onStop={handleStop}
  >
      {props.children}
    </AudioGraphView>
}
