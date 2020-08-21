const sq = (x:number) => x * x;
export class ReductionCache {
  _cache: {data:number[], interval:number}[];
  redux: number;

  constructor(data:number[]|Float32Array=[], interval:number=1, redux=4) {
    this._cache = [{
      data: data instanceof Float32Array ? [...data] : data,
      interval,
    }]
    this.redux = redux;
  }

  nextReduction() {
    const {data, interval} = this._cache[this._cache.length-1];

    let newData = rmsReduction(data, this.redux);

    this._cache.push({
      data: newData,
      interval: interval * this.redux,
    });

    return this._cache[this._cache.length - 1];
  }

  topUp() {
    const redux = this.redux;
    for(let i=1; i<this._cache.length; ++i) {
      let A = this._cache[i-1];
      let B = this._cache[i];

      if(B.data.length < Math.floor(A.data.length / redux)) {
        for(let j=B.data.length; (j+1) * redux < A.data.length; ++j) {
          let sqSum = 0;
          for(let k=0; k<redux; ++k)
            sqSum += sq(A.data[j*redux+k]);
          B.data[j] = Math.sqrt(sqSum/redux);
        }
      }
    }
  }

  /**
   * Append Data to the end of the array.
   */
  pushData(chunk:number[]) {
    this._cache[0].data = this._cache[0].data.concat(chunk);
    this.topUp();
  }
  
  /** 
   * Remove data from the front of the array
   * @param n Number of items to be removed
   */
  shiftData(n:number) {
    for(let i=0; i<this._cache.length; ++i) {
      if(n % 1) {
        this._cache = this._cache.slice(0, i);
        break;
      } else {
        this._cache[i].data = this._cache[i].data.slice(n);
        n /= this.redux;
      }
    }
  }

  timeWindow(tLeft: number, tRight:number, maxPoints = 250) {
    for(let level=0; true; ++level) {
      let {interval, data} = this._cache[level];
      let nPoints = (tRight - tLeft) / interval;
      if(nPoints < maxPoints)
        return { data, level, interval };

      else if(level + 1 == this._cache.length)
        this.nextReduction();
    }
  }

  get interval() {
    return this._cache[0].interval;
  }
  set interval(interval) {
    for(let i=0; i<this._cache.length; ++i) {
      this._cache[i].interval = interval;
      interval /= this.redux;
    }
  }
}

/** 
 * Create an rms reduction of signal buffer. 
 *
 * @param data The signal buffer to be reduced.
 * @param redux How much to shrink the data.
 */
export function rmsReduction(data:number[]|Float32Array, redux:number) {
  let newData = [];
  for(let i=0; i < data.length; i+=redux) {
    let sqSum = 0;
    for(let j=0; j < redux; ++j)
      sqSum += sq(data[i+j]) || sqSum / j;
    newData.push(Math.sqrt(sqSum/redux));
  }
  return newData;
}
