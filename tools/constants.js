import { join } from 'path';

export const SITE_URL = 'https://web-go-demo.firebaseapp.com/';

export const INDEX_ENV = {
  APP_BASE: '/',
  GOOGLE_ANALYTICS: 'UA-84381641-2'
};

export const APP_ENV = {
  FIREBASE_CONFIG: {
    apiKey: 'AIzaSyDBA0yVS0JuIqGaoN9nafvPFxPSVgmxwnw',
    authDomain: 'web-go-demo.firebaseapp.com',
    databaseURL: 'https://web-go-demo.firebaseio.com',
    projectId: 'web-go-demo',
    storageBucket: 'web-go-demo.appspot.com',
    messagingSenderId: '584431831746'
  },
  SENTRY_URL: 'https://70484e0dda784a1081081ca9c8237792@sentry.io/236866'
};

export const DEV_PORT = 8000;
export const TEST_PORT = 8080;

export const PROXY_URL = 'http://localhost:3000/'

export const SOURCE_ROOT = join(__dirname, '../src');
export const DIST_ROOT = join(__dirname, '../public');

export const ASSETS_ROOT = join(SOURCE_ROOT, 'assets');
