import pathtoRegexp from 'path-to-regexp';

import { decodeURLEncodedURIComponent } from './functions';

export class Context {
  constructor(path, state) {
    let base = '';
    if ('/' === path[0] && 0 !== path.indexOf(base)) path = base + path;
    let i = path.indexOf('?');

    this.canonicalPath = path;
    this.path = path.replace(base, '') || '/';

    this.title = document.title;
    this.state = state || {};
    this.state.path = path;
    this.querystring = ~i ? decodeURLEncodedURIComponent(path.slice(i + 1)) : '';
    this.pathname = decodeURLEncodedURIComponent(~i ? path.slice(0, i) : path);
    this.params = {};
    this.routelen = 0;
  }

  pushState() {
    this.routelen++;
    history.pushState(this.state, this.title, this.canonicalPath);
  }

  save() {
    history.replaceState(this.state, this.title, this.canonicalPath);
  }
}

export class Route {
  constructor(path, options = {}) {
    this.path = (path === '*') ? '(.*)' : path;
    this.method = 'GET';
    this.regexp = pathtoRegexp(this.path, this.keys = [], options);
  }

  middleware(fn) {
    const self = this;
    return (ctx, next) => {
      if (self.match(ctx.path, ctx.params)) return fn(ctx, next);
      next();
    };
  }

  match(path, params) {
    const keys = this.keys;
    const qsIndex = path.indexOf('?');
    const pathname = ~qsIndex ? path.slice(0, qsIndex) : path;
    const m = this.regexp.exec(decodeURIComponent(pathname));

    if (!m) return false;

    for (let i = 1, len = m.length; i < len; ++i) {
      const key = keys[i - 1];
      const val = decodeURLEncodedURIComponent(m[i]);
      if (val !== undefined || !(hasOwnProperty.call(params, key.name))) {
        params[key.name] = val;
      }
    }

    return true;
  }
}
