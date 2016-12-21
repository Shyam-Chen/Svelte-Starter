import _template from 'lodash-es/template';

import { site } from '../../functions';

import template from './layout.html';
import style from './layout.css';
import LANGS_EN from './langs/en.json';
import LANGS_ZH from './langs/zh.json';

const LAYOUT_EN = _template(template, { 'imports': { style } })(LANGS_EN);
const LAYOUT_ZH = _template(template, { 'imports': { style } })(LANGS_ZH);

const app = document.querySelector('#app');

export const layout = (lang, page, content) => {
  switch (lang) {
    case 'en':
      site('en');
      app.innerHTML = LAYOUT_EN;
      document.querySelector('#zh').href = `/zh/${page}`;
      document.querySelector('#page').innerHTML = content;
      break;
    case 'zh':
      site('zh');
      app.innerHTML = LAYOUT_ZH;
      document.querySelector('#en').href = `/en/${page}`;
      document.querySelector('#page').innerHTML = content;
      break;
  }
};
