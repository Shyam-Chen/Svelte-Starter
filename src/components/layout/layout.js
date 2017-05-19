// import { MDCTemporaryDrawer } from '@material/drawer';
import { __moduleExports as mdDrawer } from '@material/drawer/dist/mdc.drawer';

import { template as _, noop } from 'lodash';

import template from './layout.html';
import style from './layout.css';
import data from './layout.json';

import dataZh from './languages/layout-zh.json';
import dataJa from './languages/layout-ja.json';

/**
 * @param {string} content - Page content
 * @param {string} page - Page name
 * @param {string} [language=en] - Page language
 *
 * @return {void}
 *
 * @example
 * import { layout } from '../../components/layout';
 * layout(_(template, { imports })(data), 'home');
 */
export const layout = (content, page, language = 'en') => {
  const app = document.querySelector('#app');
  const imports = { style };
  language === 'en' ? app.innerHTML = _(template, { imports })(data) : noop();
  language === 'zh' ? app.innerHTML = _(template, { imports })(dataZh) : noop();
  language === 'ja' ? app.innerHTML = _(template, { imports })(dataJa) : noop();

  const enAnchor = document.querySelector('#en');
  const zhAnchor = document.querySelector('#zh');
  const jaAnchor = document.querySelector('#ja');
  page === 'home' ? enAnchor.href = `/` : enAnchor.href = `/${page}`;
  page === 'home' ? zhAnchor.href = `/zh` : zhAnchor.href = `/zh/${page}`;
  page === 'home' ? jaAnchor.href = `/ja` : jaAnchor.href = `/ja/${page}`;

  const bodyEl = document.querySelector('body');
  const mainEl = document.querySelector('main');
  const drawerDesktopEl = document.querySelector('.mdc-permanent-drawer[data-desktop]');
  const drawerMobileEl = document.querySelector('.mdc-temporary-drawer[data-mobile]');

  const drawerMobile = new mdDrawer.MDCTemporaryDrawer(drawerMobileEl);

  document.querySelector('#menu').onclick = () => {
    if (window.innerWidth <= 599) {
      drawerMobile.open = true;
    } else {
      drawerDesktopEl.classList.toggle('drawer-action');
      mainEl.classList.toggle('main-action');
    }
  };

  // document.querySelector('#mobile-menu').onclick = () => drawerMobile.open = false;
  drawerMobileEl.addEventListener('MDCTemporaryDrawer:open', () => bodyEl.style.overflowY = 'hidden');
  drawerMobileEl.addEventListener('MDCTemporaryDrawer:close', () => bodyEl.style.overflowY = 'auto');

  document.querySelector('#content').innerHTML = content;
};
