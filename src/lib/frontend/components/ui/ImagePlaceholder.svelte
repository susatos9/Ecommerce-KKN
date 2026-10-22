<script lang="ts">
	let {
		class: className = '',
		variant = 'light',
		label = ''
	}: { class?: string; variant?: 'light' | 'dark' | 'ghost'; label?: string } = $props();

	const tones = {
		light: { box: 'bg-black/5', icon: 'text-black/25' },
		dark: { box: 'bg-neutral-800', icon: 'text-white/40' },
		ghost: { box: '', icon: 'text-black/25' }
	};
</script>

<div
	class="flex flex-col items-center justify-center gap-[8px] {tones[variant].box} {className}"
	data-name="Image Placeholder"
	role="img"
	aria-label={label || 'Image placeholder'}
>
	<svg
		class="size-[28px] shrink-0 {tones[variant].icon}"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="1.5"
		aria-hidden="true"
	>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Z"
		/>
	</svg>
	{#if label}
		<span class="px-[8px] text-center text-[12px] leading-[16px] {tones[variant].icon}">
			{label}
		</span>
	{/if}
</div>
