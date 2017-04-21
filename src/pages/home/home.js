import './home.css';

import { layout } from '../../components/layout';

import template from './home.html';
import data from './home.json';
import dataZh from './home-zh.json';
import dataJa from './home-ja.json';

export const home = () => {
  page('/', () => {
    layout(template(data), 'home');
    componentHandler.upgradeAllRegistered();
  });

  page('/zh', () => {
    layout(template(dataZh), 'home', 'zh');
    componentHandler.upgradeAllRegistered();
  });

  page('/ja', () => {
    layout(template(dataJa), 'home', 'ja');
    componentHandler.upgradeAllRegistered();
  });
};
