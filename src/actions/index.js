import {useReducer} from 'react';
import {SET_TOKEN} from './types';

const initialState = {token: ''};

const reducer = (state, {type, payload}) => {
  switch (type) {
    case SET_TOKEN:
      return {
        token: payload,
      };
    default:
      return state;
  }
};

export {initialState, reducer};
