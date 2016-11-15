import './app.css';

import { loadHome } from './pages/home';
import { loadAbout } from './pages/about';
import { load404 } from './pages/404';

import defaults from 'lodash-es/defaults';
import partition from 'lodash-es/partition';
import add from 'lodash-es/add';
import sum from 'lodash-es/sum';
console.log(defaults({ 'a': 1 }, { 'a': 3, 'b': 2 }));
console.log(partition([1, 2, 3, 4], n => n % 2));
console.log(add(6, 4)::sum([3, 2]));

import firebaseConfig from './assets/datas/firebase.config.json';
firebase.initializeApp(firebaseConfig);
const rootRef = firebase.database().ref();
const path = rootRef.root.toString();
console.log(path);

import { load } from './components/utils';
Promise.all([
    load('https://fonts.googleapis.com/icon?family=Material+Icons'),
    load('https://fonts.googleapis.com/css?family=Lora:700is')
  ])
  .then((data) => {
    const materialIcons = document.createElement('style');
    materialIcons.innerHTML = data[0];
    document.head.appendChild(materialIcons);

    const lora700is = document.createElement('style');
    lora700is.innerHTML = data[1];
    document.head.appendChild(lora700is);
  })
  .catch((err) => {
    console.error(err);
  });


page('/', loadHome);
page('/about', loadAbout);
page('*', load404);
page();
