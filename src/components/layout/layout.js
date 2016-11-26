import template from 'lodash-es/template';

import layoutTpl from './layout.html';

// TODO: ...
export const tplOptsEn = {
  'TITLE': 'Vanilla',
  'LINK': [['/en/home', 'Home'], ['/en/about', 'About']],
  'LANG': [['en', 'English'], ['zh', '中文']]
};

export const tplOptsZh = {
  'TITLE': '香草',
  'LINK': [['/zh/home', '首頁'], ['/zh/about', '關於']],
  'LANG': [['en', 'English'], ['zh', '中文']]
};

export const layoutEn = template(layoutTpl)(tplOptsEn);
export const layoutZh = template(layoutTpl)(tplOptsZh);
