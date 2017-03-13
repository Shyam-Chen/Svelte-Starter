import { template } from 'lodash';

import tpl from './error.html';
import style from './error.css';

describe('Error', () => {
  it('toMatch', () => {
    expect(tpl).toMatch(/<%= statusCode %>/);
    expect(tpl).toMatch(/<%= style.statusCode %>/);
    expect(tpl).toMatch(/<%= style.text %>/);
  });

  // no match
  it('toBeDefined', () => {
    const dummyElement = document.createElement('div');
    document.querySelector = jasmine.createSpy('HTML Element').and.returnValue(dummyElement);

    const importsSpec = { 'imports': { style } };
    const datasSpec = { statusCode: '404' };
    const load404Spec = () => {
      document.querySelector('#app').innerHTML = template(tpl, importsSpec)(datasSpec);
    };
    expect(template(tpl, importsSpec)(datasSpec)).toBeDefined();
    expect(load404Spec).toBeDefined();
  });
});
