import * as React from 'react';
import { createContext } from 'react';
export const SVGPlotContext = createContext({
    plotWidth: 1000,
    plotHeight: 1000,
});
export const SVGPlot = ({ height, width, children, viewBox, }) => {
    const [t, l, w, h] = viewBox.split(' ');
    if (t != '0' || l != '0')
        console.log('viewbox must have top=0 and left=0');
    return React.createElement(SVGPlotContext.Provider, { value: {
            plotWidth: parseFloat(w),
            plotHeight: parseFloat(h),
        } },
        React.createElement("svg", { height: height, width: width, viewBox: viewBox }, children));
};
