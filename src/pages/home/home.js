// Third party
import _template from 'lodash-es/template';

// Components
import { LAYOUT_EN, LAYOUT_ZH } from '../../components/layout';

// Assets
import vanilla from '../../assets/images/vanilla.png';

// Home
import template from './home.html';
import style from './home.css';
import homeDataLangEn from './langs/en.json';
import homeDataLangZh from './langs/zh.json';

const imports = {
  'imports': {
    style,
    'image': {
      'vanilla': vanilla.src
    }
  }
};

const common = (imports = null, datas = {}) => {
  document.querySelector('#page').innerHTML = _template(template, imports)(datas);
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
