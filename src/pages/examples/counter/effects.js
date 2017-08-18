import { filter, map } from 'rxjs/operator';

import { INCREMENT_IF_ODD, DECREMENT_IF_EVEN } from './constants';
import { onIncrement, onDecrement } from './actions';

export const incrementIfOddEpic = (action$, store) =>
  action$.ofType(INCREMENT_IF_ODD)
    ::filter(() => store.getState().counter.get('value') % 2 === 1)
    ::map(onIncrement);

export const decrementIfEvenEpic = (action$, store) =>
  action$.ofType(DECREMENT_IF_EVEN)
    ::filter(() => store.getState().counter.get('value') % 2 === 0)
    ::map(onDecrement);
