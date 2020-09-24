import * as React from 'react';
import { createContext, useContext } from 'react';
import { AudioGraphContext } from '../AudioGraphContext';
export const SVGPlotContext = createContext({
    plotWidth: 1000,
    plotHeight: 1000,
});
export const SVGPlot = ({ height = null, width = null, children, }) => {
    const { rect } = useContext(AudioGraphContext);
    const w = width || rect.width;
    const h = height || rect.height;
    const viewBox = `0 0 ${w} ${h}`;
    return React.createElement(SVGPlotContext.Provider, { value: {
            plotWidth: w,
            plotHeight: h,
        } },
        React.createElement("svg", { className: "SVGPlot", width: `${w}px`, height: `${h}px`, viewBox: viewBox }, children));
};
