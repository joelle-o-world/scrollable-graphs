import * as React from 'react';
import { useContext } from 'react';
import { AudioGraphContext } from '../AudioGraphContext';
import { SVGPlotContext } from 'components/SVGPlot';
export const CoordinateGraph = ({ data, barWidth = 8, color = "#000", kind = 'bar', }) => {
    const { tLeft, tRight } = useContext(AudioGraphContext);
    const { plotWidth, plotHeight } = useContext(SVGPlotContext);
    let iLeft = data.length;
    for (let i = 0; i < data.length; ++i)
        if (data[i].t > tLeft) {
            iLeft = Math.max(i - 1, 0);
            break;
        }
    let iRight = data.length;
    for (let i = iLeft; i < data.length; ++i)
        if (data[i].t > tRight) {
            iRight = Math.min(i + 1, data.length);
            break;
        }
    const points = data.slice(iLeft, iRight);
    if (points.length && kind == 'bar')
        return React.createElement("g", null, points.map((p, i) => React.createElement("rect", { x: plotWidth * (p.t - tLeft) / (tRight - tLeft), y: 0, height: plotHeight * p.y, width: barWidth, key: i })));
    else if (points.length && kind == 'line') {
        let p = points.map((p, i) => ({
            x: plotWidth * (p.t - tLeft) / (tRight - tLeft),
            y: 64 * p.y,
        }));
        let d = `M${p[0].x} ${p[0].y} ${p.slice(1).map(q => `L${q.x} ${q.y}`).join(' ')}`;
        return React.createElement("path", { d: d, stroke: "#000", fill: "none" });
    }
    else
        return null;
};
