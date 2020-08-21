import * as React from 'react';
import {FunctionComponent, useContext} from 'react';
import {AudioGraphContext} from '../AudioGraphContext';
import {SVGPlotContext} from './SVGPlot';

export interface RulerProps {
  largestUnit?: number;
  divisions?: number[];
  format?: (t:number) => string;
  minSpacing?: number;
  minLabelSpacing?: number;
}

export const Ruler:FunctionComponent<RulerProps> = ({
  largestUnit = 60, // 1 minute
  divisions = [60, 10, 10, 10, 10],
  minSpacing = 10,
  format = formatTime,
  minLabelSpacing = 50,
}) => {
  const {tLeft, tRight} = useContext(AudioGraphContext);
  const {plotWidth, plotHeight} = useContext(SVGPlotContext);


  let unit = largestUnit;
  const markers = [];
  for(let i=0; i < divisions.length; ++i) {
    let nMarks = (tRight - tLeft) / unit;
    let spacing = plotWidth / nMarks;
    if(spacing < minSpacing) {
      break;
    }

    const firstIndex = Math.floor(tLeft / unit)
    const firstTime = firstIndex*unit;

    for(let j=0; j < nMarks+1; ++j) {
      const t = firstTime + j * unit;
      if(i == 0 || (firstIndex + j) % divisions[i-1]) {
        let x = (t-tLeft)/(tRight-tLeft) * plotWidth;
        let y = 40/(i+1)
        markers.push(<line x1={x} x2={x} y1={0} y2={y} key={Math.random()} stroke="#000" />); 

        if(spacing > minLabelSpacing) {
          let label = format(t);
          markers.push(
            <text 
              x={x} 
              style={{textAlign:'center'}} 
              y={y+12} 
              key={Math.random()}
            >{label}</text>
          )
        }
      }
    }

    unit /= divisions[i];
  }

  return <g>{markers}</g>
};

const formatTime = (t:number) => `${Math.round(t * 1000)/1000}s`;
