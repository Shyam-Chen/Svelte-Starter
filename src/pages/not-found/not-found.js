import { template as _ } from 'lodash';

import template from './not-found.html';
import style from './not-found.css';

export const notfound = (): void => {
  page('*', () => {
    document.querySelector('#app')
      .innerHTML = _(template, { imports: { style } })();
  });
};
