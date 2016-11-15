import template from 'lodash-es/template';

import layout from './layout.html';

export const layoutTpl = template(layout)({
  'TITLE': 'Vanilla',
  'LINK_1': 'Home',
  'LINK_2': 'About'
});
