import { template as _ } from 'lodash';

import { layout } from '~/shared/layout';

import template from './about.html';
import style from './about.css';
import data from './_languages/about.json';
import dataZh from './_languages/about-zh.json';
import dataJa from './_languages/japanese.json';

const imports = { style };

export const about = (): void => {
  page('/about', () => {
    layout(_(template, { imports })(data), 'about');
  });

  page('/en/about', () => {
    layout(_(template, { imports })(data), 'about');
  });

  page('/zh/about', () => {
    layout(_(template, { imports })(dataZh), 'about', 'zh');
  });

  page('/ja/about', () => {
    layout(_(template, { imports })(dataJa), 'about', 'ja');
  });
};
