import pathtoRegexp from 'path-to-regexp';

/**
 * Detect click event
 */

let clickEvent = ('undefined' !== typeof document) && document.ontouchstart ? 'touchstart' : 'click';

/**
 * To work properly with the URL
 * history.location generated polyfill in https://github.com/devote/HTML5-History-API
 */

let location = ('undefined' !== typeof window) && (window.history.location || window.location);

/**
 * Perform initial dispatch.
 */

let dispatch = true;

/**
 * Decode URL components (query string, pathname, hash).
 * Accommodates both regular percent encoding and x-www-form-urlencoded format.
 */

let decodeURLComponents = true;

/**
 * Base path.
 */

let base = '';

/**
 * Running flag.
 */

let running;

/**
 * HashBang option
 */

let hashbang = false;

/**
 * Previous context, for capturing
 * luyou exit events.
 */

let prevContext;

/**
 * Register `path` with callback `fn()`,
 * or route `path`, or redirection,
 * or `luyou.start()`.
 *
 *   luyou(fn);
 *   luyou('*', fn);
 *   luyou('/user/:id', load, user);
 *   luyou('/user/' + user.id, { some: 'thing' });
 *   luyou('/user/' + user.id);
 *   luyou('/from', '/to')
 *   luyou();
 *
 * @param {string|!Function|!Object} path
 * @param {Function=} fn
 * @api public
 */

export default function luyou(path, fn) {
  // <callback>
  if ('function' === typeof path) {
    return luyou('*', path);
  }

  // route <path> to <callback ...>
  if ('function' === typeof fn) {
    let route = new Route(/** @type {string} */ (path));
    for (let i = 1; i < arguments.length; ++i) {
      luyou.callbacks.push(route.middleware(arguments[i]));
    }
    // show <path> with [state]
  } else if ('string' === typeof path) {
    luyou['string' === typeof fn ? 'redirect' : 'show'](path, fn);
    // start [options]
  } else {
    luyou.start(path);
  }
}

/**
 * Callback functions.
 */

luyou.callbacks = [];
luyou.exits = [];

/**
 * Current path being processed
 * @type {string}
 */

luyou.current = '';

/**
 * Number of pages navigated to.
 * @type {number}
 *
 *     luyou.len == 0;
 *     luyou('/login');
 *     luyou.len == 1;
 */

luyou.len = 0;

/**
 * Get or set basepath to `path`.
 *
 * @param {string} path
 * @api public
 */

luyou.base = function(path) {
  if (0 === arguments.length) return base;
  base = path;
};

/**
 * Bind with the given `options`.
 *
 * Options:
 *
 *    - `click` bind to click events [true]
 *    - `popstate` bind to popstate [true]
 *    - `dispatch` perform initial dispatch [true]
 *
 * @param {Object} options
 * @api public
 */


luyou.start = function(options) {
  options = options || {};
  if (running) return;
  running = true;
  if (false === options.dispatch) dispatch = false;
  if (false === options.decodeURLComponents) decodeURLComponents = false;
  if (false !== options.popstate) window.addEventListener('popstate', onpopstate, false);
  if (false !== options.click) {
    document.addEventListener(clickEvent, onclick, false);
  }
  if (true === options.hashbang) hashbang = true;
  if (!dispatch) return;
  let url = (hashbang && ~location.hash.indexOf('#!')) ? location.hash.substr(2) + location.search : location.pathname + location.search + location.hash;
  luyou.replace(url, null, true, dispatch);
};

/**
 * Unbind click and popstate event handlers.
 *
 * @api public
 */

luyou.stop = function() {
  if (!running) return;
  luyou.current = '';
  luyou.len = 0;
  running = false;
  document.removeEventListener(clickEvent, onclick, false);
  window.removeEventListener('popstate', onpopstate, false);
};

/**
 * Show `path` with optional `state` object.
 *
 * @param {string} path
 * @param {Object=} state
 * @param {boolean=} dispatch
 * @param {boolean=} push
 * @return {!Context}
 * @api public
 */

luyou.show = function(path, state, dispatch, push) {
  let ctx = new Context(path, state);
  luyou.current = ctx.path;
  if (false !== dispatch) luyou.dispatch(ctx);
  if (false !== ctx.handled && false !== push) ctx.pushState();
  return ctx;
};

/**
 * Goes back in the history
 * Back should always let the current route push state and then go back.
 *
 * @param {string} path - fallback path to go back if no more history exists, if undefined defaults to luyou.base
 * @param {Object=} state
 * @api public
 */

luyou.back = function(path, state) {
  if (luyou.len > 0) {
    // this may need more testing to see if all browsers
    // wait for the next tick to go back in history
    history.back();
    luyou.len--;
  } else if (path) {
    setTimeout(function() {
      luyou.show(path, state);
    });
  }else{
    setTimeout(function() {
      luyou.show(base, state);
    });
  }
};


/**
 * Register route to redirect from one path to other
 * or just redirect to another route
 *
 * @param {string} from - if param 'to' is undefined redirects to 'from'
 * @param {string=} to
 * @api public
 */

luyou.redirect = function(from, to) {
  // Define route from a path to another
  if ('string' === typeof from && 'string' === typeof to) {
    luyou(from, function() {
      setTimeout(function() {
        luyou.replace(/** @type {!string} */ (to));
      }, 0);
    });
  }

  // Wait for the push state and replace it with another
  if ('string' === typeof from && 'undefined' === typeof to) {
    setTimeout(function() {
      luyou.replace(from);
    }, 0);
  }
};

/**
 * Replace `path` with optional `state` object.
 *
 * @param {string} path
 * @param {Object=} state
 * @param {boolean=} init
 * @param {boolean=} dispatch
 * @return {!Context}
 * @api public
 */


luyou.replace = function(path, state, init, dispatch) {
  let ctx = new Context(path, state);
  luyou.current = ctx.path;
  ctx.init = init;
  ctx.save(); // save before dispatching, which may redirect
  if (false !== dispatch) luyou.dispatch(ctx);
  return ctx;
};

/**
 * Dispatch the given `ctx`.
 *
 * @param {Context} ctx
 * @api private
 */

luyou.dispatch = function(ctx) {
  let prev = prevContext,
    i = 0,
    j = 0;

  prevContext = ctx;

  function nextExit() {
    let fn = luyou.exits[j++];
    if (!fn) return nextEnter();
    fn(prev, nextExit);
  }

  function nextEnter() {
    let fn = luyou.callbacks[i++];

    if (ctx.path !== luyou.current) {
      ctx.handled = false;
      return;
    }
    if (!fn) return unhandled(ctx);
    fn(ctx, nextEnter);
  }

  if (prev) {
    nextExit();
  } else {
    nextEnter();
  }
};

/**
 * Unhandled `ctx`. When it's not the initial
 * popstate then redirect. If you wish to handle
 * 404s on your own use `luyou('*', callback)`.
 *
 * @param {Context} ctx
 * @api private
 */

function unhandled(ctx) {
  if (ctx.handled) return;
  let current;

  if (hashbang) {
    current = base + location.hash.replace('#!', '');
  } else {
    current = location.pathname + location.search;
  }

  if (current === ctx.canonicalPath) return;
  luyou.stop();
  ctx.handled = false;
  location.href = ctx.canonicalPath;
}

/**
 * Register an exit route on `path` with
 * callback `fn()`, which will be called
 * on the previous context when a new
 * luyou is visited.
 */

luyou.exit = function(path) {
  if (typeof path === 'function') {
    return luyou.exit('*', path);
  }

  let route = new Route(path);
  for (let i = 1; i < arguments.length; ++i) {
    luyou.exits.push(route.middleware(arguments[i]));
  }
};

/**
 * Remove URL encoding from the given `str`.
 * Accommodates whitespace in both x-www-form-urlencoded
 * and regular percent-encoded form.
 *
 * @param {string} val - URL component to decode
 */

function decodeURLEncodedURIComponent(val) {
  if (typeof val !== 'string') { return val; }
  return decodeURLComponents ? decodeURIComponent(val.replace(/\+/g, ' ')) : val;
}

/**
 * Initialize a new "request" `Context`
 * with the given `path` and optional initial `state`.
 *
 * @constructor
 * @param {string} path
 * @param {Object=} state
 * @api public
 */

function Context(path, state) {
  if ('/' === path[0] && 0 !== path.indexOf(base)) path = base + (hashbang ? '#!' : '') + path;
  let i = path.indexOf('?');

  this.canonicalPath = path;
  this.path = path.replace(base, '') || '/';
  if (hashbang) this.path = this.path.replace('#!', '') || '/';

  this.title = document.title;
  this.state = state || {};
  this.state.path = path;
  this.querystring = ~i ? decodeURLEncodedURIComponent(path.slice(i + 1)) : '';
  this.pathname = decodeURLEncodedURIComponent(~i ? path.slice(0, i) : path);
  this.params = {};

  // fragment
  this.hash = '';
  if (!hashbang) {
    if (!~this.path.indexOf('#')) return;
    let parts = this.path.split('#');
    this.path = parts[0];
    this.hash = decodeURLEncodedURIComponent(parts[1]) || '';
    this.querystring = this.querystring.split('#')[0];
  }
}

/**
 * Expose `Context`.
 */

luyou.Context = Context;

/**
 * Push state.
 *
 * @api private
 */

Context.prototype.pushState = function() {
  luyou.len++;
  // history.pushState(this.state, this.title, hashbang && this.path !== '/' ? '#!' + this.path : this.canonicalPath);
  history.pushState(this.state, this.title, hashbang && this.path !== '/' ? `#!${this.path}` : this.canonicalPath);
};

/**
 * Save the context state.
 *
 * @api public
 */

Context.prototype.save = function() {
  // history.replaceState(this.state, this.title, hashbang && this.path !== '/' ? '#!' + this.path : this.canonicalPath);
  history.replaceState(this.state, this.title, hashbang && this.path !== '/' ? `#!${this.path}` : this.canonicalPath);
};

/**
 * Initialize `Route` with the given HTTP `path`,
 * and an array of `callbacks` and `options`.
 *
 * Options:
 *
 *   - `sensitive`    enable case-sensitive routes
 *   - `strict`       enable strict matching for trailing slashes
 *
 * @constructor
 * @param {string} path
 * @param {Object=} options
 * @api private
 */

function Route(path, options) {
  options = options || {};
  this.path = (path === '*') ? '(.*)' : path;
  this.method = 'GET';
  this.regexp = pathtoRegexp(this.path, this.keys = [], options);
}

/**
 * Expose `Route`.
 */

luyou.Route = Route;

/**
 * Return route middleware with
 * the given callback `fn()`.
 *
 * @param {Function} fn
 * @return {Function}
 * @api public
 */

Route.prototype.middleware = function(fn) {
  let self = this;
  return function(ctx, next) {
    if (self.match(ctx.path, ctx.params)) return fn(ctx, next);
    next();
  };
};

/**
 * Check if this route matches `path`, if so
 * populate `params`.
 *
 * @param {string} path
 * @param {Object} params
 * @return {boolean}
 * @api private
 */

Route.prototype.match = function(path, params) {
  let keys = this.keys,
    qsIndex = path.indexOf('?'),
    pathname = ~qsIndex ? path.slice(0, qsIndex) : path,
    m = this.regexp.exec(decodeURIComponent(pathname));

  if (!m) return false;

  for (let i = 1, len = m.length; i < len; ++i) {
    let key = keys[i - 1];
    let val = decodeURLEncodedURIComponent(m[i]);
    if (val !== undefined || !(hasOwnProperty.call(params, key.name))) {
      params[key.name] = val;
    }
  }

  return true;
};


/**
 * Handle "populate" events.
 */

let onpopstate = (function () {
  let loaded = false;
  if ('undefined' === typeof window) {
    return;
  }
  if (document.readyState === 'complete') {
    loaded = true;
  } else {
    window.addEventListener('load', () => {
      setTimeout(() => {
        loaded = true;
      }, 0);
    });
  }
  return function onpopstate(e) {
    if (!loaded) return;
    if (e.state) {
      let path = e.state.path;
      luyou.replace(path, e.state);
    } else {
      luyou.show(location.pathname + location.hash, undefined, undefined, false);
    }
  };
})();

/**
 * Handle "click" events.
 */

function onclick(e) {
  if (1 !== which(e)) return;

  if (e.metaKey || e.ctrlKey || e.shiftKey) return;
  if (e.defaultPrevented) return;

  // ensure link
  // use shadow dom when available
  let el = e.path ? e.path[0] : e.target;
  while (el && 'A' !== el.nodeName) el = el.parentNode;
  if (!el || 'A' !== el.nodeName) return;

  // Ignore if tag has
  // 1. "download" attribute
  // 2. rel="external" attribute
  if (el.hasAttribute('download') || el.getAttribute('rel') === 'external') return;

  // ensure non-hash for the same path
  let link = el.getAttribute('href');
  if (!hashbang && el.pathname === location.pathname && (el.hash || '#' === link)) return;

  // Check for mailto: in the href
  if (link && link.indexOf('mailto:') > -1) return;

  // check target
  if (el.target) return;

  // x-origin
  if (!sameOrigin(el.href)) return;

  // rebuild path
  let path = el.pathname + el.search + (el.hash || '');

  // strip leading "/[drive letter]:" on NW.js on Windows
  if (typeof process !== 'undefined' && path.match(/^\/[a-zA-Z]:\//)) {
    path = path.replace(/^\/[a-zA-Z]:\//, '/');
  }

  // same luyou
  let orig = path;

  if (path.indexOf(base) === 0) path = path.substr(base.length);

  if (hashbang) path = path.replace('#!', '');

  if (base && orig === path) return;

  e.preventDefault();
  luyou.show(orig);
}

/**
 * Event button.
 */

function which(e) {
  e = e || window.event;
  return null === e.which ? e.button : e.which;
}

/**
 * Check if `href` is the same origin.
 */

function sameOrigin(href) {
  let origin = `${location.protocol}//${location.hostname}`;
  if (location.port) origin += `:${location.port}`;
  return (href && (0 === href.indexOf(origin)));
}

luyou.sameOrigin = sameOrigin;
