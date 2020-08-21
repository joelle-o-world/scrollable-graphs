// TODO: Add offset property

import * as React from 'react';
import {FunctionComponent, useContext, useRef} from 'react';
import {AudioGraphContext} from '../AudioGraphContext';

export interface SignalGraphProps {
  data: number[]|Float32Array;
  interval: number;
  color?: string;
  scale?: (y:number) => any;
  renderStyle?: 'line' | 'reflectAndFill';
  reductionRenderStyle?: 'line'|'reflectAndFill';
  resolution?: number;
}

/** Type used to store multiple resolution buffers of the same data. */
type ReductionCache = {data:number[]|Float32Array; interval:number;}[];

export const SignalGraph:FunctionComponent<SignalGraphProps> = ({
  data,
  interval,
  color = '#000',
  scale = y=>y,
  renderStyle = 'line',
  reductionRenderStyle=renderStyle,
  resolution = 1000,
}) => {
  const reductionCache = useRef([{data, interval}] as ReductionCache);
  const {tLeft, tRight} = useContext(AudioGraphContext);


  // Choose which resolution to render
  let rData, rInterval, rLevel;
  for(let i=0; true; ++i) {
    let reduced = reductionCache.current[i];
    let nPoints = (tRight-tLeft) / reduced.interval
    if(nPoints < 250) {
      rData = reduced.data;
      rInterval = reduced.interval;
      rLevel = i;
      break;
    }

    // Otherwise,
    if(i+1 == reductionCache.current.length) {
      const redux = 4;
      reductionCache.current.push({
        data: rmsReduction(reduced.data, redux),
        interval: reduced.interval * redux,
      });
    }
  }


  let iLeft = Math.floor(tLeft / rInterval);
  let iRight = Math.ceil(tRight / rInterval)+1;

  if(iLeft < 0)
    iLeft = 0;
  if(iLeft >= rData.length)
    iLeft = rData.length;
  if(iRight < 0)
    iRight = 0;
  if(iRight >= rData.length)
    iRight = rData.length;

  
  
  let drawing = null;
  if(iRight == iLeft)
    drawing = null;
  else if(renderStyle == 'line') {
    const points = [];
    for(let i=iLeft; i < iRight; ++i) {
      const t = i * rInterval;
      const x = resolution * (t-tLeft) / (tRight - tLeft);
      const y = 64*scale(rData[i]);
      points.push({x, y});
    }

    const pathString = [
      `M${points[0].x} ${points[0].y}`,
      ...points.slice(1).map(p => `L${p.x} ${p.y}`),
    ].join(' ');

    drawing = <path d={pathString} stroke={color} fill="none" />;
  }

  return <svg width="100%" height="100px" viewBox={`0 0 ${resolution} 64`}>
    {drawing}
  </svg>
}

const sq = (x:number) => x*x;



/** 
 * Create an rms reduction of signal buffer. 
 *
 * @param data The signal buffer to be reduced.
 * @param redux How much to shrink the data.
 */
export function rmsReduction(data:number[]|Float32Array, redux:number) {
  let newData = [];
  for(let i=0; i < data.length; i+=redux) {
    let sqSum = 0;
    for(let j=0; j < redux; ++j)
      sqSum += sq(data[i+j]) || sqSum / j;
    newData.push(Math.sqrt(sqSum/redux));
  }
  return newData;
}
