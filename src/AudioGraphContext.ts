import * as React from 'react';
import {createContext} from 'react';

export const AudioGraphContext = createContext({
  tLeft: 0,
  tRight: 1,
});
