import * as React from 'react';
import {FunctionComponent, useState, useRef, useEffect} from 'react';
import {AudioGraphContext} from '../AudioGraphContext';

export interface AudioGraphWheelEvent {
  t:number;
  deltaX: number;
  deltaT: number;
  deltaY: number;
  pxPerSecond: number;
  event: React.WheelEvent;
}

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
}

export const AudioGraphView:FunctionComponent<AudioGraphViewProps> = ({tLeft, tRight, children, onWheel}) => {
  const divRef = useRef(null as null|HTMLDivElement);
  const [rect, setRect] = useState({left:0, right:1, top:0, bottom:1});

  useEffect(() => {
    const div = divRef.current;
    if(div) {
      let rect = div.getBoundingClientRect();
      setRect(rect);
    }
  }, [divRef.current]);


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

  return <div ref={divRef} onWheel={handleWheel}>
    <AudioGraphContext.Provider value={{tLeft, tRight}}>
      {children}
    </AudioGraphContext.Provider>
  </div>
}
