const description = document.querySelector('meta[name=description]');
const keywords = document.querySelector('meta[name=keywords]');

/**
 * @deprecated
 */
export const site = (lang) => {
  document.documentElement.lang = lang;
  switch (lang) {
    case 'en':
      document.title = 'Vanilla';
      description.content = 'A single-page application boilerplate for Vanilla HTML/CSS/JS, Material, Firebase, Gulp, Rollup, PostCSS, and Babel.';
      keywords.content = 'Pure HTML, Pure CSS, Pure JavaScript, Functional Programming, Reactive Programming';
      break;
    case 'zh':
      document.title = '香草';
      description.content = 'Vanilla HTML/CSS/JS、Material、Firebase、Gulp、Rollup、PostCSS 和 Babel 的單頁應用程式底板。';
      keywords.content = '純 HTML, 純 CSS, 純 JavaScript, 函式型程式設計, 反應式程式設計';
      break;
  }
};
