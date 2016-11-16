import template from 'lodash-es/template';

import { query } from '../../components/utils';
import { layout } from '../../components/layout';

import homeTpl from './home.html';
import homeStyl from './home.css';

import vanilla from '../../assets/images/vanilla.png';

export const loadHome = () => {
  query('#app').innerHTML = layout;
  query('#page').innerHTML = template(homeTpl)({
    HOME: 'Home Page',
    FOO: homeStyl.foo,
    style: {
      test: homeStyl.test,
      title: homeStyl.title
    },
    vanilla: {
      src: vanilla.src,
      alt: 'Vanilla'
    }
  });
  componentHandler.upgradeAllRegistered();
};
