import { template as _ } from 'lodash';

import { counter } from './counter';
import { crud } from './crud';

import template from './examples.html';
import style from './examples.css';

export const examples = (): void => {
  page('/examples', () => {
    document.querySelector('#app')
      .innerHTML = _(template, { imports: { style } })();
  });

  counter();
  crud();
};
