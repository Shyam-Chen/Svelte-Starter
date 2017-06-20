describe('Not Found', () => {
  it('should be 404 page - 1', () => {
    browser.driver.get(`${browser.baseUrl}/foo`);
    const el = browser.driver.findElement(by.css('#app div:first-of-type'));
    expect(el.getText()).toEqual('404');
  });

  it('should be 404 page - 2', () => {
    browser.driver.get(`${browser.baseUrl}/bar`);
    const el = browser.driver.findElement(by.css('#app div:first-of-type'));
    expect(el.getText()).toEqual('404');
  });
});
