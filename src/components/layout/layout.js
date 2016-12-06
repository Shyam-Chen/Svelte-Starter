import _template from 'lodash-es/template';
import _forEach from 'lodash-es/forEach';

import template from './layout.html';
import style from './layout.css';
import LANGS_EN from './langs/en.json';
import LANGS_ZH from './langs/zh.json';

const imports = { 'imports': { _forEach, style } };

export const LAYOUT_EN = _template(template, imports)(LANGS_EN);
export const LAYOUT_ZH = _template(template, imports)(LANGS_ZH);

export const layout = (lang, page) => {
  switch (lang) {
    case 'en':
      document.querySelector('#app').innerHTML = LAYOUT_EN;
      document.querySelector('#zh').href = `/zh/${page}`;
      break;
    case 'zh':
      document.querySelector('#app').innerHTML = LAYOUT_ZH;
      document.querySelector('#en').href = `/en/${page}`;
      break;
  }
};
