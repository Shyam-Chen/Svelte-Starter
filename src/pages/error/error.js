import { template } from 'lodash-es';

import tpl from './error.html';
import style from './error.css';
import luyou from '../../scripts/luyou';
const ERROR = () => {
  document.querySelector('#app').innerHTML = template(tpl, {
    'imports': { style }
  })({
    text: '404'
  });
};

export const error = () => {
  luyou('*', ERROR);
};
