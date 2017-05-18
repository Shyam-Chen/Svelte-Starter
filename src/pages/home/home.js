// import { MDCRipple } from '@material/ripple';
import { template as _ } from 'lodash';

import { layout } from '../../components/layout';
import webFundamentals from '../../assets/images/web-fundamentals.png';

import template from './home.html';
import style from './home.css';
import data from './home.json';

import dataZh from './languages/home-zh.json';
import dataJa from './languages/home-ja.json';

const imports = {
  style,
  image: {
    webFundamentals
  }
};

export const home = () => {
  page('/', () => {
    layout(_(template, { imports })(data), 'home');
    // [].forEach.call(
    //   document.querySelectorAll('.mdc-button'),
    //   surface => MDCRipple.attachTo(surface)
    // );
    // componentHandler.upgradeAllRegistered();
  });

  page('/zh', () => {
    layout(_(template, { imports })(dataZh), 'home', 'zh');
    // componentHandler.upgradeAllRegistered();
  });

  page('/ja', () => {
    layout(_(template, { imports })(dataJa), 'home', 'ja');
    // componentHandler.upgradeAllRegistered();
  });
};
