<script lang="ts">
	import { page } from '$app/state';
	import ProductGridBanner from '#lib/frontend/pages/ProductGridBanner.svelte';
	import ProductGridSidebar from '#lib/frontend/pages/ProductGridSidebar.svelte';
	import ProductListBanner from '#lib/frontend/pages/ProductListBanner.svelte';
	import ProductListSidebar from '#lib/frontend/pages/ProductListSidebar.svelte';

	const search = $derived(page.url.searchParams);
	const isList = $derived(search.get('view') === 'list');
	const hasSidebar = $derived(search.get('sidebar') === '1');
</script>

{#if isList && hasSidebar}
	<ProductListSidebar />
{:else if isList}
	<ProductListBanner />
{:else if hasSidebar}
	<ProductGridSidebar />
{:else}
	<ProductGridBanner />
{/if}
