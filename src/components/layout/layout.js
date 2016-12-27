import { template } from 'lodash-es';

import { site } from '../../scripts';

import tpl from './layout.html';
import style from './layout.css';
import LANGS_EN from './langs/en.json';
import LANGS_ZH from './langs/zh-Hant.json';

const LAYOUT_EN = template(tpl, { 'imports': { style } })(LANGS_EN);
const LAYOUT_ZH = template(tpl, { 'imports': { style } })(LANGS_ZH);

const app = document.querySelector('#app');

export const layout = (lang, page, content) => {
  switch (lang) {
    case 'en':
      site('en', 'Vanilla');
      app.innerHTML = LAYOUT_EN;
      document.querySelector('#zh-Hant').href = `/zh-Hant/${page}`;
      document.querySelector('#page').innerHTML = content;
      break;
    case 'zh':
      site('zh', '香草');
      app.innerHTML = LAYOUT_ZH;
      document.querySelector('#en').href = `/en/${page}`;
      document.querySelector('#page').innerHTML = content;
      break;
  }
};
