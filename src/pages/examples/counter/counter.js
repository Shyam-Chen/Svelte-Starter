import { __moduleExports as mdRipple } from '@material/ripple/dist/mdc.ripple';
import { template as _ } from 'lodash';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable';
import { delay, filter } from 'rxjs/operator';
import { observable, action, autorun } from 'mobx';

import template from './counter.html';
import style from './counter.css';

export default (parent: string) => {
  page(`${parent}/counter`, () => {
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
      incrementIfEven: action(() => {
        if (store.value % 2 === 0) {
          store.increment();
        }
      }),
      decrementIfOdd: action(() =>
        Observable::of(null)
          ::filter(() => Math.abs(store.value % 2) === 1)
          .subscribe(() => store.decrement())
      ),

      /**
       * @name computed
       */
      get evenOrOdd(): string {
        return store.value % 2 === 0 ? 'even' : 'odd';
      }
    });

    autorun(() => {
      const $ = (selector: string): HTMLElement => document.querySelector(selector);
      const $$ = (selector: string): HTMLElement[] => document.querySelectorAll(selector);

      $('#app').innerHTML = _(template, { imports: { style } })({ store });

      const createClickEvent = (name, func) =>
        $(`#${name}`).addEventListener('click', func);

      createClickEvent('increment', store.increment);
      createClickEvent('decrement', store.decrement);
      createClickEvent('incrementAsync', store.incrementAsync);
      createClickEvent('decrementAsync', store.decrementAsync);
      createClickEvent('incrementIfEven', store.incrementIfEven);
      createClickEvent('decrementIfOdd', store.decrementIfOdd);

      [].forEach.call(
        $$('.mdc-button'),
        ripple => mdRipple.MDCRipple.attachTo(ripple)
      );
    });
  });
};
