// Third party
import template from 'lodash-es/template';

// Components
import { query } from '../../utils';
import { layout, layoutZh } from '../../components/layout';

// Assets
import vanilla from '../../assets/images/vanilla.png';
import material from '../../assets/images/material.png';
import firebase from '../../assets/images/firebase.png';

// Home
import homeTpl from './home.html';
import homeStyl from './home.css';
import homeData from './home.json';
import homeDataZh from './home-zh.json';

// If you have different styles and pictures for different languages.
const imports = {
  'imports': {
    'style': homeStyl,
    'vanilla': vanilla,
    'material': material,
    'firebase': firebase
  }
};

/**
 * @example
 * query('#page').innerHTML = template(homeTpl, imports)(datas);
 */

export const common = (imports = null, datas = {}) => {
  query('#page').innerHTML = template(homeTpl, imports)(datas);
  componentHandler.upgradeAllRegistered();
};

export const loadHome = () => {
  query('#app').innerHTML = layout;
  query('#zh').onclick = () => { page.redirect('/zh/home'); };
  common(imports, homeData);
};

export const loadHomeZh = () => {
  query('#app').innerHTML = layoutZh;
  query('#en').onclick = () => { page.redirect('/en/home'); };
  common(imports, homeDataZh);
};
