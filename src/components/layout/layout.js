import template from 'lodash-es/template';
import forEach from 'lodash-es/forEach';

import tpl from './layout.html';
// import styl from './layout.css';
import langsEn from './langs/en.json';
import langsZh from './langs/zh.json';

const imports = { 'imports': { forEach } };

export const LAYOUT_EN = template(tpl, imports)(langsEn);
export const LAYOUT_ZH = template(tpl, imports)(langsZh);
