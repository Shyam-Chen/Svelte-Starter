import puppeteer from 'puppeteer';

import server from './';

describe('About', () => {
  let page = null;
  let browser = null;

  beforeAll(async () => {
    const width = 1280;
    const height = 800;

    const launch = {
      headless: false,
      slowMo: 80,
      args: [`--window-size=${width},${height}`, '--no-sandbox']
    };

    await server;
    browser = await puppeteer.launch(launch);
    page = await browser.newPage();
    await page.setViewport({ width, height });
  });

  afterAll(async () => {
    await browser.close();
    await server.close();
  });

  beforeEach(async () => {
    await page.goto('http://localhost:3000/about');
  });

  it('should display title', async () => {
    const text = await page.$eval('h1.mdc-typography--display1.mdc-theme--primary', el => el.textContent);
    expect(text).toMatch('About');
  });
});
