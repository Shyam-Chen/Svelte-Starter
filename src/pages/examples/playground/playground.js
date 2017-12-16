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

export const render = (): void => {
  $('#app').innerHTML = _(template, { imports: { style } })({ store });
};

export default (parent: string): void => {
  page(`${parent}/playground`, (): void => autorun(render));

  counter(`${parent}${pathname}`);
};
