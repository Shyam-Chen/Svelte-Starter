describe('Home', () => {

  it('O', () => {
    webdriver.get('http://localhost:9876/');
    expect(webdriver.findElement(by.css('.home')).getText()).toEqual('Home');
  });

});
