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

  /**
   * @name Globalization
   */

  const i18n = [
    ['en', english],
    ['zh', chinese],
    ['ja', japanese]
  ];

  const l10n = (data, ...funcs) => {
    for (let i = 0, l = data.length; i < l; i++) {
      page(`/${i18n[i][0]}/about`, () => {
        layout(_(template, { imports })(data[i][1]), 'about', data[i][0]);
        if (funcs) funcs.forEach(func => func());
      });
    }
  };

  l10n(i18n);
};
