import { INCREMENT, DECREMENT } from './constants';

export const onIncrement = () => ({ type: INCREMENT });
export const onDecrement = () => ({ type: DECREMENT });

export const onIncrementAsync = () =>
  dispatch =>
    setTimeout(() => dispatch(onIncrement()), 1000);

export const onIncrementIfOdd = () =>
  (dispatch, getState) => {
    const { counter } = getState();

    if (counter.value % 2 === 1) {
      dispatch(onIncrement());
    }
  };
