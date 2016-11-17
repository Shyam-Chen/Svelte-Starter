import template from 'lodash-es/template';

import { query } from '../../components/utils';
import { layout } from '../../components/layout';

import about from './about.html';

export const loadAbout = () => {
  query('#app').innerHTML = layout;
  query('#page').innerHTML = template(about)({ });
  componentHandler.upgradeAllRegistered();
};
