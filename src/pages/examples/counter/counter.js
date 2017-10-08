import { template as _ } from 'lodash';
import { observable, action, autorun } from 'mobx';

import template from './counter.html';
import style from './counter.css';

const imports = { style };

export default () => {
  page('/examples/counter', () => {
    const store = observable({
      /**
       * @name observable
       */
      value: 0,

      /**
       * @name action
       */
      increment: action(() => store.value++),
      decrement: action(() => store.value--),
      incrementAsync: action(() => setTimeout(() => store.increment(), 1000)),
      incrementIfOdd: action(() => {
        if (Math.abs(store.value % 2) === 1) {
          store.increment();
        }
      }),

      /**
       * @name computed
       */
      get evenOrOdd() {
        return store.value % 2 === 0 ? 'even' : 'odd';
      }
    });

    autorun(() => {
      document.querySelector('#app')
        .innerHTML = _(template, { imports })({ store });

      document.querySelector('#increment').onclick = () => store.increment();
      document.querySelector('#decrement').onclick = () => store.decrement();
      document.querySelector('#incrementAsync').onclick = () => store.incrementAsync();
      document.querySelector('#incrementIfOdd').onclick = () => store.incrementIfOdd();
    });
  });
};
