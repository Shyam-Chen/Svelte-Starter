import { layout } from '../../components/layout';

import template from './about.html';
import data from './about.json';
import dataZh from './about-zh.json';
import dataJa from './about-ja.json';

export const about = () => {
  page('/about', () => {
    layout(template(data), 'about');
    componentHandler.upgradeAllRegistered();
  });

  page('/zh/about', () => {
    layout(template(dataZh), 'about', 'zh');
    componentHandler.upgradeAllRegistered();
  });

  page('/ja/about', () => {
    layout(template(dataJa), 'about', 'ja');
    componentHandler.upgradeAllRegistered();
  });
};
