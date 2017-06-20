describe('Home', () => {
  beforeEach(() => {
    browser.driver.get(browser.baseUrl);
  });

  it('getText toEqual', () => {
    const el = browser.driver.findElement(by.css('h1.mdc-typography--display1'));
    expect(el.getText()).toEqual('Home');
  });
});
