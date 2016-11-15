import { query, queryAll } from './query';

describe('Query', () => {

  it('not toThrow', () => {
    expect(query).not.toThrow();
    expect(queryAll).not.toThrow();
  });

  it('not toBeNull', () => {
    expect(query).not.toBeNull();
    expect(queryAll).not.toBeNull();
  });

});
