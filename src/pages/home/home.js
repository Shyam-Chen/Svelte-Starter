import { MDCRipple } from '@material/ripple';
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

  const i18n = [
    ['en', english],
    ['zh', chinese],
    ['ja', japanese]
  ];

  const routes = (data, ...funcs) => {
    for (let i = 0, cache = data.length; i < cache; i++) {
      page(`/${data[i][0]}`, () => {
        layout(_(template, { imports })(data[i][1]), 'home', data[i][0]);
        funcs.forEach(func => func());
      });
    }
  };

  routes(i18n, common);
};
