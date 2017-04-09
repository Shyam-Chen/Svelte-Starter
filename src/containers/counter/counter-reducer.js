import { Map } from 'immutable';
import { random } from 'lodash';

import { INCREMENT, DECREMENT, RESET } from './counter-actions';

export const counterReducer = (state = Map({ counter: random(9) }), action) => {
  switch (action.type) {
    case INCREMENT:
      return state.update('counter', value => value + 1);
    case DECREMENT:
      return state.update('counter', value => value - 1);
    case RESET:
      return state.update('counter', () => 0);
    default:
      return state;
  }
};
