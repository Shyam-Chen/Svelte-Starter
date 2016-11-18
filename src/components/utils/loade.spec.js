describe('Load', () => {

  beforeEach(() => {
    jasmine.Ajax.install();
  });

  afterEach(() => {
    jasmine.Ajax.uninstall();
  });

  it('learning...', () => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      // ...
    };

    expect(true).toBe(true);
  });

});
