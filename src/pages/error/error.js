import { template as _ } from 'lodash';

import template from './error.html';
import style from './error.css';

export const error = () => {
  page('*', () => {
    document.querySelector('#app')
      .innerHTML = _(template, { 'imports': { style } });
  });
};
