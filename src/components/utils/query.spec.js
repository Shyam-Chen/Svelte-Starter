import { query } from './query';

describe('Query', () => {

  it('O', () => {
    expect(query).not.toThrow();
  });

  it('OO', () => {
    expect(query).not.toBeNull();
  });

});
