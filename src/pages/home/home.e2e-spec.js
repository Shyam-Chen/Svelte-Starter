describe('Home', () => {
  beforeEach(() => {
    webdriver.get(browser.baseUrl);
  });

  it('getText toEqual', () => {
    const el = webdriver.findElement(by.css('#page h2.mdl-color-text--blue-900'));
    expect(el.getText()).toEqual('Home');
  });
});
