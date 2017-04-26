import { template as _ } from 'lodash';

import template from './layout.html';
import style from './layout.css';
import data from './layout.json';
import dataZh from './layout-zh.json';
import dataJa from './layout-ja.json';

/**
 * @param {string} content
 * @param {string} page
 * @param {string} [language=en]
 *
 * @example
 * import { layout } from '../../components/layout';
 * layout(tpl(data), 'example');
 */

export const layout = (content, page, language = 'en') => {
  const app = document.querySelector('#app');
  if (language === 'en') app.innerHTML = _(template, { 'imports': { style } })(data);
  if (language === 'zh') app.innerHTML = _(template, { 'imports': { style } })(dataZh);
  if (language === 'ja') app.innerHTML = _(template, { 'imports': { style } })(dataJa);

  const enAnchor = document.querySelector('#en');
  const zhAnchor = document.querySelector('#zh');
  const jaAnchor = document.querySelector('#ja');
  page === 'home' ? enAnchor.href = `/` : enAnchor.href = `/${page}`;
  page === 'home' ? zhAnchor.href = `/zh` : zhAnchor.href = `/zh/${page}`;
  page === 'home' ? jaAnchor.href = `/ja` : jaAnchor.href = `/ja/${page}`;

  document.querySelector('#content').innerHTML = content;
};
