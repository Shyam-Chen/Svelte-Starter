import home from './home.html';
import navigation from '../../components/navigation/navigation.html';

import { query } from '../../components/utils';

export const loadHome = () => {
  query('#app').innerHTML = home;
  query('#navigation').innerHTML = navigation;
  componentHandler.upgradeAllRegistered();
  /*Promise.all([
      load('../../components/navigation/navigation.html')
    ])
    .then((data) => {
      query('#navigation').innerHTML = data[0];
      componentHandler.upgradeAllRegistered();
    })
    .catch((err) => {
      console.error(err);
    });*/
};
