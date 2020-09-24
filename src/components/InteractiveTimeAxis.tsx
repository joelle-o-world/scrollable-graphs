import * as React from 'react';
import {FunctionComponent, useState, useCallback} from 'react';
import {TimeAxis, TimeAxisProps, TimeAxisWheelEvent} from './TimeAxis';

/** Props for the `InteractiveTimeAxis` react component */
export interface InteractiveTimeAxisProps {
  /** Initial time represented at the left-most edge of the graph */
  tLeft: number;

  /** Initial time represented at the right-most edge of the graph */
  tRight: number;

  /** Minimum value of `tLeft` */
  tMin?: number;

  /** Maximum value of `tRight` */
  tMax?: number;

  // TODO: Add maximum zoom level.
}

export const InteractiveTimeAxis: FunctionComponent<InteractiveTimeAxisProps> = props => {
  const { tMin, tMax } = props;

  // Initialise the time window from properties.
  const [tWindow, setTWindow] = useState({
    tLeft: props.tLeft,
    tRight: props.tRight,
  });

  const {tLeft, tRight} = tWindow;

  /** Handles a scroll wheel event by zooming the graph */
  const handleWheel = useCallback((e: TimeAxisWheelEvent) => {
    // Prevent default browser scroll behaviour.
    e.event.preventDefault();

    const {deltaT, deltaX} = e;
    const zoom = Math.pow(1.01, -e.deltaY);

    setTWindow(({tLeft, tRight}) => {
      // NOTE: New scope for `tRight` and `tLeft`

      // Use mouse x-position as anchor point for scaling graph
      const anchor = e.t;

      const shift = deltaT * zoom;

      let l = (tLeft - anchor) * zoom + anchor + shift;
      let r = (tRight - anchor) * zoom + anchor + shift;

      // Enforce `tMin`/`tMax` limits.
      if(tMin != undefined && l < tMin)
        l = tMin;
      if(tMax !=undefined && r > tMax)
        r = tMax;

      return {
        tLeft: l,
        tRight: r,
      }

    });

    // TODO: Maybe add playback support? Or use another component for this?

  }, [tMin, tMax]);

  return <TimeAxis
    onWheel={handleWheel}
    tLeft={tLeft}
    tRight={tRight}
    >
      {props.children}
    </TimeAxis>
};
