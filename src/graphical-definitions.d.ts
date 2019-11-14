export interface Polygon {
  /** Start time in seconds */
  t0: number;

  /** End time in seconds */
  t1: number;

  /** Height at the start of the polygon */
  h0: number;

  /** Height at the end of the polygon. */
  h1: number;

  /** Colour of the polygon. */
  color: string;
  normalisedColor?: string;
}