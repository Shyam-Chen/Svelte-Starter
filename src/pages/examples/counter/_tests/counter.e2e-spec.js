describe('Counter', () => {
  beforeEach(async () => {
    return await browser.driver.get(`${browser.baseUrl}/examples/counter`);
  });

  it('nice', () => {
    const el = browser.driver.findElement(by.css('p.mdc-typography--body1'));
    expect(el.getText()).toEqual('Clicked: 0 times, value is even.');
  });
});
