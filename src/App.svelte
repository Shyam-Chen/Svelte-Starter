<script>
  import { Router, Link } from 'svelte-navigator';

  import RouterOutlet from '~/core/router/RouterOutlet';

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
