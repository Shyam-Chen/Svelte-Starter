import { join } from 'path';

export const DEV_PORT = process.env.DEV_PORT || 8000;
export const TEST_PORT = process.env.TEST_PORT || 8080;

export const SOURCE_ROOT = join(__dirname, '../src');
export const DIST_ROOT = join(__dirname, '../public');

export const ASSETS_ROOT = join(SOURCE_ROOT, 'assets');
