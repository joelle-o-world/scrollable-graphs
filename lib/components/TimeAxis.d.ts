import * as React from 'react';
import { FunctionComponent } from 'react';
export interface TimeAxisProps {
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
    onWheel?: (e: TimeAxisWheelEvent) => void;
    onClick?: (e: TimeAxisClickEvent) => void;
}
export interface TimeAxisWheelEvent {
    t: number;
    deltaX: number;
    deltaT: number;
    deltaY: number;
    pxPerSecond: number;
    event: React.WheelEvent;
}
export interface TimeAxisClickEvent {
    t: number;
    pxPerSecond: number;
    event: React.MouseEvent;
}
export declare const TimeAxisContext: React.Context<{
    tLeft: number;
    tRight: number;
    rect: {
        left: number;
        right: number;
        top: number;
        bottom: number;
        width: number;
        height: number;
    };
}>;
export declare const TimeAxis: FunctionComponent<TimeAxisProps>;
