describe('Home', () => {

  beforeEach(() => {
    webdriver.get('http://localhost:9876/');
  });

  it('getText toEqual', () => {
    let el = webdriver.findElement(by.css('#page p:nth-child(1)'));
    expect(el.getText()).toEqual('Home');
  });

});
