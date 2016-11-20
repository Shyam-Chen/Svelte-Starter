import template from 'lodash-es/template';

import layoutTpl from './layout.html';

export const tplOpts = {
  'TITLE': 'Vanilla',
  'LINK': [['/', 'Home'], ['/about', 'About']],
  'LANG': [['/', 'English'], ['/zh', '中文']]
};

export const tplOptsZh = {
  'TITLE': '香草',
  'LINK': [['/zh', '首頁'], ['/about/zh', '關於']],
  'LANG': [['/', 'English'], ['/zh', '中文']]
};

export const layout = template(layoutTpl)(tplOpts);
export const layoutZh = template(layoutTpl)(tplOptsZh);
