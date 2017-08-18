import { INITIAL, INCREMENT, DECREMENT, RESET } from './constants';

export const counter = (state = INITIAL, action) => {
  const { type } = action

  switch (type) {
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
