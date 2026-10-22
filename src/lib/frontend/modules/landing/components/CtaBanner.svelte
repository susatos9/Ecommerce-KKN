<script lang="ts">
	import ImagePlaceholder from '#lib/frontend/components/ui/ImagePlaceholder.svelte';
	const imgRightIcon = '/assets/30a38.svg';
</script>

<div
	class="relative flex w-full shrink-0 flex-col content-stretch items-center justify-center bg-white"
	data-name="CTA"
>
	<div
		class="relative flex h-[400px] w-full max-w-[1280px] shrink-0 flex-col content-stretch items-start px-[32px]"
		data-name="Flex Vertrical"
	>
		<div
			class="relative flex h-[400px] w-full shrink-0 flex-col content-stretch items-center justify-center overflow-clip rounded-[8px]"
			data-name="Flex Vertrical"
		>
			<div class="absolute top-0 left-0 h-[400px] w-[1216px]" data-name="Background Image">
				<ImagePlaceholder variant="dark" class="absolute inset-0" />
			</div>
			<div
				class="absolute top-[210px] left-[461px] flex h-[190px] w-[755px] items-center justify-center"
			>
				<div class="flex-none -rotate-90">
					<div class="relative h-[755px] w-[190px] blur-[12px]" data-name="Layer Blur image">
						<div class="pointer-events-none absolute inset-0 overflow-hidden bg-white/10"></div>
					</div>
				</div>
			</div>
			<div class="absolute top-[-95px] left-[688px] h-[510px] w-[453px]" data-name="iphone image">
				<ImagePlaceholder class="absolute inset-0" label="iPhone" />
			</div>
			<div
				class="relative flex h-[400px] w-full max-w-[1280px] shrink-0 flex-col content-stretch items-start justify-center gap-[16px] pl-[40px]"
				data-name="Flex Horizontal"
			>
				<div
					class="relative flex w-full max-w-[605px] shrink-0 flex-col content-stretch items-start gap-[8px] [word-break:break-word] text-white"
					data-name="Flex Vertical"
				>
					<p
						class="relative w-full shrink-0 font-['Geist:Bold'] text-[48px] leading-[normal] font-bold"
					>
						iPhone Performance in an Elegant Purple Finish.
					</p>
					<p
						class="relative w-full shrink-0 font-['Geist:Regular'] text-[18px] leading-[28px] font-normal"
					>
						{`Enjoy stunning picture clarity, immersive sound, and smart features designed to elevate your everyday entertainment. `}
					</p>
				</div>
				<div
					class="relative flex shrink-0 content-stretch items-center justify-center gap-[6px] rounded-[10px] border border-solid border-[#e5e5e5] bg-white px-[16px] py-[8px]"
					data-name="Solid button"
				>
					<div
						class="relative flex shrink-0 flex-col justify-center font-['Geist:Medium'] text-[14px] leading-[0] font-medium [word-break:break-word] whitespace-nowrap text-[#0a0a0a]"
					>
						<p class="leading-[20px]">Shop Now</p>
					</div>
					<div class="relative size-[16px] shrink-0" data-name="Right icon">
						<img alt="" class="absolute inset-0 block size-full max-w-none" src={imgRightIcon} />
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
