import { INCREMENT, DECREMENT, INCREMENT_IF_EVEN } from './constants';

export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });

export const incrementAsync = () =>
  dispatch =>
    setTimeout(() => dispatch(increment()), 1000);

export const incrementIfOdd = () =>
  (dispatch, getState) => {
    const { counter } = getState();

    if (counter.get('value') % 2 === 1) {
      dispatch(increment());
    }
  };

export const incrementIfEven = () => ({ type: INCREMENT_IF_EVEN });
