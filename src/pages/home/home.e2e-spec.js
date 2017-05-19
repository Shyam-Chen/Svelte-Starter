describe('Home', () => {
  beforeEach(() => {
    webdriver.get(browser.baseUrl);
  });

  it('getText toEqual', () => {
    const el = webdriver.findElement(by.css('header > h1'));
    expect(el.getText()).toEqual('Home');
  });
});
