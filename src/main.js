const load = (file) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('get', file, false);
    xhr.onload = () => {
      let status = xhr.status;
      status === 200 ? resolve(xhr.response) : reject(status);
    };
    xhr.send();
    return xhr.responseText;
  });
};

const loadNavigation = () => {
  load('./components/navigation/navigation.html')
    .then((data) => {
      const navigation = document.querySelector('#navigation');
      navigation.innerHTML = data;
    });
};

const loadHome = () => {
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

const first = () => {
  Promise.all([
    load('./components/navigation/navigation.html'),

    load('./pages/home/home.html'),
    load('./components/foo/foo.html')
  ])
  .then((data) => {
    const navigation = document.querySelector('#navigation');
    navigation.innerHTML = data[0];

    const app = document.querySelector('#app');
    app.innerHTML = data[1];
    history.pushState({ }, 'Home', 'home');

    const foo = document.querySelector('#foo');
    foo.innerHTML = data[2];

    const loader = document.querySelector('.md-loader');
    loader.style.display = 'none';
  });
};

const loadAbout = () => {
  load('./pages/about/about.html')
    .then((data) => {
      const app = document.querySelector('#app');
      app.innerHTML = data;
      history.pushState({ }, 'About', 'about');
    });
};
