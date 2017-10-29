import crud, { INITIAL, store, component } from '../crud';

describe('CRUD', () => {
  it('should be defined', () => {
    expect(crud).toBeDefined();
    expect(INITIAL).toBeDefined();
    expect(store).toBeDefined();
    expect(component).toBeDefined();
  });
});
