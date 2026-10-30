<script lang="ts">
	import type { Snippet } from 'svelte';
	import SiteHeader from '#lib/frontend/components/SiteHeader.svelte';
	import SiteFooter from '#lib/frontend/components/SiteFooter.svelte';
	import ShopixLogo from './ShopixLogo.svelte';
	import * as Card from '#lib/frontend/components/ui/card/index.ts';
	import { cn } from '#lib/frontend/utils.ts';

	let {
		title,
		description,
		children,
		footer,
		icon,
		showLogo = true,
		class: className = ''
	}: {
		title: string;
		description: string;
		children: Snippet;
		footer?: Snippet;
		icon?: Snippet;
		showLogo?: boolean;
		class?: string;
	} = $props();
</script>

<div class={cn('flex min-h-screen w-full flex-col items-center bg-background', className)}>
	<SiteHeader />
	<main class="flex w-full flex-1 items-center justify-center bg-muted/40 px-4 py-12 sm:py-16">
		<Card.Root class="w-full max-w-md shadow-sm">
			<Card.Header class="items-center justify-items-center gap-4 text-center">
				{#if icon}
					{@render icon()}
				{/if}
				{#if showLogo}
					<ShopixLogo />
				{/if}
				<div class="grid w-full gap-1.5">
					<Card.Title class="text-2xl font-semibold tracking-tight">{title}</Card.Title>
					<Card.Description class="text-sm text-balance">{description}</Card.Description>
				</div>
			</Card.Header>
			<Card.Content>
				{@render children()}
			</Card.Content>
			{#if footer}
				<Card.Footer class="justify-center border-t bg-muted/30 py-4">
					{@render footer()}
				</Card.Footer>
			{/if}
		</Card.Root>
	</main>
	<SiteFooter />
</div>
