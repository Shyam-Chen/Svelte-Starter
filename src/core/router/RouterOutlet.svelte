<script>
  import { Route } from 'svelte-navigator';

  import Home from '~/shell/home/Home';

  import LazyRoute from './LazyRoute';

  const HelloWorld = () => import('~/shell/hello-world/HelloWorld');
  const Counter = () => import('~/shell/counter/Counter');
</script>

<Route path="">
  <Home />
</Route>

<LazyRoute path="hello-world" component={HelloWorld} delayMs={500}>
  <h4>Loading...</h4>
</LazyRoute>

<LazyRoute path="counter" component={Counter} delayMs={500}>
  <h4>Loading...</h4>
</LazyRoute>
