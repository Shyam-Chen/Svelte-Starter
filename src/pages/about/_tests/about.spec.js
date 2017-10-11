import { template as _ } from 'lodash';

import { layout } from '~/shared/layout';

import { about } from '../about';
import template from '../about.html';
import style from '../about.css';
import data from '../_languages/about.json';

describe('About', () => {
  it('should be defined', () => {
    expect(about).toBeDefined();
  });

  it('should be a function', () => {
    expect(typeof about).toBe('function');
  });

  it('should be able to work', () => {
    const imports = { style };

    page('/about', () => {
      layout(_(template, { imports })(data), 'about');
    });
  });
});
