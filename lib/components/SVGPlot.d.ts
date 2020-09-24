import * as React from 'react';
import { FunctionComponent } from 'react';
export declare const SVGPlotContext: React.Context<{
    plotWidth: number;
    plotHeight: number;
}>;
export interface SVGPlotProps {
    height?: number;
    width?: number;
    viewBox?: string;
}
export declare const SVGPlot: FunctionComponent<SVGPlotProps>;
