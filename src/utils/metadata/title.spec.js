import { getTitle, setTitle } from './title';

describe('Title', () => {
  beforeEach(() => {
    Object.defineProperty(document, 'title', {
      writable: true,
      value: 'Web GO'
    });
  });

  it('getTitle', async () => {
    const value = await getTitle();
    expect(value).toBe('Web GO');
  });

  it('setTitle', async () => {
    await setTitle('Front-end');
    const value = await getTitle();
    expect(value).toBe('Front-end');
  });
});
