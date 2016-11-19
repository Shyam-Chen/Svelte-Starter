describe('Home', () => {

  beforeEach(() => {
    webdriver.get('http://localhost:9876/');
  });

  it('getCurrentUrl toMatch', () => {
    expect(webdriver.getCurrentUrl()).toMatch('/');
  });

  // it('getText toEqual', () => {
  //   let el = webdriver.findElement(by.css('#page p:nth-child(1)'));
  //   expect(el.getText()).toEqual('Home');
  // });

});
