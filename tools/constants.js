import { join } from 'path';

export const DEV_PORT = 3000;
export const TEST_PORT = 9876;
export const APP_BASE = '/';

export const SOURCE_ROOT = join(__dirname, '..', 'src');
export const DIST_ROOT = join(__dirname, '..', 'public');

export const ASSETS_ROOT = join(SOURCE_ROOT, 'assets');
