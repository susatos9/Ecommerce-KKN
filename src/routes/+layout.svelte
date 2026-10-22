<script lang="ts">
	import './layout.css';
	import favicon from '#lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<div class="commerce-app min-h-screen w-full">
	{@render children()}
</div>
