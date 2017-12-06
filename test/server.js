import { join } from 'path';
import express from 'express';
import history from 'express-history-api-fallback';

import { TEST_PORT } from './env';

const app = express();
const root = join(__dirname, '../public');

app.use(express.static(root));
app.use(history('index.html', { root }));

const server = app.listen(TEST_PORT);

export default server;
