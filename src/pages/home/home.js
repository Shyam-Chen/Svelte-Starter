import { template as _ } from 'lodash';

import { layout } from '../../components/layout';
import vanilla from '../../assets/images/vanilla.png';

import template from './home.html';
import style from './home.css';
import data from './home.json';

import dataZh from './languages/home-zh.json';
import dataJa from './languages/home-ja.json';

const imports = {
  style,
  image: {
    vanilla
  }
};

export const home = () => {
  page('/', () => {
    layout(_(template, { imports })(data), 'home');
    componentHandler.upgradeAllRegistered();
  });

  page('/zh', () => {
    layout(_(template, { imports })(dataZh), 'home', 'zh');
    componentHandler.upgradeAllRegistered();
  });

  page('/ja', () => {
    layout(_(template, { imports })(dataJa), 'home', 'ja');
    componentHandler.upgradeAllRegistered();
  });
};
