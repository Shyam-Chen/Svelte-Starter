import { template as _ } from 'lodash';

import { $ } from '~/utils';

import template from './not-found.html';
import style from './not-found.css';

export const notfound = (): void => {
  page('*', () => {
    $('#app').innerHTML = _(template, { imports: { style } })();
  });
};
