import about from './about.html';
import navigation from '../../components/navigation/navigation.html';

import { query } from '../../components/utils';

export const loadAbout = () => {
  query('#app').innerHTML = about;
  query('#navigation').innerHTML = navigation;
  componentHandler.upgradeAllRegistered();
  /*Promise.all([
      load('./pages/about/about.html'),
      load('../../components/navigation/navigation.html')
    ])
    .then((data) => {
      query('#app').innerHTML = data[0];
      query('#navigation').innerHTML = data[1];
      componentHandler.upgradeAllRegistered();
    })
    .catch((err) => {
      console.error(err);
    });*/
};
