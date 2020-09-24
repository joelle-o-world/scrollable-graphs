import * as React from 'react';
import { useCallback, useRef, useState, useEffect, createContext } from 'react';
import { AbsoluteFill } from './AbsoluteFill';
export const TimeAxisContext = createContext({
    tLeft: 0,
    tRight: 1,
    rect: {
        left: 0,
        right: 1,
        top: 0,
        bottom: 1,
        width: 1,
        height: 1,
    },
});
export const TimeAxis = ({ tLeft, tRight, children, onWheel, onClick }) => {
    const divRef = useRef(null);
    const [rect, setRect] = useState({
        left: 0,
        right: 1,
        top: 0,
        bottom: 1,
        width: 1,
        height: 1,
    });
    // Monitoring client rect of the TimeAxis
    useEffect(() => {
        const div = divRef.current;
        if (div) {
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
            };
            handleResize();
            window.addEventListener('resize', handleResize);
            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, [divRef.current]);
    // Passive wheel events
    useEffect(() => {
        // @ts-ignore
        const cancelWheel = (event) => { event.preventDefault(); };
        document.body.addEventListener('wheel', cancelWheel, { passive: false });
        return () => {
            document.body.removeEventListener('wheel', cancelWheel);
        };
    }, []);
    const handleWheel = useCallback((e) => {
        const x = e.clientX;
        const t = tLeft + (tRight - tLeft) * (e.clientX - rect.left) / (rect.right - rect.left);
        const pxPerSecond = (rect.right - rect.left) / (tRight - tLeft);
        const deltaX = e.deltaX;
        const deltaT = deltaX / pxPerSecond;
        const deltaY = e.deltaY;
        if (onWheel)
            onWheel({ t, pxPerSecond, deltaX, deltaT, deltaY, event: e });
    }, [tLeft, tRight, rect, onWheel]);
    const handleClick = useCallback((e) => {
        const x = e.clientX;
        const t = tLeft + (tRight - tLeft) * (e.clientX - rect.left) / (rect.right - rect.left);
        const pxPerSecond = (rect.right - rect.left) / (tRight - tLeft);
        if (onClick)
            onClick({ t, pxPerSecond, event: e });
    }, [tLeft, tRight, rect, onWheel]);
    return React.createElement(AbsoluteFill, { className: "TimeAxis", ref: divRef, onWheel: handleWheel, onClick: handleClick },
        React.createElement(TimeAxisContext.Provider, { value: { tLeft, tRight, rect } }, children));
};
