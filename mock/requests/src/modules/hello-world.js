import Router from '@koa/router';
import responses from 'responses/hello-world';

const router = new Router({ prefix: '' });

router.post('/hello-world', ctx => {
  ctx.status = 200;
  ctx.body = responses.postHelloWorld;
});

export default router;
