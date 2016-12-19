import template from 'lodash-es/template';

import tpl from './error.html';
import styl from './error.css';

describe('Error', () => {

  it('toMatch', () => {
    expect(tpl).toMatch(/<%= text %>/);
    expect(tpl).toMatch(/<%= style.text %>/);
  });

  it('toBeDefined', () => {
    const dummyElement = document.createElement('div');
    document.querySelector = jasmine.createSpy('HTML Element').and.returnValue(dummyElement);

    const importsSpec = { 'imports': { 'style': styl } };
    const datasSpec = { text: '404' };
    const load404Spec = () => {
      document.querySelector('#app').innerHTML = template(tpl, importsSpec)(datasSpec);
    };
    expect(template(tpl, importsSpec)(datasSpec)).toBeDefined();
    expect(load404Spec).toBeDefined();
  });

});
