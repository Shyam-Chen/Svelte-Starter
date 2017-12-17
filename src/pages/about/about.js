// @flow

import { template as _ } from 'lodash';

import { layout } from '~/shared/layout';

import template from './about.html';
import style from './about.css';
import english from './_languages/english.json';
import chinese from './_languages/chinese.json';
import japanese from './_languages/japanese.json';

export default (): void => {
  const imports = { style };

  page('/about', () => layout(_(template, { imports })(english), 'about'));

  const i18n = [
    ['en', english],
    ['zh', chinese],
    ['ja', japanese]
  ];

  for (let i = 0, cache = i18n.length; i < cache; i++) {
    page(`/${i18n[i][0]}/about`, () =>
      layout(_(template, { imports })(i18n[i][1]), 'about', i18n[i][0])
    );
  }
};
