import { __moduleExports as mdRipple } from '@material/ripple/dist/mdc.ripple';
import { template as _ } from 'lodash';

import { layout } from '~/shared/layout';
import logo from '~/assets/images/logo.png';

import template from './home.html';
import style from './home.css';
import english from './_languages/english.json';
import chinese from './_languages/chinese.json';
import japanese from './_languages/japanese.json';

const imports = {
  style,
  image: {
    logo
  }
};

const common = (): void => {
  [].forEach.call(
    document.querySelectorAll('.mdc-button'),
    ripple => mdRipple.MDCRipple.attachTo(ripple)
  );
};

export const home = (): void => {
  if (location.pathname === '/') {
    if (/zh/.test(navigator.language)) page.redirect('/zh');
    if (/ja/.test(navigator.language)) page.redirect('/ja');
  }

  page('/', () => {
    layout(_(template, { imports })(english), 'home');
    common();
  });

  page('/en', () => {
    layout(_(template, { imports })(english), 'home', 'en');
    common();
  });

  page('/zh', () => {
    layout(_(template, { imports })(chinese), 'home', 'zh');
    common();
  });

  page('/ja', () => {
    layout(_(template, { imports })(japanese), 'home', 'ja');
    common();
  });
};
