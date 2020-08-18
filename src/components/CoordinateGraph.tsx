import * as React from 'react';
import {FunctionComponent} from 'react';

export interface CoordinateGraphProps {
  data: {t:number, y:number}[];
  barWidth: number;
  color: string;
}

export const CoordinateGraph:FunctionComponent<CoordinateGraphProps> = props => {
  return <span />
}
