import { join } from 'path';

export const DEV_PORT = 3000;
export const TEST_PORT = 9876;

export const SOURCE_ROOT = join(__dirname, '..', 'src');
export const DIST_ROOT = join(__dirname, '..', 'public');

export const PAGES_ROOT = join(SOURCE_ROOT, 'pages');

export const COMPONENTS_ROOT = join(SOURCE_ROOT, 'components');

export const SCRIPTS_ROOT = join(SOURCE_ROOT, 'scripts');
export const STYLES_ROOT = join(SOURCE_ROOT, 'styles');
export const TEMPLATES_ROOT = join(SOURCE_ROOT, 'templates');

export const ASSETS_ROOT = join(SOURCE_ROOT, 'assets');
