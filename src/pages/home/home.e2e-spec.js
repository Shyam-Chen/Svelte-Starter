describe('Home', () => {

  beforeEach(() => {
    webdriver.get('http://localhost:9876/en/home');
  });

  it('getCurrentUrl toEqual', () => {
    expect(webdriver.getCurrentUrl()).toEqual('http://localhost:9876/en/home');
  });

  it('getText toEqual', () => {
    let el = webdriver.findElement(by.css('#page h2.mdl-color-text--blue-900'));
    expect(el.getText()).toEqual('Home');
  });

});
