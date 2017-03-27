import { template } from 'lodash';

import tpl from './layout.html';
import style from './layout.css';
import data from './layout.json';

/**
 * @param {string} page
 * @param {string} content
 *
 * @example
 * import { layout } from '../../components/layout';
 * layout('new', template(tpl, { 'imports': { style } })(data)));
 */

export const layout = (page, content) => {
  document.querySelector('#app').innerHTML = template(tpl, { 'imports': { style } })(data);
  document.querySelector('#page').innerHTML = content;
};
