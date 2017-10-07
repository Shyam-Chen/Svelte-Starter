import { template as _ } from 'lodash';

import template from './examples.html';
import style from './examples.css';
import { counter } from './counter';

export const examples = (): void => {
  page('/examples', () => {
    document.querySelector('#app')
      .innerHTML = _(template, { imports: { style } })();
  });

  counter();
};
