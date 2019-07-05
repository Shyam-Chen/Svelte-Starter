<div>
  Clicked: <strong>{$count}</strong> times,
  value is <strong>{$count % 2 === 0 ? 'even' : 'odd'}</strong>.
</div>

<button on:click={count.increment}>+</button>
<button on:click={count.decrement}>-</button>
<button on:click={count.reset}>reset</button>

<script>
import { count } from './store.js';
</script>
