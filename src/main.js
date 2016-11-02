import { loadHome, loadAbout } from './components/navigation/navigation.js';

import { load, query } from './components/utils';


const notfound = () => {
  Promise.all([
    load('./pages/404/404.html'),
    load('./components/navigation/navigation.html')
  ])
  .then((data) => {
    query('#app').innerHTML = data[0];
    query('#navigation').innerHTML = data[1];
    componentHandler.upgradeAllRegistered();
  });
};

page('/', loadHome);
page('/about', loadAbout);
page('*', notfound);
page();
