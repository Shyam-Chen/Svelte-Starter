import { layout } from '../../components/layout';

import template from './about.html';
import data from './about.json';
import dataZh from './about-zh.json';
import dataJp from './about-jp.json';

export const about = () => {
  page('/about', () => {
    layout(template(data), 'about');
    componentHandler.upgradeAllRegistered();
  });

  page('/zh/about', () => {
    layout(template(dataZh), 'about', 'zh');
    componentHandler.upgradeAllRegistered();
  });

  page('/jp/about', () => {
    layout(template(dataJp), 'about', 'jp');
    componentHandler.upgradeAllRegistered();
  });
};
