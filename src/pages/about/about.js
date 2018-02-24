// @flow

import page from 'page';
import { template as _ } from 'lodash';
import { observable, autorun } from 'mobx';

import { layout } from '~/shared/layout';

import template from './about.html';
import style from './about.css';
import english from './_languages/english.json';
import chinese from './_languages/chinese.json';
import japanese from './_languages/japanese.json';

export const store = observable({
  // TODO: languages
});

export default (): void => {
  const imports = { style };

  page('/about', () =>
    autorun(() => {
      layout(_(template, { imports })({ ...english, store }), 'about');
    })
  );


  const i18n = [
    ['en', english],
    ['zh', chinese],
    ['ja', japanese]
  ];

  for (let i = 0, l = i18n.length; i < l; i++) {
    page(`/${i18n[i][0]}/about`, (): void =>
      autorun((): void => {
        layout(_(template, { imports })({ ...i18n[i][1], store }), 'about', i18n[i][0]);
      })
    );
  }
};
