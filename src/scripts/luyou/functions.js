import luyou from './luyou';

export function unhandled(ctx) {
  if (ctx.handled) return;
  let current = location.pathname + location.search;
  if (current === ctx.canonicalPath) return;
  luyou.stop();
  ctx.handled = false;
  location.href = ctx.canonicalPath;
}

export function decodeURLEncodedURIComponent(val) {
  return decodeURIComponent(val.replace(/\+/g, ' '));
}

export function onclick(e) {
  if (1 !== which(e)) return;

  if (e.metaKey || e.ctrlKey || e.shiftKey) return;
  if (e.defaultPrevented) return;

  let el = e.path ? e.path[0] : e.target;
  while (el && 'A' !== el.nodeName) el = el.parentNode;
  if (!el || 'A' !== el.nodeName) return;

  if (el.hasAttribute('download') || el.getAttribute('rel') === 'external') return;


  let link = el.getAttribute('href');

  if (link && link.indexOf('mailto:') > -1) return;
  if (el.target) return;
  if (!sameOrigin(el.href)) return;

  let path = el.pathname + el.search;

  if (typeof process !== 'undefined' && path.match(/^\/[a-zA-Z]:\//)) {
    path = path.replace(/^\/[a-zA-Z]:\//, '/');
  }

  let orig = path;

  // if (path.indexOf(base) === 0) path = path.substr(base.length);
  // if (base && orig === path) return;

  e.preventDefault();
  luyou.show(orig);
}

export function which(e = window.event) {
  return null === e.which ? e.button : e.which;
}

export function sameOrigin(href) {
  let origin = `${location.protocol}//${location.hostname}`;
  if (location.port) origin += `:${location.port}`;
  return (href && (0 === href.indexOf(origin)));
}
