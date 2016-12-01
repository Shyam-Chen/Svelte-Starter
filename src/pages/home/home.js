// Third party
import template from 'lodash-es/template';

// Components
import { query } from '../../utils';
import { layoutEn, layoutZh } from '../../components/layout';

// Assets
import vanilla from '../../assets/images/vanilla.png';

// Home
import homeTpl from './home.html';
import homeStyl from './home.css';
import homeDataLangEn from './langs/en.json';
import homeDataLangZh from './langs/zh.json';

export const imports = {
  'imports': {
    'style': homeStyl,
    'image': {
      'vanilla': vanilla.src
    }
  }
};

export const common = (imports = null, datas = {}) => {
  query('#page').innerHTML = template(homeTpl, imports)(datas);
  componentHandler.upgradeAllRegistered();
};

export const loadHome = () => {
  query('#app').innerHTML = layoutEn;
  query('#zh').onclick = () => { page.redirect('/zh/home'); };
  common(imports, homeDataLangEn);
};

export const loadHomeZh = () => {
  query('#app').innerHTML = layoutZh;
  query('#en').onclick = () => { page.redirect('/en/home'); };
  common(imports, homeDataLangZh);
};
