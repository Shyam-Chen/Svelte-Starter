import { combineEpics } from 'redux-observable';
import { delay, filter, map } from 'rxjs/operator';

import { DECREMENT_ASYNC, INCREMENT_IF_EVEN } from './constants';
import { increment, decrement } from './actions';

const decrementAsyncEpic = (action$) =>
  action$.ofType(DECREMENT_ASYNC)
    ::delay(1000)
    ::map(decrement);

const incrementIfEvenEpic = (action$, store) => {
  const { counter } = store.getState();

  return action$.ofType(INCREMENT_IF_EVEN)
    ::filter(() => counter.get('value') % 2 === 0)
    ::map(increment);
};

export default combineEpics(
  decrementAsyncEpic,
  incrementIfEvenEpic
);
