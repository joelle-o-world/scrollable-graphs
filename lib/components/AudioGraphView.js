import * as React from 'react';
import { useState, useRef, useEffect } from 'react';
import { AudioGraphContext } from '../AudioGraphContext';
export const AudioGraphView = ({ tLeft, tRight, children, onWheel }) => {
    const divRef = useRef(null);
    const [rect, setRect] = useState({ left: 0, right: 1, top: 0, bottom: 1 });
    useEffect(() => {
        const div = divRef.current;
        if (div) {
            let rect = div.getBoundingClientRect();
            setRect(rect);
        }
    }, [divRef.current]);
    function handleWheel(e) {
        const x = e.clientX;
        const t = tLeft + (tRight - tLeft) * (e.clientX - rect.left) / (rect.right - rect.left);
        const pxPerSecond = (rect.right - rect.left) / (tRight - tLeft);
        const deltaX = e.deltaX;
        const deltaT = deltaX / pxPerSecond;
        const deltaY = e.deltaY;
        if (onWheel)
            onWheel({ t, pxPerSecond, deltaX, deltaT, deltaY, event: e });
    }
    return React.createElement("div", { ref: divRef, onWheel: handleWheel },
        React.createElement(AudioGraphContext.Provider, { value: { tLeft, tRight, rect } }, children));
};
