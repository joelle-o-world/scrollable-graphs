import * as React from 'react';
import {FunctionComponent} from 'react';

export interface SignalGraphProps {
  data: number[]|Float32Array;
  interval: number;
  color: string;
  scale: (y:number) => any;
  style: 'line' | 'reflectAndFill';
}

export const SignalGraph:FunctionComponent<SignalGraphProps> = (props) => {
  return <span />
}
