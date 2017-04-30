import { template as _ } from 'lodash';

import { layout } from '../../components/layout';

import template from './about.html';
import style from './about.css';
import data from './about.json';

import { about } from './about';

describe('About', () => {
  it('toBeDefined', () => {
    expect(about).toBeDefined();
  });

  it('toBe', () => {
    expect(typeof about).toBe('function');
  });

  it('test', () => {
    const imports = { style };

    page('/about', () => {
      layout(_(template, { imports })(data), 'about');
      componentHandler.upgradeAllRegistered();
    });
  });
});
