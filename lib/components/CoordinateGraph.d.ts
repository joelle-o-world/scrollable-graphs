import { FunctionComponent } from 'react';
export interface CoordinateGraphProps {
    /** NOTE: Must be sorted by `t` ascending */
    data: {
        t: number;
        y: number;
    }[];
    barWidth?: number;
    color?: string;
    kind?: 'bar' | 'line';
}
export declare const CoordinateGraph: FunctionComponent<CoordinateGraphProps>;
