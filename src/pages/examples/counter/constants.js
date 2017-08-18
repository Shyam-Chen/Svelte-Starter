import { Map } from 'immutable';

export const INITIAL = Map({ value: 0 });

export const INCREMENT = '[Counter] INCREMENT';
export const DECREMENT = '[Counter] DECREMENT';
export const RESET = '[Counter] RESET';
export const INCREMENT_IF_ODD = '[Counter] INCREMENT_IF_ODD';
export const DECREMENT_IF_EVEN = '[Counter] DECREMENT_IF_EVEN';
