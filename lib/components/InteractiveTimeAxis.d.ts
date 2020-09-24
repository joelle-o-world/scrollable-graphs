import { FunctionComponent } from 'react';
/** Props for the `InteractiveTimeAxis` react component */
export interface InteractiveTimeAxisProps {
    /** Initial time represented at the left-most edge of the graph */
    tLeft: number;
    /** Initial time represented at the right-most edge of the graph */
    tRight: number;
    /** Minimum value of `tLeft` */
    tMin?: number;
    /** Maximum value of `tRight` */
    tMax?: number;
}
export declare const InteractiveTimeAxis: FunctionComponent<InteractiveTimeAxisProps>;
