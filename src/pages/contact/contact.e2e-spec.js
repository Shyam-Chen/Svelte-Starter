describe('Contact', () => {
  beforeEach(() => {
    webdriver.get(`${browser.baseUrl}/contact`);
  });

  it('getText toEqual', () => {
    const el = webdriver.findElement(by.css('header > h1'));
    expect(el.getText()).toEqual('Contact');
  });
});
