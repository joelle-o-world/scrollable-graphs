import * as React from 'react';
import {FunctionComponent, createContext} from 'react';

export const SVGPlotContext = createContext({
  plotWidth: 1000,
  plotHeight: 1000,
});

export interface SVGPlotProps {
  height: string;
  width: string;
  viewBox: string;
}

export const SVGPlot:FunctionComponent<SVGPlotProps> = ({
  height,
  width,
  children,
  viewBox,
}) => {
  
  const [t, l, w, h] = viewBox.split(' ');
  if(t != '0' || l != '0')
    console.log('viewbox must have top=0 and left=0');

  return <SVGPlotContext.Provider value={{
    plotWidth: parseFloat(w), 
      plotHeight: parseFloat(h), 
  }}>
    <svg height={height} width={width} viewBox={viewBox}>
      {children}
    </svg>
  </SVGPlotContext.Provider>
}


