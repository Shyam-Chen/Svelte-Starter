import luyou from './luyou';

export const onpopstate = (() => {
  let loaded = false;

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
      luyou.show(location.pathname, undefined, undefined, false);
    }
  };
})();
