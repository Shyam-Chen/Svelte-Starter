<Link href="/">Home</Link>
<Link href="/hello-world">Hello World</Link>

<script>
import { Link, Router, Route } from 'svero';

import Home from '~/home/Home';
import HelloWorld from '~/hello-world/HelloWorld';
</script>

<Router>
  <Route path="/" component={Home} />
  <Route path="/hello-world" component={HelloWorld} />
</Router>
