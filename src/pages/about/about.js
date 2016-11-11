import about from './about.html';
// import navigation from '../../components/navigation/navigation.html';

import { query } from '../../components/utils';

export const loadAbout = () => {
  query('#app').innerHTML = about;
  componentHandler.upgradeAllRegistered();
};
