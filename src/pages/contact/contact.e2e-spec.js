describe('Contact', () => {
  beforeEach(async () => {
    await browser.driver.get(`${browser.baseUrl}/contact`);
  });

  it('getText toEqual', () => {
    const el = browser.driver.findElement(by.css('h1.mdc-typography--display1'));
    expect(el.getText()).toEqual('Contact');
  });
});
