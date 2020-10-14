import { render } from 'svelte-testing-library';

import HelloWorld from '../HelloWorld';

describe('HelloWorld', () => {
  it('should render an initial component', () => {
    const { getByText } = render(HelloWorld);
    expect(getByText('Hello, World!'));
  });
});
