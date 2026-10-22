<script lang="ts">
	import { goto } from '$app/navigation';
	import Rating from '#lib/frontend/components/ui/Rating.svelte';
	import Avatar from '#lib/frontend/components/ui/Avatar.svelte';
	import InputNumber from '#lib/frontend/components/ui/InputNumber.svelte';
	import SiteHeader from '#lib/frontend/components/SiteHeader.svelte';
	import SiteFooter from '#lib/frontend/components/SiteFooter.svelte';
	const imgRatingItem = '/assets/a4c13.svg';
	const imgRectangle1 = '/assets/e5691.svg';
	const imgPic = '/assets/b75be.png';
	const imgPlus = '/assets/3109d.svg';
	const imgMinus = '/assets/a5d33.svg';
	const imgPic1 = '/assets/d94d6.png';
	const imgImage = '/assets/8f265.png';
	const imgImage1 = '/assets/900a3.png';
	const imgImage2 = '/assets/9da72.png';
	const imgImage3 = '/assets/6377f.png';
	const imgImage4 = '/assets/69cdf.png';
	const imgImage5 = '/assets/ef40c.png';
	const imgImage6 = '/assets/39ef4.png';
	const imgImage7 = '/assets/6fa1c.png';
	const imgReviewImage = '/assets/082c4.png';
	const imgReviewImage1 = '/assets/50e78.png';
	const imgReviewImage2 = '/assets/fce4c.png';
	const imgImage8 = '/assets/09311.png';
	const imgImage9 = '/assets/31b15.png';
	const imgPic2 = '/assets/173e0.png';
	const imgCardHeader = '/assets/68cd7.png';
	const imgCardHeader2 = '/assets/5cc91.png';
	const imgCardHeader3 = '/assets/2ef52.png';
	const imgCardHeader4 = '/assets/e67cc.png';
	const imgImage19 = '/assets/3cc20.png';
	const imgImage13 = '/assets/ad1bf.png';
	const imgImage11 = '/assets/c2747.png';
	const imgImage12 = '/assets/d5a5f.png';
	const imgOrnament54 = '/assets/c7bb1.svg';
	const imgOrnament51 = '/assets/ddcaa.svg';
	const imgOrnament52 = '/assets/658ce.svg';
	const imgOrnament53 = '/assets/0d8d6.svg';
	const imgLeftIcon = '/assets/a05bd.svg';
	const imgIcon = '/assets/fd9fe.svg';
	const imgIcon1 = '/assets/d2675.svg';
	const imgEllipse90 = '/assets/7af52.svg';
	const imgGroup = '/assets/9c2d9.svg';
	const imgGroup1 = '/assets/f2165.svg';
	const imgLeftIcon1 = '/assets/525ae.svg';
	const imgLeftIcon2 = '/assets/51c3a.svg';
	const imgLeftIcon3 = '/assets/a3682.svg';
	const imgLeftIcon4 = '/assets/dad92.svg';
	const imgIcon2 = '/assets/303ae.svg';
	const imgIcon3 = '/assets/bf68c.svg';
	const imgItems = '/assets/20e59.svg';
	const imgLeftIcon5 = '/assets/f24db.svg';
	const imgLeftIcon6 = '/assets/bc9b2.svg';
	const imgLeftIcon7 = '/assets/fba50.svg';
	const imgOfferPopSvg = '/assets/02157.svg';
	const imgIcon4 = '/assets/3a109.svg';
	const imgColor = '/assets/39b1e.svg';
	const imgColor1 = '/assets/026f8.svg';
	const imgColor2 = '/assets/b9113.svg';
	const imgLeftIcon8 = '/assets/5e4c1.svg';
	const imgRightIcon = '/assets/9b179.svg';
	const imgRightIcon1 = '/assets/30a38.svg';
	const imgCardBody = '/assets/0ff47.svg';
	const imgTableContainer = '/assets/270a7.svg';
	const imgCardBody1 = '/assets/79538.svg';
	const imgCardBody2 = '/assets/11fbd.svg';
	const imgAction = '/assets/172dc.svg';
	const imgLeftIcon9 = '/assets/73a47.svg';
	const imgIcon5 = '/assets/b9233.svg';
	const imgIcon6 = '/assets/785e8.svg';
	const imgCardHeader1 = '/assets/e5b95.svg';
	const imgCardBody3 = '/assets/078ee.svg';
	const imgCardBody4 = '/assets/47317.svg';
	const imgCardBody5 = '/assets/6a60f.svg';
	const imgCardBody6 = '/assets/8cd8d.svg';
	const imgGroup2 = '/assets/63a51.svg';
	const imgIcon7 = '/assets/f7856.svg';
	const imgIcon8 = '/assets/008f3.svg';
	const imgIcon9 = '/assets/48e75.svg';
	const imgAppleIcon = '/assets/256e4.svg';
	const imgGroup3 = '/assets/3ea43.svg';
	const imgShield = '/assets/557e7.svg';
	const imgIcon10 = '/assets/18d4b.svg';
	const imgIcon11 = '/assets/dc7e2.svg';
	const imgIcon12 = '/assets/dc1ab.svg';
</script>

<div
	class="relative flex size-full flex-col content-stretch items-center bg-white"
	data-name="Shopix - Product Detail 2"
>
	<SiteHeader />
	<div
		class="relative flex w-full max-w-[1440px] shrink-0 flex-col content-stretch items-center justify-center gap-[14px] bg-white py-[56px]"
		data-name="Product overview"
	>
		<div
			class="relative flex w-full max-w-[1280px] shrink-0 content-stretch items-center px-[32px]"
			data-name="Breadcrumbs"
		>
			<div
				class="relative flex max-h-[28px] shrink-0 content-stretch items-center gap-[6px]"
				data-name="Items"
			>
				<div
					class="relative flex shrink-0 content-stretch items-center justify-center"
					data-name="Breadcrumb item"
				>
					<p
						class="relative shrink-0 font-['Geist:Regular'] text-[14px] leading-[20px] font-normal [word-break:break-word] whitespace-nowrap text-[#737373]"
					>
						Home
					</p>
				</div>
				<div class="relative size-[14px] shrink-0" data-name="Breadcrumb icon placeholder">
					<img alt="" class="absolute inset-0 block size-full max-w-none" src={imgItems} />
				</div>
				<div
					class="relative flex h-[20px] shrink-0 content-stretch items-center justify-center"
					data-name="Breadcrumb item"
				>
					<p
						class="relative shrink-0 font-['Geist:Regular'] text-[14px] leading-[20px] font-normal [word-break:break-word] whitespace-nowrap text-[#0a0a0a]"
					>
						iPhone 16 Series - Back Case Cover Liquid Air
					</p>
				</div>
			</div>
		</div>
		<div
			class="relative flex w-full min-w-[328px] shrink-0 content-stretch items-start justify-center gap-[32px] overflow-clip px-[32px]"
			data-name="Flex Horizontal"
		>
			<div
				class="relative flex w-[586px] min-w-[329px] shrink-0 flex-col content-stretch items-start justify-center gap-[16px]"
				data-name="Flex Vertical"
			>
				<div
					class="relative flex shrink-0 content-stretch items-start gap-[16px]"
					data-name="Flex Horizontal"
				>
					<div class="relative h-[295px] w-[280px] shrink-0 rounded-[8px]" data-name="Image">
						<div class="pointer-events-none absolute inset-0 overflow-hidden rounded-[8px]">
							<img
								alt=""
								class="absolute top-[0.53%] left-[0.5%] h-[118.64%] w-full max-w-none"
								src={imgImage}
							/>
						</div>
					</div>
					<div class="relative h-[295px] w-[290px] shrink-0 rounded-[8px]" data-name="Image">
						<div class="pointer-events-none absolute inset-0 overflow-hidden rounded-[8px]">
							<img
								alt=""
								class="absolute top-[-0.35%] left-[1.09%] h-[124.76%] w-[101.53%] max-w-none"
								src={imgImage1}
							/>
						</div>
					</div>
				</div>
				<div
					class="relative flex shrink-0 content-stretch items-start gap-[16px]"
					data-name="Flex Horizontal"
				>
					<div class="relative h-[295px] w-[280px] shrink-0 rounded-[8px]" data-name="Image">
						<img
							alt=""
							class="pointer-events-none absolute inset-0 size-full max-w-none rounded-[8px] object-cover"
							src={imgImage2}
						/>
					</div>
					<div class="relative h-[295px] w-[290px] shrink-0 rounded-[8px]" data-name="Image">
						<div class="pointer-events-none absolute inset-0 overflow-hidden rounded-[8px]">
							<img
								alt=""
								class="absolute top-[-1.38%] left-[-1.42%] h-[125.05%] w-[101.76%] max-w-none"
								src={imgImage3}
							/>
						</div>
					</div>
				</div>
				<div
					class="relative flex shrink-0 content-stretch items-start gap-[16px]"
					data-name="Flex Horizontal"
				>
					<div class="relative h-[295px] w-[280px] shrink-0 rounded-[8px]" data-name="Image">
						<div class="pointer-events-none absolute inset-0 overflow-hidden rounded-[8px]">
							<img
								alt=""
								class="absolute top-[-0.92%] left-0 h-[118.64%] w-full max-w-none"
								src={imgImage4}
							/>
						</div>
					</div>
					<div class="relative h-[295px] w-[290px] shrink-0 rounded-[8px]" data-name="Image">
						<div class="pointer-events-none absolute inset-0 overflow-hidden rounded-[8px]">
							<img
								alt=""
								class="absolute top-[-0.05%] left-[0.03%] h-[147.46%] w-full max-w-none"
								src={imgImage5}
							/>
						</div>
					</div>
				</div>
				<div
					class="relative flex shrink-0 content-stretch items-start gap-[16px]"
					data-name="Flex Horizontal"
				>
					<div class="relative h-[295px] w-[280px] shrink-0 rounded-[8px]" data-name="Image">
						<div class="pointer-events-none absolute inset-0 overflow-hidden rounded-[8px]">
							<img
								alt=""
								class="absolute top-[0.08%] left-[-0.06%] h-[142.37%] w-full max-w-none"
								src={imgImage6}
							/>
						</div>
					</div>
					<div class="relative h-[295px] w-[290px] shrink-0 rounded-[8px]" data-name="Image">
						<img
							alt=""
							class="pointer-events-none absolute inset-0 size-full max-w-none rounded-[8px] object-cover"
							src={imgImage7}
						/>
					</div>
				</div>
			</div>
			<div
				class="relative flex w-[598px] shrink-0 flex-col content-stretch items-start gap-[24px]"
				data-name="Flex Vertical"
			>
				<div
					class="relative flex w-[598px] shrink-0 flex-col content-stretch items-start gap-[28px]"
					data-name="Flex Vertical"
				>
					<div
						class="relative flex w-full min-w-[328px] shrink-0 flex-col content-stretch items-start gap-[14px]"
						data-name="Flex Vertical"
					>
						<div
							class="relative flex w-full shrink-0 content-stretch items-center justify-between"
							data-name="Flex Horizontal"
						>
							<div
								class="relative flex h-[26px] shrink-0 content-stretch items-center justify-center gap-[4px] rounded-[9999px] px-[12px] py-[4px]"
								style="background-image: linear-gradient(90deg, rgba(22, 163, 74, 0.1) 0%, rgba(22, 163, 74, 0.1) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)"
								data-name="Soft Badge"
							>
								<div
									class="relative flex shrink-0 flex-col justify-center text-center font-['Geist:Medium'] text-[12px] leading-[0] font-medium [word-break:break-word] whitespace-nowrap text-[#16a34a]"
								>
									<p class="leading-[16px]">In Stock</p>
								</div>
							</div>
							<div
								class="relative flex shrink-0 content-stretch items-center justify-end gap-[12px]"
								data-name="Flex horizontal"
							>
								<div
									class="relative flex shrink-0 content-stretch items-center justify-center overflow-clip rounded-[8px] bg-[#f5f5f5] p-[6px]"
									data-name="Solid Icon Button"
								>
									<div class="relative size-[16px] shrink-0" data-name="Left-icon">
										<img
											alt=""
											class="absolute inset-0 block size-full max-w-none"
											src={imgLeftIcon5}
										/>
									</div>
								</div>
								<div
									class="relative flex shrink-0 content-stretch items-center justify-center overflow-clip rounded-[8px] bg-[#171717] p-[6px]"
									data-name="Solid Icon Button"
								>
									<div class="relative size-[16px] shrink-0" data-name="Left-icon">
										<img
											alt=""
											class="absolute inset-0 block size-full max-w-none"
											src={imgLeftIcon6}
										/>
									</div>
								</div>
								<div
									class="relative flex shrink-0 content-stretch items-center justify-center overflow-clip rounded-[8px] bg-[#f5f5f5] p-[6px]"
									data-name="Solid Icon Button"
								>
									<div class="relative size-[16px] shrink-0" data-name="Left-icon">
										<img
											alt=""
											class="absolute inset-0 block size-full max-w-none"
											src={imgLeftIcon7}
										/>
									</div>
								</div>
							</div>
						</div>
						<div
							class="relative flex w-full shrink-0 flex-col content-stretch items-start gap-[6px]"
							data-name="Flex Vertical"
						>
							<div
								class="relative flex w-[598px] shrink-0 flex-col content-stretch items-start gap-[6px]"
								data-name="Flex Vertical"
							>
								<p
									class="relative w-[598px] shrink-0 font-['Geist:SemiBold'] text-[30px] leading-[36px] font-semibold [word-break:break-word] text-[#0a0a0a]"
								>
									{`Women's Blue Lazy Garfield Graphic Printed Oversized T-shirt`}
								</p>
								<div
									class="relative flex w-[598px] shrink-0 content-stretch items-center gap-[12px]"
									data-name="Flex Horizontal"
								>
									<Rating class="relative flex shrink-0 content-stretch items-start" />
									<p
										class="relative shrink-0 font-['Geist:Medium'] text-[14px] leading-[20px] font-medium [word-break:break-word] whitespace-nowrap text-[#737373]"
									>
										(210 Reviews)
									</p>
								</div>
							</div>
							<div
								class="relative flex w-[598px] shrink-0 content-stretch items-center gap-[4px] [word-break:break-word]"
								data-name="Flex Horizontal"
							>
								<p
									class="relative shrink-0 font-['Geist:SemiBold'] text-[24px] leading-[32px] font-semibold whitespace-nowrap text-[#0a0a0a]"
								>
									$49
								</p>
								<p
									class="relative w-[56px] shrink-0 font-['Geist:Regular'] text-[20px] leading-[28px] font-normal text-[#737373] line-through decoration-solid decoration-from-font [text-decoration-skip-ink:none] [text-underline-position:from-font]"
								>
									{` $199`}
								</p>
								<div
									class="relative flex shrink-0 flex-col justify-end font-['Geist:Regular'] text-[14px] leading-[0] font-normal whitespace-nowrap text-[#16a34a]"
								>
									<p class="leading-[20px]">(20% OFF)</p>
								</div>
							</div>
						</div>
					</div>
					<p
						class="relative w-[598px] shrink-0 font-['Geist:Regular'] text-[18px] leading-[28px] font-normal [word-break:break-word] text-[#737373]"
					>
						Stay effortlessly cool and comfortable with our blue oversized t-shirt. Crafted from
						soft, breathable cotton.
					</p>
				</div>
				<div
					class="relative flex w-[598px] shrink-0 flex-col content-stretch items-start gap-[10px] rounded-[8px] border border-solid border-[#e5e5e5] bg-[#f5f5f5] p-[10px]"
					data-name="Flex Vertical"
				>
					<div
						class="relative flex w-full shrink-0 content-stretch items-center justify-between"
						data-name="Flex Horizontal"
					>
						<div
							class="relative flex min-w-px flex-[1_0_0] content-stretch items-center gap-[4px]"
							data-name="Flex Horizontal"
						>
							<div
								class="relative flex shrink-0 flex-col justify-center font-['Geist:SemiBold'] text-[14px] leading-[0] font-semibold [word-break:break-word] whitespace-nowrap text-[#0a0a0a]"
							>
								<p class="leading-[20px]">Unlock Extra Savings Today</p>
							</div>
							<div class="relative size-[25px] shrink-0" data-name="offer-pop.svg">
								<img
									alt=""
									class="absolute inset-0 block size-full max-w-none"
									src={imgOfferPopSvg}
								/>
							</div>
						</div>
						<div class="flex flex-row items-center self-stretch">
							<div
								class="relative flex h-full w-[289px] shrink-0 content-stretch items-center justify-end gap-[4px] font-['Geist:SemiBold'] text-[14px] leading-[0] font-semibold [word-break:break-word] whitespace-nowrap"
								data-name="Flex Horizontal"
							>
								<div class="relative flex shrink-0 flex-col justify-center text-[#0a0a0a]">
									<p class="leading-[20px] whitespace-pre">{`Code :   `}</p>
								</div>
								<div class="relative flex shrink-0 flex-col justify-center text-[#16a34a]">
									<p class="leading-[20px]">WELCOME10</p>
								</div>
							</div>
						</div>
					</div>
					<div
						class="relative flex w-full shrink-0 content-stretch items-start justify-between rounded-[6px] bg-white px-[14px] py-[10px]"
						data-name="Flex Horizontal"
					>
						<div
							class="relative flex shrink-0 flex-col justify-center font-['Geist:Medium'] text-[12px] leading-[0] font-medium [word-break:break-word] whitespace-nowrap text-[#737373]"
						>
							<p class="leading-[16px]">Apply coupon at checkout</p>
						</div>
						<div
							class="relative flex shrink-0 content-stretch items-center gap-[2px] self-stretch"
							data-name="Flex Horizontal"
						>
							<div
								class="relative flex shrink-0 flex-col justify-center font-['Geist:Medium'] text-[12px] leading-[0] font-medium [word-break:break-word] whitespace-nowrap text-[#737373]"
							>
								<p class="leading-[16px]">Show more offers</p>
							</div>
							<div class="relative size-[14px] shrink-0" data-name="ICON">
								<img alt="" class="absolute inset-0 block size-full max-w-none" src={imgIcon4} />
							</div>
						</div>
					</div>
				</div>
				<div
					class="relative flex w-full shrink-0 flex-col content-stretch items-start gap-[12px]"
					data-name="Flex Vertical"
				>
					<p
						class="relative w-[171px] shrink-0 font-['Geist:Medium'] text-[18px] leading-[0] font-medium [word-break:break-word] text-[#0a0a0a]"
					>
						<span class="leading-[28px]">{`Color : `}</span>
						<span class="leading-[28px] text-[#737373]">Surf the Web</span>
					</p>
					<div
						class="relative flex w-[90px] shrink-0 content-stretch items-center gap-[6px]"
						data-name="Flex Horizontal"
					>
						<div class="relative size-[30px] shrink-0" data-name="Color">
							<img alt="" class="absolute inset-0 block size-full max-w-none" src={imgColor} />
						</div>
						<div class="relative size-[24px] shrink-0" data-name="Color">
							<img alt="" class="absolute inset-0 block size-full max-w-none" src={imgColor1} />
						</div>
						<div class="relative size-[24px] shrink-0" data-name="Color">
							<img alt="" class="absolute inset-0 block size-full max-w-none" src={imgColor2} />
						</div>
					</div>
				</div>
				<div
					class="relative flex w-full shrink-0 flex-col content-stretch items-start justify-center gap-[16px]"
					data-name="Flex Vertical"
				>
					<div
						class="relative flex w-full shrink-0 content-stretch items-center justify-between"
						data-name="Flex Horizontal"
					>
						<p
							class="relative w-[299px] shrink-0 font-['Geist:Medium'] text-[18px] leading-[28px] font-medium [word-break:break-word] text-[#0a0a0a]"
						>
							Select Size
						</p>
						<div
							class="relative flex w-[299px] shrink-0 content-stretch items-center justify-end gap-[4px]"
							data-name="Flex Horizontal"
						>
							<p
								class="relative shrink-0 font-['Geist:Regular'] text-[14px] leading-[20px] font-normal [word-break:break-word] whitespace-nowrap text-[#0284c7]"
							>
								Size Guide
							</p>
							<div class="relative size-[18px] shrink-0" data-name="left-icon">
								<img
									alt=""
									class="absolute inset-0 block size-full max-w-none"
									src={imgLeftIcon8}
								/>
							</div>
						</div>
					</div>
					<div
						class="relative flex w-[598px] shrink-0 content-stretch items-start gap-[16px]"
						data-name="Flex Horizontal"
					>
						<div
							class="relative flex shrink-0 flex-col content-stretch items-center justify-center gap-[4px]"
							data-name="Flex Vertical"
						>
							<div
								class="relative flex w-[34px] shrink-0 content-stretch items-center justify-center gap-[4px] rounded-[8px] border border-solid border-[#e5e5e5] bg-white px-[10px] py-[4px]"
								data-name="Outline Button"
							>
								<div
									class="relative flex shrink-0 flex-col justify-center font-['Geist:Medium'] text-[14px] leading-[0] font-medium [word-break:break-word] whitespace-nowrap text-[#0a0a0a]"
								>
									<p class="leading-[20px]">XS</p>
								</div>
							</div>
							<div
								class="relative flex shrink-0 flex-col justify-center text-center font-['Geist:Medium'] text-[14px] leading-[0] font-medium [word-break:break-word] whitespace-nowrap text-[#dc2626]"
							>
								<p class="leading-[20px]">1 left</p>
							</div>
						</div>
						<div
							class="relative flex shrink-0 content-stretch items-center justify-center gap-[4px] rounded-[8px] border border-solid border-[#e5e5e5] bg-white px-[10px] py-[4px]"
							data-name="Outline Button"
						>
							<div
								class="relative flex shrink-0 flex-col justify-center font-['Geist:Medium'] text-[14px] leading-[0] font-medium [word-break:break-word] whitespace-nowrap text-[#0a0a0a]"
							>
								<p class="leading-[20px]">S</p>
							</div>
						</div>
						<div
							class="relative flex shrink-0 content-stretch items-center justify-center gap-[4px] rounded-[8px] border border-solid border-[#e5e5e5] bg-white px-[10px] py-[4px]"
							data-name="Outline Button"
						>
							<div
								class="relative flex shrink-0 flex-col justify-center font-['Geist:Medium'] text-[14px] leading-[0] font-medium [word-break:break-word] whitespace-nowrap text-[#0a0a0a]"
							>
								<p class="leading-[20px]">M</p>
							</div>
						</div>
						<div
							class="relative flex shrink-0 flex-col content-stretch items-center justify-center gap-[4px]"
							data-name="Flex Vertical"
						>
							<div
								class="relative flex shrink-0 content-stretch items-center justify-center gap-[6px] overflow-clip rounded-[8px] bg-[#171717] px-[12px] py-[6px]"
								data-name="Solid Button"
							>
								<div
									class="relative flex shrink-0 flex-col justify-center font-['Geist:Medium'] text-[14px] leading-[0] font-medium [word-break:break-word] whitespace-nowrap text-[#fafafa]"
								>
									<p class="leading-[20px]">L</p>
								</div>
							</div>
							<div
								class="relative flex shrink-0 flex-col justify-center text-center font-['Geist:Medium'] text-[14px] leading-[0] font-medium [word-break:break-word] whitespace-nowrap text-[#dc2626]"
							>
								<p class="leading-[20px]">2 left</p>
							</div>
						</div>
						<div
							class="relative flex shrink-0 content-stretch items-center justify-center gap-[4px] rounded-[8px] border border-solid border-[#e5e5e5] bg-[#f5f5f5] px-[10px] py-[4px]"
							data-name="Outline Button"
						>
							<div
								class="relative flex shrink-0 flex-col justify-center text-center font-['Geist:Medium'] text-[14px] leading-[0] font-medium [word-break:break-word] whitespace-nowrap text-[#737373]"
							>
								<p class="leading-[20px]">XL</p>
							</div>
						</div>
					</div>
				</div>
				<div
					class="relative flex w-full shrink-0 flex-col content-stretch items-start gap-[16px]"
					data-name="Flex Vertical"
				>
					<p
						class="relative w-full shrink-0 font-['Geist:Medium'] text-[16px] leading-[0] font-medium [word-break:break-word] text-[#0a0a0a]"
					>
						<span class="leading-[24px]">Product not available?</span>
						<span class="leading-[24px] text-[#16a34a]">{` notify me `}</span>
					</p>
					<div
						class="relative flex w-full shrink-0 content-stretch items-center gap-[16px]"
						data-name="Flex Horizontal"
					>
						<InputNumber
							class="relative flex h-[36px] w-[128px] shrink-0 flex-col content-stretch items-start gap-[8px]"
						/>
						<button
							type="button"
							class="relative flex min-w-px flex-[1_0_0] cursor-pointer content-stretch items-center justify-center gap-[6px] overflow-clip rounded-[10px] bg-[#171717] px-[16px] py-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]"
							data-name="Solid Button"
							onclick={() => goto('/products/phone')}
						>
							<div
								class="relative flex shrink-0 flex-col justify-center text-center font-['Geist:Medium'] text-[14px] leading-[0] font-medium [word-break:break-word] whitespace-nowrap text-[#fafafa]"
							>
								<p class="leading-[20px]">Add to Cart</p>
							</div>
							<div class="relative size-[16px] shrink-0" data-name="Right-icon">
								<img
									alt=""
									class="absolute inset-0 block size-full max-w-none"
									src={imgRightIcon}
								/>
							</div>
						</button>
						<div
							class="relative flex min-w-px flex-[1_0_0] content-stretch items-center justify-center gap-[6px] overflow-clip rounded-[10px] border border-solid border-[#e5e5e5] bg-white px-[16px] py-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]"
							data-name="Outline Button"
						>
							<div
								class="relative flex shrink-0 flex-col justify-center text-center font-['Geist:Medium'] text-[14px] leading-[0] font-medium [word-break:break-word] whitespace-nowrap text-[#0a0a0a]"
							>
								<p class="leading-[20px]">Buy Now</p>
							</div>
							<div class="relative size-[16px] shrink-0" data-name="Right icon">
								<img
									alt=""
									class="absolute inset-0 block size-full max-w-none"
									src={imgRightIcon1}
								/>
							</div>
						</div>
					</div>
				</div>
				<div
					class="relative flex w-full shrink-0 flex-col content-stretch items-start gap-[16px] overflow-clip rounded-[14px] bg-white py-[16px] shadow-[0px_0px_0px_1px_rgba(10,10,10,0.1)]"
					data-name="Card"
				>
					<div
						class="relative flex w-full shrink-0 flex-col content-stretch items-start px-[16px]"
						data-name="card-body"
					>
						<div class="relative flex w-full shrink-0 content-stretch items-center gap-[24px]">
							<div class="relative size-[30px] shrink-0" data-name="arrow-right-left icon">
								<img alt="" class="absolute inset-0 block size-full max-w-none" src={imgCardBody} />
							</div>
							<div
								class="relative flex min-w-px flex-[1_0_0] flex-col content-stretch items-start gap-[6px] [word-break:break-word]"
								data-name="Free delivery"
							>
								<p
									class="relative w-full shrink-0 font-['Geist:Medium'] text-[18px] leading-[28px] font-medium text-[#0a0a0a]"
								>
									Return or Exchange
								</p>
								<p
									class="relative w-full shrink-0 font-['Geist:Regular'] text-[0px] leading-[0] font-normal text-[#737373]"
								>
									<span class="text-[16px] leading-[24px]">Free 30 Days Delivery</span>
									<span class="text-[16px] leading-[24px]">{` `}</span>
									<a
										href="/account/return-item"
										class="text-[16px] leading-[24px] text-[#0a0a0a] underline decoration-solid decoration-from-font [text-decoration-skip-ink:none] [text-underline-position:from-font] hover:underline"
										>Return or Exchange Policy</a
									>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div
		class="relative flex w-full shrink-0 flex-col content-stretch items-center justify-center bg-white py-[56px]"
		data-name="Data table"
	>
		<div
			class="relative flex w-full max-w-[1280px] shrink-0 flex-col content-stretch items-start gap-[24px] px-[32px]"
			data-name="Flex Vertical"
		>
			<p
				class="relative w-full shrink-0 font-['Geist:SemiBold'] text-[24px] leading-[32px] font-semibold [word-break:break-word] text-[#0a0a0a]"
			>
				Key Highlights
			</p>
			<div
				class="relative flex w-full shrink-0 flex-col content-stretch items-start"
				data-name="Table"
			>
				<div
					class="relative flex w-full shrink-0 content-stretch items-center justify-center"
					data-name="table-container"
				>
					<div class="flex flex-[1_0_0] flex-row items-center self-stretch">
						<div
							class="relative flex h-full min-w-[275px] flex-[1_0_0] flex-col content-stretch items-start"
							data-name="table-column"
						>
							<div
								class="relative flex h-[120px] w-full shrink-0 content-stretch items-center rounded-tl-[8px] border-b border-solid border-[#e5e5e5] bg-[#171717] px-[8px]"
								data-name="table-header"
							>
								<div
									class="relative flex h-[40px] min-w-px flex-[1_0_0] content-stretch items-center gap-[10px]"
									data-name="table-header-container"
								>
									<p
										class="relative min-w-px flex-[1_0_0] text-center font-['Geist:SemiBold'] text-[16px] leading-[24px] font-semibold [word-break:break-word] text-[#fafafa]"
									>
										Category
									</p>
								</div>
							</div>
							<div
								class="relative flex min-h-px w-full flex-[1_0_0] flex-col content-stretch items-start justify-center border-r border-b border-l border-solid border-[#e5e5e5] p-[8px]"
								data-name="table-cell"
							>
								<div
									class="relative flex w-full shrink-0 flex-col content-stretch items-start justify-center"
									data-name="Status Container"
								>
									<div
										class="relative flex w-full shrink-0 flex-col justify-center text-center font-['Geist:Regular'] text-[16px] leading-[0] font-normal [word-break:break-word] text-[#737373]"
									>
										<p class="leading-[24px]">Everyday Wear</p>
									</div>
								</div>
							</div>
							<div
								class="relative flex min-h-px w-full flex-[1_0_0] flex-col content-stretch items-start justify-center rounded-bl-[8px] border-r border-b border-l border-solid border-[#e5e5e5] p-[8px]"
								data-name="table-cell"
							>
								<div
									class="relative flex w-full shrink-0 flex-col content-stretch items-start justify-center"
									data-name="Status Container"
								>
									<div
										class="relative flex w-full shrink-0 flex-col justify-center text-center font-['Geist:Regular'] text-[16px] leading-[0] font-normal [word-break:break-word] text-[#737373]"
									>
										<p class="leading-[24px]">Designer Tees</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="flex flex-[1_0_0] flex-row items-center self-stretch">
						<div
							class="relative flex h-full min-w-px flex-[1_0_0] flex-col content-stretch items-start"
							data-name="table-column"
						>
							<div
								class="relative flex h-[120px] w-full shrink-0 content-stretch items-center border-b border-solid border-[#e5e5e5] bg-[#171717] px-[8px]"
								data-name="table-header"
							>
								<div
									class="relative flex min-w-px flex-[1_0_0] content-stretch items-center gap-[10px]"
									data-name="table-header-container"
								>
									<p
										class="relative min-w-px flex-[1_0_0] text-center font-['Geist:SemiBold'] text-[16px] leading-[24px] font-semibold [word-break:break-word] text-[#fafafa]"
									>
										Manufacture
									</p>
								</div>
							</div>
							<div
								class="relative flex min-h-px w-full flex-[1_0_0] flex-col content-stretch items-center justify-center border-r border-b border-solid border-[#e5e5e5] p-[8px]"
								data-name="table-cell"
							>
								<div
									class="relative flex w-full shrink-0 flex-col content-stretch items-start justify-center"
									data-name="Status Container"
								>
									<div
										class="relative flex w-full shrink-0 flex-col justify-center text-center font-['Geist:Regular'] text-[16px] leading-[0] font-normal [word-break:break-word] text-[#737373]"
									>
										<p class="leading-[24px]">UrbanDrip</p>
									</div>
								</div>
							</div>
							<div
								class="relative flex min-h-px w-full flex-[1_0_0] flex-col content-stretch items-start justify-center border-r border-b border-solid border-[#e5e5e5] p-[8px]"
								data-name="table-cell"
							>
								<div
									class="relative flex w-full shrink-0 flex-col content-stretch items-start justify-center"
									data-name="Status Container"
								>
									<div
										class="relative flex w-full shrink-0 flex-col justify-center text-center font-['Geist:Regular'] text-[16px] leading-[0] font-normal [word-break:break-word] text-[#737373]"
									>
										<p class="leading-[24px]">UrbanDrip</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="flex flex-[1_0_0] flex-row items-center self-stretch">
						<div
							class="relative flex h-full min-w-px flex-[1_0_0] flex-col content-stretch items-start"
							data-name="table-column"
						>
							<div
								class="relative flex h-[120px] w-full shrink-0 content-stretch items-center justify-center border-b border-solid border-[#e5e5e5] bg-[#171717] px-[8px]"
								data-name="table-header"
							>
								<div
									class="relative flex h-[40px] min-w-px flex-[1_0_0] content-stretch items-center gap-[10px]"
									data-name="table-header-container"
								>
									<p
										class="relative min-w-px flex-[1_0_0] text-center font-['Geist:SemiBold'] text-[16px] leading-[24px] font-semibold [word-break:break-word] text-[#fafafa]"
									>
										Product Material
									</p>
								</div>
							</div>
							<div
								class="relative flex min-h-px w-full flex-[1_0_0] flex-col content-stretch items-center justify-center border-r border-b border-solid border-[#e5e5e5] p-[8px]"
								data-name="table-cell"
							>
								<div
									class="relative flex w-full shrink-0 flex-col content-stretch items-start justify-center"
									data-name="Status Container"
								>
									<div
										class="relative flex w-full shrink-0 flex-col justify-center text-center font-['Geist:Regular'] text-[16px] leading-[0] font-normal [word-break:break-word] text-[#737373]"
									>
										<p class="leading-[24px]">100% Cotton</p>
									</div>
								</div>
							</div>
							<div
								class="relative flex min-h-px w-full flex-[1_0_0] flex-col content-stretch items-center justify-center border-r border-b border-solid border-[#e5e5e5] p-[8px]"
								data-name="table-cell"
							>
								<div
									class="relative flex w-full shrink-0 flex-col content-stretch items-start justify-center"
									data-name="Status Container"
								>
									<div
										class="relative flex w-full shrink-0 flex-col justify-center text-center font-['Geist:Regular'] text-[16px] leading-[0] font-normal [word-break:break-word] text-[#737373]"
									>
										<p class="leading-[24px]">Cotton + Polyester Blend</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="flex flex-[1_0_0] flex-row items-center self-stretch">
						<div
							class="relative flex h-full min-w-px flex-[1_0_0] flex-col content-stretch items-start"
							data-name="table-column"
						>
							<div
								class="relative flex h-[120px] w-full shrink-0 content-stretch items-center border-b border-solid border-[#e5e5e5] bg-[#171717] px-[8px]"
								data-name="table-header"
							>
								<div
									class="relative flex h-[40px] min-w-px flex-[1_0_0] content-stretch items-center gap-[10px]"
									data-name="table-header-container"
								>
									<div
										class="relative flex min-w-px flex-[1_0_0] flex-col justify-center text-center font-['Geist:SemiBold'] text-[16px] leading-[0] font-semibold [word-break:break-word] text-[#fafafa]"
									>
										<p class="leading-[24px]">Product Compatibility</p>
									</div>
								</div>
							</div>
							<div
								class="relative flex min-h-px w-full flex-[1_0_0] flex-col content-stretch items-center justify-center border-r border-b border-solid border-[#e5e5e5] p-[8px]"
								data-name="table-cell"
							>
								<div
									class="relative flex w-[175.5px] shrink-0 flex-col content-stretch items-start justify-center"
									data-name="Status Container"
								>
									<div
										class="relative flex w-full shrink-0 flex-col justify-center text-center font-['Geist:Regular'] text-[16px] leading-[0] font-normal [word-break:break-word] text-[#737373]"
									>
										<p class="leading-[24px]">Regular Fit (All Sizes)</p>
									</div>
								</div>
							</div>
							<div
								class="relative flex min-h-px w-full flex-[1_0_0] flex-col content-stretch items-center justify-center border-r border-b border-solid border-[#e5e5e5] p-[8px]"
								data-name="table-cell"
							>
								<div
									class="relative flex w-[175.5px] shrink-0 flex-col content-stretch items-start justify-center"
									data-name="Status Container"
								>
									<div
										class="relative flex w-full shrink-0 flex-col justify-center text-center font-['Geist:Regular'] text-[16px] leading-[0] font-normal [word-break:break-word] text-[#737373]"
									>
										<p class="leading-[24px]">Unisex Fit</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="flex flex-[1_0_0] flex-row items-center self-stretch">
						<div
							class="relative flex h-full min-w-px flex-[1_0_0] flex-col content-stretch items-start"
							data-name="table-column"
						>
							<div
								class="relative flex h-[120px] w-full shrink-0 content-stretch items-center rounded-tr-[8px] border-b border-solid border-[#e5e5e5] bg-[#171717] px-[8px]"
								data-name="table-header"
							>
								<div
									class="relative flex h-full min-w-px flex-[1_0_0] content-stretch items-center gap-[10px]"
									data-name="table-header-container"
								>
									<p
										class="relative min-w-px flex-[1_0_0] text-center font-['Geist:SemiBold'] text-[16px] leading-[24px] font-semibold [word-break:break-word] text-[#fafafa]"
									>
										Features
									</p>
								</div>
							</div>
							<div
								class="relative flex w-full shrink-0 flex-col content-stretch items-start justify-center border-r border-b border-solid border-[#e5e5e5] p-[8px]"
								data-name="table-cell"
							>
								<div
									class="relative flex w-full shrink-0 flex-col content-stretch items-center justify-center"
									data-name="Status Container"
								>
									<div
										class="relative flex shrink-0 flex-col content-stretch items-start justify-center gap-[10px]"
										data-name="Features Container"
									>
										<div
											class="relative flex shrink-0 content-stretch items-center gap-[4px]"
											data-name="Feature Item"
										>
											<div class="relative size-[16px] shrink-0" data-name="ICON">
												<img
													alt=""
													class="absolute inset-0 block size-full max-w-none"
													src={imgTableContainer}
												/>
											</div>
											<p
												class="relative w-[139px] shrink-0 font-['Geist:Regular'] text-[16px] leading-[24px] font-normal [word-break:break-word] whitespace-pre-wrap text-[#737373]"
											>
												{`Lightweight  `}
											</p>
										</div>
										<div
											class="relative flex shrink-0 content-stretch items-center gap-[4px]"
											data-name="Feature Item"
										>
											<div class="relative size-[16px] shrink-0" data-name="ICON">
												<img
													alt=""
													class="absolute inset-0 block size-full max-w-none"
													src={imgTableContainer}
												/>
											</div>
											<p
												class="relative w-[139px] shrink-0 font-['Geist:Regular'] text-[16px] leading-[24px] font-normal [word-break:break-word] text-[#737373]"
											>
												Skin-friendly
											</p>
										</div>
									</div>
								</div>
							</div>
							<div
								class="relative flex w-full shrink-0 flex-col content-stretch items-start justify-center rounded-br-[8px] border-r border-b border-solid border-[#e5e5e5] p-[8px]"
								data-name="table-cell"
							>
								<div
									class="relative flex w-full shrink-0 flex-col content-stretch items-center justify-center"
									data-name="Status Container"
								>
									<div
										class="relative flex shrink-0 flex-col content-stretch items-start justify-center gap-[10px]"
										data-name="Features Container"
									>
										<div
											class="relative flex shrink-0 content-stretch items-center gap-[4px]"
											data-name="Feature Item"
										>
											<div class="relative size-[16px] shrink-0" data-name="ICON">
												<img
													alt=""
													class="absolute inset-0 block size-full max-w-none"
													src={imgTableContainer}
												/>
											</div>
											<p
												class="relative w-[139px] shrink-0 font-['Geist:Regular'] text-[16px] leading-[24px] font-normal [word-break:break-word] text-[#737373]"
											>
												Eco-friendly
											</p>
										</div>
										<div
											class="relative flex shrink-0 content-stretch items-center gap-[4px]"
											data-name="Feature Item"
										>
											<div class="relative size-[16px] shrink-0" data-name="ICON">
												<img
													alt=""
													class="absolute inset-0 block size-full max-w-none"
													src={imgTableContainer}
												/>
											</div>
											<p
												class="relative w-[139px] shrink-0 font-['Geist:Regular'] text-[16px] leading-[24px] font-normal [word-break:break-word] text-[#737373]"
											>
												Premium feel
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div
		class="relative flex w-full shrink-0 flex-col content-stretch items-center justify-center py-[56px]"
		data-name="Product reviews"
	>
		<div
			class="relative flex w-full max-w-[1280px] shrink-0 flex-col content-stretch items-center justify-center gap-[24px] px-[32px]"
			data-name="Flex Vertical"
		>
			<p
				class="relative h-[32px] w-[1200px] shrink-0 font-['Geist:SemiBold'] text-[24px] leading-[32px] font-semibold [word-break:break-word] text-[#0a0a0a]"
			>
				Reviews
			</p>
			<div
				class="relative flex w-full max-w-[1200px] shrink-0 content-stretch items-start gap-[48px]"
				data-name="Flex Horizontal"
			>
				<div
					class="relative flex max-w-[361px] min-w-[328px] flex-[1_0_0] flex-col content-stretch items-start self-stretch"
					data-name="Right"
				>
					<div
						class="relative flex w-full shrink-0 flex-col content-stretch items-start gap-[16px] overflow-clip rounded-[14px] bg-[#f5f5f5] py-[24px]"
						data-name="Card"
					>
						<div
							class="relative flex w-full shrink-0 flex-col content-stretch items-start gap-[24px] px-[24px]"
							data-name="card-body"
						>
							<div
								class="relative flex w-full shrink-0 flex-col content-stretch items-center justify-center gap-[8px]"
								data-name="Flex Vertical"
							>
								<div
									class="relative flex w-full shrink-0 flex-col content-stretch items-center justify-center gap-[12px]"
									data-name="Flex Vertical"
								>
									<p
										class="relative shrink-0 font-['Geist:SemiBold'] text-[0px] leading-[0] font-semibold [word-break:break-word] whitespace-nowrap text-[#0a0a0a]"
									>
										<span class="text-[60px] leading-[normal]">4.5</span>
										<span class="text-[36px] leading-[40px]">/5</span>
									</p>
									<div
										class="relative flex shrink-0 content-stretch items-start"
										data-name="Rating"
									>
										<div class="relative size-[24px] shrink-0" data-name="Rating / Item">
											<img
												alt=""
												class="absolute inset-0 block size-full max-w-none"
												src={imgCardBody1}
											/>
										</div>
										<div class="relative size-[24px] shrink-0" data-name="Rating / Item">
											<img
												alt=""
												class="absolute inset-0 block size-full max-w-none"
												src={imgCardBody1}
											/>
										</div>
										<div class="relative size-[24px] shrink-0" data-name="Rating / Item">
											<img
												alt=""
												class="absolute inset-0 block size-full max-w-none"
												src={imgCardBody1}
											/>
										</div>
										<div class="relative size-[24px] shrink-0" data-name="Rating / Item">
											<img
												alt=""
												class="absolute inset-0 block size-full max-w-none"
												src={imgCardBody1}
											/>
										</div>
										<div class="relative size-[24px] shrink-0" data-name="Half filled star">
											<div class="absolute inset-0 contents" data-name="Mask group">
												<div
													class="absolute top-0 right-0 bottom-0 left-1/2 bg-[rgba(217,119,6,0.2)] mask-intersect mask-alpha mask-size-[24px_24px] mask-no-clip mask-position-[-12px_0px] mask-no-repeat"
													style="mask-image: url('{imgCardBody2}')"
												></div>
											</div>
											<div
												class="absolute inset-0 contents"
												style="container-type: size"
												data-name="Mask group"
											>
												<div
													class="absolute top-0 right-1/2 bottom-0 left-0 flex items-center justify-center"
													style="container-type: size"
												>
													<div class="h-[100cqh] w-[100cqw] flex-none -scale-x-100">
														<div
															class="relative size-full bg-[#d97706] mask-intersect mask-alpha mask-size-[24px_24px] mask-no-clip mask-no-repeat"
															style="mask-image: url('{imgCardBody2}')"
														></div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<p
									class="relative shrink-0 font-['Geist:Medium'] text-[16px] leading-[24px] font-medium [word-break:break-word] whitespace-nowrap text-[#0a0a0a]"
								>
									Based on 65 verified reviews
								</p>
							</div>
							<div
								class="relative flex w-full shrink-0 flex-col content-stretch items-start"
								data-name="Flex Vertical"
							>
								<div
									class="relative flex w-full min-w-[248px] shrink-0 flex-col content-stretch items-start justify-center"
									data-name="Text"
								>
									<div
										class="relative flex w-full shrink-0 flex-col content-stretch items-start gap-[10px]"
										data-name="Rating Distribution Container"
									>
										<div
											class="relative flex w-full shrink-0 content-stretch items-center gap-[12px]"
											data-name="Rating Distribution Row"
										>
											<div
												class="relative flex shrink-0 content-stretch items-center gap-[2px]"
												data-name="Rating Distribution Star Container"
											>
												<p
													class="relative shrink-0 font-['Geist:SemiBold'] text-[14px] leading-[20px] font-semibold [word-break:break-word] whitespace-nowrap text-[#0a0a0a]"
												>
													5
												</p>
												<div
													class="relative flex shrink-0 content-stretch items-start"
													data-name="Rating"
												>
													<div class="relative size-[16px] shrink-0" data-name="Rating / Item">
														<img
															alt=""
															class="absolute inset-0 block size-full max-w-none"
															src={imgRatingItem}
														/>
													</div>
												</div>
											</div>
											<div
												class="relative flex min-w-px flex-[1_0_0] flex-col content-stretch items-start gap-[8px] overflow-clip"
												data-name="Progress"
											>
												<div
													class="relative h-[10px] w-full shrink-0 overflow-clip rounded-[9999px] bg-[#f5f5f5]"
													data-name="Progress"
												>
													<div class="absolute inset-0 bg-[#d97706]" data-name="Bar"></div>
												</div>
											</div>
										</div>
										<div
											class="relative flex w-full shrink-0 content-stretch items-center gap-[12px]"
											data-name="Rating Distribution Row"
										>
											<div
												class="relative flex shrink-0 content-stretch items-center gap-[2px]"
												data-name="Rating Distribution Star Container"
											>
												<p
													class="relative shrink-0 font-['Geist:SemiBold'] text-[14px] leading-[20px] font-semibold [word-break:break-word] whitespace-nowrap text-[#0a0a0a]"
												>
													4
												</p>
												<div
													class="relative flex shrink-0 content-stretch items-start"
													data-name="Rating"
												>
													<div class="relative size-[16px] shrink-0" data-name="Rating / Item">
														<img
															alt=""
															class="absolute inset-0 block size-full max-w-none"
															src={imgRatingItem}
														/>
													</div>
												</div>
											</div>
											<div
												class="relative flex min-w-px flex-[1_0_0] flex-col content-stretch items-start gap-[8px] overflow-clip"
												data-name="Progress"
											>
												<div
													class="relative h-[10px] w-full shrink-0 overflow-clip rounded-[9999px] bg-[rgba(23,23,23,0.2)]"
													data-name="Progress"
												>
													<div
														class="absolute top-0 right-1/4 bottom-0 left-0 bg-[#d97706]"
														data-name="Bar"
													></div>
												</div>
											</div>
										</div>
										<div
											class="relative flex w-full shrink-0 content-stretch items-center gap-[12px]"
											data-name="Rating Distribution Row"
										>
											<div
												class="relative flex shrink-0 content-stretch items-center gap-[2px]"
												data-name="Rating Distribution Star Container"
											>
												<p
													class="relative shrink-0 font-['Geist:SemiBold'] text-[14px] leading-[20px] font-semibold [word-break:break-word] whitespace-nowrap text-[#0a0a0a]"
												>
													3
												</p>
												<div
													class="relative flex shrink-0 content-stretch items-start"
													data-name="Rating"
												>
													<div class="relative size-[16px] shrink-0" data-name="Rating / Item">
														<img
															alt=""
															class="absolute inset-0 block size-full max-w-none"
															src={imgRatingItem}
														/>
													</div>
												</div>
											</div>
											<div
												class="relative flex min-w-px flex-[1_0_0] flex-col content-stretch items-start gap-[8px] overflow-clip"
												data-name="Progress"
											>
												<div
													class="relative h-[10px] w-full shrink-0 overflow-clip rounded-[9999px] bg-[rgba(23,23,23,0.2)]"
													data-name="Progress"
												>
													<div
														class="absolute top-0 right-1/2 bottom-0 left-0 bg-[#d97706]"
														data-name="Bar"
													></div>
												</div>
											</div>
										</div>
										<div
											class="relative flex w-full shrink-0 content-stretch items-center gap-[12px]"
											data-name="Rating Distribution Row"
										>
											<div
												class="relative flex shrink-0 content-stretch items-center gap-[2px]"
												data-name="Rating Distribution Star Container"
											>
												<p
													class="relative shrink-0 font-['Geist:SemiBold'] text-[14px] leading-[20px] font-semibold [word-break:break-word] whitespace-nowrap text-[#0a0a0a]"
												>
													3
												</p>
												<div
													class="relative flex shrink-0 content-stretch items-start"
													data-name="Rating"
												>
													<div class="relative size-[16px] shrink-0" data-name="Rating / Item">
														<img
															alt=""
															class="absolute inset-0 block size-full max-w-none"
															src={imgRatingItem}
														/>
													</div>
												</div>
											</div>
											<div
												class="relative flex min-w-px flex-[1_0_0] flex-col content-stretch items-start gap-[8px] overflow-clip"
												data-name="Progress"
											>
												<div
													class="relative h-[10px] w-full shrink-0 overflow-clip rounded-[9999px] bg-[rgba(23,23,23,0.2)]"
													data-name="Progress"
												>
													<div
														class="absolute top-0 right-3/4 bottom-0 left-0 bg-[#d97706]"
														data-name="Bar"
													></div>
												</div>
											</div>
										</div>
										<div
											class="relative flex w-full shrink-0 content-stretch items-center gap-[12px]"
											data-name="Rating Distribution Row"
										>
											<div
												class="relative flex shrink-0 content-stretch items-center gap-[2px]"
												data-name="Rating Distribution Star Container"
											>
												<p
													class="relative shrink-0 font-['Geist:SemiBold'] text-[14px] leading-[20px] font-semibold [word-break:break-word] whitespace-nowrap text-[#0a0a0a]"
												>
													1
												</p>
												<div
													class="relative flex shrink-0 content-stretch items-start"
													data-name="Rating"
												>
													<div class="relative size-[16px] shrink-0" data-name="Rating / Item">
														<img
															alt=""
															class="absolute inset-0 block size-full max-w-none"
															src={imgRatingItem}
														/>
													</div>
												</div>
											</div>
											<div
												class="relative flex h-[10px] min-w-px flex-[1_0_0] flex-col content-stretch items-start gap-[8px] overflow-clip"
												data-name="Progress"
											>
												<div
													class="relative h-[10px] w-full shrink-0 overflow-clip rounded-[9999px] bg-[rgba(23,23,23,0.2)]"
													data-name="Progress"
												>
													<div
														class="absolute top-0 bottom-0 left-0 w-0 bg-[#d97706]"
														data-name="Bar"
													></div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div
								class="relative flex w-full min-w-[247px] shrink-0 content-stretch items-center gap-[20px]"
								data-name="Action"
							>
								<div
									class="relative flex min-w-px flex-[1_0_0] content-stretch items-center justify-center gap-[6px] overflow-clip rounded-[10px] bg-[#171717] px-[16px] py-[8px]"
									data-name="Solid Button"
								>
									<div
										class="relative flex shrink-0 flex-col justify-center font-['Geist:Medium'] text-[14px] leading-[0] font-medium [word-break:break-word] whitespace-nowrap text-[#fafafa]"
									>
										<p class="leading-[20px]">Write a review</p>
									</div>
								</div>
								<div
									class="relative flex min-w-px flex-[1_0_0] content-stretch items-center justify-center gap-[6px] rounded-[10px] border border-solid border-[#e5e5e5] bg-white px-[16px] py-[8px]"
									data-name="Outline Button"
								>
									<div
										class="relative flex shrink-0 flex-col justify-center font-['Geist:Medium'] text-[14px] leading-[0] font-medium [word-break:break-word] whitespace-nowrap text-[#0a0a0a]"
									>
										<p class="leading-[20px]">Ask a question</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div
					class="relative flex min-w-px flex-[1_0_0] flex-col content-stretch items-end gap-[20px]"
					data-name="Flex Vertical"
				>
					<div
						class="relative flex w-full shrink-0 content-stretch items-center gap-[20px]"
						data-name="Flex Horizontal"
					>
						<p
							class="relative h-[24px] w-[449px] shrink-0 font-['Geist:SemiBold'] text-[0px] leading-[0] font-semibold [word-break:break-word] text-[#737373]"
						>
							<span class="font-['Geist:Medium'] text-[16px] leading-[24px] font-medium"
								>Showing</span
							>
							<span class="text-[16px] leading-[24px]">{` 5,768 `}</span>
							<span class="font-['Geist:Medium'] text-[16px] leading-[24px] font-medium"
								>Customer Reviews</span
							>
						</p>
						<div
							class="relative flex shrink-0 content-stretch items-center justify-center gap-[10px] rounded-[8px] border border-solid border-[#e5e5e5] px-[16px] py-[8px]"
							data-name="Flex Horizontal"
						>
							<p
								class="relative shrink-0 font-['Geist:Medium'] text-[14px] leading-[20px] font-medium [word-break:break-word] whitespace-nowrap text-[#0a0a0a]"
							>
								All Reviews
							</p>
							<div class="relative size-[16px] shrink-0" data-name="Left-icon">
								<img alt="" class="absolute inset-0 block size-full max-w-none" src={imgLeftIcon} />
							</div>
						</div>
						<div
							class="relative flex shrink-0 content-stretch items-center justify-center gap-[10px] rounded-[8px] border border-solid border-[#e5e5e5] px-[16px] py-[8px]"
							data-name="Flex Horizontal"
						>
							<p
								class="relative shrink-0 font-['Geist:Medium'] text-[14px] leading-[20px] font-medium [word-break:break-word] whitespace-nowrap text-[#0a0a0a]"
							>
								Recently Added
							</p>
							<div class="relative size-[16px] shrink-0" data-name="Left-icon">
								<img alt="" class="absolute inset-0 block size-full max-w-none" src={imgLeftIcon} />
							</div>
						</div>
					</div>
					<div
						class="relative flex w-full min-w-[312px] shrink-0 flex-col content-stretch items-start justify-center gap-[36px] border-t border-b border-solid border-[#e5e5e5] bg-white p-[12px]"
						data-name="Flex Vertical"
					>
						<div
							class="relative flex w-full shrink-0 flex-col content-stretch items-start gap-[10px]"
							data-name="Flex Vertical"
						>
							<div
								class="relative flex shrink-0 content-stretch items-center gap-[12px]"
								data-name="Flex Horizontal"
							>
								<Rating class="relative flex shrink-0 content-stretch items-start" />
								<p
									class="relative shrink-0 font-['Geist:Regular'] text-[14px] leading-[20px] font-normal [word-break:break-word] whitespace-nowrap text-[#737373]"
								>
									November 18 2023 at 15:08
								</p>
							</div>
							<p
								class="relative w-[min-content] min-w-full shrink-0 font-['Geist:Regular'] text-[18px] leading-[28px] font-normal [word-break:break-word] text-[#737373]"
							>
								Almost complete building my replacement website and very pleased with the result.
								although the customization is freate the theme’s features and customer support have
								also been great.
							</p>
							<div
								class="relative flex w-full shrink-0 content-stretch items-end gap-[14px]"
								data-name="Flex Horizontal"
							>
								<div class="relative size-[72px] shrink-0 rounded-[6px]" data-name="Review Image">
									<div class="pointer-events-none absolute inset-0 overflow-hidden rounded-[6px]">
										<img
											alt=""
											class="absolute top-[-4.86%] left-[-0.09%] h-[125.36%] w-full max-w-none"
											src={imgReviewImage}
										/>
									</div>
								</div>
								<div class="relative size-[72px] shrink-0 rounded-[6px]" data-name="Review Image">
									<div class="pointer-events-none absolute inset-0 overflow-hidden rounded-[6px]">
										<img
											alt=""
											class="absolute top-[-59.33%] left-[-20.13%] h-[177.78%] w-[139.13%] max-w-none"
											src={imgReviewImage1}
										/>
									</div>
								</div>
								<div class="relative size-[72px] shrink-0 rounded-[6px]" data-name="Review Image">
									<img
										alt=""
										class="pointer-events-none absolute inset-0 size-full max-w-none rounded-[6px] object-cover"
										src={imgReviewImage2}
									/>
								</div>
							</div>
						</div>
						<div
							class="relative flex w-full shrink-0 content-stretch items-center justify-between"
							data-name="Flex Horizontal"
						>
							<div class="flex flex-row items-center self-stretch">
								<div
									class="relative flex h-full w-[181px] shrink-0 content-stretch items-center gap-[16px]"
									data-name="Flex Horizontal"
								>
									<Avatar
										class="relative size-[50px] shrink-0 overflow-clip rounded-[9999px] border border-solid border-[#e5e5e5]"
										shape="Circle"
										size="lg"
									/>
									<div
										class="relative flex min-w-px flex-[1_0_0] flex-col content-stretch items-start gap-[2px]"
										data-name="Flex Vertical"
									>
										<p
											class="relative w-full shrink-0 font-['Geist:SemiBold'] text-[16px] leading-[24px] font-semibold [word-break:break-word] text-[#0a0a0a]"
										>
											Cristofer Torff
										</p>
										<div
											class="relative flex w-full shrink-0 content-stretch items-center gap-[4px]"
											data-name="Flex Horizontal"
										>
											<div class="relative size-[18px] shrink-0" data-name="Action">
												<img
													alt=""
													class="absolute inset-0 block size-full max-w-none"
													src={imgAction}
												/>
											</div>
											<p
												class="relative shrink-0 font-['Geist:Regular'] text-[16px] leading-[24px] font-normal [word-break:break-word] whitespace-nowrap text-[#737373]"
											>
												Verified
											</p>
										</div>
									</div>
								</div>
							</div>
							<div
								class="relative flex min-w-px flex-[1_0_0] content-stretch items-center justify-end gap-[6px]"
								data-name="action"
							>
								<div
									class="relative flex shrink-0 content-stretch items-center justify-center gap-[6px] overflow-clip rounded-[10px] border border-solid border-[#e5e5e5] bg-white px-[16px] py-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]"
									data-name="Outline Button"
								>
									<div
										class="relative flex shrink-0 flex-col justify-center text-center font-['Geist:Medium'] text-[14px] leading-[0] font-medium [word-break:break-word] whitespace-nowrap text-[#0a0a0a]"
									>
										<p class="leading-[20px]">Helpful (2)</p>
									</div>
								</div>
								<div
									class="relative flex shrink-0 content-stretch items-center justify-center gap-[6px] overflow-clip rounded-[10px] px-[16px] py-[8px] drop-shadow-[0px_1px_1.5px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.1)]"
									data-name="Ghost Button"
								>
									<div class="relative size-[16px] shrink-0" data-name="Left icon">
										<img
											alt=""
											class="absolute inset-0 block size-full max-w-none"
											src={imgLeftIcon9}
										/>
									</div>
									<div
										class="relative flex shrink-0 flex-col justify-center text-center font-['Geist:Medium'] text-[14px] leading-[0] font-medium [word-break:break-word] whitespace-nowrap text-[#0a0a0a]"
									>
										<p class="leading-[20px]">Report</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div
						class="relative flex w-full min-w-[312px] shrink-0 flex-col content-stretch items-start justify-center gap-[36px] border-b border-solid border-[#e5e5e5] bg-white p-[12px]"
						data-name="Flex Vertical"
					>
						<div
							class="relative flex w-full shrink-0 flex-col content-stretch items-start gap-[10px]"
							data-name="Review Card"
						>
							<div
								class="relative flex shrink-0 content-stretch items-center gap-[12px]"
								data-name="star"
							>
								<Rating class="relative flex shrink-0 content-stretch items-start" />
								<p
									class="relative shrink-0 font-['Geist:Regular'] text-[14px] leading-[20px] font-normal [word-break:break-word] whitespace-nowrap text-[#737373]"
								>
									June 12 2023 at 02:08
								</p>
							</div>
							<p
								class="relative w-[min-content] min-w-full shrink-0 font-['Geist:Regular'] text-[18px] leading-[28px] font-normal [word-break:break-word] text-[#737373]"
							>
								Almost complete building my replacement website and very pleased with the result.
								although the customization is freate the theme’s features and customer support have
								also been great.
							</p>
							<div
								class="relative flex w-full shrink-0 content-stretch items-end gap-[14px]"
								data-name="Image Group"
							>
								<div class="relative size-[72px] shrink-0 rounded-[6px]" data-name="image">
									<img
										alt=""
										class="pointer-events-none absolute inset-0 size-full max-w-none rounded-[6px] object-cover"
										src={imgImage8}
									/>
								</div>
								<div class="relative size-[72px] shrink-0 rounded-[6px]" data-name="image">
									<img
										alt=""
										class="pointer-events-none absolute inset-0 size-full max-w-none rounded-[6px] object-cover"
										src={imgImage9}
									/>
								</div>
							</div>
						</div>
						<div
							class="relative flex w-full shrink-0 content-stretch items-center justify-between rounded-[6px]"
							data-name="Reviewer Info"
						>
							<div
								class="relative flex min-w-px flex-[1_0_0] content-stretch items-center gap-[16px]"
								data-name="User"
							>
								<div
									class="relative size-[50px] shrink-0 overflow-clip rounded-[9999px] border border-solid border-[#e5e5e5]"
									data-name="Avatar"
								>
									<div class="absolute inset-[-1px]" data-name="pic">
										<img
											alt=""
											class="pointer-events-none absolute inset-0 size-full max-w-none object-cover"
											src={imgPic2}
										/>
									</div>
								</div>
								<div
									class="relative flex min-w-px flex-[1_0_0] flex-col content-stretch items-start gap-[2px]"
									data-name="Text"
								>
									<p
										class="relative w-full shrink-0 font-['Geist:SemiBold'] text-[16px] leading-[24px] font-semibold [word-break:break-word] text-[#0a0a0a]"
									>
										Cris Baptista
									</p>
									<div
										class="relative flex w-full shrink-0 content-stretch items-center gap-[4px]"
										data-name="Review Meta Container"
									>
										<div class="relative size-[18px] shrink-0" data-name="Action">
											<img
												alt=""
												class="absolute inset-0 block size-full max-w-none"
												src={imgAction}
											/>
										</div>
										<p
											class="relative shrink-0 font-['Geist:Regular'] text-[16px] leading-[24px] font-normal [word-break:break-word] whitespace-nowrap text-[#737373]"
										>
											Verified
										</p>
									</div>
								</div>
							</div>
							<div
								class="relative flex min-w-px flex-[1_0_0] content-stretch items-center justify-end gap-[6px]"
								data-name="action"
							>
								<div
									class="relative flex shrink-0 content-stretch items-center justify-center gap-[6px] overflow-clip rounded-[10px] border border-solid border-[#e5e5e5] bg-white px-[16px] py-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]"
									data-name="Outline Button"
								>
									<div
										class="relative flex shrink-0 flex-col justify-center text-center font-['Geist:Medium'] text-[14px] leading-[0] font-medium [word-break:break-word] whitespace-nowrap text-[#0a0a0a]"
									>
										<p class="leading-[20px]">Helpful (2)</p>
									</div>
								</div>
								<div
									class="relative flex shrink-0 content-stretch items-center justify-center gap-[6px] overflow-clip rounded-[10px] px-[16px] py-[8px] drop-shadow-[0px_1px_1.5px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.1)]"
									data-name="Ghost Button"
								>
									<div class="relative size-[16px] shrink-0" data-name="Left icon">
										<img
											alt=""
											class="absolute inset-0 block size-full max-w-none"
											src={imgLeftIcon9}
										/>
									</div>
									<div
										class="relative flex shrink-0 flex-col justify-center text-center font-['Geist:Medium'] text-[14px] leading-[0] font-medium [word-break:break-word] whitespace-nowrap text-[#0a0a0a]"
									>
										<p class="leading-[20px]">Report</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div
						class="relative flex shrink-0 content-stretch items-center justify-center gap-[6px] overflow-clip rounded-[10px] px-[16px] py-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]"
						style="background-image: linear-gradient(90deg, rgba(23, 23, 23, 0.1) 0%, rgba(23, 23, 23, 0.1) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)"
						data-name="Soft Button"
					>
						<div
							class="relative flex shrink-0 flex-col justify-center text-center font-['Geist:Medium'] text-[14px] leading-[0] font-medium [word-break:break-word] whitespace-nowrap text-[#0a0a0a]"
						>
							<p class="leading-[20px]">View All Reviews</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div
		class="relative flex w-full shrink-0 flex-col content-stretch items-center justify-center pt-[56px] pb-[96px]"
		data-name="Product list"
	>
		<div
			class="relative flex w-full shrink-0 flex-col content-stretch items-center justify-center gap-[32px] px-[32px]"
			data-name="Flex Vertical"
		>
			<div
				class="relative flex w-full max-w-[1280px] shrink-0 content-stretch items-start justify-between px-[32px]"
				data-name="Flex Horizontal"
			>
				<p
					class="relative w-[1149px] shrink-0 self-stretch font-['Geist:Bold'] text-[30px] leading-[36px] font-bold [word-break:break-word] text-[#0a0a0a]"
				>
					{`You may also like `}
				</p>
				<div
					class="relative flex w-[67px] shrink-0 content-stretch items-center justify-between"
					data-name="Pagination Icon"
				>
					<div class="relative flex shrink-0 items-center justify-center">
						<div class="flex-none -scale-y-100 rotate-180">
							<div class="relative size-[30px]" data-name="ICON">
								<img alt="" class="absolute inset-0 block size-full max-w-none" src={imgIcon5} />
							</div>
						</div>
					</div>
					<div class="relative size-[30px] shrink-0" data-name="ICON">
						<img alt="" class="absolute inset-0 block size-full max-w-none" src={imgIcon6} />
					</div>
				</div>
			</div>
			<div
				class="relative flex w-full max-w-[1280px] shrink-0 content-stretch items-start gap-[16px] px-[32px]"
				data-name="Flex Horizontal"
			>
				<div
					class="relative flex shrink-0 flex-col content-stretch items-start"
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
								class="absolute top-[calc(50%+10px)] left-1/2 h-[260px] w-[252px] -translate-x-1/2 -translate-y-1/2"
								data-name="Product Image"
							>
								<div class="pointer-events-none absolute inset-0 overflow-hidden">
									<img
										alt=""
										class="absolute top-[0.11%] left-[0.12%] h-[115.41%] w-full max-w-none"
										src={imgCardHeader}
									/>
								</div>
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
												src={imgCardHeader1}
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
										Urban Drip
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
											src={imgCardBody3}
										/>
									</div>
								</button>
							</div>
						</div>
					</div>
				</div>
				<div
					class="relative flex shrink-0 flex-col content-stretch items-start"
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
								class="absolute top-[calc(50%+10px)] left-1/2 h-[260px] w-[252px] -translate-x-1/2 -translate-y-1/2"
								data-name="Product Image"
							>
								<div class="pointer-events-none absolute inset-0 overflow-hidden">
									<img
										alt=""
										class="absolute top-[-0.14%] left-[0.11%] h-[115.41%] w-full max-w-none"
										src={imgCardHeader2}
									/>
								</div>
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
												src={imgCardHeader1}
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
										Thread Syndicate
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
											src={imgCardBody3}
										/>
									</div>
								</button>
							</div>
						</div>
					</div>
				</div>
				<div
					class="relative flex shrink-0 flex-col content-stretch items-start"
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
								<div class="pointer-events-none absolute inset-0 overflow-hidden">
									<img
										alt=""
										class="absolute top-[-0.15%] left-[-0.18%] h-[115.41%] w-full max-w-none"
										src={imgCardHeader3}
									/>
								</div>
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
												src={imgCardHeader1}
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
										Ink Theory
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
											src={imgCardBody3}
										/>
									</div>
								</button>
							</div>
						</div>
					</div>
				</div>
				<div
					class="relative flex shrink-0 flex-col content-stretch items-start"
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
								class="absolute top-[calc(50%+10px)] left-1/2 h-[260px] w-[252px] -translate-x-1/2 -translate-y-1/2"
								data-name="Product Image"
							>
								<div class="pointer-events-none absolute inset-0 overflow-hidden">
									<img
										alt=""
										class="absolute top-[-5.22%] left-[0.09%] h-[115.41%] w-full max-w-none"
										src={imgCardHeader4}
									/>
								</div>
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
												src={imgCardHeader1}
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
										Street Pulse
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
											src={imgCardBody3}
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
	<SiteFooter features={true} />
</div>
