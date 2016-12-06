// Third party
import _template from 'lodash-es/template';

// Components
import { LAYOUT_EN, LAYOUT_ZH } from '../../components/layout';

// Utils
import { site } from '../../utils';

// Assets
import vanilla from '../../assets/images/vanilla.png';

// Main
import template from './home.html';
import style from './home.css';
import LANGS_EN from './langs/en.json';
import LANGS_ZH from './langs/zh.json';

export const HOME_EN = () => {
  site('en', 'Vanilla - Home', 'A single-page application boilerplate for Vanilla HTML/CSS/JS, Material, Firebase, Gulp, Rollup, PostCSS, and Babel.');
  document.querySelector('#app').innerHTML = LAYOUT_EN;
  // TODO: in layout
  document.querySelector('#zh').onclick = () => page.redirect('/zh/home');
  document.querySelector('#page').innerHTML = _template(template, {
    'imports': {
      style,
      'image': { 'vanilla': vanilla.src },
      'TODAY': new Intl.DateTimeFormat('en').format(new Date())
    }
  })(LANGS_EN);
  componentHandler.upgradeAllRegistered();
};

export const HOME_ZH = () => {
  site('zh', '香草 - 首頁', 'Vanilla HTML/CSS/JS、Material、Firebase、Gulp、Rollup、PostCSS 和 Babel 的單頁應用程式底板。');
  document.querySelector('#app').innerHTML = LAYOUT_ZH;
  document.querySelector('#en').onclick = () => page.redirect('/en/home');
  document.querySelector('#page').innerHTML = _template(template, {
    'imports': {
      style,
      'image': {
        'vanilla': vanilla.src
      },
      'TODAY': new Intl.DateTimeFormat('zh').format(new Date())
    }
  })(LANGS_ZH);
  componentHandler.upgradeAllRegistered();
};
