export const TEST_ENV = process.env.TEST_ENV || null;
export const TEST_PORT = process.env.TEST_PORT || 8000;
export const TEST_URL = `http://localhost:${TEST_PORT}`;

export const CONFIG = (() => {
  const width = 1280;
  const height = 800;

  return {
    LAUNCG: {
      headless: false,
      slowMo: 80,
      args: [`--window-size=${width},${height}`, '--no-sandbox']
    },
    VIEWPORT: {
      width,
      height
    }
  };
})();
