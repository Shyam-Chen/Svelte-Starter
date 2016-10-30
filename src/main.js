import { load } from './components/helpers/load';
import { $jq } from './components/helpers/query';

import { loadHome, loadAbout } from './components/navigation/navigation';

window.onload = () => {
  Promise.all([
    load('./components/navigation/navigation.html'),

    load('./pages/home/home.html'),
    load('./components/foo/foo.html')
  ])
  .then((data) => {
    const navigation = $jq('#navigation');
    navigation.innerHTML = data[0];

    $jq('#home').onclick = loadHome;
    $jq('#about').onclick = loadAbout;

    const app = $jq('#app');
    app.innerHTML = data[1];
    history.pushState({ }, 'Home', 'home');

    const foo = $jq('#foo');
    foo.innerHTML = data[2];

    const loader = $jq('.md-loader');
    loader.style.display = 'none';
  });
};
