describe('Home', () => {

  it('O', () => {
    dv.get('http://localhost:4000/');
    expect(dv.findElement(by.css('.home')).getText()).toEqual('Home');
  });

});
