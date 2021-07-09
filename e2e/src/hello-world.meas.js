import { Mockiavelli } from 'mockiavelli';
import responses from 'responses/hello-world';

describe('Hello World', () => {
  let [context, page, mockiavelli] = [];

  beforeAll(async () => {
    context = await global.browser.newContext();
    page = await context.newPage();
    mockiavelli = await Mockiavelli.setup(page);

    mockiavelli.mockPOST(`${global.API_URL}/hello-world`, {
      status: 200,
      body: responses.postHelloWorld,
    });

    await page.goto(`${global.SITE_URL}/`);
    await page.waitForLoadState('networkidle');
  });

  it('should get a performance audit', async () => {
    const lhr = await global.audit(`${global.SITE_URL}/`);
    const score = await global.result(lhr, 'performance');
    expect(score).toBeGreaterThanOrEqual(90);
  });
});
