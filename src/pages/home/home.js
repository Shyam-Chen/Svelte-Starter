import template from 'lodash-es/template';

import { query } from '../../components/utils';
import { layoutTpl } from '../../components/layout';

import home from './home.html';
import style from './home.css';
import vanilla from '../../assets/images/vanilla.png';

export const loadHome = () => {
  query('#app').innerHTML = layoutTpl;
  query('#page').innerHTML = template(home)({
    'HOME': 'Home Page',
    'FOO': style.foo,
    'style': {
      'test': style.test,
      'title': style.title
    }
  });
  query('#vanilla').appendChild(vanilla);
  componentHandler.upgradeAllRegistered();
};
