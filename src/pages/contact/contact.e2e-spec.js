describe('Contact', () => {
  beforeEach(() => {
    webdriver.get(`${browser.baseUrl}/contact`);
  });

  it('getText toEqual', () => {
    const el = webdriver.findElement(by.css('h2.mdl-color-text--blue-900'));
    expect(el.getText()).toEqual('Contact');
  });
});
