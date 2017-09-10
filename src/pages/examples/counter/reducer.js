import { handleActions } from 'redux-actions';

import { INITIAL, INCREMENT, DECREMENT } from './constants';

export default handleActions({
  [INCREMENT](state) {
    return state.update('counter', value => value + 1);
  },
  [DECREMENT](state) {
    return state.update('counter', value => value - 1);
  }
}, INITIAL);
