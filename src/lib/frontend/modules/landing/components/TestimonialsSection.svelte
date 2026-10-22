<script lang="ts">
	import ImagePlaceholder from '#lib/frontend/components/ui/ImagePlaceholder.svelte';

	const imgLeftIcon5 = '/assets/d8cda.svg';
</script>

<div
	class="relative flex w-full shrink-0 flex-col content-stretch items-center justify-center gap-[32px] overflow-clip bg-white py-[96px]"
	data-name="Testimonials"
>
	<p
		class="relative w-[min-content] min-w-full shrink-0 text-center font-['Geist:Bold'] text-[30px] leading-[36px] font-bold [word-break:break-word] text-[#0a0a0a]"
	>
		Inspired by Our Community
	</p>
	<div
		class="relative flex w-[1600px] shrink-0 content-stretch items-center gap-[16px]"
		data-name="Flex Horizontal"
	>
		<div class="relative aspect-[240/240] min-w-px flex-[1_0_0] rounded-[8px]" data-name="Image 1">
			<ImagePlaceholder class="pointer-events-none absolute inset-0 rounded-[8px]" />
		</div>
		<div class="relative aspect-[240/240] min-w-px flex-[1_0_0] rounded-[8px]" data-name="Image 2">
			<ImagePlaceholder class="pointer-events-none absolute inset-0 rounded-[8px]" />
		</div>
		<div class="relative aspect-[240/240] min-w-px flex-[1_0_0] rounded-[8px]" data-name="Image 3">
			<ImagePlaceholder class="pointer-events-none absolute inset-0 rounded-[8px]" />
		</div>
		<div class="relative aspect-[240/240] min-w-px flex-[1_0_0] rounded-[8px]" data-name="Image 4">
			<ImagePlaceholder class="pointer-events-none absolute inset-0 rounded-[8px]" />
		</div>
		<div class="relative aspect-[240/240] min-w-px flex-[1_0_0] rounded-[8px]" data-name="Image 5">
			<ImagePlaceholder class="pointer-events-none absolute inset-0 rounded-[8px]" />
		</div>
		<div class="relative aspect-[240/240] min-w-px flex-[1_0_0] rounded-[8px]" data-name="Image 6">
			<ImagePlaceholder class="pointer-events-none absolute inset-0 rounded-[8px]" />
		</div>
	</div>
	<div
		class="relative flex shrink-0 content-stretch items-center justify-center gap-[6px] overflow-clip rounded-[10px] border border-solid border-[#e5e5e5] bg-white px-[16px] py-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]"
		data-name="Outline Button"
	>
		<div class="relative size-[16px] shrink-0" data-name="Left icon">
			<img alt="" class="absolute inset-0 block size-full max-w-none" src={imgLeftIcon5} />
		</div>
		<div
			class="relative flex shrink-0 flex-col justify-center font-['Geist:Medium'] text-[14px] leading-[0] font-medium [word-break:break-word] whitespace-nowrap text-[#0a0a0a]"
		>
			<p class="leading-[20px]">Follow Us @shopix</p>
		</div>
	</div>
</div>
