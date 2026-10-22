<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		class: className = 'content-stretch flex gap-[10px] items-start relative',
		status = false,
		label = true,
		subLabel = false,
		src = '/assets/f64b2.svg',
		srcChecked = '/assets/402db.svg',
		children = null
	}: {
		class?: string;
		status?: boolean;
		label?: boolean;
		subLabel?: boolean;
		src?: string;
		srcChecked?: string;
		children?: Snippet | null;
	} = $props();
</script>

<div class={className}>
	<div class="relative size-[24px] shrink-0" data-name="Radio">
		<img
			alt=""
			class="absolute inset-0 block size-full max-w-none"
			src={status ? srcChecked : src}
		/>
	</div>
	{#if label}
		<div
			class="relative flex shrink-0 flex-col content-stretch items-start justify-center gap-[2px] self-stretch font-['Geist:Regular'] text-[14px] font-normal [word-break:break-word]"
			data-name="radio-container"
		>
			{#if children}
				{@render children()}
			{:else}
				<div
					class="relative flex h-[24px] w-full shrink-0 flex-col justify-center leading-[0] text-[#0a0a0a]"
				>
					<p class="leading-[20px]">Label</p>
				</div>
				{#if subLabel}
					<p class="relative h-[20px] w-full shrink-0 leading-[20px] text-[#737373]">Label</p>
				{/if}
			{/if}
		</div>
	{/if}
</div>
