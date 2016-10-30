import { load } from '../helpers/load';

export const loadHome = () => {
  Promise.all([
    load('./pages/home/home.html'),
    load('./components/foo/foo.html')
  ])
  .then((data) => {
    const app = document.querySelector('#app');
    app.innerHTML = data[0];
    history.pushState({ }, 'Home', 'home');

    const foo = document.querySelector('#foo');
    foo.innerHTML = data[1];
  });
};

export const loadAbout = () => {
  load('./pages/about/about.html')
    .then((data) => {
      const app = document.querySelector('#app');
      app.innerHTML = data;
      history.pushState({ }, 'About', 'about');
    });
};
