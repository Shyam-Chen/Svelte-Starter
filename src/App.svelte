<script>
  import { Router, Link, Route } from 'svelte-routing';

  import RouterOutlet from '~/core/RouterOutlet';

  const basepath = '/';
</script>

<Router {basepath}>
  <nav>
    <Link to="">Home</Link>
    <Link to="hello-world">Hello World</Link>
    <Link to="counter">Counter</Link>
  </nav>

  <RouterOutlet />
</Router>
