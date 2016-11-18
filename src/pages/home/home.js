// Third party
import template from 'lodash-es/template';

// Components and Assets
import { query } from '../../components/utils';
import { layout } from '../../components/layout';
import vanilla from '../../assets/images/vanilla.png';

// Home Page
import homeTpl from './home.html';
import homeStyl from './home.css';

export const tplOpts = {
  // html
  HOME: 'Home Page',
  vanilla: {
    src: vanilla.src,
    alt: 'Vanilla'
  },
  // css
  style: {
    test: homeStyl.test,
    title: homeStyl.title
  }
};

export const loadHome = () => {
  query('#app').innerHTML = layout;
  query('#page').innerHTML = template(homeTpl)(tplOpts);
  componentHandler.upgradeAllRegistered();
};
