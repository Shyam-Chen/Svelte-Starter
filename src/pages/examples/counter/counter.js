import { template as _ } from 'lodash';
import { autorun } from 'mobx';

import template from './counter.html';
import style from './counter.css';
import { store } from './store';

const imports = { style };

export default () => {
  page('/examples/counter', () => {
    document.querySelector('#app')
      .innerHTML = _(template, { imports })();

    autorun(() => {
      document.querySelector('#value').innerHTML = store.value;
      document.querySelector('#evenOrOdd').innerHTML = store.evenOrOdd;
    });

    document.querySelector('#increment').onclick =  () => store.increment();
    document.querySelector('#decrement').onclick =  () => store.decrement();
  });
};
