const prerender = require('pre-render');

if (
  process.argv.indexOf('--pre-render') !== -1 ||
  process.argv.indexOf('--prerender') !== -1
) {
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
}
