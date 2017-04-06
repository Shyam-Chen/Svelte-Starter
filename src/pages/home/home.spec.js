import { home } from './home';

import { layout } from '../../components/layout';

import template from './home.html';
import data from './home.json';

describe('Home', () => {
  it('toBeDefined', () => {
    expect(home).toBeDefined();
  });

  it('toBe', () => {
    expect(typeof home).toBe('function');
  });

  it('test', () => {
    page('/', () => {
      layout('home', template(data));
      componentHandler.upgradeAllRegistered();
    });
  });
});
