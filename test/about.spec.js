import puppeteer from 'puppeteer';

import { TEST_ENV, TEST_URL, CONFIG } from './env';

describe('About', () => {
  let server = null;
  let browser = null;
  let page = null;

  TEST_ENV === 'CI' && (server = require('./server'));

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
    await page.goto(`${TEST_URL}/about`);
  });

  it('should display title', async () => {
    const text = await page.$eval('h1.mdc-typography--display1.mdc-theme--primary', el => el.textContent);
    expect(text).toMatch('About');
  });
});
