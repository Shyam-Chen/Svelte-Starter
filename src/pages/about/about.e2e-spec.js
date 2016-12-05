describe('About', () => {

  beforeEach(() => {
    webdriver.get('http://localhost:9876/en/about');
  });

  it('getCurrentUrl toEqual', () => {
    expect(webdriver.getCurrentUrl()).toEqual('http://localhost:9876/en/about');
  });

  it('getText toEqual', () => {
    let el = webdriver.findElement(by.css('h2.mdl-color-text--blue-900'));
    expect(el.getText()).toEqual('About');
  });

});
