import { layout } from '../../components/layout';

import template from './about.html';
import data from './about.json';

export const about = () => {
  page('/about', () => {
    layout(template(data));
    componentHandler.upgradeAllRegistered();
  });
};
