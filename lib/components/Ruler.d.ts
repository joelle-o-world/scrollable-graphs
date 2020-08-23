import { FunctionComponent } from 'react';
export interface RulerProps {
    largestUnit?: number;
    divisions?: number[];
    format?: (t: number) => string;
    minSpacing?: number;
    minLabelSpacing?: number;
}
export declare const Ruler: FunctionComponent<RulerProps>;
