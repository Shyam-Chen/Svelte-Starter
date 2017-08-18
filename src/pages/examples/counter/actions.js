import { INCREMENT, DECREMENT, RESET, INCREMENT_IF_ODD, DECREMENT_IF_EVEN } from './constants';

export const onIncrement = () => ({ type: INCREMENT });
export const onDecrement = () => ({ type: DECREMENT });
export const onReset = () => ({ type: RESET });
export const onIncrementIfOdd = () => ({ type: INCREMENT_IF_ODD });
export const onDecrementIfEven = () => ({ type: DECREMENT_IF_EVEN });
