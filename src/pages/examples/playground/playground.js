// @flow

import { template as _ } from 'lodash';
import { observable, action, autorun } from 'mobx';

import { $ } from '~/utils';

import { counter } from './counter';

import template from './playground.html';
import style from './playground.css';

const pathname = '/playground';

export const store = observable({
  foo: action(() => {
    // ...
  })
});

export const render = (route: string) =>
  autorun((): void => {
    $('#app').innerHTML = _(template, { imports: { style } })({ store, route });
  });

export default (parent: string): void => {
  const route = parent + pathname;

  page(route, (): void => render(route));

  counter(route);
};
