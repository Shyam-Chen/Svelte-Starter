import { about } from './about';

import template from './about.html';
import data from './about.json';

import { layout } from '../../components/layout';

describe('About', () => {
  it('toBeDefined', () => {
    expect(about).toBeDefined();
  });

  it('toBe', () => {
    expect(typeof about).toBe('function');
  });

  it('test', () => {
    page('/about', () => {
      layout('about', template(data));
      componentHandler.upgradeAllRegistered();
    });
  });
});
