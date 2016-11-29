import template from 'lodash-es/template';

import layoutTpl from './layout.html';
import tplOptsEn from './langs/en.json';
import tplOptsZh from './langs/zh.json';

export const layoutEn = template(layoutTpl)(tplOptsEn);
export const layoutZh = template(layoutTpl)(tplOptsZh);
