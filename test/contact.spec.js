import puppeteer from 'puppeteer';
// import faker from 'faker';

import { TEST_ENV, TEST_URL, CONFIG } from './env';
import server from './server';

describe('Contact', () => {
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
    await page.goto(`${TEST_URL}/contact`);
  });

  it('should display title', async () => {
    const text = await page.$eval('h1.mdc-typography--display1.mdc-theme--primary', el => el.textContent);
    expect(text).toMatch('Contact');
  });

  // it('nice', async () => {
  //   const name = await page.$('#name');
  //   console.log(name);
  // });
});
