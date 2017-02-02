import { template } from 'lodash-es';

import tpl from './layout.html';
import style from './layout.css';
import data from './layout.json';

export const layout = (page, content) => {
  document.querySelector('#app').innerHTML = template(tpl, { 'imports': { style } })(data);
  document.querySelector('#page').innerHTML = content;
};
