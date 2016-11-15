import template from 'lodash-es/template';

import { query } from '../../components/utils';
import { layoutTpl } from '../../components/layout';

import home from './home.html';
import vanilla from '../../assets/images/vanilla.png';

const foo = 'foo';
export const loadHome = () => {
  query('#app').innerHTML = layoutTpl;
  query('#page').innerHTML = template(home)({
    'HOME': 'Home Page',
    'FOO': foo  // TODO: CSS Modules
  });
  query('#vanilla').appendChild(vanilla);
  componentHandler.upgradeAllRegistered();
};
