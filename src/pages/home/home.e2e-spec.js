describe('Home', () => {
  beforeEach(() => {
    browserGet('/');
  });

  it('getText toEqual', () => {
    let el = webdriver.findElement(by.css('#page h2.mdl-color-text--blue-900'));
    expect(el.getText()).toEqual('Home');
  });
});
