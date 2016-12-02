// Third party
import template from 'lodash-es/template';

// Components
import { LAYOUT_EN, LAYOUT_ZH } from '../../components/layout';

// Assets
import vanilla from '../../assets/images/vanilla.png';

// Home
import tpl from './home.html';
import style from './home.css';
import homeDataLangEn from './langs/en.json';
import homeDataLangZh from './langs/zh.json';


export const imports = {
  'imports': {
    style,
    'image': {
      'vanilla': vanilla.src
    }
  }
};

export const common = (imports = null, datas = {}) => {
  document.querySelector('#page').innerHTML = template(tpl, imports)(datas);
  componentHandler.upgradeAllRegistered();
};

export const HOME_EN = () => {
  document.querySelector('#app').innerHTML = LAYOUT_EN;
  document.querySelector('#zh').onclick = () => { page.redirect('/zh/home'); };
  imports.imports.TODAY = new Intl.DateTimeFormat('en').format(new Date());
  common(imports, homeDataLangEn);
};

export const HOME_ZH = () => {
  document.querySelector('#app').innerHTML = LAYOUT_ZH;
  document.querySelector('#en').onclick = () => { page.redirect('/en/home'); };
  imports.imports.TODAY = new Intl.DateTimeFormat('zh').format(new Date());
  common(imports, homeDataLangZh);
};
