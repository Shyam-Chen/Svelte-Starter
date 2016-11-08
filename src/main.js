import { loadAbout } from './components/navigation/navigation.js';

import { loadHome } from './pages/home';
import { load404 } from './pages/404';

const loadScript = (url, callback) => {
  const script = document.createElement('script');
  script.src = url;
  script.defer = true;
  script.onreadystatechange = callback;
  script.onload = callback;
  document.body.appendChild(script);
};

const fire = () => {
  const config = {
    apiKey: 'AIzaSyDvaaNIb1KvegzUP2EtgxjxzcxG_T36wQI',
    authDomain: 'test-1498d.firebaseapp.com',
    databaseURL: 'https://test-1498d.firebaseio.com',
    storageBucket: 'test-1498d.appspot.com',
    messagingSenderId: '642330827186'
  };
  firebase.initializeApp(config);
};

loadScript('https://www.gstatic.com/firebasejs/3.5.2/firebase.js', fire);

page('/', loadHome);
page('/about', loadAbout);
page('*', load404);
page();

// TODO: JSON
const resources = {
  "en": {
    "translation": {
      "title": "title"
    }
  },
  "zh": {
    "translation": {
      "title": "標題"
    }
  }
};

i18next.init({
  lng: 'en',
  resources: {
    en: {
      translation: {
        "key": "hello world"
      }
    }
  }
}, (err, t) => {
  // initialized and ready to go!
  const hw = i18next.t('key');
  console.log(hw);  // hw = 'hello world'
});
