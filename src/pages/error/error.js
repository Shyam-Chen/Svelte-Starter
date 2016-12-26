import { template } from 'lodash-es';

import tpl from './error.html';
import style from './error.css';

export const ERROR = () => {
  document.querySelector('#app').innerHTML = template(tpl, {
    'imports': { style }
  })({
    text: '404'
  });
};
