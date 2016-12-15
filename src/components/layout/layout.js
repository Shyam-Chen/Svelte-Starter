import _template from 'lodash-es/template';

import { site } from '../../functions';

import template from './layout.html';
import style from './layout.css';
import LANGS_EN from './langs/en.json';
import LANGS_ZH from './langs/zh.json';

const LAYOUT_EN = _template(template, { 'imports': { style } })(LANGS_EN);
const LAYOUT_ZH = _template(template, { 'imports': { style } })(LANGS_ZH);

export const layout = (lang, page) => {
  switch (lang) {
    case 'en':
      site('en');
      document.querySelector('#app').innerHTML = LAYOUT_EN;
      document.querySelector('#zh').href = `/zh/${page}`;
      // document.querySelector('#page').innerHTML = x;
      break;
    case 'zh':
      site('zh');
      document.querySelector('#app').innerHTML = LAYOUT_ZH;
      document.querySelector('#en').href = `/en/${page}`;
      break;
  }
};
