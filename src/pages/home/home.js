import { layout } from '../../components/layout';

import template from './home.html';
import data from './home.json';
import dataZh from './home-zh.json';
import dataJp from './home-jp.json';

export const home = () => {
  page('/', () => {
    layout('en', 'home', template(data));
    componentHandler.upgradeAllRegistered();
  });

  page('/zh', () => {
    layout('zh', 'home', template(dataZh));
    componentHandler.upgradeAllRegistered();
  });

  page('/jp', () => {
    layout('jp', 'home', template(dataJp));
    componentHandler.upgradeAllRegistered();
  });
};
