import { load } from './load';

describe('Load', () => {

  it('not toThrow', () => {
    expect(load).not.toThrow();
  });

  it('toBeDefined', () => {
    expect(load('../assets/datas/firebase.config.json')).toBeDefined();
  });

});
