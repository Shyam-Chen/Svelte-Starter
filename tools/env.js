import { join } from 'path';

export const SITE_URL = process.env.SITE_URL || 'https://web-go-demo.firebaseapp.com';
export const FUNC_URL = process.env.FUNC_URL || 'https://us-central1-web-go-demo.cloudfunctions.net';

export const INDEX_ENV = {
  APP_BASE: process.env.APP_BASE || '/',
  GOOGLE_ANALYTICS: process.env.GOOGLE_ANALYTICS || 'UA-84381641-2'
};

export const APP_ENV = {
  FIREBASE_CONFIG: {
    apiKey: process.env.FIREBASE_KEY || 'AIzaSyDBA0yVS0JuIqGaoN9nafvPFxPSVgmxwnw',
    authDomain: process.env.FIREBASE_DOMAIN || 'web-go-demo.firebaseapp.com',
    databaseURL: process.env.FIREBASE_PROJECT || 'https://web-go-demo.firebaseio.com',
    projectId: process.env.FIREBASE_DATABASE || 'web-go-demo',
    storageBucket: process.env.FIREBASE_STORAGE || 'web-go-demo.appspot.com',
    messagingSenderId: process.env.FIREBASE_MESSAGING || '584431831746'
  },
  SENTRY_URL: process.env.SENTRY_URL || 'https://70484e0dda784a1081081ca9c8237792@sentry.io/236866',
  FUNC_URL
};

export const DEV_PORT = process.env.DEV_PORT || 8000;
export const TEST_PORT = process.env.TEST_PORT || 8080;

export const PROXY_URL = process.env.PROXY_URL || 'http://localhost:3000'

export const SOURCE_ROOT = join(__dirname, '../src');
export const DIST_ROOT = join(__dirname, '../public');

export const ASSETS_ROOT = join(SOURCE_ROOT, 'assets');
