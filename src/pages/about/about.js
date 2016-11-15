// import template from 'lodash-es/template';

import { query } from '../../components/utils';
import { layoutTpl } from '../../components/layout';

import about from './about.html';

export const loadAbout = () => {
  query('#app').innerHTML = layoutTpl;
  query('#page').innerHTML = about;
  componentHandler.upgradeAllRegistered();
};
