import { template as _ } from 'lodash';

import { layout } from '../../components/layout';

import template from './about.html';
import style from './about.css';
import data from './about.json';
import dataZh from './about-zh.json';
import dataJa from './about-ja.json';

export const about = () => {
  page('/about', () => {
    layout(_(template, { 'imports': { style } })(data), 'about');
    componentHandler.upgradeAllRegistered();
  });

  page('/zh/about', () => {
    layout(_(template, { 'imports': { style } })(dataZh), 'about', 'zh');
    componentHandler.upgradeAllRegistered();
  });

  page('/ja/about', () => {
    layout(_(template, { 'imports': { style } })(dataJa), 'about', 'ja');
    componentHandler.upgradeAllRegistered();
  });
};
