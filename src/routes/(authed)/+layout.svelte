<script lang="ts">
	import '@unocss/reset/tailwind.css'
	import 'uno.css'
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';

	if (browser) {
		if (!localStorage.getItem('accessToken')) goto('/');

		// const expiresIn = localStorage.getItem('expiresIn');
		// if (expiresIn && new Date().toISOString() >= expiresIn) goto('/');
	}
</script>

<slot />
