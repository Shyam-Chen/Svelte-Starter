import { layout } from '../../components/layout';

// About
import template from './about.html';
import data from './about.json';

export const about = () => {
  page('/about', () => {
    layout('about', template(data));
    componentHandler.upgradeAllRegistered();
  });
};
