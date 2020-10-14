<script>
  import { Router, Link, Route } from 'svelte-routing';

  import Home from '~/shell/home/Home';
  import HelloWorld from '~/shell/hello-world/HelloWorld';
  import Counter from '~/shell/counter/Counter';
</script>

<Route path="">
  <Home />
</Route>

<Route path="hello-world" component={HelloWorld} />
<Route path="counter" component={Counter} />
