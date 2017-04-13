import template from './layout.html';
import data from './layout.json';

/**
 * @param {string} content
 *
 * @example
 * import { layout } from '../../components/layout';
 * layout(template(data)));
 */

export const layout = (content) => {
  document.querySelector('#app').innerHTML = template(data);
  document.querySelector('#page').innerHTML = content;
};
