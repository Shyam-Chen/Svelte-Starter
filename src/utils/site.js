export const site = (lang) => {
  document.documentElement.lang = lang;

  switch (lang) {
    case 'zh':
      document.title = '香草';
      document.querySelector('meta[name=description]').content = 'Vanilla HTML/CSS/JS、Material、Firebase、Gulp、Rollup、PostCSS 和 Babel 的單頁應用程式底板。';
      break;
    default:
      document.title = 'Vanilla';
      document.querySelector('meta[name=description]').content = 'A single-page application boilerplate for Vanilla HTML/CSS/JS, Material, Firebase, Gulp, Rollup, PostCSS, and Babel.';
  }
};
