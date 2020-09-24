import * as React from 'react';
import {FunctionComponent, createContext, useContext} from 'react';
import {TimeAxisContext} from './TimeAxis';

export const SVGPlotContext = createContext({
  plotWidth: 1000,
  plotHeight: 1000,
});

export interface SVGPlotProps {
  height?: number;
  width?: number;
  viewBox?: string;
}

export const SVGPlot:FunctionComponent<SVGPlotProps> = ({
  height=null,
  width=null,
  children,
}) => {
  const {rect} = useContext(TimeAxisContext);
  const w:number = width || rect.width;
  const h:number = height || rect.height;
  const viewBox = `0 0 ${w} ${h}`;
  
  return <SVGPlotContext.Provider value={{
      plotWidth: w, 
      plotHeight: h, 
  }}>
    <svg 
      className="SVGPlot" 
      width={`${w}px`} 
      height={`${h}px`} 
      viewBox={viewBox}
    >
      {children}
    </svg>
  </SVGPlotContext.Provider>
}


