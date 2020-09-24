import * as React from 'react';
import { useState, useRef, useEffect, useCallback } from 'react';
import { TimeAxis } from './TimeAxis';
import { InteractiveTimeAxis } from './InteractiveTimeAxis';
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
export const AudioGraphView = ({ tLeft, tRight, children, onWheel, tMin, tMax, controls = false, audio = null, onPlay = null, onPlayheadUpdate = null, onStop = null, interactive = false, }) => {
    const divRef = useRef(null);
    const [playheadTime, setPlayheadTime] = useState(null);
    const [startTime, setStartTime] = useState(null);
    const [playback, setPlayback] = useState(null);
    useEffect(() => {
        if (!ctx)
            ctx = new AudioContext();
    }, []);
    // Keeping track of playhead
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
    const handleClick = useCallback((e) => {
        const t = e.t;
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
    }, [controls, audio, playback, onPlay, onStop]);
    if (interactive) {
        return React.createElement(InteractiveTimeAxis, { tLeft: tLeft, tRight: tRight, tMin: tMin, tMax: tMax },
            children,
            playheadTime ? React.createElement(Playhead, { t: playheadTime || 0 }) : null);
    }
    else
        return React.createElement(TimeAxis, { tLeft: tLeft, tRight: tRight, onWheel: onWheel, onClick: handleClick },
            children,
            playheadTime ? React.createElement(Playhead, { t: playheadTime || 0 }) : null);
};
