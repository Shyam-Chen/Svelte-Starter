import { resolve } from 'universal-router';

const routes = [
  {
    path: '/one', action() {
      return { title: 'Page Title One', body: '<h1>Page One</h1>' }
    }
  }, {
    path: '/two', action() {
      return { title: 'Page Title Two', body: '<h1>Page Two</h1>' }
    }
  }, {
    path: '*', action() {
      return { title: 'Page Not Found', body: '<h1>Not Found</h1>' }
    }
  }
];

resolve(routes, { path: '/one' })
  .then((result) => {
    document.title = result.title;  // sets title: Page Title One
    document.body.innerHTML = result.body;  // renders: <h1>Page One</h1>
  });
