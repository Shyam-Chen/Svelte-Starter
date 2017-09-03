describe('About', () => {
  beforeEach(async () => {
    await browser.driver.get(`${browser.baseUrl}/about`);
  });

  it('Page title', () => {
    const el = browser.driver.findElement(by.css('h1.mdc-typography--display1'));
    expect(el.getText()).toEqual('About');
  });

  it('Table head', () => {
    const el = browser.driver.findElement(by.css('h3.mdc-typography--subheading1'));
    expect(el.getText()).toEqual('Essentials');
  });

  it('Table body', () => {
    const el = browser.driver.findElement(by.css('li.mdc-list-item'));
    expect(el.getText()).toEqual('User interface components with Material.');
  });
});
