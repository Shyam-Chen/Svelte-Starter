import './counter.css';

import { store } from '../../store';

import { increment, decrement, reset, incrementIfOdd, decrementIfEven } from './counter-actions';
import template from './counter.html';

/**
 * @param {string} name
 *
 * @example
 * // js
 * import { counter } from '../../containers/counter';
 * counter('example');
 *
 * // html
 * <div id="example" data-counter></div>
 */

export const counter = name => {
  document.querySelector(`#${name}[data-counter]`).innerHTML = template();

  const render = () => {
    const { counterReducer } = store.getState();
    document.querySelector('#value').innerHTML = counterReducer.get('counter');
  };

  store.subscribe(render);
  render();

  document.querySelector('#increment').onclick = () => store.dispatch(increment());
  document.querySelector('#decrement').onclick = () => store.dispatch(decrement());
  document.querySelector('#reset').onclick = () => store.dispatch(reset());
  document.querySelector('#incrementIfOdd').onclick = () => store.dispatch(incrementIfOdd());
  document.querySelector('#decrementIfEven').onclick = () => store.dispatch(decrementIfEven());
};
