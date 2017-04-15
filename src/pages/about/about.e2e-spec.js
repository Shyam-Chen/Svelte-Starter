describe('About', () => {
  beforeEach(() => {
    webdriver.get(`${browser.baseUrl}/about`);
  });

  it('Page title', () => {
    const el = webdriver.findElement(by.css('h2.mdl-color-text--blue-900'));
    expect(el.getText()).toEqual('About');
  });

  it('Table head', () => {
    const el = webdriver.findElement(by.css('th.mdl-data-table__cell--non-numeric'));
    expect(el.getText()).toEqual('This seed repository provides the following features:');
  });

  it('Table body', () => {
    const el = webdriver.findElement(by.css('td.mdl-data-table__cell--non-numeric:first-child'));
    expect(el.getText()).toEqual('1. Client-side platform with HTML5.');
  });
});
