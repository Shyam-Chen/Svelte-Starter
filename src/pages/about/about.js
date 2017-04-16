import { layout } from '../../components/layout';

import template from './about.html';
import data from './about.json';
import dataZh from './about-zh.json';

export const about = () => {
  page('/about', () => {
    layout('en', 'about', template(data));
    componentHandler.upgradeAllRegistered();
  });

  page('/zh/about', () => {
    layout('zh', 'about', template(dataZh));
    componentHandler.upgradeAllRegistered();
  });
};
