import './_global.css';

import firebaseConfig from './assets/datas/firebase.config.json';

import { loadHome } from './pages/home';
import { loadAbout } from './pages/about';
import { load404 } from './pages/404';

import { loadFont } from './components/utils';

firebase.initializeApp(firebaseConfig);
const rootRef = firebase.database().ref();
const path = rootRef.root.toString();
console.log(path);

loadFont('https://fonts.googleapis.com/icon?family=Material+Icons');
loadFont('https://fonts.googleapis.com/css?family=Lora:700is')

// Promise.all([
//     load('https://fonts.googleapis.com/icon?family=Material+Icons'),
//     load('https://fonts.googleapis.com/css?family=Lora:700is')
//   ])
//   .then((data) => {
//     const materialIcons = document.createElement('style');
//     materialIcons.innerHTML = data[0];
//     document.head.appendChild(materialIcons);
// 
//     const lora700is = document.createElement('style');
//     lora700is.innerHTML = data[1];
//     document.head.appendChild(lora700is);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

page('/', loadHome);
page('/about', loadAbout);
page('*', load404);
page();
