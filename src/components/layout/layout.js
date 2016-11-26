import template from 'lodash-es/template';

import layoutTpl from './layout.html';
import tplOptsEn from './layout-en.json';
import tplOptsZh from './layout-zh.json';

export const layoutEn = template(layoutTpl)(tplOptsEn);
export const layoutZh = template(layoutTpl)(tplOptsZh);
