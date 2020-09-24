import { FunctionComponent } from 'react';
export interface InteractiveAudioGraphProps {
    tLeft: number;
    tRight: number;
    tMin?: number;
    tMax?: number;
    audio?: AudioBuffer;
    breakFollowThreshold?: number;
    followOnPlay?: boolean;
}
export declare const InteractiveAudioGraph: FunctionComponent<InteractiveAudioGraphProps>;
