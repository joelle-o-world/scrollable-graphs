import * as React from 'react';
import {FunctionComponent, useContext} from 'react';
import {AudioGraphContext} from '../AudioGraphContext';

export interface MarkerGraphProps {
  data: number[];
  color?: string;
  resolution?: number;
}

export const MarkerGraph:FunctionComponent<MarkerGraphProps> = ({
  data, 
  color='black',
  resolution=1000,
}) => {
  const {tLeft, tRight} = useContext(AudioGraphContext);


  let filteredPoints = data.filter(t => (t >= tLeft && t < tRight))
    .map(x => (x - tLeft) / (tRight-tLeft) * resolution);

  return <svg width="100%" height="100px" viewBox={`0 0 ${resolution} 64`}>
    {filteredPoints.map( (x, i) => <line
      x1={x} 
      x2={x} 
      y1={0} 
      y2={64} 
      stroke={color} 
      key={i} 
    />)}
  </svg>
}
