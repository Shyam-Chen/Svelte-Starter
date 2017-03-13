// Third party
import { template } from 'lodash';

// Components
import { layout } from '../../components/layout';

// Assets
import vanilla from '../../assets/images/vanilla.png';

// Home
import tpl from './home.html';
import style from './home.css';
import data from './home.json';

export const home = () => {
  page('/', () => {
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
