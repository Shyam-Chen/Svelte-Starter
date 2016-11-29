describe('404', () => {

  it('should be 404 page - 1', () => {
    webdriver.get('http://localhost:9876/foo');
    let el = webdriver.findElement(by.css('#app p:nth-child(1)'));
    expect(el.getText()).toEqual('404');
  });

  it('should be 404 page - 2', () => {
    webdriver.get('http://localhost:9876/bar');
    let el = webdriver.findElement(by.css('#app p:nth-child(1)'));
    expect(el.getText()).toEqual('404');
  });

});
