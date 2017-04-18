import './layout.css';

import template from './layout.html';
import data from './layout.json';
import dataZh from './layout-zh.json';
import dataJp from './layout-jp.json';

/**
 * @param {string} content
 * @param {string} page
 * @param {string} language
 *
 * @example
 * import { layout } from '../../components/layout';
 * layout(template(data), 'example');
 */

export const layout = (content, page, language) => {
  const app = document.querySelector('#app');
  app.innerHTML = template(data);
  if (language === 'zh') app.innerHTML = template(dataZh);
  if (language === 'jp') app.innerHTML = template(dataJp);

  const enAnchor = document.querySelector('#en');
  const zhAnchor = document.querySelector('#zh');
  const jpAnchor = document.querySelector('#jp');
  const homeConditional = page === 'home';
  homeConditional ? enAnchor.href = `/` : enAnchor.href = `/${page}`;
  homeConditional ? zhAnchor.href = `/zh` : zhAnchor.href = `/zh/${page}`;
  homeConditional ? jpAnchor.href = `/jp` : jpAnchor.href = `/jp/${page}`;

  document.querySelector('main').innerHTML = content;
};
