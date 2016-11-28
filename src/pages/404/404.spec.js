import template from 'lodash-es/template';

import notFoundTpl from './404.html';
import notFoundStyl from './404.css';

describe('404', () => {

  it('toMatch', () => {
    expect(notFoundTpl).toMatch(/<%= text %>/);
    expect(notFoundTpl).toMatch(/<%= style.text %>/);
  });

  it('toBeDefined', () => {
    const importsSpec = { 'imports': { 'style': notFoundStyl } };
    const datasSpec = { text: '404' };
    expect(template(notFoundTpl, importsSpec)(datasSpec)).toBeDefined();
  });

});
