<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		class: className = 'content-stretch flex items-start relative',
		children = null
	}: { class?: string; children?: Snippet | null } = $props();
</script>

<div class={className}>
	<div class="relative flex shrink-0 content-stretch items-center gap-[2px]" data-name="Items">
		{#if children}
			{@render children()}
		{:else}
			<div
				class="relative flex h-[32px] shrink-0 content-stretch items-center justify-center gap-[6px] rounded-[10px] pr-[10px] pl-[6px]"
				data-name="Ghost Button"
			>
				<div class="relative size-[16px] shrink-0" data-name="Left icon">
					<img alt="" class="absolute inset-0 block size-full max-w-none" src="/assets/ca51b.svg" />
				</div>
				<div
					class="relative flex shrink-0 flex-col justify-center font-['Geist:Medium'] text-[14px] leading-[0] font-medium [word-break:break-word] whitespace-nowrap text-[#0a0a0a]"
				>
					<p class="leading-[20px]">Previous</p>
				</div>
			</div>
			<div
				class="relative flex size-[32px] shrink-0 content-stretch items-center justify-center rounded-[10px]"
				data-name="Ghost Button"
			>
				<div
					class="relative flex shrink-0 flex-col justify-center font-['Geist:Medium'] text-[14px] leading-[0] font-medium [word-break:break-word] whitespace-nowrap text-[#0a0a0a]"
				>
					<p class="leading-[20px]">1</p>
				</div>
			</div>
			<div
				class="relative flex size-[32px] shrink-0 content-stretch items-center justify-center rounded-[10px] border border-solid border-[#e5e5e5] bg-white"
				data-name="Outline Button"
			>
				<div
					class="relative flex shrink-0 flex-col justify-center font-['Geist:Medium'] text-[14px] leading-[0] font-medium [word-break:break-word] whitespace-nowrap text-[#0a0a0a]"
				>
					<p class="leading-[20px]">2</p>
				</div>
			</div>
			<div
				class="relative flex size-[32px] shrink-0 content-stretch items-center justify-center rounded-[10px]"
				data-name="Ghost Button"
			>
				<div
					class="relative flex shrink-0 flex-col justify-center font-['Geist:Medium'] text-[14px] leading-[0] font-medium [word-break:break-word] whitespace-nowrap text-[#0a0a0a]"
				>
					<p class="leading-[20px]">3</p>
				</div>
			</div>
			<div
				class="relative flex size-[32px] shrink-0 content-stretch items-center justify-center rounded-[10px]"
				data-name="Ghost Button"
			>
				<div class="relative size-[16px] shrink-0" data-name="ellipsis">
					<img alt="" class="absolute inset-0 block size-full max-w-none" src="/assets/5c61b.svg" />
				</div>
			</div>
			<div
				class="relative flex h-[32px] shrink-0 content-stretch items-center justify-center gap-[6px] rounded-[10px] pr-[6px] pl-[10px]"
				data-name="Ghost Button"
			>
				<div
					class="relative flex shrink-0 flex-col justify-center font-['Geist:Medium'] text-[14px] leading-[0] font-medium [word-break:break-word] whitespace-nowrap text-[#0a0a0a]"
				>
					<p class="leading-[20px]">Next</p>
				</div>
				<div class="relative size-[16px] shrink-0" data-name="Left icon">
					<img alt="" class="absolute inset-0 block size-full max-w-none" src="/assets/6b5ef.svg" />
				</div>
			</div>
		{/if}
	</div>
</div>
