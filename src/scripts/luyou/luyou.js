import { clickEvent } from './constants';
import { onpopstate } from './popstate';
import { Context, Route } from './classes';
import { unhandled, onclick } from './functions';

let dispatch = true;
let base = '';
let running;
let prevContext;
let callbacks = [];
let exits = [];
let current = '';
let routelen = 0;

export default function luyou(path, fn) {
  if ('function' === typeof path) {
    return luyou('*', path);
  }

  if ('function' === typeof fn) {
    let route = new Route(path);
    for (let i = 1; i < arguments.length; ++i) {
      callbacks.push(route.middleware(arguments[i]));
    }
  } else if ('string' === typeof path) {
    luyou['string' === typeof fn ? 'redirect' : 'show'](path, fn);
  } else {
    luyou.start(path);
  }
}

luyou.base = (path) => {
  if (0 === arguments.length) return base;
  base = path;
};

luyou.start = (options = {}) => {
  if (running) return;
  running = true;
  if (false !== options.popstate) window.addEventListener('popstate', onpopstate, false);
  if (false !== options.click) document.addEventListener(clickEvent, onclick, false);
  if (!dispatch) return;
  let url = location.pathname + location.search;
  luyou.replace(url, null, true, dispatch);
};

luyou.stop = () => {
  if (!running) return;
  current = '';
  routelen = 0;
  running = false;
  document.removeEventListener(clickEvent, onclick, false);
  window.removeEventListener('popstate', onpopstate, false);
};

luyou.show = (path, state, dispatch, push) => {
  let ctx = new Context(path, state);
  current = ctx.path;
  if (false !== dispatch) luyou.dispatch(ctx);
  if (false !== ctx.handled && false !== push) ctx.pushState();
  return ctx;
};

luyou.back = (path, state) => {
  if (routelen > 0) {
    history.back();
    routelen--;
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

luyou.redirect = (from, to) => {
  if ('string' === typeof from && 'string' === typeof to) {
    luyou(from, () => {
      setTimeout(() => {
        luyou.replace(to);
      }, 0);
    });
  }

  if ('string' === typeof from && 'undefined' === typeof to) {
    setTimeout(() => {
      luyou.replace(from);
    }, 0);
  }
};

luyou.replace = (path, state, init, dispatch) => {
  let ctx = new Context(path, state);
  current = ctx.path;
  ctx.init = init;
  ctx.save();  // save before dispatching, which may redirect
  if (false !== dispatch) luyou.dispatch(ctx);
  return ctx;
};

luyou.dispatch = (ctx) => {
  let [prev, i, j] = [prevContext, 0, 0];

  prevContext = ctx;

  function nextExit() {
    let fn = exits[j++];
    if (!fn) return nextEnter();
    fn(prev, nextExit);
  }

  function nextEnter() {
    let fn = callbacks[i++];

    if (ctx.path !== current) {
      ctx.handled = false;
      return;
    }
    if (!fn) return unhandled(ctx);
    fn(ctx, nextEnter);
  }

  prev ? nextExit() : nextEnter();
};

luyou.exit = (path) => {
  if (typeof path === 'function') {
    return luyou.exit('*', path);
  }

  let route = new Route(path);
  for (let i = 1; i < arguments.length; ++i) {
    exits.push(route.middleware(arguments[i]));
  }
};
