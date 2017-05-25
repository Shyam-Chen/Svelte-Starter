describe('About', () => {
  beforeEach(() => {
    webdriver.get(`${browser.baseUrl}/about`);
  });

  it('Page title', () => {
    const el = webdriver.findElement(by.css('h1.mdc-typography--display1'));
    expect(el.getText()).toEqual('About');
  });

  it('Table head', () => {
    const el = webdriver.findElement(by.css('h3.mdc-typography--subheading1'));
    expect(el.getText()).toEqual('Frontend Starter Kit');
  });

  it('Table body', () => {
    const el = webdriver.findElement(by.css('li.mdc-list-item'));
    expect(el.getText()).toEqual('Client-side platform with HTML5.');
  });
});
