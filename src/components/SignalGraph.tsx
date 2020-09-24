// TODO: Add offset property

import * as React from 'react';
import {FunctionComponent, useContext, useRef, useEffect} from 'react';
import {AudioGraphContext} from '../AudioGraphContext';
import {SVGPlotContext} from './SVGPlot';
import {Readable} from 'stream';
import {ReductionCache} from '../ReductionCache';

function useForceUpdate(): () => void {
  return React.useReducer(() => ({}), {})[1] as () => void // <- paste here
}

export interface SignalGraphProps {
  data: number[]|Readable;
  interval: number;
  color?: string;
  scale?: (y:number) => any;
  renderStyle?: 'line' | 'reflectAndFill';
  reductionRenderStyle?: 'line'|'reflectAndFill';
}


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
  const forceUpdate = useForceUpdate();

  const reductionCache = useRef(new ReductionCache);
  useEffect(() => {
    const cache = reductionCache.current;

    const handleStreamData = (e:number[]) => {
      const shouldUpdate = cache.duration > tLeft && cache.duration < tRight;
      cache.pushData(e);
      if(shouldUpdate)
        forceUpdate();
    };

    cache.interval = interval;
    if(data instanceof Array) 
      cache.data = data;
     else if(data instanceof Readable) 
      data.on('data', handleStreamData);
    
    return () => {
      if(data instanceof Readable)
        data.removeListener('data', handleStreamData);;
    }
  }, [data]);
  
  // Choose which resolution to render
  let win = reductionCache.current.timeWindow(tLeft, tRight, 250);
  const rData = win.data;
  const rInterval = win.interval;
  const rLevel = win.level;


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

  } else if(renderStyle == 'reflectAndFill') {
    const topPoints = [];
    const bottomPoints = [];
    for(let i=iLeft; i < iRight; ++i) {
      const t = i * rInterval;
      const x = plotWidth * (t-tLeft) / (tRight - tLeft);
      const y = plotHeight * scale(rData[i]);
      if(isNaN(y))
        console.log(
          'y:', y, '\n',
          'i:', i, '\n',
          'rData[i]', rData[i], '\n',
          'plotHeight:', plotHeight, '\n',
        )
      topPoints.push({x, y: plotHeight/2 - y/2});
      bottomPoints.push({x, y: plotHeight/2 + y/2});
    }

    const points = [...topPoints, ...bottomPoints.reverse()];

    const pathString = [
      `M${points[0].x} ${points[0].y}`,
      ...points.slice(1).map(p => `L${p.x} ${p.y}`),
    ].join(' ');

    return <path d={pathString} stroke="none" fill={color} />

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
