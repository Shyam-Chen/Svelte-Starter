import { handleActions } from 'redux-actions';

import { INITIAL, INCREMENT, DECREMENT, RESET } from './constants';

export default handleActions({
  [INCREMENT](state) {
    return state.update('counter', value => value + 1);
  },
  [DECREMENT](state) {
    return state.update('counter', value => value - 1);
  },
  [RESET](state) {
    return state.update('counter', () => 0);
  }
}, INITIAL);
