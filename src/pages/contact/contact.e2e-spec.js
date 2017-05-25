describe('Contact', () => {
  beforeEach(() => {
    webdriver.get(`${browser.baseUrl}/contact`);
  });

  it('getText toEqual', () => {
    const el = webdriver.findElement(by.css('h1.mdc-typography--display1'));
    expect(el.getText()).toEqual('Contact');
  });
});
