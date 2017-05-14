import { resolve } from 'path';
import express from 'express';
import fallback from 'express-history-api-fallback';

export class Protractor {
  server(port, dir) {
    const app = express();
    const root = resolve(process.cwd(), dir);

    app.use(express.static(root));
    app.use(fallback('index.html', { root }));

    return new Promise(resolve => {
      const server = app.listen(port, () => {
        resolve(server);
      });
    });
  }
}
