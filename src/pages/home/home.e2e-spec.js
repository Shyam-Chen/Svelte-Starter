describe('Home', function() {


  it('should add a todo', function() {

    dv.get('/');


    expect(dv.findElement(by.id('home')).getText()).toEqual('Home');

    });

});
