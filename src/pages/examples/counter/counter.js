import template from './counter.html';
// import style from './counter.css';

import { store } from '../../../root';

import { onIncrement, onDecrement, onReset, onIncrementIfOdd, onDecrementIfEven } from './actions';

export default () => {
  document.querySelector(`#${name}[data-counter]`).innerHTML = template();

  const render = () => {
    const { counter } = store.getState();
    document.querySelector('#value').innerHTML = counter.get('value');
  };

  store.subscribe(render);
  render();

  document.querySelector('#increment').onclick = () => store.dispatch(onIncrement());
  document.querySelector('#decrement').onclick = () => store.dispatch(onDecrement());
  document.querySelector('#reset').onclick = () => store.dispatch(onReset());
  document.querySelector('#incrementIfOdd').onclick = () => store.dispatch(onIncrementIfOdd());
  document.querySelector('#decrementIfEven').onclick = () => store.dispatch(onDecrementIfEven());
}
