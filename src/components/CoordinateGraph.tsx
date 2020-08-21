import * as React from 'react';
import {FunctionComponent, useContext} from 'react';
import {AudioGraphContext} from '../AudioGraphContext';

export interface CoordinateGraphProps {
  /** NOTE: Must be sorted by `t` ascending */
  data: {t:number, y:number}[];
  barWidth?: number;
  color?: string;
  resolution?: number;
  kind?: 'bar' | 'line';
}

export const CoordinateGraph:FunctionComponent<CoordinateGraphProps> = ({
  data,
  barWidth = 8,
  color = "#000",
  resolution = 1000,
  kind='bar',
}) => {

  const {tLeft, tRight} = useContext(AudioGraphContext);

  let iLeft = data.length;
  for(let i=0; i < data.length; ++i)
    if(data[i].t > tLeft) {
      iLeft = Math.max(i-1, 0);
      break;
    }

  let iRight = data.length
  for(let i=iLeft; i < data.length; ++i)
    if(data[i].t > tRight) {
      iRight = Math.min(i+1, data.length);
      break;
    }

  const points = data.slice(iLeft, iRight);


  let drawing;
  if(points.length && kind == 'bar')
      drawing = points.map((p,i) => <rect
        x = {resolution * (p.t - tLeft) / (tRight - tLeft)}
        y = {0}
        height = {64 * p.y}
        width={barWidth}
        key={i}
      />)

  else if(points.length && kind == 'line') {
    let p = points.map((p,i) => ({
      x: resolution * (p.t - tLeft) / (tRight - tLeft),
      y: 64 * p.y,
    }))
    let d = `M${p[0].x} ${p[0].y} ${
      p.slice(1).map(q => `L${q.x} ${q.y}`).join(' ')
    }`;

    drawing = <path d={d} stroke="#000" fill="none" />
  }
  return <svg width="100%" height="100px" viewBox={`0 0 ${resolution} 64`}>
    {drawing}
  </svg>
}
