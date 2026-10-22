<script lang="ts">
	import ImagePlaceholder from '#lib/frontend/components/ui/ImagePlaceholder.svelte';
	const imgIcon4 = '/assets/b9233.svg';
	const imgIcon5 = '/assets/785e8.svg';
	const imgEllipse4 = '/assets/a52be.svg';
	const imgEllipse5 = '/assets/1fbf5.svg';
	const imgEllipse6 = '/assets/1a7b7.svg';
	const imgImage13 = '/assets/65755.svg';
</script>

<div
	class="relative flex w-full shrink-0 flex-col content-stretch items-center justify-center bg-white pt-[96px]"
	data-name="Category"
>
	<div
		class="relative flex w-full max-w-[1280px] shrink-0 flex-col content-stretch items-center gap-[32px] px-[32px]"
		data-name="Flex Vertical"
	>
		<div
			class="relative flex w-full shrink-0 content-stretch items-start gap-[32px] [word-break:break-word] text-[#0a0a0a]"
			data-name="Flex Horizontal"
		>
			<p
				class="relative min-w-px flex-[1_0_0] font-['Geist:Bold'] text-[30px] leading-[36px] font-bold"
			>
				Shop by Category
			</p>
			<p
				class="relative min-w-px flex-[1_0_0] text-right font-['Geist:Medium'] text-[18px] leading-[28px] font-medium"
			>
				View All
			</p>
		</div>
		<div
			class="relative flex w-full shrink-0 content-stretch items-start gap-[16px]"
			data-name="Flex Horizontal"
		>
			<div
				class="absolute top-1/2 left-[-16px] flex w-[1247px] -translate-y-1/2 content-stretch items-center justify-between"
				data-name="Arrow Icon"
			>
				<div class="relative flex shrink-0 items-center justify-center">
					<div class="flex-none -scale-y-100 rotate-180">
						<div class="relative size-[30px]" data-name="ICON">
							<img alt="" class="absolute inset-0 block size-full max-w-none" src={imgIcon4} />
						</div>
					</div>
				</div>
				<div class="relative size-[30px] shrink-0" data-name="ICON">
					<img alt="" class="absolute inset-0 block size-full max-w-none" src={imgIcon5} />
				</div>
			</div>
			<div
				class="relative flex min-w-px flex-[1_0_0] flex-col content-stretch items-center gap-[16px]"
				data-name="Flex Vertical"
			>
				<div
					class="relative inline-grid shrink-0 grid-cols-[max-content] grid-rows-[max-content] place-items-start leading-[0]"
					data-name="Image"
				>
					<div class="relative col-1 row-1 mt-0 ml-0 size-[124px]">
						<img alt="" class="absolute inset-0 block size-full max-w-none" src={imgEllipse4} />
					</div>
					<div
						class="relative col-1 row-1 mt-[14px] ml-[31px] h-[95px] w-[62px]"
						data-name="image 10"
					>
						<ImagePlaceholder class="absolute inset-0" variant="ghost" />
					</div>
				</div>
				<p
					class="relative w-[min-content] min-w-full shrink-0 text-center font-['Geist:Medium'] text-[18px] leading-[28px] font-medium [word-break:break-word] text-[#0a0a0a]"
				>
					Electronics
				</p>
			</div>
			<div
				class="relative flex min-w-px flex-[1_0_0] flex-col content-stretch items-center gap-[16px]"
				data-name="Flex Vertical"
			>
				<div
					class="relative inline-grid shrink-0 grid-cols-[max-content] grid-rows-[max-content] place-items-start leading-[0]"
					data-name="Image"
				>
					<div class="relative col-1 row-1 mt-0 ml-0 size-[124px]">
						<img alt="" class="absolute inset-0 block size-full max-w-none" src={imgEllipse5} />
					</div>
					<div class="relative col-1 row-1 mt-[11px] ml-[11.5px] size-[102px]" data-name="image 11">
						<ImagePlaceholder class="absolute inset-0" variant="ghost" />
					</div>
				</div>
				<p
					class="relative w-[min-content] min-w-full shrink-0 text-center font-['Geist:Medium'] text-[18px] leading-[28px] font-medium [word-break:break-word] text-[#0a0a0a]"
				>
					Beauty Products
				</p>
			</div>
			<div
				class="relative flex min-w-px flex-[1_0_0] flex-col content-stretch items-center gap-[16px]"
				data-name="Flex Vertical"
			>
				<div
					class="relative inline-grid shrink-0 grid-cols-[max-content] grid-rows-[max-content] place-items-start leading-[0]"
					data-name="Image"
				>
					<div class="relative col-1 row-1 mt-0 ml-0 size-[124px]">
						<img alt="" class="absolute inset-0 block size-full max-w-none" src={imgEllipse5} />
					</div>
					<div class="relative col-1 row-1 mt-[11px] ml-[11px] size-[102px]" data-name="image 12">
						<ImagePlaceholder class="absolute inset-0" variant="ghost" />
					</div>
				</div>
				<p
					class="relative w-[min-content] min-w-full shrink-0 text-center font-['Geist:Medium'] text-[18px] leading-[28px] font-medium [word-break:break-word] text-[#0a0a0a]"
				>
					Smart Watches
				</p>
			</div>
			<div
				class="relative flex min-w-px flex-[1_0_0] flex-col content-stretch items-center gap-[16px]"
				data-name="Flex Vertical"
			>
				<div
					class="relative inline-grid shrink-0 grid-cols-[max-content] grid-rows-[max-content] place-items-start leading-[0]"
					data-name="Image"
				>
					<div class="relative col-1 row-1 mt-0 ml-0 size-[124px]">
						<img alt="" class="absolute inset-0 block size-full max-w-none" src={imgEllipse6} />
					</div>
					<div
						class="relative col-1 row-1 mt-[5px] ml-[2.33px] inline-grid grid-cols-[max-content] grid-rows-[max-content] place-items-start"
						data-name="Mask group"
					>
						<div
							class="relative col-1 row-1 mt-[11px] ml-[4px] h-[116px] w-[109px] mask-intersect mask-alpha mask-size-[119px_119px] mask-no-clip mask-position-[-4px_-11px] mask-no-repeat"
							style="mask-image: url('{imgImage13}')"
							data-name="image 13"
						>
							<ImagePlaceholder class="absolute inset-0" variant="ghost" />
						</div>
					</div>
				</div>
				<p
					class="relative w-[min-content] min-w-full shrink-0 text-center font-['Geist:Medium'] text-[18px] leading-[28px] font-medium [word-break:break-word] text-[#0a0a0a]"
				>
					{` Home Decor`}
				</p>
			</div>
			<div
				class="relative flex min-w-px flex-[1_0_0] flex-col content-stretch items-center gap-[16px]"
				data-name="Flex Vertical"
			>
				<div
					class="relative inline-grid shrink-0 grid-cols-[max-content] grid-rows-[max-content] place-items-start leading-[0]"
					data-name="Image"
				>
					<div class="relative col-1 row-1 mt-0 ml-0 size-[124px]">
						<img alt="" class="absolute inset-0 block size-full max-w-none" src={imgEllipse5} />
					</div>
					<div
						class="relative col-1 row-1 mt-[8px] ml-[35px] h-[108px] w-[53px]"
						data-name="image 14"
					>
						<div class="pointer-events-none absolute inset-0 overflow-hidden">
							<ImagePlaceholder class="absolute inset-0" variant="ghost" />
						</div>
					</div>
				</div>
				<p
					class="relative w-[min-content] min-w-full shrink-0 text-center font-['Geist:Medium'] text-[18px] leading-[28px] font-medium [word-break:break-word] text-[#0a0a0a]"
				>
					Kitchen Appliances
				</p>
			</div>
			<div
				class="relative flex min-w-px flex-[1_0_0] flex-col content-stretch items-center gap-[16px]"
				data-name="Flex Vertical"
			>
				<div
					class="relative inline-grid shrink-0 grid-cols-[max-content] grid-rows-[max-content] place-items-start leading-[0]"
					data-name="Image"
				>
					<div class="relative col-1 row-1 mt-0 ml-0 size-[124px]">
						<img alt="" class="absolute inset-0 block size-full max-w-none" src={imgEllipse6} />
					</div>
					<div class="relative col-1 row-1 mt-[19px] ml-[19px] size-[85px]" data-name="image 15">
						<ImagePlaceholder class="absolute inset-0" variant="ghost" />
					</div>
				</div>
				<p
					class="relative w-[min-content] min-w-full shrink-0 text-center font-['Geist:Medium'] text-[18px] leading-[28px] font-medium [word-break:break-word] text-[#0a0a0a]"
				>
					{`Toys & Games`}
				</p>
			</div>
		</div>
	</div>
</div>
