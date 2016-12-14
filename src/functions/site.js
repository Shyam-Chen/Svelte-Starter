const desc = document.querySelector('meta[name=description]');

export const site = (lang) => {
  document.documentElement.lang = lang;
  switch (lang) {
    case 'en':
      document.title = 'Vanilla';
      desc.content = 'A single-page application boilerplate for Vanilla HTML/CSS/JS, Material, Firebase, Gulp, Rollup, PostCSS, and Babel.';
      break;
    case 'zh':
      document.title = '香草';
      desc.content = 'Vanilla HTML/CSS/JS、Material、Firebase、Gulp、Rollup、PostCSS 和 Babel 的單頁應用程式底板。';
      break;
  }
};
