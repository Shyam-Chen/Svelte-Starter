import home from './home.html';
import layout from '../../components/layout/layout.html';

import vanilla from '../../assets/images/vanilla.png';

import { query } from '../../components/utils';

export const loadHome = () => {
  query('#app').innerHTML = layout;
  query('#page').innerHTML = home;
  query('#vanilla').appendChild(vanilla);
  componentHandler.upgradeAllRegistered();
};
