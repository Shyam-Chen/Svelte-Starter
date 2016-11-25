import notFoundTpl from './404.html';

describe('404', () => {

  it('toMatch', () => {
    expect(notFoundTpl).toMatch(/<%= text %>/);
  });

});
