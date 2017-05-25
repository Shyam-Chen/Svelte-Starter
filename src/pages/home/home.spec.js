import { template as _ } from 'lodash';

import { home } from './home';

import { layout } from '../../components/layout';
import logo from '../../assets/images/logo.png';

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
      const imports = { style, image: { logo } };
      layout(_(template, { imports })(data), 'home');
    });
  });
});
