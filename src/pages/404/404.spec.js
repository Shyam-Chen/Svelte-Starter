import template from 'lodash-es/template';

import notFoundTpl from './404.html';
import notFoundStyl from './404.css';

describe('404', () => {

  it('toMatch', () => {
    expect(notFoundTpl).toMatch(/<%= text %>/);
    expect(notFoundTpl).toMatch(/<%= style.text %>/);
  });

  it('toBeDefined', () => {
    const dummyElement = document.createElement('div');
    document.querySelector = jasmine.createSpy('HTML Element').and.returnValue(dummyElement);

    const importsSpec = { 'imports': { 'style': notFoundStyl } };
    const datasSpec = { text: '404' };
    const load404Spec = () => {
      document.querySelector('#app').innerHTML = template(notFoundTpl, importsSpec)(datasSpec);
    };
    expect(template(notFoundTpl, importsSpec)(datasSpec)).toBeDefined();
    expect(load404Spec).toBeDefined();
  });

});
