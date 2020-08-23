import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { InteractiveAudioGraph } from 'components/InteractiveAudioGraph';
import { MarkerGraph } from 'components/MarkerGraph';
import { SignalGraph } from 'components/SignalGraph';
import { CoordinateGraph } from 'components/CoordinateGraph';
import { SVGPlot } from 'components/SVGPlot';
import { Ruler } from 'components/Ruler';
import { PassThrough } from 'stream';
window.onload = () => {
    const wrapper = document.createElement('div');
    document.body.appendChild(wrapper);
    const noise = new Array(10000).fill(0).map(() => Math.random());
    const exampleStream = new PassThrough({ objectMode: true });
    setInterval(() => {
        let noiseChunk = new Array(100).fill(0).map(Math.random);
        exampleStream.write(noiseChunk);
        console.log('writing data');
    }, 1000);
    ReactDOM.render(React.createElement(InteractiveAudioGraph, { tLeft: 0, tRight: 10, tMin: 0, tMax: 10 },
        React.createElement(SVGPlot, { width: "100%", height: "100px", viewBox: "0 0 1000 100" },
            React.createElement(Ruler, null)),
        React.createElement(SVGPlot, { width: "100%", height: "100px", viewBox: "0 0 1000 100" },
            React.createElement(MarkerGraph, { data: [1, 2, 4] }),
            React.createElement(SignalGraph, { data: exampleStream, interval: 1 / 10000 }),
            React.createElement(CoordinateGraph, { color: "#ccccff", data: [{ t: 0, y: 1 / 2 }, { t: 2, y: 1 }, { t: 2.1, y: .1 }], kind: "line" }))), wrapper);
};
