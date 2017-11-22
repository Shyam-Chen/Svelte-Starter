import { join } from 'path';

export const SITE_URL = 'https://web-go-demo.firebaseapp.com/';
export const APP_BASE = '/';

export const APP_ENV = {
  TITLE: 'Web GO',
  DESCRIPTION: '',
  BASE: '/',
  GOOGLE_ANALYTICS: 'UA-84381641-2',
  firebase: {
    apiKey: 'AIzaSyDBA0yVS0JuIqGaoN9nafvPFxPSVgmxwnw',
    authDomain: 'web-go-demo.firebaseapp.com',
    databaseURL: 'https://web-go-demo.firebaseio.com',
    projectId: 'web-go-demo',
    storageBucket: 'web-go-demo.appspot.com',
    messagingSenderId: '584431831746'
  },
  sentry: 'https://70484e0dda784a1081081ca9c8237792@sentry.io/236866'
};

export const DEV_PORT = 8000;
export const TEST_PORT = 8080;

export const SOURCE_ROOT = join(__dirname, '../src');
export const DIST_ROOT = join(__dirname, '../public');

export const ASSETS_ROOT = join(SOURCE_ROOT, 'assets');
