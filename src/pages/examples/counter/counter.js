import { template as _ } from 'lodash';

import { store } from '~/root';

import template from './counter.html';
import style from './counter.css';
import { increment, decrement, incrementAsync, incrementIfOdd } from './actions';

const imports = { style };

export default () => {
  page('/examples/counter', () => {
    document.querySelector('#app')
      .innerHTML = _(template, { imports })();

    const render = () => {
      const { counter } = store.getState();
      document.querySelector('#value').innerHTML = counter.get('value');
    };

    store.subscribe(render);
    render();

    document.querySelector('#increment').onclick = () => store.dispatch(increment());
    document.querySelector('#decrement').onclick = () => store.dispatch(decrement());
    document.querySelector('#incrementAsync').onclick = () => store.dispatch(incrementAsync());
    document.querySelector('#incrementIfOdd').onclick = () => store.dispatch(incrementIfOdd());
  });
};
