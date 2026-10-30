<script lang="ts">
	import type { Snippet } from 'svelte';
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { Spinner } from '#lib/frontend/components/ui/spinner/index.ts';
	import { authClient } from '#frontend/modules/auth/index.ts';

	let { children }: { children: Snippet } = $props();

	const session = authClient.useSession();
	let redirecting = $state(false);

	$effect(() => {
		if ($session.isPending || $session.data || redirecting) return;

		redirecting = true;
		const target = `${page.url.pathname}${page.url.search}`;
		void goto(`/login?redirectTo=${encodeURIComponent(target)}`, { replaceState: true });
	});
</script>

{#if $session.data}
	{@render children()}
{:else}
	<div class="flex min-h-screen w-full items-center justify-center bg-background">
		<Spinner class="size-6" aria-label="Checking your session" />
	</div>
{/if}
