import { MDCTemporaryDrawer } from '@material/drawer';
import { MDCRipple } from '@material/ripple';
import { template as _, noop } from 'lodash';

import logo from '~/assets/images/touch/ms-touch-icon-144x144-precomposed.png';
import { $, $$ } from '~/utils';

import template from './layout.html';
import style from './layout.css';
import english from './_languages/english.json';
import chinese from './_languages/chinese.json';
import japanese from './_languages/japanese.json';

/**
 * @example
 * import { layout } from '../../components/layout';
 * layout(_(template, { imports })(data), 'home');
 */

export const layout = (content: string, page: string, language: string = 'en'): void => {
  const app = $('#app');
  const imports = { style, image: { logo } };
  language === 'en' ? app.innerHTML = _(template, { imports })(english) : noop();
  language === 'zh' ? app.innerHTML = _(template, { imports })(chinese) : noop();
  language === 'ja' ? app.innerHTML = _(template, { imports })(japanese) : noop();

  const enAnchor = $('#en');
  const zhAnchor = $('#zh');
  const jaAnchor = $('#ja');
  page === 'home' ? enAnchor.href = `/en` : enAnchor.href = `/en/${page}`;
  page === 'home' ? zhAnchor.href = `/zh` : zhAnchor.href = `/zh/${page}`;
  page === 'home' ? jaAnchor.href = `/ja` : jaAnchor.href = `/ja/${page}`;

  const bodyEl = $('body');
  const mainEl = $('main');
  const drawerDesktopEl = $('.mdc-drawer--permanent[data-desktop]');
  const drawerMobileEl = $('.mdc-drawer--temporary[data-mobile]');

  const drawerMobile = new MDCTemporaryDrawer(drawerMobileEl);

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
    ripple => {
      MDCRipple.attachTo(ripple);
      window.scrollTo(0, 0);
    }
  );

  $('#content').innerHTML = content;
};
