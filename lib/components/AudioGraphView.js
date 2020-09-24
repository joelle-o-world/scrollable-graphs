import * as React from 'react';
import { useState, useRef, useEffect } from 'react';
import { AudioGraphContext } from '../AudioGraphContext';
import { Playhead } from './Playhead';
import styled from 'styled-components';
const AudioGraphDiv = styled.div `
  position: absolute;
  top: 0px;
  right:0px;
  bottom:0px;
  left:0px;
  overflow:hidden;
`;
// @ts-ignore
const AudioContext = window.AudioContext || window.webkitAudioContext;
let ctx = null;
export const AudioGraphView = ({ tLeft, tRight, children, onWheel, controls = false, audio = null, onPlay = null, onPlayheadUpdate = null, onStop = null, }) => {
    const divRef = useRef(null);
    const [rect, setRect] = useState({ left: 0, right: 1, top: 0, bottom: 1, width: 1, height: 1 });
    const [playheadTime, setPlayheadTime] = useState(null);
    const [startTime, setStartTime] = useState(null);
    const [playback, setPlayback] = useState(null);
    useEffect(() => {
        if (!ctx)
            ctx = new AudioContext();
    }, []);
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
    useEffect(() => {
        // @ts-ignore
        const cancelWheel = (event) => { event.preventDefault(); };
        document.body.addEventListener('wheel', cancelWheel, { passive: false });
        return () => {
            document.body.removeEventListener('wheel', cancelWheel);
        };
    }, []);
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
    useEffect(() => {
        if (playback) {
            const interval = setInterval(() => {
                if (!ctx)
                    throw "Could't find audio context";
                const { startTime, offset } = playback;
                const playheadTime = ctx.currentTime - startTime + offset;
                if (onPlayheadUpdate)
                    onPlayheadUpdate(playheadTime);
                setPlayheadTime(playheadTime);
            }, 1000 / 32);
            return () => clearInterval(interval);
        }
    }, [playback, onPlayheadUpdate]);
    function handleClick(e) {
        const x = e.clientX;
        const t = tLeft + (tRight - tLeft) * (e.clientX - rect.left) / (rect.right - rect.left);
        if (controls && audio) {
            if (!ctx)
                throw "Couldn't find audio context";
            if (playback) {
                // stop audio
                playback.source.stop();
            }
            else {
                // Start audio
                let source = ctx.createBufferSource();
                source.buffer = audio;
                source.connect(ctx.destination);
                source.start(0, t);
                let startTime = ctx.currentTime;
                setPlayback({ startTime, offset: t, source });
                if (onPlay)
                    onPlay({ source, offset: t, startTime });
                source.onended = () => {
                    if (onStop)
                        onStop();
                    setPlayback(null);
                };
            }
        }
    }
    return React.createElement(AudioGraphDiv, { className: "AudioGraphView", ref: divRef, onWheel: handleWheel, onClick: handleClick },
        React.createElement(AudioGraphContext.Provider, { value: { tLeft, tRight, rect } },
            children,
            playheadTime ? React.createElement(Playhead, { t: playheadTime || 0 }) : null));
};
