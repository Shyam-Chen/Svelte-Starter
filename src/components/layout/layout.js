import template from './layout.html';
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
  document.querySelector('#app').innerHTML = template(data);
  document.querySelector('#page').innerHTML = content;
};
