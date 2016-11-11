import home from './home.html';
// import navigation from '../../components/navigation/navigation.html';

import { query } from '../../components/utils';

export const loadHome = () => {
  query('#app').innerHTML = home;
  componentHandler.upgradeAllRegistered();
};
