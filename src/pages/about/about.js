import { template as _ } from 'lodash';

import { layout } from '../../components/layout';

import template from './about.html';
import style from './about.css';
import data from './about.json';

import dataZh from './languages/about-zh.json';
import dataJa from './languages/about-ja.json';

const imports = {
  style
};

export const about = (): void => {
  page('/about', () => {
    layout(_(template, { imports })(data), 'about');
  });

  page('/zh/about', () => {
    layout(_(template, { imports })(dataZh), 'about', 'zh');
  });

  page('/ja/about', () => {
    layout(_(template, { imports })(dataJa), 'about', 'ja');
  });
};

// @flow
