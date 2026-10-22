<script lang="ts">
	import ImagePlaceholder from '#lib/frontend/components/ui/ImagePlaceholder.svelte';

	const imgRightIcon = '/assets/30a38.svg';
</script>

<div
	class="relative flex w-full max-w-[1440px] shrink-0 flex-col content-stretch items-center justify-center bg-white pt-[56px]"
	data-name="Hero"
>
	<div
		class="relative flex w-[1280px] max-w-[1280px] shrink-0 flex-col content-stretch items-start gap-[16px] px-[32px] lg:flex-row lg:items-start"
		data-name="Flex Horizontal"
	>
		<div
			class="relative flex w-full min-w-[135px] flex-auto flex-col content-stretch gap-[16px] self-stretch lg:w-auto lg:flex-[1_0_0] lg:flex-row lg:items-center"
			data-name="Flex Horizontal"
		>
			<div
				class="relative flex min-w-px flex-auto flex-col content-stretch items-start gap-[16px] overflow-clip rounded-[14px] bg-[#f5f5f5] py-[24px] lg:h-full lg:flex-[1_0_0]"
				data-name="Card"
			>
				<div
					class="relative flex w-full shrink-0 flex-col content-stretch items-start px-[24px]"
					data-name="card-body"
				>
					<div
						class="relative flex w-full shrink-0 flex-col content-stretch items-start gap-[16px]"
						data-name="Flex Vertical"
					>
						<div
							class="relative flex w-full shrink-0 flex-col content-stretch items-start gap-[8px] [word-break:break-word] text-[#0a0a0a]"
							data-name="Flex Vertical"
						>
							<p
								class="relative w-full shrink-0 font-['Geist:Bold'] text-[36px] leading-[40px] font-bold"
							>
								Macbook m4 pro
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
								<p class="leading-[20px]">Purchase Now</p>
							</div>
							<div class="relative size-[16px] shrink-0" data-name="Right icon">
								<img
									alt=""
									class="absolute inset-0 block size-full max-w-none"
									src={imgRightIcon}
								/>
							</div>
						</div>
					</div>
					<div
						class="relative mt-[8px] h-[240px] w-full shrink-0 lg:absolute lg:top-[239px] lg:left-[96px] lg:mt-0 lg:h-[282px] lg:w-[361px]"
						data-name="image"
					>
						<ImagePlaceholder class="absolute inset-0" label="Macbook m4 pro" />
					</div>
				</div>
			</div>
			<div
				class="relative flex min-w-px flex-auto flex-col content-stretch items-start gap-[16px] overflow-clip rounded-[14px] bg-[rgba(227,146,25,0.1)] py-[24px] lg:h-full lg:flex-[1_0_0]"
				data-name="Card"
			>
				<div
					class="relative flex min-h-px w-full flex-auto flex-col content-stretch items-start justify-end px-[24px] lg:flex-[1_0_0]"
					data-name="card-body"
				>
					<div
						class="relative flex w-full shrink-0 flex-col content-stretch items-start gap-[16px]"
						data-name="Flex Vertical"
					>
						<div
							class="relative flex w-full shrink-0 flex-col content-stretch items-start gap-[8px] [word-break:break-word] text-[#0a0a0a]"
							data-name="Flex Vertical"
						>
							<p
								class="relative w-full shrink-0 font-['Geist:Bold'] text-[36px] leading-[40px] font-bold"
							>
								AirPods Max
							</p>
							<p
								class="relative w-full shrink-0 font-['Geist:Regular'] text-[18px] leading-[28px] font-normal"
							>
								{`AirPods Max deliver stunningly detailed, high-fidelity audio for an unparalleled listening experience. `}
							</p>
						</div>
						<div
							class="relative flex shrink-0 content-stretch items-center justify-center gap-[6px] rounded-[10px] border border-solid border-[#e5e5e5] bg-white px-[16px] py-[8px]"
							data-name="Solid button"
						>
							<div
								class="relative flex shrink-0 flex-col justify-center font-['Geist:Medium'] text-[14px] leading-[0] font-medium [word-break:break-word] whitespace-nowrap text-[#0a0a0a]"
							>
								<p class="leading-[20px]">Get Now</p>
							</div>
							<div class="relative size-[16px] shrink-0" data-name="Right icon">
								<img
									alt=""
									class="absolute inset-0 block size-full max-w-none"
									src={imgRightIcon}
								/>
							</div>
						</div>
					</div>
					<div
						class="relative mt-[8px] h-[240px] w-full shrink-0 lg:absolute lg:top-[-82.7px] lg:left-[48.1px] lg:mt-0 lg:h-[374.504px] lg:w-[363.312px]"
						data-name="AirPods image"
					>
						<ImagePlaceholder class="absolute inset-0" label="AirPods Max" />
					</div>
				</div>
			</div>
		</div>
		<div
			class="relative flex w-full shrink-0 flex-col content-stretch items-start justify-center gap-[16px] lg:h-[581px] lg:w-[329px]"
			data-name="Flex Vertical"
		>
			<div
				class="relative flex min-h-px w-full flex-auto flex-col content-stretch items-start gap-[16px] overflow-clip rounded-[14px] bg-[rgba(2,132,199,0.1)] py-[24px] lg:flex-[1_0_0]"
				data-name="Card"
			>
				<div
					class="relative flex w-full shrink-0 flex-col content-stretch items-start px-[24px]"
					data-name="card-body"
				>
					<div
						class="relative flex w-full shrink-0 flex-col content-stretch items-start gap-[16px]"
						data-name="Flex Vertical"
					>
						<p
							class="relative w-[min-content] min-w-full shrink-0 font-['Geist:Bold'] text-[30px] leading-[36px] font-bold [word-break:break-word] text-[#0a0a0a]"
						>
							Flat 20% Off on Regular Shoes
						</p>
						<div
							class="relative flex shrink-0 content-stretch items-center justify-center gap-[6px] rounded-[10px] border border-solid border-[#e5e5e5] bg-white px-[12px] py-[6px]"
							data-name="Solid button"
						>
							<div
								class="relative flex shrink-0 flex-col justify-center font-['Geist:Medium'] text-[14px] leading-[0] font-medium [word-break:break-word] whitespace-nowrap text-[#0a0a0a]"
							>
								<p class="leading-[20px]">Claim Discount</p>
							</div>
							<div class="relative size-[16px] shrink-0" data-name="Right icon">
								<img
									alt=""
									class="absolute inset-0 block size-full max-w-none"
									src={imgRightIcon}
								/>
							</div>
						</div>
					</div>
					<div
						class="relative mt-[8px] flex h-[260px] w-full shrink-0 items-center justify-center lg:absolute lg:top-[36.71px] lg:left-[85.24px] lg:mt-0 lg:h-[378.181px] lg:w-[359.184px]"
					>
						<div class="flex-none rotate-0 lg:rotate-[-32.35deg]">
							<div
								class="relative h-[240px] w-[190px] lg:h-[297.848px] lg:w-[236.526px]"
								data-name="brown-leather-shoes-removebg-preview 1"
							>
								<ImagePlaceholder class="absolute inset-0" label="Regular Shoes" />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div
				class="relative flex min-h-px w-full flex-auto flex-col content-stretch items-start gap-[16px] overflow-clip rounded-[14px] bg-[rgba(224,52,52,0.1)] py-[24px] lg:flex-[1_0_0]"
				data-name="Card"
			>
				<div
					class="relative flex w-full shrink-0 flex-col content-stretch items-start px-[24px]"
					data-name="card-body"
				>
					<div
						class="relative order-2 mt-[8px] h-[220px] w-full shrink-0 lg:absolute lg:top-[113px] lg:left-[129.5px] lg:order-none lg:mt-0 lg:h-[205.035px] lg:w-[245px]"
						data-name="2680-removebg-preview 1"
					>
						<ImagePlaceholder class="absolute inset-0" label="Featured Deal" />
					</div>
					<div
						class="relative flex w-full shrink-0 flex-col content-stretch items-start gap-[16px]"
						data-name="Flex Vertical"
					>
						<p
							class="relative w-[min-content] min-w-full shrink-0 font-['Geist:Bold'] text-[30px] leading-[36px] font-bold [word-break:break-word] text-[#0a0a0a]"
						>
							{`Discover Deals That Define Your `}
						</p>
						<div
							class="relative flex shrink-0 content-stretch items-center justify-center gap-[6px] rounded-[10px] border border-solid border-[#e5e5e5] bg-white px-[12px] py-[6px]"
							data-name="Solid button"
						>
							<div
								class="relative flex shrink-0 flex-col justify-center font-['Geist:Medium'] text-[14px] leading-[0] font-medium [word-break:break-word] whitespace-nowrap text-[#0a0a0a]"
							>
								<p class="leading-[20px]">Explore More</p>
							</div>
							<div class="relative size-[16px] shrink-0" data-name="Right icon">
								<img
									alt=""
									class="absolute inset-0 block size-full max-w-none"
									src={imgRightIcon}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
