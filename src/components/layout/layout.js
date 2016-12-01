import template from 'lodash-es/template';
import forEach from 'lodash-es/forEach';

import layoutTpl from './layout.html';
import tplOptsEn from './langs/en.json';
import tplOptsZh from './langs/zh.json';

const imports = { 'imports': { forEach } };

export const layoutEn = template(layoutTpl, imports)(tplOptsEn);
export const layoutZh = template(layoutTpl, imports)(tplOptsZh);
