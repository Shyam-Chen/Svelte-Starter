// @flow

import { template as _ } from 'lodash';
import { observable, autorun } from 'mobx';

import { $ } from '~/utils';

import template from './examples.html';
import style from './examples.css';

import { crud, rest, graphql } from './crud-operations';
import { playground } from './playground';

const pathname = '/examples';

export const store = observable({
  // observable
  pathname: location.pathname,

  // computed
  get location(): boolean {
    return (store.pathname === pathname) || (store.pathname === `${pathname}/`);
  }
});

export const examples = (): void => {
  page(pathname, (): void => {
    autorun((): void => {
      $('#app').innerHTML = _(template, { imports: { style } })({ store, pathname });
    });
  });

  crud(pathname);
  rest(pathname);
  graphql(pathname);

  playground(pathname);
};
