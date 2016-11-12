import about from './about.html';
import layout from '../../components/layout/layout.html';

import { query } from '../../components/utils';

export const loadAbout = () => {
  query('#app').innerHTML = layout;
  query('#page').innerHTML = about;
  componentHandler.upgradeAllRegistered();
};
