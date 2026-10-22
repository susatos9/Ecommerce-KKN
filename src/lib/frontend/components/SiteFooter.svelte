<script lang="ts">
	import {
		imgEllipse90,
		imgGroup,
		imgGroup3,
		imgIcon4,
		imgIcon5,
		imgIcon6,
		imgAppleIcon,
		imgGroup4,
		imgShield,
		imgIcon7,
		imgIcon8,
		imgIcon9,
		imgImage19,
		imgImage13,
		imgImage11,
		imgImage12,
		imgCardBody14,
		imgCardBody15,
		imgCardBody16
	} from '#lib/frontend/shellAssets.ts';

	let { features = false }: { features?: boolean } = $props();
</script>

<div
	class="relative flex w-full max-w-[1440px] shrink-0 flex-col content-stretch items-center justify-center gap-[32px] bg-white"
	data-name="Footer"
>
	{#if features}
		<div
			class="relative flex w-full max-w-[1280px] shrink-0 content-stretch items-start gap-[24px] px-[32px]"
			data-name="Flex Horizontal"
		>
			<div
				class="relative flex min-w-px flex-[1_0_0] flex-col content-stretch items-start gap-[16px] overflow-clip rounded-[14px] bg-white py-[16px] shadow-[0px_0px_0px_1px_rgba(10,10,10,0.1)]"
				data-name="Card"
			>
				<div
					class="relative flex w-full shrink-0 flex-col content-stretch items-start px-[16px]"
					data-name="card-body"
				>
					<div class="relative flex w-full shrink-0 content-stretch items-start gap-[24px]">
						<div
							class="relative flex shrink-0 content-stretch items-center justify-center rounded-[9999px] bg-[#f5f5f5] p-[12px]"
							data-name="icon"
						>
							<div class="relative size-[24px] shrink-0" data-name="ICON">
								<img
									alt=""
									class="absolute inset-0 block size-full max-w-none"
									src={imgCardBody14}
								/>
							</div>
						</div>
						<div
							class="relative flex min-w-px flex-[1_0_0] flex-col content-stretch items-start gap-[6px] leading-[28px] [word-break:break-word]"
							data-name="Free delivery"
						>
							<p
								class="relative w-full shrink-0 font-['Geist:SemiBold'] text-[20px] font-semibold text-[#0a0a0a]"
							>
								Free delivery
							</p>
							<p
								class="relative w-full shrink-0 font-['Geist:Regular'] text-[18px] font-normal text-[#737373]"
							>
								{`Get your orders delivered to your doorstep for free. `}
							</p>
						</div>
					</div>
				</div>
			</div>
			<div
				class="relative flex min-w-px flex-[1_0_0] flex-col content-stretch items-start gap-[16px] overflow-clip rounded-[14px] bg-white py-[16px] shadow-[0px_0px_0px_1px_rgba(10,10,10,0.1)]"
				data-name="Card"
			>
				<div
					class="relative flex w-full shrink-0 flex-col content-stretch items-start px-[16px]"
					data-name="card-body"
				>
					<div class="relative flex w-full shrink-0 content-stretch items-start gap-[24px]">
						<div
							class="relative flex shrink-0 content-stretch items-center justify-center rounded-[9999px] bg-[#f5f5f5] p-[12px]"
							data-name="icon"
						>
							<div class="relative size-[24px] shrink-0" data-name="ICON">
								<img
									alt=""
									class="absolute inset-0 block size-full max-w-none"
									src={imgCardBody15}
								/>
							</div>
						</div>
						<div
							class="relative flex min-w-px flex-[1_0_0] flex-col content-stretch items-center gap-[6px] leading-[28px] [word-break:break-word]"
							data-name="Free delivery"
						>
							<p
								class="relative w-full shrink-0 font-['Geist:SemiBold'] text-[20px] font-semibold text-[#0a0a0a]"
							>
								Online Payment
							</p>
							<p
								class="relative w-full shrink-0 font-['Geist:Regular'] text-[18px] font-normal text-[#737373]"
							>
								{`Experience hassle-free online payments with secure. `}
							</p>
						</div>
					</div>
				</div>
			</div>
			<div
				class="relative flex min-w-px flex-[1_0_0] flex-col content-stretch items-start gap-[16px] overflow-clip rounded-[14px] bg-white py-[16px] shadow-[0px_0px_0px_1px_rgba(10,10,10,0.1)]"
				data-name="Card"
			>
				<div
					class="relative flex w-full shrink-0 flex-col content-stretch items-start px-[16px]"
					data-name="card-body"
				>
					<div class="relative flex w-full shrink-0 content-stretch items-start gap-[24px]">
						<div
							class="relative flex shrink-0 content-stretch items-center justify-center rounded-[9999px] bg-[#f5f5f5] p-[12px]"
							data-name="icon"
						>
							<div class="relative flex shrink-0 items-center justify-center">
								<div class="flex-none -scale-y-100 rotate-180">
									<div class="relative size-[24px]" data-name="ICON">
										<img
											alt=""
											class="absolute inset-0 block size-full max-w-none"
											src={imgCardBody16}
										/>
									</div>
								</div>
							</div>
						</div>
						<div
							class="relative flex min-w-px flex-[1_0_0] flex-col content-stretch items-center gap-[6px] leading-[28px] [word-break:break-word]"
							data-name="Free delivery"
						>
							<p
								class="relative w-full shrink-0 font-['Geist:SemiBold'] text-[20px] font-semibold text-[#0a0a0a]"
							>
								Easy Return
							</p>
							<p
								class="relative w-full shrink-0 font-['Geist:Regular'] text-[18px] font-normal text-[#737373]"
							>
								{`Enjoy easy returns within 30 days of purchase. `}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	{/if}
	<div
		class="relative flex w-full shrink-0 flex-col content-stretch items-center justify-center border-t border-b border-solid border-[#e5e5e5]"
		data-name="Flex Vertical"
	>
		<div
			class="relative flex w-full max-w-[1280px] shrink-0 flex-wrap content-start items-start gap-[32px] px-[32px] py-[56px]"
			data-name="Flex Horizontal"
		>
			<div
				class="relative flex w-[331px] min-w-[328px] shrink-0 flex-col content-stretch items-start justify-center gap-[32px]"
				data-name="Flex Vertical"
			>
				<a
					href="/"
					class="relative flex h-[32px] shrink-0 content-stretch items-center gap-[6px]"
					data-name="shopix-logo"
				>
					<div
						class="relative inline-grid shrink-0 grid-cols-[max-content] grid-rows-[max-content] place-items-start leading-[0]"
					>
						<div class="relative col-1 row-1 mt-0 ml-0 size-[28px]">
							<div class="absolute inset-[-3.57%]">
								<img alt="" class="block size-full max-w-none" src={imgEllipse90} />
							</div>
						</div>
						<div
							class="relative col-1 row-1 mt-0 ml-0 inline-grid grid-cols-[max-content] grid-rows-[max-content] place-items-start"
							data-name="Mask group"
						>
							<div
								class="relative col-1 row-1 mt-[5px] ml-[4px] inline-grid grid-cols-[max-content] grid-rows-[max-content] place-items-start"
								data-name="Group"
							>
								<div
									class="relative col-1 row-1 mt-0 ml-0 h-[23.917px] w-[20px] mask-intersect mask-alpha mask-size-[28px_28px] mask-no-clip mask-position-[-4px_-5px] mask-no-repeat"
									style="mask-image: url('{imgGroup}')"
									data-name="Group"
								>
									<img alt="" class="absolute inset-0 block size-full max-w-none" src={imgGroup3} />
								</div>
							</div>
						</div>
					</div>
					<div class="relative flex shrink-0 content-stretch items-center justify-center pt-[2px]">
						<div
							class="relative flex shrink-0 flex-col justify-end font-['Inter:Semi_Bold'] text-[20px] leading-[0] font-semibold [word-break:break-word] whitespace-nowrap text-[#0a0a0a] not-italic"
						>
							<p class="leading-[26px]">{`Shopix `}</p>
						</div>
					</div>
				</a>
				<div
					class="relative flex w-full shrink-0 flex-col content-stretch items-start gap-[12px]"
					data-name="Contact Information"
				>
					<div
						class="relative flex w-full shrink-0 content-stretch items-start gap-[8px]"
						data-name="Location"
					>
						<div class="relative size-[20px] shrink-0" data-name="Icon">
							<img alt="" class="absolute inset-0 block size-full max-w-none" src={imgIcon4} />
						</div>
						<div
							class="relative w-[255px] shrink-0 font-['Geist:Regular'] text-[16px] leading-[0] font-normal [word-break:break-word] text-[#0a0a0a]"
						>
							<p class="mb-0 leading-[24px]">Shop 009A, Level 4, Block A</p>
							<p class="leading-[24px]">Demo Park, Ottawa</p>
						</div>
					</div>
					<div
						class="relative flex w-full shrink-0 content-stretch items-center gap-[8px]"
						data-name="Phone"
					>
						<div class="relative size-[20px] shrink-0" data-name="Icon">
							<img alt="" class="absolute inset-0 block size-full max-w-none" src={imgIcon5} />
						</div>
						<p
							class="relative min-w-px flex-[1_0_0] font-['Geist:Regular'] text-[16px] leading-[24px] font-normal [word-break:break-word] text-[#0a0a0a]"
						>
							+1-613-598-6981
						</p>
					</div>
					<div
						class="relative flex w-full shrink-0 content-stretch items-center gap-[8px]"
						data-name="Email"
					>
						<div class="relative size-[20px] shrink-0" data-name="Icon">
							<img alt="" class="absolute inset-0 block size-full max-w-none" src={imgIcon6} />
						</div>
						<p
							class="relative min-w-px flex-[1_0_0] font-['Geist:Regular'] text-[16px] leading-[24px] font-normal [word-break:break-word] text-[#0a0a0a]"
						>
							shopix@gmail.com
						</p>
					</div>
				</div>
			</div>
			<div
				class="relative flex w-[215px] shrink-0 flex-col content-stretch items-start justify-center gap-[12px]"
				data-name="Flex Vertical"
			>
				<div
					class="relative flex w-full shrink-0 content-stretch items-center pb-[8px]"
					data-name="Header"
				>
					<p
						class="relative min-w-px flex-[1_0_0] font-['Geist:SemiBold'] text-[20px] leading-[28px] font-semibold [word-break:break-word] text-[#0a0a0a]"
					>
						Explore
					</p>
				</div>
				<p
					class="relative w-full shrink-0 font-['Geist:Regular'] text-[16px] leading-[24px] font-normal [word-break:break-word] text-[#737373]"
				>
					Product Listing
				</p>
				<p
					class="relative w-full shrink-0 font-['Geist:Regular'] text-[16px] leading-[24px] font-normal [word-break:break-word] text-[#737373]"
				>
					My Profile
				</p>
				<a
					href="/account/order-tracking"
					class="relative w-full shrink-0 font-['Geist:Regular'] text-[16px] leading-[24px] font-normal [word-break:break-word] text-[#737373] hover:text-[#0a0a0a] hover:underline"
				>
					Order Tracking
				</a>
				<p
					class="relative w-full shrink-0 font-['Geist:Regular'] text-[16px] leading-[24px] font-normal [word-break:break-word] text-[#737373]"
				>
					Category Lisitng
				</p>
			</div>
			<div
				class="relative flex w-[246px] shrink-0 flex-col content-stretch items-start justify-center gap-[12px]"
				data-name="Flex Vertical"
			>
				<div
					class="relative flex w-full shrink-0 content-stretch items-center pb-[8px]"
					data-name="Header"
				>
					<p
						class="relative min-w-px flex-[1_0_0] font-['Geist:SemiBold'] text-[20px] leading-[28px] font-semibold [word-break:break-word] text-[#0a0a0a]"
					>
						{`Terms & Policies`}
					</p>
				</div>
				<a
					href="/account/returns-refunds"
					class="relative w-full shrink-0 font-['Geist:Regular'] text-[16px] leading-[24px] font-normal [word-break:break-word] text-[#737373] hover:text-[#0a0a0a] hover:underline"
					>{`Returns & Exchanges`}</a
				>
				<p
					class="relative w-full shrink-0 font-['Geist:Regular'] text-[16px] leading-[24px] font-normal [word-break:break-word] text-[#737373]"
				>
					Privacy Policy
				</p>
				<p
					class="relative w-full shrink-0 font-['Geist:Regular'] text-[16px] leading-[24px] font-normal [word-break:break-word] text-[#737373]"
				>
					Purchase Protection
				</p>
				<p
					class="relative w-full shrink-0 font-['Geist:Regular'] text-[16px] leading-[24px] font-normal [word-break:break-word] text-[#737373]"
				>
					Help
				</p>
			</div>
			<div
				class="relative flex min-w-[246px] flex-[1_0_0] flex-col content-stretch items-start justify-center gap-[24px]"
				data-name="Flex Vertical"
			>
				<div
					class="relative flex w-full shrink-0 flex-col content-stretch items-start gap-[10px]"
					data-name="Container"
				>
					<p
						class="relative shrink-0 font-['Geist:SemiBold'] text-[18px] leading-[28px] font-semibold [word-break:break-word] whitespace-nowrap text-[#0a0a0a]"
					>
						{`Get the Latest Offers & Discounts`}
					</p>
					<div
						class="relative flex w-full shrink-0 content-stretch items-center justify-end"
						data-name="Subscribe"
					>
						<div
							class="relative flex min-w-px flex-[1_0_0] flex-col content-stretch items-start gap-[8px]"
							data-name="Default Input"
						>
							<div
								class="relative flex w-full shrink-0 content-stretch items-start"
								data-name="input-container"
							>
								<div
									class="relative flex h-[36px] min-w-px flex-[1_0_0] content-stretch items-center gap-[8px] rounded-[10px] border border-solid border-[#e5e5e5] bg-white px-[10px] py-[4px]"
									data-name="input"
								>
									<div
										class="relative flex min-w-px flex-[1_0_0] flex-col justify-center overflow-hidden font-['Geist:Regular'] text-[14px] leading-[0] font-normal [word-break:break-word] text-ellipsis whitespace-nowrap text-[#737373]"
									>
										<p class="overflow-hidden leading-[20px] text-ellipsis">Your email address</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="relative flex w-full shrink-0 flex-col content-stretch items-start gap-[10px]">
					<p
						class="relative w-[min-content] min-w-full shrink-0 font-['Geist:SemiBold'] text-[18px] leading-[28px] font-semibold [word-break:break-word] text-[#0a0a0a]"
					>
						Download App
					</p>
					<div
						class="relative flex shrink-0 content-stretch items-start gap-[16px]"
						data-name="Actions"
					>
						<div
							class="relative flex shrink-0 content-stretch items-center gap-[13.469px] rounded-[5.051px] bg-black px-[10.102px] py-[5.051px]"
							data-name="Button"
						>
							<div class="relative h-[23.571px] w-[19.194px] shrink-0" data-name="apple-icon">
								<img
									alt=""
									class="absolute inset-0 block size-full max-w-none"
									src={imgAppleIcon}
								/>
							</div>
							<div
								class="relative flex shrink-0 flex-col content-stretch items-center justify-center [word-break:break-word] whitespace-nowrap text-white"
								data-name="Text"
							>
								<p
									class="relative shrink-0 font-['Geist:Regular'] text-[10.102px] leading-[13.469px] font-normal"
								>
									Download on the
								</p>
								<p
									class="relative shrink-0 font-['Geist:Medium'] text-[11.786px] leading-[16.837px] font-medium opacity-92"
								>
									App Store
								</p>
							</div>
						</div>
						<div
							class="relative flex shrink-0 content-stretch items-center justify-center gap-[13.037px] rounded-[4.889px] bg-black px-[9.778px] py-[4.889px]"
							data-name="Button"
						>
							<div
								class="relative size-[22.815px] shrink-0 overflow-clip"
								data-name="google-play-icon"
							>
								<div class="absolute inset-[6.18%_13.37%] contents" data-name="_x31_52-google-play">
									<div class="absolute inset-[6.18%_13.37%]" data-name="Group">
										<img
											alt=""
											class="absolute inset-0 block size-full max-w-none"
											src={imgGroup4}
										/>
									</div>
								</div>
							</div>
							<div
								class="relative flex shrink-0 flex-col content-stretch items-center justify-center [word-break:break-word] whitespace-nowrap text-white"
								data-name="Text"
							>
								<p
									class="relative shrink-0 font-['Geist:Regular'] text-[9.778px] leading-[13.037px] font-normal"
								>
									Download on the
								</p>
								<p
									class="relative shrink-0 font-['Geist:Medium'] text-[11.407px] leading-[16.296px] font-medium opacity-92"
								>
									Google Play
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div
			class="relative flex w-full shrink-0 flex-wrap content-center items-center justify-center gap-y-[32px] border-t border-b border-solid border-[#e5e5e5] px-[96px] py-[24px]"
			data-name="Payments Method"
		>
			<div
				class="relative flex min-w-px flex-[1_0_0] flex-wrap content-center items-center justify-center gap-[16px]"
				data-name="icon"
			>
				<div
					class="relative flex shrink-0 content-stretch items-center gap-[8px] rounded-[9999px] border border-solid border-[#e5e5e5] px-[14px] py-[4px]"
					data-name="Secure Payment"
				>
					<div class="relative size-[20px] shrink-0" data-name="shield">
						<img alt="" class="absolute inset-0 block size-full max-w-none" src={imgShield} />
					</div>
					<p
						class="relative shrink-0 font-['Geist:Regular'] text-[16px] leading-[24px] font-normal [word-break:break-word] whitespace-nowrap text-[#0a0a0a]"
					>
						Secure Payment
					</p>
				</div>
				<div class="relative h-[24px] w-[170.581px] shrink-0" data-name="image 19">
					<div class="pointer-events-none absolute inset-0 overflow-hidden">
						<img
							alt=""
							class="absolute top-[-297.85%] left-[-15.44%] h-[698.92%] w-[131.04%] max-w-none"
							src={imgImage19}
						/>
					</div>
				</div>
				<div class="relative h-[20px] w-[61.745px] shrink-0" data-name="image 13">
					<img
						alt=""
						class="pointer-events-none absolute inset-0 size-full max-w-none object-cover"
						src={imgImage13}
					/>
				</div>
				<div class="relative size-[20px] shrink-0" data-name="image 11">
					<img
						alt=""
						class="pointer-events-none absolute inset-0 size-full max-w-none object-cover"
						src={imgImage11}
					/>
				</div>
				<div class="relative h-[20px] w-[35.556px] shrink-0" data-name="image 12">
					<img
						alt=""
						class="pointer-events-none absolute inset-0 size-full max-w-none object-cover"
						src={imgImage12}
					/>
				</div>
			</div>
		</div>
		<div
			class="relative flex w-full shrink-0 content-stretch items-start justify-center py-[24px]"
			data-name="Flex Horizontal"
		>
			<div
				class="relative flex max-w-[1280px] min-w-px flex-[1_0_0] content-stretch items-start justify-center gap-[24px] px-[32px]"
			>
				<div
					class="relative flex min-w-px flex-[1_0_0] content-stretch items-center justify-center"
					data-name="Row"
				>
					<p
						class="relative min-w-[329px] flex-[1_0_0] font-['Geist:Medium'] text-[16px] leading-[0] font-medium [word-break:break-word] text-[#0a0a0a]"
					>
						<span class="leading-[24px]">{`© 2026 `}</span>
						<span class="leading-[24px]">Shopix</span>
						<span class="leading-[24px]">{`, Made with `}</span>
						<span class="leading-[24px]">❤</span>
						<span class="leading-[24px]">️️️ for a better web.</span>
					</p>
				</div>
				<div
					class="relative flex min-w-px flex-[1_0_0] content-stretch items-center justify-end gap-[13px]"
				>
					<div class="relative size-[22px] shrink-0" data-name="Icon">
						<img alt="" class="absolute inset-0 block size-full max-w-none" src={imgIcon7} />
					</div>
					<div class="relative size-[22px] shrink-0" data-name="Icon">
						<img alt="" class="absolute inset-0 block size-full max-w-none" src={imgIcon8} />
					</div>
					<div class="relative size-[22px] shrink-0" data-name="Icon">
						<img alt="" class="absolute inset-0 block size-full max-w-none" src={imgIcon9} />
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
