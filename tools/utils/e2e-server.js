import { resolve } from 'path';
import express from 'express';
import history from 'express-history-api-fallback';

export class Protractor {
  server(port, dir) {
    const app = express();
    const root = resolve(process.cwd(), dir);

    app.use(express.static(root));
    app.use(history('index.html', { root }));

    return new Promise(resolve => {
      const server = app.listen(port, () => {
        resolve(server);
      });
    });
  }
}
