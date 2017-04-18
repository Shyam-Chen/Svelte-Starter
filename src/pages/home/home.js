import { layout } from '../../components/layout';

import template from './home.html';
import data from './home.json';
import dataZh from './home-zh.json';
import dataJp from './home-jp.json';

export const home = () => {
  page('/', () => {
    layout(template(data), 'home');
    componentHandler.upgradeAllRegistered();
  });

  page('/zh', () => {
    layout(template(dataZh), 'home', 'zh');
    componentHandler.upgradeAllRegistered();
  });

  page('/jp', () => {
    layout(template(dataJp), 'home', 'jp');
    componentHandler.upgradeAllRegistered();
  });
};
