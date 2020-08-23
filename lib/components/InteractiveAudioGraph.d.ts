import { FunctionComponent } from 'react';
export interface InteractiveAudioGraphProps {
    tLeft: number;
    tRight: number;
    tMin?: number;
    tMax?: number;
}
export declare const InteractiveAudioGraph: FunctionComponent<InteractiveAudioGraphProps>;
