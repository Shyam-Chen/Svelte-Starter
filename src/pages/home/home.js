import { layout } from '../../components/layout';

import template from './home.html';
import data from './home.json';

import counter from '../../containers/counter/counter';

export const home = () => {
  page('/', () => {
    layout('home', template(data));
    counter('ex');
    componentHandler.upgradeAllRegistered();
  });
};
