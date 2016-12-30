import { template } from 'lodash-es';

import tpl from './error.html';
import style from './error.css';

const ERROR = () => {
  document.querySelector('#app').innerHTML = template(tpl, {
    'imports': { style }
  })({
    text: '404'
  });
};

export const error = () => {
  page('*', ERROR);
};
