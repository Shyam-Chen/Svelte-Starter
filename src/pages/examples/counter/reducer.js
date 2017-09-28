import { handleActions } from 'redux-actions';

import { INITIAL, INCREMENT, DECREMENT } from './constants';

export default handleActions({
  [INCREMENT](state) {
    return state.update('value', value => value + 1);
  },
  [DECREMENT](state) {
    return state.update('value', value => value - 1);
  }
}, INITIAL);
