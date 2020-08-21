// TODO: Add offset property

import * as React from 'react';
import {FunctionComponent, useContext, useRef} from 'react';
import {AudioGraphContext} from '../AudioGraphContext';
import {SVGPlotContext} from './SVGPlot';
import {Readable} from 'stream';

export interface SignalGraphProps {
  data: number[]|Float32Array|Readable;
  interval: number;
  color?: string;
  scale?: (y:number) => any;
  renderStyle?: 'line' | 'reflectAndFill';
  reductionRenderStyle?: 'line'|'reflectAndFill';
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
}) => {
  const {tLeft, tRight} = useContext(AudioGraphContext);
  const {plotHeight, plotWidth} = useContext(SVGPlotContext);

  const reductionCache = useRef([] as ReductionCache);
  if(data instanceof Array || data instanceof Float32Array)
    reductionCache.current.push({data, interval});
  else if(data instanceof Readable) {
    reductionCache.current.push({data:[], interval});

    data.on('data', e => {
      const cache = reductionCache.current;
    });
  }

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

  
  
  if(iRight == iLeft)
    return null

  if(renderStyle == 'line') {
    const points = [];
    for(let i=iLeft; i < iRight; ++i) {
      const t = i * rInterval;
      const x = plotWidth * (t-tLeft) / (tRight - tLeft);
      const y = plotHeight * scale(rData[i]);
      points.push({x, y});
    }

    const pathString = [
      `M${points[0].x} ${points[0].y}`,
      ...points.slice(1).map(p => `L${p.x} ${p.y}`),
    ].join(' ');

    return <path d={pathString} stroke={color} fill="none" />;
  } else
    return null;
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
