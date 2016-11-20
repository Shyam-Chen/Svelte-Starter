describe('About', () => {

  beforeEach(() => {
    webdriver.get('http://localhost:9876/about');
  });

  it('getCurrentUrl toMatch', () => {
    expect(webdriver.getCurrentUrl()).toMatch('/about');
  });

  // it('getText toEqual', () => {
  //   let el = webdriver.findElement(by.css('#page p:nth-child(1)'));
  //   expect(el.getText()).toEqual('About');
  // });

});
