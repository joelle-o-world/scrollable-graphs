export declare class ReductionCache {
    _cache: {
        data: number[];
        interval: number;
    }[];
    redux: number;
    constructor(data?: number[] | Float32Array, interval?: number, redux?: number);
    nextReduction(): {
        data: number[];
        interval: number;
    };
    topUp(): void;
    /**
     * Append Data to the end of the array.
     */
    pushData(chunk: number[]): void;
    /**
     * Remove data from the front of the array
     * @param n Number of items to be removed
     */
    shiftData(n: number): void;
    timeWindow(tLeft: number, tRight: number, maxPoints?: number): {
        data: number[];
        level: number;
        interval: number;
    };
    get interval(): number;
    set interval(interval: number);
    get data(): number[];
    set data(data: number[]);
    get length(): number;
    get duration(): number;
}
/**
 * Create an rms reduction of signal buffer.
 *
 * @param data The signal buffer to be reduced.
 * @param redux How much to shrink the data.
 */
export declare function rmsReduction(data: number[] | Float32Array, redux: number): number[];
