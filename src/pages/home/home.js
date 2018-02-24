import { MDCRipple } from '@material/ripple';
import page from 'page';
import { template as _ } from 'lodash';

import logo from '~/assets/images/logo.png';
import { layout } from '~/shared/layout';
import { $$ } from '~/utils';

import template from './home.html';
import style from './home.css';
import english from './_languages/english.json';
import chinese from './_languages/chinese.json';
import japanese from './_languages/japanese.json';

export const home = (): void => {
  if (location.pathname === '/') {
    if (/zh/.test(navigator.language)) page.redirect('/zh');
    if (/ja/.test(navigator.language)) page.redirect('/ja');
  }

  const imports = {
    style,
    image: {
      logo
    }
  };

  const common = (): void => {
    [].forEach.call(
      $$('.mdc-button'),
      ripple => MDCRipple.attachTo(ripple)
    );
  };

  page('/', () => {
    layout(_(template, { imports })(english), 'home');
    common();
  });

  /**
   * @name Globalization
   */

  const i18n = [
    ['en', english],
    ['zh', chinese],
    ['ja', japanese]
  ];

  const l10n = (data, ...funcs) => {
    for (let i = 0, l = data.length; i < l; i++) {
      page(`/${data[i][0]}`, () => {
        layout(_(template, { imports })(data[i][1]), 'home', data[i][0]);
        if (funcs) funcs.forEach(func => func());
      });
    }
  };

  l10n(i18n, common);
};
