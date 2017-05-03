describe('Error', () => {
  it('should be 404 page - 1', () => {
    webdriver.get(`${browser.baseUrl}/foo`);
    const el = webdriver.findElement(by.css('#app div:first-of-type'));
    expect(el.getText()).toEqual('404');
  });

  it('should be 404 page - 2', () => {
    webdriver.get(`${browser.baseUrl}/bar`);
    const el = webdriver.findElement(by.css('#app div:first-of-type'));
    expect(el.getText()).toEqual('404');
  });
});
