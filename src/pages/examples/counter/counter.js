import { template as _ } from 'lodash';

import template from './counter.html';
import style from './counter.css';

import { store } from '../../../root';

import { onIncrement, onDecrement, onIncrementAsync, onIncrementIfOdd } from './actions';

const imports = { style };

export default () => {
  page('/examples/counter', () => {
    // document.querySelector(`#${name}[data-counter]`)
    document.querySelector('#app')
      .innerHTML = _(template, { imports })();

    const render = () => {
      const { counter } = store.getState();
      document.querySelector('#value').innerHTML = counter.get('value');
    };

    store.subscribe(render);
    render();

    document.querySelector('#increment').onclick = () => store.dispatch(onIncrement());
    document.querySelector('#decrement').onclick = () => store.dispatch(onDecrement());
    document.querySelector('#incrementAsync').onclick = () => store.dispatch(onIncrementAsync());
    document.querySelector('#incrementIfOdd').onclick = () => store.dispatch(onIncrementIfOdd());
  });
};
