<script>
import { link } from 'svelte-spa-router';

import Router from '~/core/Router';
</script>

<ul>
  <li><a href="/" use:link>Home</a></li>
  <li><a href="/hello-world" use:link>Hello World</a></li>
  <li><a href="/counter" use:link>Counter</a></li>
</ul>

<Router />
