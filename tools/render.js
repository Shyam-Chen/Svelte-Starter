const prerender = require('pre-render');

prerender('./public', [
  '/',
  '/about',
  '/contact',

  '/examples',
  '/examples/counter',
  '/examples/crud',
  '/examples/rest',
  '/examples/graphql'
]);
