<div>
  Clicked: <strong>{$count}</strong> times,
  value is <strong>{evenOrOdd}</strong>.
</div>

<button on:click={count.increment}>+</button>
<button on:click={count.decrement}>-</button>
<button on:click={count.reset}>reset</button>

<script>
import { count } from './store.js';

// the `$:` means 're-run whenever these values change'
$: evenOrOdd = $count % 2 === 0 ? 'even' : 'odd';
</script>
