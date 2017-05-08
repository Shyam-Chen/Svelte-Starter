import { template as _ } from 'lodash';

import { home } from './home';

import { layout } from '../../components/layout';
import webFundamentals from '../../assets/images/web-fundamentals.png';

import template from './home.html';
import style from './home.css';
import data from './home.json';

describe('Home', () => {
  it('should be defined', () => {
    expect(home).toBeDefined();
  });

  it('should be a function', () => {
    expect(typeof home).toBe('function');
  });

  it('should be able to work', () => {
    page('/', () => {
      const imports = { style, image: { webFundamentals } };
      layout(_(template, { imports })(data), 'home');
      componentHandler.upgradeAllRegistered();
    });
  });
});
