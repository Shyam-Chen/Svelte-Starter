import template from 'lodash-es/template';

import layoutTpl from './layout.html';

export const tplOptions = {
  'TITLE': 'Vanilla',
  LINK_HREF: '/',
  'LINK_NAME': 'Home',
  'LINK_2': 'About'
};

export const layout = template(layoutTpl)(tplOptions);
