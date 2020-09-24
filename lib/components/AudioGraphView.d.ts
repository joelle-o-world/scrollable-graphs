import * as React from 'react';
import { FunctionComponent } from 'react';
export interface AudioGraphWheelEvent {
    t: number;
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
    onWheel: (e: AudioGraphWheelEvent) => void;
    onPlay?: (e: {
        source: AudioBufferSourceNode;
        offset: number;
        startTime: number;
    }) => void;
    onPlayheadUpdate?: (e: number) => void;
    onStop?: () => void;
    audio?: AudioBuffer;
    /**
     * Enables audio controls
     */
    controls?: boolean;
}
export declare const AudioGraphView: FunctionComponent<AudioGraphViewProps>;
