const prerender = require('pre-render');

if (
  process.argv.indexOf('--pre-render') !== -1 ||
  process.argv.indexOf('--prerender') !== -1
) {
  prerender('./public', ['/', '/about', '/contact']);
}
