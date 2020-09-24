import * as React from 'react';
import {FunctionComponent, useState, useRef, useEffect} from 'react';
import {AudioGraphContext} from '../AudioGraphContext';
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

export interface AudioGraphWheelEvent {
  t:number;
  deltaX: number;
  deltaT: number;
  deltaY: number;
  pxPerSecond: number;
  event: React.WheelEvent;
}

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

  onWheel: (e:AudioGraphWheelEvent) => void;
  onPlay?: (e:{source:AudioBufferSourceNode, offset:number, startTime:number}) => void;
  onPlayheadUpdate?: (e:number) => void;
  onStop?: () => void;

  audio?: AudioBuffer;

  /** 
   * Enables audio controls 
   */
  controls?: boolean;
}

export const AudioGraphView:FunctionComponent<AudioGraphViewProps> = ({
  tLeft, tRight, children, onWheel,
  controls=false,
  audio=null,
  onPlay=null,
  onPlayheadUpdate=null,
  onStop=null,
}) => {
  const divRef = useRef(null as null|HTMLDivElement);
  const [rect, setRect] = useState({left:0, right:1, top:0, bottom:1, width:1, height:1});
  const [playheadTime, setPlayheadTime] = useState(null as null|number);
  const [startTime, setStartTime] = useState(null as null|number);
  const [playback, setPlayback] = useState(null as null|PlaybackDetails);

  useEffect(() => {
    if(!ctx)
      ctx = new AudioContext();
  }, []);

  useEffect(() => {
    const div = divRef.current;
    if(div) {
      
      const handleResize = () => {
        let rect = div.getBoundingClientRect();
        setRect({
          top: rect.top,
          bottom: rect.bottom,
          left: rect.left,
          right: rect.right,
          height: rect.height,
          width: rect.width,
        });
      }
      handleResize();

      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      }
    }
  }, [divRef.current]);

  useEffect(() => {
    // @ts-ignore
    const cancelWheel = (event) => {event.preventDefault()};

    document.body.addEventListener('wheel', cancelWheel, {passive: false});

    return () => {
        document.body.removeEventListener('wheel', cancelWheel);
    }
  }, []); 

  function handleWheel(e:React.WheelEvent) {
    const x = e.clientX;
    const t = tLeft + (tRight-tLeft) * (e.clientX - rect.left) / (rect.right - rect.left);

    const pxPerSecond = (rect.right-rect.left) / (tRight - tLeft);
    const deltaX = e.deltaX;
    const deltaT = deltaX / pxPerSecond;

    const deltaY = e.deltaY;

    if(onWheel)
      onWheel({t, pxPerSecond, deltaX, deltaT, deltaY, event:e});
  }

  

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

  function handleClick(e:React.MouseEvent) {
    const x = e.clientX;
    const t = tLeft + (tRight-tLeft) * (e.clientX - rect.left) / (rect.right - rect.left);

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
  }

  return <AudioGraphDiv className="AudioGraphView" ref={divRef} onWheel={handleWheel} onClick={handleClick}>
    <AudioGraphContext.Provider value={{tLeft, tRight, rect}}>
      {children}
      
      {playheadTime ? <Playhead t={playheadTime || 0} /> : null}
    </AudioGraphContext.Provider>
  </AudioGraphDiv>
}
