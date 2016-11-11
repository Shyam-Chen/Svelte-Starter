import notFound from './404.html';

import { query } from '../../components/utils';

export const load404 = () => {
  query('#app').innerHTML = notFound;
  /*Promise.all([
      load('./pages/404/404.html')
    ])
    .then((data) => {
      query('#app').innerHTML = data[0];
      componentHandler.upgradeAllRegistered();
    })
    .catch((err) => {
      console.error(err);
    });*/
};
