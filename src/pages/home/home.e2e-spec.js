describe('Home', () => {
  beforeEach(() => {
    webdriver.get(browser.baseUrl);
  });

  it('getText toEqual', () => {
    const el = webdriver.findElement(by.css('h1.mdc-typography--display1'));
    expect(el.getText()).toEqual('Home');
  });
});
