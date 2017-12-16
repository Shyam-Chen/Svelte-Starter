import crud, { INITIAL, store, render } from '../crud';

describe('CRUD', () => {
  it('should be defined', () => {
    expect(crud).toBeDefined();
    expect(INITIAL).toBeDefined();
    expect(store).toBeDefined();
    expect(render).toBeDefined();
  });
});
