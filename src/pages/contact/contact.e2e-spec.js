describe('Contact', () => {
  beforeEach(() => {
    browserGet('/contact');
  });

  it('getText toEqual', () => {
    let el = webdriver.findElement(by.css('h2.mdl-color-text--blue-900'));
    expect(el.getText()).toEqual('Contact');
  });
});
