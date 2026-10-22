<script lang="ts">
	let {
		class: className = '',
		shape = 'Rounded',
		size = 'md'
	}: { class?: string; shape?: 'Rounded' | 'Circle'; size?: 'md' | 'lg' } = $props();

	const isLgAndCircle = $derived(size === 'lg' && shape === 'Circle');
	const cls = $derived(
		className ||
			`border border-[#e5e5e5] border-solid overflow-clip relative ${isLgAndCircle ? 'rounded-[9999px] size-[40px]' : 'rounded-[10px] size-[32px]'}`
	);
</script>

<div class={cls}>
	<div class="absolute inset-[-1px]" data-name="pic">
		<img
			alt=""
			class="pointer-events-none absolute inset-0 size-full max-w-none object-cover"
			src="/assets/b75be.png"
		/>
	</div>
</div>
