import './layout.css';

import template from './layout.html';
import data from './layout.json';
import dataZh from './layout-zh.json';

/**
 * @param {string} content
 *
 * @example
 * import { layout } from '../../components/layout';
 * layout(template(data)));
 */

export const layout = (language, page, content) => {
  const app = document.querySelector('#app');
  app.innerHTML = template(data);
  if (language === 'zh') app.innerHTML = template(dataZh);

  const zhAnchor = document.querySelector('#zh');
  const enAnchor = document.querySelector('#en');
  page === 'home' ? zhAnchor.href = `/zh` : zhAnchor.href = `/zh/${page}`;
  page === 'home' ? enAnchor.href = `/` : enAnchor.href = `/${page}`;

  document.querySelector('main').innerHTML = content;
};
