// @flow

import { template as _ } from 'lodash';
import { observable, autorun } from 'mobx';

import { $ } from '~/utils';

import template from './examples.html';
import style from './examples.css';
import { counter } from './counter';
import { crud } from './crud';
import { rest } from './rest';
import { graphql } from './graphql';

const pathname = '/examples';

export const store = observable({
  /**
   * @name observable
   */
  pathname: location.pathname,

  /**
   * @name computed
   */
  get location(): boolean {
    return store.pathname === pathname || store.pathname === `${pathname}/`;
  }
});

export const examples = (): void => {
  page(pathname, (): void => {
    autorun((): void => {
      $('#app').innerHTML = _(template, { imports: { style } })({ store });
    });
  });

  counter(pathname);
  crud(pathname);
  rest(pathname);
  graphql(pathname);
};
