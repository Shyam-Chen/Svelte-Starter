import { Map } from 'immutable';

export const INITIAL = Map({ value: 0 });

export const INCREMENT = '[Counter] INCREMENT';
export const DECREMENT = '[Counter] DECREMENT';

export const DECREMENT_ASYNC = '[Counter] DECREMENT_ASYNC';
export const INCREMENT_IF_EVEN = '[Counter] INCREMENT_IF_EVEN';
