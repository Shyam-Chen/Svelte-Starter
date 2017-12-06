import puppeteer from 'puppeteer';

describe('Home', () => {
  let server = null;
  let browser = null;
  let page = null;

  process.env.TEST === 'CI' && (server = require('./'));

  beforeAll(async () => {
    const width = 1280;
    const height = 800;

    const launch = {
      headless: false,
      slowMo: 80,
      args: [`--window-size=${width},${height}`, '--no-sandbox']
    };

    process.env.TEST === 'CI' && await server;
    browser = await puppeteer.launch(launch);
    page = await browser.newPage();
    await page.setViewport({ width, height });
  });

  afterAll(async () => {
    await browser.close();
    process.env.TEST === 'CI' && await server.close();
  });

  beforeEach(async () => {
    await page.goto('http://localhost:8000');
  });

  it('should display title', async () => {
    const text = await page.$eval('h1.mdc-typography--display1.mdc-theme--primary', el => el.textContent);
    expect(text).toMatch('Home');
  });
});
