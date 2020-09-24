import * as React from 'react';
import { useContext } from 'react';
import { TimeAxisContext } from './TimeAxis';
import { SVGPlotContext } from './SVGPlot';
export const MarkerGraph = ({ data, color = 'black', }) => {
    const { tLeft, tRight } = useContext(TimeAxisContext);
    const { plotHeight, plotWidth } = useContext(SVGPlotContext);
    return React.createElement("g", null, data.filter(t => (t >= tLeft && t < tRight))
        .map(x => (x - tLeft) / (tRight - tLeft) * plotWidth)
        .map((x, i) => React.createElement("line", { x1: x, x2: x, y1: 0, y2: plotHeight, stroke: color, key: i })));
};
