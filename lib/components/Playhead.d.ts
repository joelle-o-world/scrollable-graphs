import { FunctionComponent } from 'react';
interface PlayheadAttrs {
    x: number;
}
export declare const PlayheadStyle: import("styled-components").StyledComponent<"div", any, {
    style: {
        left: string;
    };
} & PlayheadAttrs, "style">;
export declare const Playhead: FunctionComponent<{
    t: number;
}>;
export {};
