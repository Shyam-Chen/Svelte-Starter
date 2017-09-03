describe('Admin', () => {
  beforeEach(async () => {
    await browser.driver.get(`${browser.baseUrl}/admin`);
  });

  it('getText toEqual', () => {
    const el = browser.driver.findElement(by.css('#sign-out-content .mdc-typography--title'));
    expect(el.getText()).toEqual('Admin');
  });
});
