import { layout } from '../../components/layout';

// Home
import template from './home.html';
// import style from './home.css';
import data from './home.json';

export const home = () => {
  page('/', () => {
    layout('home', template(data));
    componentHandler.upgradeAllRegistered();
  });
};
