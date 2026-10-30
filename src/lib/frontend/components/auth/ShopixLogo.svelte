<script lang="ts">
	import { cn } from '#lib/frontend/utils.ts';

	let { class: className = '' }: { class?: string } = $props();

	const imgEllipse = '/assets/ec99f.svg';
	const imgMask = '/assets/9c2d9.svg';
	const imgMark = '/assets/0fe4b.svg';
</script>

<a
	href="/"
	aria-label="Shopix home"
	class={cn('inline-flex items-center gap-2', className)}
	data-name="Logo"
>
	<span class="relative inline-grid size-7 shrink-0 place-items-start leading-none">
		<img alt="" class="col-start-1 row-start-1 block size-full max-w-none" src={imgEllipse} />
		<span class="col-start-1 row-start-1 mt-[5px] ml-[4px] inline-grid place-items-start">
			<span
				class="relative block h-[23.917px] w-[20px] mask-intersect mask-alpha mask-size-[28px_28px] mask-no-clip mask-position-[-4px_-5px] mask-no-repeat"
				style="mask-image: url('{imgMask}')"
			>
				<img alt="" class="absolute inset-0 block size-full max-w-none" src={imgMark} />
			</span>
		</span>
	</span>
	<span
		class="pt-[2px] font-['Inter:Semi_Bold'] text-[20px] leading-[26px] font-semibold whitespace-nowrap text-foreground not-italic"
	>
		Shopix
	</span>
</a>
