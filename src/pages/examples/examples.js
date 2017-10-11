import { template as _ } from 'lodash';
import { observable, autorun } from 'mobx';

import { counter } from './counter';
import { crud } from './crud';

import template from './examples.html';
import style from './examples.css';

export const examples = (): void => {
  page('/examples', (): void => {
    const store = observable({
      pathname: location.pathname,

      get location(): boolean {
        return store.pathname === '/examples' || store.pathname === '/examples/';
      }
    });

    autorun((): void => {
      document.querySelector('#app')
        .innerHTML = _(template, { imports: { style } })({ store });
    });
  });

  counter();
  crud();
};
