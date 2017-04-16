import './layout.css';

import template from './layout.html';
import data from './layout.json';
import dataZh from './layout-zh.json';

/**
 * @param {string} language
 * @param {string} page
 * @param {string} content
 *
 * @example
 * import { layout } from '../../components/layout';
 * layout('en', 'ex', template(data));
 */

export const layout = (language, page, content) => {
  const app = document.querySelector('#app');
  app.innerHTML = template(data);
  if (language === 'zh') app.innerHTML = template(dataZh);

  const enAnchor = document.querySelector('#en');
  const zhAnchor = document.querySelector('#zh');
  const homeConditional = page === 'home';
  homeConditional ? enAnchor.href = `/` : enAnchor.href = `/${page}`;
  homeConditional ? zhAnchor.href = `/zh` : zhAnchor.href = `/zh/${page}`;

  document.querySelector('main').innerHTML = content;
};
