import * as React from 'react';
import {FunctionComponent, useState, useRef, useEffect, useCallback} from 'react';
import {TimeAxis, TimeAxisClickEvent, TimeAxisWheelEvent} from './TimeAxis';
import {InteractiveTimeAxis} from './InteractiveTimeAxis';
import {Playhead} from './Playhead';
import styled from 'styled-components';

const AudioGraphDiv = styled.div`
  position: absolute;
  top: 0px;
  right:0px;
  bottom:0px;
  left:0px;
  overflow:hidden;
`

export interface PlaybackDetails {
  source: AudioBufferSourceNode;
  offset: number;
  startTime: number;
}

// @ts-ignore
const AudioContext = window.AudioContext || window.webkitAudioContext;

let ctx:null|AudioContext = null;

/** Props for GraphView component */
export interface AudioGraphViewProps {
  /** 
   * Time at the left-most edge of the graph. Defaults to zero.
   * Taken together `tLeft` and `tRight` define the time-window of the graph.
   */
  tLeft: number;

  /**
   * Time at the right-most edge of the graph. Defaults to the duration of the audio file.
   * Taken together `tLeft` and `tRight` define the time-window of the graph.
   */
  tRight: number;

  tMin?:number;
  tMax?:number;

  onWheel?: (e:TimeAxisWheelEvent) => void;
  onPlay?: (e:{source:AudioBufferSourceNode, offset:number, startTime:number}) => void;
  onPlayheadUpdate?: (e:number) => void;
  onStop?: () => void;

  audio?: AudioBuffer;

  /** 
   * Enables audio controls 
   */
  controls?: boolean;

  interactive?: boolean;
}

export const AudioGraphView:FunctionComponent<AudioGraphViewProps> = ({
  tLeft, tRight, children, onWheel,
  tMin, tMax,
  controls=false,
  audio=null,
  onPlay=null,
  onPlayheadUpdate=null,
  onStop=null,
  interactive=false,
}) => {
  const divRef = useRef(null as null|HTMLDivElement);
  const [playheadTime, setPlayheadTime] = useState(null as null|number);
  const [startTime, setStartTime] = useState(null as null|number);
  const [playback, setPlayback] = useState(null as null|PlaybackDetails);

  useEffect(() => {
    if(!ctx)
      ctx = new AudioContext();
  }, []);

  // Keeping track of playhead
  useEffect(() => {
    if(playback) {
      const interval = setInterval(() => {
        if(!ctx)
          throw "Could't find audio context";

        const {startTime, offset} = playback;
        const playheadTime = ctx.currentTime - startTime + offset;
        if(onPlayheadUpdate)
          onPlayheadUpdate(playheadTime);

        setPlayheadTime(playheadTime);
      }, 1000/32);
      return () => clearInterval(interval);
    }
  }, [playback, onPlayheadUpdate]);

  const handleClick = useCallback((e:TimeAxisClickEvent) => {
    const t = e.t;

    if(controls && audio) {

      if(!ctx)
        throw "Couldn't find audio context";

      if(playback) {
        // stop audio
        playback.source.stop();
      } else {
        // Start audio
        let source = ctx.createBufferSource();
        source.buffer = audio;
        source.connect(ctx.destination);
        source.start( 0, t);
        
        let startTime = ctx.currentTime;
        setPlayback({startTime, offset:t, source});

        if(onPlay)
          onPlay({source, offset: t, startTime})

        source.onended = () => {
          if(onStop)
            onStop();
          setPlayback(null);
        };
      }
    }
  }, [controls, audio, playback, onPlay, onStop]);

  if(interactive) {
    return <InteractiveTimeAxis tLeft={tLeft} tRight={tRight} tMin={tMin} tMax={tMax}>
        {children}
        {playheadTime ? <Playhead t={playheadTime || 0} /> : null}
    </InteractiveTimeAxis>
  } else
    return <TimeAxis tLeft={tLeft} tRight={tRight} onWheel={onWheel} onClick={handleClick}>
        {children}
        {playheadTime ? <Playhead t={playheadTime || 0} /> : null}
    </TimeAxis>
}
