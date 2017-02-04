// Third party
import luyou from 'luyou';
import { template } from 'lodash-es';

// Components
import { layout } from '../../components/layout';

// Assets
import vanilla from '../../assets/images/vanilla.png';

// Home
import tpl from './home.html';
import style from './home.css';
import data from './home.json';

export const home = () => {
  luyou('/', () => {
    const content = template(tpl, { 'imports': {
      style,
      'image': {
        'vanilla': vanilla.src
      }
    } })(data);
    layout('home', content);
    componentHandler.upgradeAllRegistered();
  });
};
