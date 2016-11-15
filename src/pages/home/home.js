import template from 'lodash-es/template';

import home from './home.html';
import layout from '../../components/layout/layout.html';

import vanilla from '../../assets/images/vanilla.png';

import { query } from '../../components/utils';


const foo = 'foo';
export const loadHome = () => {

  query('#app').innerHTML = layout;
  query('#page').innerHTML = template(home)({
    'HOME': 'Home Page',
    'FOO': foo  // TODO: CSS Modules
  });
  query('#vanilla').appendChild(vanilla);
  componentHandler.upgradeAllRegistered();
};
