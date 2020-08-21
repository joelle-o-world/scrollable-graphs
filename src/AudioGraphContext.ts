import * as React from 'react';
import {createContext} from 'react';

export const AudioGraphContext = createContext({
  tLeft: 0,
  tRight: 1,
  rect: {left:0, right:1, top:0, bottom:1},
});
