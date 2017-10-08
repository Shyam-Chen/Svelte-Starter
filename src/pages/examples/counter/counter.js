import { template as _ } from 'lodash';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable';
import { delay, filter } from 'rxjs/operator';
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
      incrementAsync: action(() =>
        setTimeout(() => store.increment(), 1000)
      ),
      decrementAsync: action(() =>
        Observable::of(null)
          ::delay(1000)
          .subscribe(() => store.decrement())
      ),
      incrementIfOdd: action(() => {
        if (Math.abs(store.value % 2) === 1) {
          store.increment();
        }
      }),
      decrementIfEven: action(() =>
        Observable::of(null)
          ::filter(() => store.value % 2 === 0)
          .subscribe(() => store.decrement())
      ),

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

      const createClickEvent = (name, func) =>
        document.querySelector(`#${name}`)
          .addEventListener('click', func);

      createClickEvent('increment', store.increment);
      createClickEvent('decrement', store.decrement);
      createClickEvent('incrementAsync', store.incrementAsync);
      createClickEvent('decrementAsync', store.decrementAsync);
      createClickEvent('incrementIfOdd', store.incrementIfOdd);
      createClickEvent('decrementIfEven', store.decrementIfEven);
    });
  });
};
