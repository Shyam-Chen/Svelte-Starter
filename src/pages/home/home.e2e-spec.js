describe('Home', () => {

  it('should add a todo', () => {
    dv.get('/');
    expect(dv.findElement(by.id('#home')).getText()).toEqual('Home');
  });

});
