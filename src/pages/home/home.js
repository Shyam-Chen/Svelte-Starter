import home from './home.html';
import layout from '../../components/layout/layout.html';

import { query } from '../../components/utils';

export const loadHome = () => {
  query('#app').innerHTML = layout;
  query('#page').innerHTML = home;
  componentHandler.upgradeAllRegistered();
};
