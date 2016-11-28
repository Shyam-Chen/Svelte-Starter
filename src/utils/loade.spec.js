import { load } from './load';

describe('Load', () => {

  it('not toThrow', () => {
    expect(load).not.toThrow();
  });

  it('not toBeUndefined', () => {
    expect(load('../assets/datas/firebase.config.json')).not.toBeUndefined();
  });

});
