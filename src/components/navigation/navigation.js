// ToDo: 需要重構

import { load } from '../helpers/load';

import { $jq } from '../helpers/query';

export const loadHome = () => {
  Promise.all([
    load('./pages/home/home.html'),
    load('./components/navigation/navigation.html')
  ])
  .then((data) => {
    const app = $jq('#app');
    app.innerHTML = data[0];
    history.pushState({ }, 'Home', '/');

    const navigation = $jq('#navigation');
    navigation.innerHTML = data[1];
    $jq('#home').addEventListener('click', loadHome);
    $jq('#about').addEventListener('click', loadAbout);
    componentHandler.upgradeAllRegistered();
  });
};

export const loadAbout = () => {
  Promise.all([
    load('./pages/about/about.html'),
    load('./components/navigation/navigation.html')
  ])
  .then((data) => {
    const app = document.querySelector('#app');
    app.innerHTML = data[0];
    history.pushState({ }, 'About', 'about');

    const navigation = $jq('#navigation');
    navigation.innerHTML = data[1];
    $jq('#home').addEventListener('click', loadHome);
    $jq('#about').addEventListener('click', loadAbout);
    componentHandler.upgradeAllRegistered();
  });
};
