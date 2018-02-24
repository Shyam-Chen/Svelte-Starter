// @flow

import { MDCRipple } from '@material/ripple';
import page from 'page';
import { template as _ } from 'lodash';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable';
import { delay, filter } from 'rxjs/operator';
import { observable, action, autorun } from 'mobx';

import { $, $$ } from '~/utils';

import template from './counter.html';
import style from './counter.css';

export const store = observable({
  // observable
  value: 0,

  // action
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

  // computed
  get evenOrOdd(): string {
    return store.value % 2 === 0 ? 'even' : 'odd';
  }
});

export const render = (): void => {
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
    ripple => MDCRipple.attachTo(ripple)
  );
};

export default (parent: string): void =>
  page(`${parent}/counter`, (): void => autorun(render));
