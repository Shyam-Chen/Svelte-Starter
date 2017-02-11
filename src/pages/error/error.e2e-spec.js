describe('Error', () => {
  it('should be 404 page - 1', () => {
    browserGet('/foo');
    let el = webdriver.findElement(by.css('#app p:nth-child(1)'));
    expect(el.getText()).toEqual('404');
  });

  it('should be 404 page - 2', () => {
    browserGet('/bar');
    let el = webdriver.findElement(by.css('#app p:nth-child(1)'));
    expect(el.getText()).toEqual('404');
  });
});
