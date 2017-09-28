import { combineEpics } from 'redux-observable';
import { filter, map } from 'rxjs/operator';

import { INCREMENT_IF_EVEN } from './constants';
import { increment } from './actions';

const incrementIfEvenEpic = (action$, store) => {
  const { counter } = store.getState();

  return action$.ofType(INCREMENT_IF_EVEN)
    ::filter(() => counter.get('value') % 2 === 0)
    ::map(increment);
};

export default combineEpics(
  incrementIfEvenEpic
);
