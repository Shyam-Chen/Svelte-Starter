import { INCREMENT, DECREMENT, RESET } from '../types';
import { Map } from 'immutable';

export default function(state = Map({ counter: 0 }), action) {
  switch (action.type) {
    case INCREMENT:
      return state.update('counter', value => value + 1);
    case DECREMENT:
      return state.update('counter', value => value - 1);
    case RESET:
      return 0;
    default:
      return state;
  }
}
