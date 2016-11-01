import './pages/home/home';
import './pages/about/about';


// ToDo: 需要重構



import { load } from './components/helpers/load';
import { $jq } from './components/helpers/query';

import { loadHome, loadAbout } from './components/navigation/navigation';

if (document.location.pathname === '/') {
  window.onload = () => {
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

      $jq('#home').addEventListener('click', loadHome, false);
      $jq('#about').addEventListener('click', loadAbout, false);
      componentHandler.upgradeAllRegistered();
    });
  };

}

if (document.location.pathname === '/about') {
  window.onload = () => {
    Promise.all([
      load('./pages/about/about.html'),
      load('./components/navigation/navigation.html')
    ])
    .then((data) => {
      const app = $jq('#app');
      app.innerHTML = data[0];
      history.pushState({ }, 'About', '/about');

      const navigation = $jq('#navigation');
      navigation.innerHTML = data[1];

      $jq('#home').addEventListener('click', loadHome, false);
      $jq('#about').addEventListener('click', loadAbout, false);
      componentHandler.upgradeAllRegistered();
    });
  };
}
