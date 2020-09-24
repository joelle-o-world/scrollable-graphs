import { FunctionComponent } from 'react';
import { TimeAxisWheelEvent } from './TimeAxis';
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
    tMin?: number;
    tMax?: number;
    onWheel?: (e: TimeAxisWheelEvent) => void;
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
    interactive?: boolean;
}
export declare const AudioGraphView: FunctionComponent<AudioGraphViewProps>;
