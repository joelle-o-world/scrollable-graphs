/// <reference types="node" />
import { FunctionComponent } from 'react';
import { Readable } from 'stream';
export interface SignalGraphProps {
    data: number[] | Readable;
    interval: number;
    color?: string;
    scale?: (y: number) => any;
    renderStyle?: 'line' | 'reflectAndFill';
    reductionRenderStyle?: 'line' | 'reflectAndFill';
}
export declare const SignalGraph: FunctionComponent<SignalGraphProps>;
/**
 * Create an rms reduction of signal buffer.
 *
 * @param data The signal buffer to be reduced.
 * @param redux How much to shrink the data.
 */
export declare function rmsReduction(data: number[] | Float32Array, redux: number): number[];
