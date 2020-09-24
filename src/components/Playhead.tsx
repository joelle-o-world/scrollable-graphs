import * as React from 'react';
import {FunctionComponent, useContext} from 'react';
import styled from 'styled-components';
import {TimeAxisContext} from './TimeAxis';

interface PlayheadAttrs {
    x:number;
}

export const PlayheadStyle = styled.div.attrs((props:PlayheadAttrs)=> ({
    style: {
        left: props.x + 'px',
    },
}))<PlayheadAttrs>`
    position:absolute;
    top:0;
    bottom:0;
    width: 1px;
    box-sizing: border-box;
    background-color:black;
    margin:0;
    padding:0;
    border:none;
`

export const Playhead:FunctionComponent<{t:number}> = ({t}) => {
  const {tLeft, tRight, rect} = useContext(TimeAxisContext);
  const x = (t - tLeft) / (tRight - tLeft) * (rect.right - rect.left);
  if(x > rect.left && x < rect.right) 
    return <PlayheadStyle className="Playhead" x={x} />
  else
    return null
}
