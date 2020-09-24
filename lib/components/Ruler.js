import * as React from 'react';
import { useContext } from 'react';
import { TimeAxisContext } from './TimeAxis';
import { SVGPlotContext } from './SVGPlot';
export const Ruler = ({ largestUnit = 60, // 1 minute
divisions = [6, 10, 10, 10, 10, 10], minSpacing = 10, format = formatTime, minLabelSpacing = 50, }) => {
    const { tLeft, tRight } = useContext(TimeAxisContext);
    const { plotWidth, plotHeight } = useContext(SVGPlotContext);
    let unit = largestUnit;
    const markers = [];
    for (let i = 0; i < divisions.length; ++i) {
        let nMarks = (tRight - tLeft) / unit;
        let spacing = plotWidth / nMarks;
        if (spacing < minSpacing) {
            break;
        }
        const firstIndex = Math.floor(tLeft / unit);
        const firstTime = firstIndex * unit;
        for (let j = 0; j < nMarks + 1; ++j) {
            const t = firstTime + j * unit;
            if (i == 0 || (firstIndex + j) % divisions[i - 1]) {
                let x = (t - tLeft) / (tRight - tLeft) * plotWidth;
                let y = 40 / (i + 1);
                markers.push(React.createElement("line", { x1: x, x2: x, y1: 0, y2: y, key: Math.random(), stroke: "#000" }));
                if (spacing > minLabelSpacing) {
                    let label = format(t);
                    markers.push(React.createElement("text", { x: x, y: y + 12, key: Math.random() }, label));
                }
            }
        }
        unit /= divisions[i];
    }
    return React.createElement("g", { className: "Ruler" }, markers);
};
const formatTime = (t) => `${Math.round(t * 1000) / 1000}s`;
