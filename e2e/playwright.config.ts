import type { PlaywrightTestConfig } from '@playwright/test';

export default {
  use: {
    baseURL: 'http://localhost:5173',
  },
} as PlaywrightTestConfig;
