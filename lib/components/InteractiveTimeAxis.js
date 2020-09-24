import * as React from 'react';
import { useState, useCallback } from 'react';
import { TimeAxis } from './TimeAxis';
export const InteractiveTimeAxis = props => {
    const { tMin, tMax } = props;
    // Initialise the time window from properties.
    const [tWindow, setTWindow] = useState({
        tLeft: props.tLeft,
        tRight: props.tRight,
    });
    const { tLeft, tRight } = tWindow;
    /** Handles a scroll wheel event by zooming the graph */
    const handleWheel = useCallback((e) => {
        // Prevent default browser scroll behaviour.
        e.event.preventDefault();
        const { deltaT, deltaX } = e;
        const zoom = Math.pow(1.01, -e.deltaY);
        setTWindow(({ tLeft, tRight }) => {
            // NOTE: New scope for `tRight` and `tLeft`
            // Use mouse x-position as anchor point for scaling graph
            const anchor = e.t;
            const shift = deltaT * zoom;
            let l = (tLeft - anchor) * zoom + anchor + shift;
            let r = (tRight - anchor) * zoom + anchor + shift;
            // Enforce `tMin`/`tMax` limits.
            if (tMin != undefined && l < tMin)
                l = tMin;
            if (tMax != undefined && r > tMax)
                r = tMax;
            return {
                tLeft: l,
                tRight: r,
            };
        });
        // TODO: Maybe add playback support? Or use another component for this?
    }, [tMin, tMax]);
    return React.createElement(TimeAxis, { onWheel: handleWheel, tLeft: tLeft, tRight: tRight },
        `${tLeft} ${tRight}`,
        props.children);
};
