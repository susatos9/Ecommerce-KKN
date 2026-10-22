<script lang="ts">
	import { goto } from '$app/navigation';
	import ImagePlaceholder from '#lib/frontend/components/ui/ImagePlaceholder.svelte';
	const imgIcon4 = '/assets/b9233.svg';
	const imgIcon5 = '/assets/785e8.svg';
	const imgRightIcon1 = '/assets/c6b74.svg';
	const imgIcon6 = '/assets/4d9b4.svg';
	const imgCardBody = '/assets/078ee.svg';
	const imgRightIcon2 = '/assets/9b179.svg';
</script>

<div
	class="relative flex w-full shrink-0 flex-col content-stretch items-center justify-center bg-white py-[96px]"
	data-name="Feature"
>
	<div
		class="relative flex w-full max-w-[1280px] shrink-0 flex-col content-stretch items-center justify-center gap-[32px] px-[32px]"
		data-name="Flex Vertical"
	>
		<div
			class="relative flex w-full shrink-0 content-stretch items-start justify-between"
			data-name="Flex Horizontal"
		>
			<p
				class="relative min-w-px flex-[1_0_0] font-['Geist:Bold'] text-[30px] leading-[36px] font-bold [word-break:break-word] text-[#0a0a0a]"
			>
				Deals of the Day 🔥
			</p>
			<div
				class="relative flex w-[67px] shrink-0 content-stretch items-center justify-between"
				data-name="Pagination Icon"
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
		</div>
		<div
			class="relative flex w-full shrink-0 content-stretch items-start gap-[16px]"
			data-name="Flex Horizontal"
		>
			<div
				class="relative flex min-w-px flex-[1_0_0] flex-col content-stretch items-start self-stretch overflow-clip rounded-[14px] py-[24px] shadow-[0px_0px_0px_1px_rgba(10,10,10,0.1)]"
				data-name="Card"
			>
				<ImagePlaceholder
					variant="dark"
					class="pointer-events-none absolute inset-0 rounded-[14px]"
				/>
				<div
					class="relative flex min-h-px w-full flex-[1_0_0] flex-col content-stretch items-start justify-between px-[24px]"
					data-name="card-body"
				>
					<div
						class="relative flex w-full shrink-0 content-stretch items-center justify-center"
						data-name="Flex Vertical"
					>
						<p
							class="relative min-w-px flex-[1_0_0] font-['Geist:Bold'] text-[36px] leading-[40px] font-bold [word-break:break-word] text-white"
						>
							Big Savings on Your Top Picks !
						</p>
					</div>
					<div
						class="relative flex w-full shrink-0 flex-col content-stretch items-start gap-[24px]"
						data-name="Flex Vertical"
					>
						<div
							class="relative flex w-full shrink-0 flex-col content-stretch items-start gap-[8px]"
							data-name="Flex Vertical"
						>
							<p
								class="relative w-full shrink-0 font-['Geist:SemiBold'] text-[16px] leading-[24px] font-semibold [word-break:break-word] text-white"
							>
								Offers end today:
							</p>
							<div
								class="relative flex w-full shrink-0 content-stretch items-center gap-[8px]"
								data-name="Flex Horizontal"
							>
								<div
									class="relative flex min-w-px flex-[1_0_0] flex-col content-stretch items-center gap-[4.921px]"
									data-name="Timer Blocks"
								>
									<div
										class="relative flex h-[55px] w-full shrink-0 flex-col content-stretch items-center justify-center rounded-[6px] bg-white p-[6px]"
										data-name="Timer/Number/Cell"
									>
										<p
											class="relative shrink-0 text-center font-['Geist:SemiBold'] text-[18px] leading-[28px] font-semibold [word-break:break-word] whitespace-nowrap text-[#0a0a0a]"
										>
											01
										</p>
									</div>
									<p
										class="relative w-full shrink-0 text-center font-['Geist:Medium'] text-[14px] leading-[20px] font-medium [word-break:break-word] text-white"
									>
										Day
									</p>
								</div>
								<div
									class="relative flex min-w-px flex-[1_0_0] flex-col content-stretch items-center gap-[4.921px]"
									data-name="Timer Blocks"
								>
									<div
										class="relative flex h-[55px] w-full shrink-0 flex-col content-stretch items-center justify-center rounded-[6px] bg-white p-[6px]"
										data-name="Timer/Number/Cell"
									>
										<p
											class="relative shrink-0 text-center font-['Geist:SemiBold'] text-[18px] leading-[28px] font-semibold [word-break:break-word] whitespace-nowrap text-[#0a0a0a]"
										>
											12
										</p>
									</div>
									<p
										class="relative w-full shrink-0 text-center font-['Geist:Medium'] text-[14px] leading-[20px] font-medium [word-break:break-word] text-white"
									>
										Hours
									</p>
								</div>
								<div
									class="relative flex min-w-px flex-[1_0_0] flex-col content-stretch items-center gap-[4.921px]"
									data-name="Timer Blocks"
								>
									<div
										class="relative flex h-[55px] w-full shrink-0 flex-col content-stretch items-center justify-center rounded-[6px] bg-white p-[6px]"
										data-name="Timer/Number/Cell"
									>
										<p
											class="relative shrink-0 text-center font-['Geist:SemiBold'] text-[18px] leading-[28px] font-semibold [word-break:break-word] whitespace-nowrap text-[#0a0a0a]"
										>
											45
										</p>
									</div>
									<p
										class="relative w-full shrink-0 text-center font-['Geist:Medium'] text-[14px] leading-[20px] font-medium [word-break:break-word] text-white"
									>
										Min
									</p>
								</div>
								<div
									class="relative flex min-w-px flex-[1_0_0] flex-col content-stretch items-center gap-[4.921px]"
									data-name="Timer Blocks"
								>
									<div
										class="relative flex h-[55px] w-full shrink-0 flex-col content-stretch items-center justify-center rounded-[6px] bg-white p-[6px]"
										data-name="Timer/Number/Cell"
									>
										<p
											class="relative shrink-0 text-center font-['Geist:SemiBold'] text-[18px] leading-[28px] font-semibold [word-break:break-word] whitespace-nowrap text-[#0a0a0a]"
										>
											02
										</p>
									</div>
									<p
										class="relative w-full shrink-0 text-center font-['Geist:Medium'] text-[14px] leading-[20px] font-medium [word-break:break-word] text-white"
									>
										Sec
									</p>
								</div>
							</div>
						</div>
						<div
							class="relative flex w-full shrink-0 content-stretch items-center justify-center gap-[6px] overflow-clip rounded-[10px] bg-[#dc2626] px-[10px] py-[6px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]"
							data-name="Solid Button"
						>
							<div
								class="relative flex shrink-0 flex-col justify-center font-['Geist:Medium'] text-[14px] leading-[0] font-medium [word-break:break-word] whitespace-nowrap text-[#fafafa]"
							>
								<p class="leading-[20px]">Shop Now</p>
							</div>
							<div class="relative size-[16px] shrink-0" data-name="Right-icon">
								<img
									alt=""
									class="absolute inset-0 block size-full max-w-none"
									src={imgRightIcon1}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div
				class="relative flex min-w-px flex-[1_0_0] flex-col content-stretch items-start"
				data-name="Product Card"
			>
				<div
					class="relative flex w-[292px] shrink-0 flex-col content-stretch items-start gap-[16px] overflow-clip rounded-[14px] bg-white pb-[16px] shadow-[0px_0px_0px_1px_rgba(10,10,10,0.1)]"
					data-name="Card"
				>
					<div
						class="relative flex w-full shrink-0 flex-col content-stretch items-start gap-[10px]"
						data-name="card-header"
					>
						<div class="relative h-[280px] w-full shrink-0 bg-[#f5f5f5]" data-name="bg"></div>
						<div
							class="absolute top-0 left-1/2 h-[260px] w-[252px] -translate-x-1/2"
							data-name="Product Image"
						>
							<ImagePlaceholder class="absolute inset-0" />
						</div>
						<div
							class="absolute top-[14px] left-[249px] flex content-stretch items-center justify-center rounded-[9999px] bg-white p-[4px]"
							data-name="Icon"
						>
							<div class="relative flex shrink-0 items-center justify-center">
								<div class="flex-none -scale-y-100 rotate-180">
									<div class="relative size-[21px]" data-name="ICON">
										<img
											alt=""
											class="absolute inset-0 block size-full max-w-none"
											src={imgIcon6}
										/>
									</div>
								</div>
							</div>
						</div>
						<div
							class="absolute top-[19px] left-[14px] flex content-stretch items-start"
							data-name="Solid Badge"
						>
							<div
								class="relative flex shrink-0 content-stretch items-center justify-center gap-[4px] rounded-[9999px] bg-[#16a34a] px-[8px] py-[2px]"
								data-name="Solid Badge"
							>
								<div
									class="relative flex shrink-0 flex-col justify-center text-center font-['Geist:Medium'] text-[12px] leading-[0] font-medium [word-break:break-word] whitespace-nowrap text-white"
								>
									<p class="leading-[16px]">New</p>
								</div>
							</div>
						</div>
					</div>
					<div
						class="relative flex w-full shrink-0 flex-col content-stretch items-start gap-[12px] px-[16px]"
						data-name="card-body"
					>
						<div
							class="relative flex w-full shrink-0 flex-col content-stretch items-start gap-[6px] [word-break:break-word]"
							data-name="Flex Vertical"
						>
							<div
								class="relative flex w-[244px] shrink-0 flex-col content-stretch items-start gap-[2px]"
								data-name="Product details"
							>
								<p
									class="relative w-full shrink-0 font-['Geist:SemiBold'] text-[18px] leading-[28px] font-semibold text-[#0a0a0a]"
								>
									Bellavita
								</p>
								<p
									class="relative w-full shrink-0 font-['Geist:Regular'] text-[14px] leading-[20px] font-normal text-[#737373]"
								>
									{`Layer'r Wottagirl Vanilla twist...`}
								</p>
							</div>
							<div
								class="relative flex w-full shrink-0 content-stretch items-center gap-[6px] whitespace-nowrap"
								data-name="price"
							>
								<p
									class="relative shrink-0 font-['Geist:SemiBold'] text-[14px] leading-[20px] font-semibold text-[#0a0a0a]"
								>
									$225.00
								</p>
								<div
									class="relative flex shrink-0 flex-col justify-end font-['Geist:Regular'] text-[0px] leading-[0] font-normal text-[#737373]"
								>
									<p
										class="text-[14px] leading-[20px] line-through decoration-solid decoration-from-font [text-decoration-skip-ink:none] [text-underline-position:from-font]"
									>
										$249.00
									</p>
								</div>
							</div>
						</div>
						<div
							class="relative flex w-full shrink-0 flex-col content-stretch items-start"
							data-name="Action"
						>
							<button
								type="button"
								class="relative flex w-full shrink-0 cursor-pointer content-stretch items-center justify-center gap-[6px] overflow-clip rounded-[10px] bg-[#171717] px-[12px] py-[6px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]"
								data-name="Solid Button"
								onclick={() => goto('/products/phone')}
							>
								<div
									class="relative flex shrink-0 flex-col justify-center font-['Geist:Medium'] text-[14px] leading-[0] font-medium [word-break:break-word] whitespace-nowrap text-[#fafafa]"
								>
									<p class="leading-[20px]">Add to Cart</p>
								</div>
								<div class="relative size-[16px] shrink-0" data-name="Right-icon">
									<img
										alt=""
										class="absolute inset-0 block size-full max-w-none"
										src={imgCardBody}
									/>
								</div>
							</button>
						</div>
					</div>
				</div>
			</div>
			<div
				class="relative flex min-w-px flex-[1_0_0] flex-col content-stretch items-start"
				data-name="Product Card"
			>
				<div
					class="relative flex w-[292px] shrink-0 flex-col content-stretch items-start gap-[16px] overflow-clip rounded-[14px] bg-white pb-[16px] shadow-[0px_0px_0px_1px_rgba(10,10,10,0.1)]"
					data-name="Card"
				>
					<div
						class="relative flex w-full shrink-0 flex-col content-stretch items-start gap-[10px]"
						data-name="card-header"
					>
						<div class="relative h-[280px] w-full shrink-0 bg-[#f5f5f5]" data-name="bg"></div>
						<div
							class="absolute top-1/2 left-1/2 h-[260px] w-[252px] -translate-x-1/2 -translate-y-1/2"
							data-name="Product Image"
						>
							<ImagePlaceholder class="absolute inset-0" />
						</div>
						<div
							class="absolute top-[14px] left-[249px] flex content-stretch items-center justify-center rounded-[9999px] bg-white p-[4px]"
							data-name="Icon"
						>
							<div class="relative flex shrink-0 items-center justify-center">
								<div class="flex-none -scale-y-100 rotate-180">
									<div class="relative size-[21px]" data-name="ICON">
										<img
											alt=""
											class="absolute inset-0 block size-full max-w-none"
											src={imgIcon6}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div
						class="relative flex w-full shrink-0 flex-col content-stretch items-start gap-[12px] px-[16px]"
						data-name="card-body"
					>
						<div
							class="relative flex w-full shrink-0 flex-col content-stretch items-start gap-[6px] [word-break:break-word]"
							data-name="Flex Vertical"
						>
							<div
								class="relative flex w-[244px] shrink-0 flex-col content-stretch items-start gap-[2px]"
								data-name="Product details"
							>
								<p
									class="relative w-full shrink-0 font-['Geist:SemiBold'] text-[18px] leading-[28px] font-semibold text-[#0a0a0a]"
								>
									Samsung
								</p>
								<p
									class="relative w-full shrink-0 font-['Geist:Regular'] text-[14px] leading-[20px] font-normal text-[#737373]"
								>
									{`Layer'r Wottagirl Vanilla twist...`}
								</p>
							</div>
							<div
								class="relative flex w-full shrink-0 content-stretch items-center gap-[6px] whitespace-nowrap"
								data-name="price"
							>
								<p
									class="relative shrink-0 font-['Geist:SemiBold'] text-[14px] leading-[20px] font-semibold text-[#0a0a0a]"
								>
									$225.00
								</p>
								<div
									class="relative flex shrink-0 flex-col justify-end font-['Geist:Regular'] text-[0px] leading-[0] font-normal text-[#737373]"
								>
									<p
										class="text-[14px] leading-[20px] line-through decoration-solid decoration-from-font [text-decoration-skip-ink:none] [text-underline-position:from-font]"
									>
										$249.00
									</p>
								</div>
							</div>
						</div>
						<div
							class="relative flex w-full shrink-0 flex-col content-stretch items-start"
							data-name="Action"
						>
							<button
								type="button"
								class="relative flex w-full shrink-0 cursor-pointer content-stretch items-center justify-center gap-[6px] overflow-clip rounded-[10px] bg-[#171717] px-[12px] py-[6px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]"
								data-name="Solid Button"
								onclick={() => goto('/products/phone')}
							>
								<div
									class="relative flex shrink-0 flex-col justify-center font-['Geist:Medium'] text-[14px] leading-[0] font-medium [word-break:break-word] whitespace-nowrap text-[#fafafa]"
								>
									<p class="leading-[20px]">Add to Cart</p>
								</div>
								<div class="relative size-[16px] shrink-0" data-name="Right-icon">
									<img
										alt=""
										class="absolute inset-0 block size-full max-w-none"
										src={imgRightIcon2}
									/>
								</div>
							</button>
						</div>
					</div>
				</div>
			</div>
			<div
				class="relative flex min-w-px flex-[1_0_0] flex-col content-stretch items-start"
				data-name="Product Card"
			>
				<div
					class="relative flex w-[292px] shrink-0 flex-col content-stretch items-start gap-[16px] overflow-clip rounded-[14px] bg-white pb-[16px] shadow-[0px_0px_0px_1px_rgba(10,10,10,0.1)]"
					data-name="Card"
				>
					<div
						class="relative flex w-full shrink-0 flex-col content-stretch items-start gap-[10px]"
						data-name="card-header"
					>
						<div class="relative h-[280px] w-full shrink-0 bg-[#f5f5f5]" data-name="bg"></div>
						<div
							class="absolute top-1/2 left-1/2 h-[260px] w-[252px] -translate-x-1/2 -translate-y-1/2"
							data-name="Product Image"
						>
							<ImagePlaceholder class="absolute inset-0" />
						</div>
						<div
							class="absolute top-[14px] left-[249px] flex content-stretch items-center justify-center rounded-[9999px] bg-white p-[4px]"
							data-name="Icon"
						>
							<div class="relative flex shrink-0 items-center justify-center">
								<div class="flex-none -scale-y-100 rotate-180">
									<div class="relative size-[21px]" data-name="ICON">
										<img
											alt=""
											class="absolute inset-0 block size-full max-w-none"
											src={imgIcon6}
										/>
									</div>
								</div>
							</div>
						</div>
						<div
							class="absolute top-[19px] left-[14px] flex content-stretch items-start"
							data-name="Solid Badge"
						>
							<div
								class="relative flex shrink-0 content-stretch items-center justify-center gap-[4px] rounded-[9999px] bg-[#dc2626] px-[8px] py-[2px]"
								data-name="Solid Badge"
							>
								<div
									class="relative flex shrink-0 flex-col justify-center text-center font-['Geist:Medium'] text-[12px] leading-[0] font-medium [word-break:break-word] whitespace-nowrap text-white"
								>
									<p class="leading-[16px]">20% off</p>
								</div>
							</div>
						</div>
					</div>
					<div
						class="relative flex w-full shrink-0 flex-col content-stretch items-start gap-[12px] px-[16px]"
						data-name="card-body"
					>
						<div
							class="relative flex w-full shrink-0 flex-col content-stretch items-start gap-[6px] [word-break:break-word]"
							data-name="Flex Vertical"
						>
							<div
								class="relative flex w-[244px] shrink-0 flex-col content-stretch items-start gap-[2px]"
								data-name="Product details"
							>
								<p
									class="relative w-full shrink-0 font-['Geist:SemiBold'] text-[18px] leading-[28px] font-semibold text-[#0a0a0a]"
								>
									Milton
								</p>
								<p
									class="relative w-full shrink-0 font-['Geist:Regular'] text-[14px] leading-[20px] font-normal text-[#737373]"
								>
									{`Layer'r Wottagirl Vanilla twist...`}
								</p>
							</div>
							<div
								class="relative flex w-full shrink-0 content-stretch items-center gap-[6px] whitespace-nowrap"
								data-name="price"
							>
								<p
									class="relative shrink-0 font-['Geist:SemiBold'] text-[14px] leading-[20px] font-semibold text-[#0a0a0a]"
								>
									$225.00
								</p>
								<div
									class="relative flex shrink-0 flex-col justify-end font-['Geist:Regular'] text-[0px] leading-[0] font-normal text-[#737373]"
								>
									<p
										class="text-[14px] leading-[20px] line-through decoration-solid decoration-from-font [text-decoration-skip-ink:none] [text-underline-position:from-font]"
									>
										$249.00
									</p>
								</div>
							</div>
						</div>
						<div
							class="relative flex w-full shrink-0 flex-col content-stretch items-start"
							data-name="Action"
						>
							<button
								type="button"
								class="relative flex w-full shrink-0 cursor-pointer content-stretch items-center justify-center gap-[6px] overflow-clip rounded-[10px] bg-[#171717] px-[12px] py-[6px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]"
								data-name="Solid Button"
								onclick={() => goto('/products/phone')}
							>
								<div
									class="relative flex shrink-0 flex-col justify-center font-['Geist:Medium'] text-[14px] leading-[0] font-medium [word-break:break-word] whitespace-nowrap text-[#fafafa]"
								>
									<p class="leading-[20px]">Add to Cart</p>
								</div>
								<div class="relative size-[16px] shrink-0" data-name="Right-icon">
									<img
										alt=""
										class="absolute inset-0 block size-full max-w-none"
										src={imgRightIcon2}
									/>
								</div>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
