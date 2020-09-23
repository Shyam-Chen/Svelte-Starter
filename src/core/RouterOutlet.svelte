<script>
  import { Router, Link, Route } from 'svelte-routing';

  import Home from '~/home/Home';
  import HelloWorld from '~/hello-world/HelloWorld';
  import Counter from '~/counter/Counter';
</script>

<Route path="">
  <Home />
</Route>

<Route path="hello-world" component={HelloWorld} />
<Route path="counter" component={Counter} />
