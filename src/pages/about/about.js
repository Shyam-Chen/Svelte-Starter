// Third party
import { template } from 'lodash-es';

// Components
import { layout } from '../../components/layout';

// About
import tpl from './about.html';
import style from './about.css';
import data from './about.json';

export const about = () => {
  page('/about', () => {
    layout('about', template(tpl, { 'imports': { style } })(data));
    componentHandler.upgradeAllRegistered();
  });
};
