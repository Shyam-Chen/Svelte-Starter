<script>
import Router from 'svelte-spa-router';
import { ChunkGenerator } from 'svelte-spa-chunk';
import ChunkComponent from 'svelte-spa-chunk/Chunk';

import Home from '~/home/Home';

const Chunk = ChunkGenerator(ChunkComponent);

const routes = {
  '/': Home,
  '/hello-world': Chunk(()=> import('~/hello-world/HelloWorld')),
  '/counter': Chunk(()=> import('~/counter/Counter')),
  '*': Home,
};
</script>

<Router {routes} />
