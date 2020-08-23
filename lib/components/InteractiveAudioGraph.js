import * as React from 'react';
import { useState } from 'react';
import { AudioGraphView } from './AudioGraphView';
export const InteractiveAudioGraph = props => {
    const { tMin, tMax } = props;
    const [tWindow, setTWindow] = useState({ tLeft: props.tLeft, tRight: props.tRight });
    const { tLeft, tRight } = tWindow;
    function handleWheel(e) {
        e.event.preventDefault();
        const { deltaT } = e;
        setTWindow(({ tLeft, tRight }) => {
            const zoom = Math.pow(1.01, -e.deltaY);
            const anchor = e.t;
            const shift = deltaT * zoom;
            let l = (tLeft - anchor) * zoom + anchor + shift;
            let r = (tRight - anchor) * zoom + anchor + shift;
            if (tMin != undefined && l < tMin)
                l = tMin;
            if (tMax != undefined && r > tMax)
                r = tMax;
            return {
                tLeft: l,
                tRight: r,
            };
        });
    }
    return React.createElement(AudioGraphView, { onWheel: handleWheel, tLeft: tLeft, tRight: tRight }, props.children);
};
