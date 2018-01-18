import puppeteer from 'puppeteer';

import { TEST_ENV, TEST_URL, CONFIG } from './env';
import server from './server';

describe('Not Found', () => {
  let [browser, page] = [];

  beforeAll(async () => {
    TEST_ENV === 'CI' && await server;
    browser = await puppeteer.launch(CONFIG.LAUNCG);
    page = await browser.newPage();
    await page.setViewport(CONFIG.VIEWPORT);
  });

  afterAll(async () => {
    await browser.close();
    TEST_ENV === 'CI' && await server.close();
  });

  beforeEach(async () => {
    await page.goto(`${TEST_URL}/xxx`);
  });

  it('should display title', async () => {
    const text = await page.$eval('#app div:first-of-type', el => el.textContent);
    expect(text).toMatch('404');
  });
});
