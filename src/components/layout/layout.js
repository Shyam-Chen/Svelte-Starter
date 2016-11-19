import template from 'lodash-es/template';

import layoutTpl from './layout.html';

export const tplOpts = {
  'TITLE': 'Vanilla',
  'LINK': [['/', 'Home'], ['/about', 'About']]
};

export const layout = template(layoutTpl)(tplOpts);
