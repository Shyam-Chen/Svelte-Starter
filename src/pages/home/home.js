import { load, query } from '../../components/utils';

export const loadHome = () => {
  Promise.all([
      load('./pages/home/home.html'),
      load('../../components/navigation/navigation.html')
    ])
    .then((data) => {
      query('#app').innerHTML = data[0];
      query('#navigation').innerHTML = data[1];
      componentHandler.upgradeAllRegistered();
    })
    .catch((err) => {
      console.error(err);
    });
};

export const qq = () => {
  return 1 + 1;
};
