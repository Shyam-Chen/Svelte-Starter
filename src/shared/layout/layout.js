import { __moduleExports as mdDrawer } from '@material/drawer/dist/mdc.drawer';
import { __moduleExports as mdRipple } from '@material/ripple/dist/mdc.ripple';
import { template as _, noop } from 'lodash';

import logo from '~/assets/images/touch/ms-touch-icon-144x144-precomposed.png';

import template from './layout.html';
import style from './layout.css';
import data from './layout.json';
import dataZh from './languages/layout-zh.json';
import dataJa from './languages/layout-ja.json';

/**
 * @example
 * import { layout } from '../../components/layout';
 * layout(_(template, { imports })(data), 'home');
 */

export const layout = (content: string, page: string, language: string = 'en'): void => {
  const $ = (selector: string): HTMLElement => document.querySelector(selector);
  const $$ = (selector: string): HTMLElement[] => document.querySelectorAll(selector);

  const app = $('#app');
  const imports = { style, image: { logo } };
  language === 'en' ? app.innerHTML = _(template, { imports })(data) : noop();
  language === 'zh' ? app.innerHTML = _(template, { imports })(dataZh) : noop();
  language === 'ja' ? app.innerHTML = _(template, { imports })(dataJa) : noop();

  const enAnchor = $('#en');
  const zhAnchor = $('#zh');
  const jaAnchor = $('#ja');
  page === 'home' ? enAnchor.href = `/en` : enAnchor.href = `/en/${page}`;
  page === 'home' ? zhAnchor.href = `/zh` : zhAnchor.href = `/zh/${page}`;
  page === 'home' ? jaAnchor.href = `/ja` : jaAnchor.href = `/ja/${page}`;

  const bodyEl = $('body');
  const mainEl = $('main');
  const drawerDesktopEl = $('.mdc-permanent-drawer[data-desktop]');
  const drawerMobileEl = $('.mdc-temporary-drawer[data-mobile]');

  const drawerMobile = new mdDrawer.MDCTemporaryDrawer(drawerMobileEl);

  $('#menu').onclick = (): void => {
    if (window.innerWidth <= 599) {
      drawerMobile.open = true;
    } else {
      mainEl.classList.toggle(style.jsMain);
      drawerDesktopEl.classList.toggle(style.jsDrawer);
    }
  };

  drawerMobileEl.addEventListener('MDCTemporaryDrawer:open', () => bodyEl.style.overflowY = 'hidden');
  drawerMobileEl.addEventListener('MDCTemporaryDrawer:close', () => bodyEl.style.overflowY = 'auto');

  [].forEach.call(
    $$('a.mdc-list-item'),
    ripple => mdRipple.MDCRipple.attachTo(ripple)
  );

  $('#content').innerHTML = content;
};
