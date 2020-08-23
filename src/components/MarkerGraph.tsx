import * as React from 'react';
import {FunctionComponent, useContext} from 'react';
import {AudioGraphContext} from '../AudioGraphContext';
import {SVGPlotContext} from './SVGPlot';

export interface MarkerGraphProps {
  data: number[];
  color?: string;
}

export const MarkerGraph:FunctionComponent<MarkerGraphProps> = ({
  data, 
  color='black',
}) => {
  const {tLeft, tRight} = useContext(AudioGraphContext);
  const {plotHeight, plotWidth} = useContext(SVGPlotContext);


  return <g>{
    data.filter(t => (t >= tLeft && t < tRight))
    .map(x => (x - tLeft) / (tRight-tLeft) * plotWidth)
    .map( (x, i) => <line
      x1={x} 
      x2={x} 
      y1={0} 
      y2={plotHeight} 
      stroke={color} 
      key={i} 
    />)}</g>
}
