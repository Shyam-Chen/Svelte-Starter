// Third party
import template from 'lodash-es/template';

// Components and Assets
import { query } from '../../components/utils';
import { layout } from '../../components/layout';
import vanilla from '../../assets/images/vanilla.png';
import material from '../../assets/images/material.png';

// Home
import homeTpl from './home.html';
import homeStyl from './home.css';
import homeData from './home.json';
import homeDataZh from './home-zh.json';

export const loadHome = () => {
  query('#app').innerHTML = layout;
  query('#page').innerHTML = template(homeTpl, {
    'imports': {
      'style': homeStyl,
      'vanilla': vanilla,
      'material': material
    }
  })(homeData);
  componentHandler.upgradeAllRegistered();
};

export const loadHomeZh = () => {
  query('#app').innerHTML = layout;
  query('#page').innerHTML = template(homeTpl, {
    'imports': {
      'style': homeStyl,
      'vanilla': vanilla,
      'material': material
    }
  })(homeDataZh);
  componentHandler.upgradeAllRegistered();
};
