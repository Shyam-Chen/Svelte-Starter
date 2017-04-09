import { INCREMENT, DECREMENT, RESET } from '../types';
import { Map } from 'immutable';

export const counterReducer = (state = Map({ counter: 0 }), action) => {
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
}
