// import { MDCRipple } from '@material/ripple';
import { __moduleExports as mdRipple } from '@material/ripple/dist/mdc.ripple';
import { template as _ } from 'lodash';

import { layout } from '../../components/layout';
import logo from '../../assets/images/logo.png';

import template from './home.html';
import style from './home.css';
import data from './home.json';

import dataZh from './languages/home-zh.json';
import dataJa from './languages/home-ja.json';

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
  page('/', () => {
    layout(_(template, { imports })(data), 'home');
    common();
  });

  page('/zh', () => {
    layout(_(template, { imports })(dataZh), 'home', 'zh');
    common();
  });

  page('/ja', () => {
    layout(_(template, { imports })(dataJa), 'home', 'ja');
    common();
  });
};
