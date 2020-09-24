import * as React from 'react';
import { useContext } from 'react';
import styled from 'styled-components';
import { TimeAxisContext } from './TimeAxis';
export const PlayheadStyle = styled.div.attrs((props) => ({
    style: {
        left: props.x + 'px',
    },
})) `
    position:absolute;
    top:0;
    bottom:0;
    width: 1px;
    box-sizing: border-box;
    background-color:black;
    margin:0;
    padding:0;
    border:none;
`;
export const Playhead = ({ t }) => {
    const { tLeft, tRight, rect } = useContext(TimeAxisContext);
    const x = (t - tLeft) / (tRight - tLeft) * (rect.right - rect.left);
    if (x > rect.left && x < rect.right)
        return React.createElement(PlayheadStyle, { className: "Playhead", x: x });
    else
        return null;
};
