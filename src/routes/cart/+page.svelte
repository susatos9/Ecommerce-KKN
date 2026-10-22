<script lang="ts">
	import { goto } from '$app/navigation';
	import SiteHeader from '#lib/frontend/components/SiteHeader.svelte';
	import SiteFooter from '#lib/frontend/components/SiteFooter.svelte';
	const imgPic = '/assets/d94d6.png';
	const imgOrnament54 = '/assets/c7bb1.svg';
	const imgOrnament51 = '/assets/ddcaa.svg';
	const imgOrnament52 = '/assets/658ce.svg';
	const imgOrnament53 = '/assets/0d8d6.svg';
	const imgLeftIcon = '/assets/a05bd.svg';
	const imgIcon = '/assets/aac55.svg';
	const imgIcon1 = '/assets/3fa6a.svg';
	const imgEllipse90 = '/assets/7af52.svg';
	const imgGroup = '/assets/9c2d9.svg';
	const imgGroup1 = '/assets/58614.svg';
	const imgLeftIcon1 = '/assets/525ae.svg';
	const imgLeftIcon2 = '/assets/51c3a.svg';
	const imgLeftIcon3 = '/assets/a3682.svg';
	const imgLeftIcon4 = '/assets/dad92.svg';
	const imgIcon2 = '/assets/303ae.svg';
	const imgIcon3 = '/assets/bf68c.svg';
	const imgProductImage = '/assets/a8912.png';
	const imgProductImage1 = '/assets/a2672.png';
	const imgImage19 = '/assets/3cc20.png';
	const imgImage13 = '/assets/ad1bf.png';
	const imgImage11 = '/assets/c2747.png';
	const imgImage12 = '/assets/d5a5f.png';
	const imgShoppingCart = '/assets/64b14.svg';
	const imgMapPin = '/assets/9a249.svg';
	const imgDollarSign = '/assets/f6f6f.svg';
	const imgLeftIcon5 = '/assets/c356a.svg';
	const imgCheck = '/assets/82e9f.svg';
	const imgX = '/assets/39ca1.svg';
	const imgCheck1 = '/assets/e4eaa.svg';
	const imgOfferPopSvg = '/assets/97856.svg';
	const imgIcon4 = '/assets/1ad39.svg';
	const imgSeparator = '/assets/72948.svg';
	const imgGroup2 = '/assets/bf7d8.svg';
	const imgIcon5 = '/assets/f7856.svg';
	const imgIcon6 = '/assets/008f3.svg';
	const imgIcon7 = '/assets/48e75.svg';
	const imgAppleIcon = '/assets/256e4.svg';
	const imgGroup3 = '/assets/f943f.svg';
	const imgShield = '/assets/557e7.svg';
	const imgIcon8 = '/assets/18d4b.svg';
	const imgIcon9 = '/assets/dc7e2.svg';
	const imgIcon10 = '/assets/dc1ab.svg';
</script>

<div
	class="relative flex size-full flex-col content-stretch items-center bg-white"
	data-name="Shopix - Cart"
>
	<SiteHeader />
	<div
		class="relative flex w-full max-w-[1440px] shrink-0 flex-col content-stretch items-center justify-center bg-white py-[56px]"
		data-name="Checkout"
	>
		<div
			class="relative flex w-full max-w-[1280px] min-w-[328px] shrink-0 flex-col content-stretch items-start justify-center gap-[16px] px-[32px]"
			data-name="Flex Horizontal"
		>
			<div
				class="relative flex h-[136px] w-full shrink-0 flex-col content-stretch items-center rounded-[8px] bg-[#f5f5f5] pt-[32px]"
				data-name="Flex Vertical"
			>
				<div
					class="relative flex w-[548px] shrink-0 content-stretch items-center justify-center"
					data-name="Steps Horizontal"
				>
					<div
						class="relative flex shrink-0 content-stretch items-center"
						data-name="Steps / Step item"
					>
						<div
							class="relative flex size-[38px] shrink-0 flex-col content-stretch items-start gap-[10px]"
							data-name="step-details"
						>
							<div
								class="relative flex size-[38px] shrink-0 flex-col content-stretch items-center justify-center rounded-[9999px] bg-black p-[8px] drop-shadow-[0px_1px_1.5px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.1)]"
								data-name="step-icon"
							>
								<div class="relative size-[22px] shrink-0" data-name="check">
									<img
										alt=""
										class="absolute inset-0 block size-full max-w-none"
										src={imgShoppingCart}
									/>
								</div>
							</div>
							<div
								class="relative flex shrink-0 flex-col content-stretch items-center justify-center gap-[2px]"
								data-name="Text"
							>
								<a
									href="/cart"
									class="relative w-[min-content] min-w-full shrink-0 font-['Geist:Medium'] text-[16px] leading-[24px] font-medium [word-break:break-word] text-[#0a0a0a] hover:underline"
									>Cart</a
								>
							</div>
						</div>
					</div>
					<div
						class="relative flex min-w-px flex-[1_0_0] content-stretch items-center"
						data-name="Steps / Step item"
					>
						<div
							class="relative flex min-w-px flex-[1_0_0] flex-col content-stretch items-center px-[8px]"
							data-name="Divider"
						>
							<div class="relative h-[2px] w-full shrink-0 bg-[#e5e5e5]" data-name="progress"></div>
						</div>
						<div
							class="relative flex size-[38px] shrink-0 flex-col content-stretch items-start gap-[10px]"
							data-name="step-details"
						>
							<div
								class="relative flex size-[38px] shrink-0 flex-col content-stretch items-center justify-center rounded-[9999px] bg-white p-[8px]"
								data-name="step-icon"
							>
								<div class="relative size-[22px] shrink-0" data-name="check">
									<img alt="" class="absolute inset-0 block size-full max-w-none" src={imgMapPin} />
								</div>
							</div>
							<div
								class="relative flex shrink-0 flex-col content-stretch items-center justify-center gap-[2px]"
								data-name="Text"
							>
								<a
									href="/checkout/address"
									class="relative w-[min-content] min-w-full shrink-0 font-['Geist:Medium'] text-[16px] leading-[24px] font-medium [word-break:break-word] text-[#0a0a0a] hover:underline"
									>Address</a
								>
							</div>
						</div>
					</div>
					<div
						class="relative flex min-w-px flex-[1_0_0] content-stretch items-center"
						data-name="Steps / Step item"
					>
						<div
							class="relative flex min-w-px flex-[1_0_0] flex-col content-stretch items-center px-[8px]"
							data-name="Divider"
						>
							<div class="relative h-[2px] w-full shrink-0 bg-[#e5e5e5]" data-name="progress"></div>
						</div>
						<div
							class="relative flex size-[38px] shrink-0 flex-col content-stretch items-start gap-[10px]"
							data-name="step-details"
						>
							<div
								class="relative flex size-[38px] shrink-0 flex-col content-stretch items-center justify-center rounded-[9999px] bg-white p-[8px]"
								data-name="step-icon"
							>
								<div class="relative size-[22px] shrink-0" data-name="check">
									<img
										alt=""
										class="absolute inset-0 block size-full max-w-none"
										src={imgDollarSign}
									/>
								</div>
							</div>
							<div
								class="relative flex shrink-0 flex-col content-stretch items-center justify-center gap-[2px]"
								data-name="Text"
							>
								<a
									href="/checkout/payment"
									class="relative w-[min-content] min-w-full shrink-0 text-center font-['Geist:Medium'] text-[16px] leading-[24px] font-medium [word-break:break-word] text-[#0a0a0a] hover:underline"
									>Payment</a
								>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div
				class="relative flex w-full shrink-0 content-stretch items-start gap-[16px]"
				data-name="Flex Horizontal"
			>
				<div
					class="relative flex shrink-0 flex-col content-stretch items-start gap-[16px]"
					data-name="Flex Vertical"
				>
					<div
						class="relative flex w-[678px] min-w-[300px] shrink-0 content-stretch items-center justify-center rounded-[8px] border border-solid border-[#e5e5e5] bg-white py-[12px]"
						data-name="Flex Horizontal"
					>
						<div
							class="relative flex min-w-px flex-[1_0_0] content-stretch items-center justify-between px-[24px]"
							data-name="Flex Horizontal"
						>
							<p
								class="relative shrink-0 font-['Geist:Medium'] text-[20px] leading-[28px] font-medium [word-break:break-word] whitespace-nowrap text-[#0a0a0a]"
							>
								Add more from Wishlist
							</p>
							<div class="relative size-[27px] shrink-0" data-name="Left-icon">
								<img
									alt=""
									class="absolute inset-0 block size-full max-w-none"
									src={imgLeftIcon5}
								/>
							</div>
						</div>
					</div>
					<div
						class="relative flex w-full shrink-0 flex-col content-stretch items-start gap-[16px]"
						data-name="Flex Vertical"
					>
						<div
							class="relative flex w-full shrink-0 flex-col content-stretch items-start"
							data-name="lisitng Product Card1"
						>
							<div
								class="relative flex w-full shrink-0 flex-col content-stretch items-start gap-[16px] overflow-clip rounded-[14px] bg-white shadow-[0px_0px_0px_1px_rgba(10,10,10,0.1)]"
								data-name="Card"
							>
								<div
									class="relative flex w-full shrink-0 flex-col content-stretch items-start"
									data-name="card-body"
								>
									<div class="relative flex w-full shrink-0 content-stretch items-start">
										<div
											class="relative flex w-[240px] shrink-0 flex-col content-stretch items-center justify-center self-stretch rounded-tl-[8px] rounded-bl-[8px] bg-[#f5f5f5] px-[16px]"
											data-name="Product Image"
										>
											<div
												class="absolute top-[calc(50%+8px)] left-[calc(50%+0.5px)] h-[262px] w-[221px] -translate-x-1/2 -translate-y-1/2"
												data-name="Product Image"
											>
												<div class="pointer-events-none absolute inset-0 overflow-hidden">
													<img
														alt=""
														class="absolute top-[-1.69%] left-[-3.44%] h-[100.84%] w-[106.89%] max-w-none"
														src={imgProductImage}
													/>
												</div>
											</div>
											<div
												class="absolute top-[12px] left-[12px] flex content-stretch items-start gap-[6px]"
												data-name="Check Box"
											>
												<div
													class="relative flex size-[20px] shrink-0 content-stretch items-center justify-center rounded-[4px] border border-solid border-[#171717] bg-[#171717] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)]"
													data-name="Checkbox"
												>
													<div class="relative size-[16px] shrink-0" data-name="check">
														<img
															alt=""
															class="absolute inset-0 block size-full max-w-none"
															src={imgCheck}
														/>
													</div>
												</div>
											</div>
										</div>
										<div
											class="relative flex min-w-px flex-[1_0_0] flex-col content-stretch items-start gap-[12px] py-[16px]"
											data-name="Flex Vertical"
										>
											<div
												class="relative flex w-full shrink-0 flex-col content-stretch items-start gap-[12px]"
											>
												<div
													class="relative flex h-[24px] w-full shrink-0 content-stretch items-center px-[16px]"
													data-name="Flex Horizontal"
												>
													<div
														class="relative flex h-[24px] shrink-0 content-stretch items-center justify-center gap-[4px] rounded-[9999px] border border-solid border-[#16a34a] px-[12px] py-[4px]"
														data-name="Outline Badge"
													>
														<div
															class="relative flex shrink-0 flex-col justify-center text-center font-['Geist:Medium'] text-[12px] leading-[0] font-medium [word-break:break-word] whitespace-nowrap text-[#16a34a]"
														>
															<p class="leading-[16px]">Delivery by 24 January 2026</p>
														</div>
													</div>
												</div>
												<div
													class="relative flex w-full shrink-0 content-stretch items-center justify-center px-[16px]"
												>
													<p
														class="relative min-w-px flex-[1_0_0] font-['Geist:Medium'] text-[14px] leading-[20px] font-medium [word-break:break-word] text-[#171717]"
													>
														Order ID: XYZ-42324234
													</p>
												</div>
											</div>
											<div
												class="relative flex w-full shrink-0 flex-col content-stretch items-start gap-[12px] px-[16px] [word-break:break-word]"
											>
												<div
													class="relative flex w-full shrink-0 flex-col content-stretch items-start gap-[4px]"
													data-name="Product details"
												>
													<p
														class="relative w-full shrink-0 font-['Geist:SemiBold'] text-[18px] leading-[28px] font-semibold text-[#0a0a0a]"
													>
														Bewkoof
													</p>
													<p
														class="relative w-full shrink-0 font-['Geist:Regular'] text-[14px] leading-[20px] font-normal text-[#737373]"
													>
														Soft, breathable cotton with a comfortable everyday fit. Perfect for
														casual wear or layering.
													</p>
												</div>
												<div
													class="relative flex w-full shrink-0 content-stretch items-center gap-[10px] font-['Geist:Regular'] text-[14px] font-normal whitespace-nowrap text-[#0a0a0a]"
													data-name="Flex Horizontal"
												>
													<p class="relative shrink-0 leading-[0]">
														<span class="leading-[20px]">{`Size: `}</span>
														<span class="leading-[20px] text-[#737373]">{`M `}</span>
													</p>
													<p class="relative shrink-0 leading-[20px]">|</p>
													<p class="relative shrink-0 leading-[0]">
														<span class="leading-[20px]">{`Qty: `}</span>
														<span class="leading-[20px] text-[#737373]">1</span>
														<span class="leading-[20px]">{` `}</span>
													</p>
													<p class="relative shrink-0 leading-[20px]">|</p>
													<p class="relative shrink-0 leading-[0]">
														<span class="leading-[20px]">{`Color: `}</span>
														<span class="leading-[20px] text-[#737373]">pitch</span>
													</p>
												</div>
												<div
													class="relative flex h-[24px] w-full shrink-0 content-stretch items-center gap-[6px] whitespace-nowrap"
													data-name="Flex Horizontal"
												>
													<p
														class="relative shrink-0 font-['Geist:SemiBold'] text-[14px] leading-[20px] font-semibold text-[#0a0a0a]"
													>
														$220.00
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
											<div class="absolute top-[16px] left-[400px] size-[22px]" data-name="x">
												<img
													alt=""
													class="absolute inset-0 block size-full max-w-none"
													src={imgX}
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div
							class="relative flex w-full shrink-0 flex-col content-stretch items-start"
							data-name="lisitng Product Card2"
						>
							<div
								class="relative flex w-full shrink-0 flex-col content-stretch items-start gap-[16px] overflow-clip rounded-[14px] bg-white shadow-[0px_0px_0px_1px_rgba(10,10,10,0.1)]"
								data-name="Card"
							>
								<div
									class="relative flex w-full shrink-0 flex-col content-stretch items-start"
									data-name="card-body"
								>
									<div class="relative flex w-full shrink-0 content-stretch items-start">
										<div
											class="relative flex w-[240px] shrink-0 flex-col content-stretch items-center justify-center self-stretch rounded-tl-[8px] rounded-bl-[8px] bg-[#f5f5f5] px-[16px]"
											data-name="Product Image"
										>
											<div
												class="absolute top-[calc(50%+23px)] left-[calc(50%-6px)] h-[298px] w-[248px] -translate-x-1/2 -translate-y-1/2"
												data-name="Product Image"
											>
												<div class="pointer-events-none absolute inset-0 overflow-hidden">
													<img
														alt=""
														class="absolute top-[4.76%] left-[-28.75%] h-[160.62%] w-[154.2%] max-w-none"
														src={imgProductImage1}
													/>
												</div>
											</div>
											<div
												class="absolute top-[calc(50%+24px)] left-[calc(50%-6px)] h-[298px] w-[248px] -translate-x-1/2 -translate-y-1/2"
												data-name="Product Image"
											>
												<div class="pointer-events-none absolute inset-0 overflow-hidden">
													<img
														alt=""
														class="absolute top-[4.76%] left-[-28.75%] h-[160.62%] w-[154.2%] max-w-none"
														src={imgProductImage1}
													/>
												</div>
											</div>
											<div
												class="absolute top-[12px] left-[12px] flex content-stretch items-start gap-[8px]"
												data-name="Check Box"
											>
												<div
													class="relative flex size-[20px] shrink-0 flex-col content-stretch items-center justify-center rounded-[4px] border border-solid border-[#e5e5e5] bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)]"
													data-name="Checkbox"
												>
													<div class="relative size-[16px] shrink-0" data-name="check">
														<img
															alt=""
															class="absolute inset-0 block size-full max-w-none"
															src={imgCheck1}
														/>
													</div>
												</div>
											</div>
										</div>
										<div
											class="relative flex min-w-px flex-[1_0_0] flex-col content-stretch items-start gap-[12px] py-[16px]"
											data-name="Flex Vertical"
										>
											<div
												class="relative flex w-full shrink-0 flex-col content-stretch items-start gap-[12px]"
											>
												<div
													class="relative flex h-[24px] w-full shrink-0 content-stretch items-center gap-[6px] px-[16px]"
													data-name="Flex Horizontal"
												>
													<div
														class="relative flex h-[24px] shrink-0 content-stretch items-center justify-center gap-[4px] rounded-[9999px] border border-solid border-[#16a34a] px-[12px] py-[4px]"
														data-name="Outline Badge"
													>
														<div
															class="relative flex shrink-0 flex-col justify-center text-center font-['Geist:Medium'] text-[12px] leading-[0] font-medium [word-break:break-word] whitespace-nowrap text-[#16a34a]"
														>
															<p class="leading-[16px]">Delivery by 10 January 2026</p>
														</div>
													</div>
													<p
														class="relative shrink-0 font-['Geist:Regular'] text-[12px] leading-[16px] font-normal [word-break:break-word] whitespace-nowrap text-[#737373]"
													>
														7 days return available
													</p>
												</div>
												<div
													class="relative flex w-full shrink-0 content-stretch items-center justify-center px-[16px]"
												>
													<p
														class="relative min-w-px flex-[1_0_0] font-['Geist:Medium'] text-[14px] leading-[20px] font-medium [word-break:break-word] text-[#171717]"
													>
														Order ID: XYZ-42324234
													</p>
												</div>
											</div>
											<div
												class="relative flex w-full shrink-0 flex-col content-stretch items-start gap-[12px] px-[16px] [word-break:break-word]"
											>
												<div
													class="relative flex w-full shrink-0 flex-col content-stretch items-start gap-[4px]"
													data-name="Product details"
												>
													<p
														class="relative w-full shrink-0 font-['Geist:SemiBold'] text-[18px] leading-[28px] font-semibold text-[#0a0a0a]"
													>
														Zara
													</p>
													<p
														class="relative w-full shrink-0 font-['Geist:Regular'] text-[14px] leading-[20px] font-normal text-[#737373]"
													>
														Designed for effortless style, this tee pairs perfectly with jeans,
														skirts, or joggers for a modern look.
													</p>
												</div>
												<div
													class="relative flex w-full shrink-0 content-stretch items-center gap-[10px] font-['Geist:Regular'] text-[14px] font-normal whitespace-nowrap text-[#0a0a0a]"
													data-name="Flex Horizontal"
												>
													<p class="relative shrink-0 leading-[0]">
														<span class="leading-[20px]">{`Size: `}</span>
														<span class="leading-[20px] text-[#737373]">{`LG `}</span>
													</p>
													<p class="relative shrink-0 leading-[20px]">|</p>
													<p class="relative shrink-0 leading-[0]">
														<span class="leading-[20px]">{`Qty: `}</span>
														<span class="leading-[20px] text-[#737373]">1</span>
														<span class="leading-[20px]">{` `}</span>
													</p>
													<p class="relative shrink-0 leading-[20px]">|</p>
													<p class="relative shrink-0 leading-[0]">
														<span class="leading-[20px]">{`Color: `}</span>
														<span class="leading-[20px] text-[#737373]">Pink</span>
													</p>
												</div>
												<div
													class="relative flex h-[24px] w-full shrink-0 content-stretch items-center gap-[6px] whitespace-nowrap"
													data-name="Flex Horizontal"
												>
													<p
														class="relative shrink-0 font-['Geist:SemiBold'] text-[14px] leading-[20px] font-semibold text-[#0a0a0a]"
													>
														$180.00
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
											<div class="absolute top-[16px] left-[400px] size-[22px]" data-name="x">
												<img
													alt=""
													class="absolute inset-0 block size-full max-w-none"
													src={imgX}
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div
					class="relative flex w-[522px] shrink-0 flex-col content-stretch items-start gap-[16px] overflow-clip rounded-[14px] bg-white py-[24px] shadow-[0px_0px_0px_1px_rgba(10,10,10,0.1)]"
					data-name="Flex Vertical"
				>
					<div
						class="relative flex w-full shrink-0 flex-col content-stretch items-start gap-[24px] px-[24px]"
						data-name="card-body"
					>
						<div
							class="relative flex w-full shrink-0 flex-col content-stretch items-start gap-[6px] [word-break:break-word]"
							data-name="Flex Vertical"
						>
							<p
								class="relative w-[min-content] min-w-full shrink-0 font-['Geist:SemiBold'] text-[20px] leading-[28px] font-semibold text-[#0a0a0a]"
							>
								Pricing Details
							</p>
							<p
								class="relative shrink-0 text-center font-['Geist:Regular'] text-[16px] leading-[24px] font-normal whitespace-nowrap text-[#737373]"
							>
								You have 2 items in your cart
							</p>
						</div>
						<div
							class="relative flex w-full shrink-0 flex-col content-stretch items-center justify-center"
							data-name="Flex Vertical"
						>
							<div
								class="relative flex w-full shrink-0 flex-col content-stretch items-start gap-[10px] rounded-[8px] border border-solid border-[#e5e5e5] bg-[#f5f5f5] p-[10px]"
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
											<p class="leading-[20px]">Coupon Code</p>
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
											class="relative flex h-full w-[289px] shrink-0 content-stretch items-center justify-end gap-[4px]"
											data-name="Flex Horizontal"
										>
											<div
												class="relative flex shrink-0 flex-col justify-center font-['Geist:Medium'] text-[14px] leading-[0] font-medium [word-break:break-word] whitespace-nowrap text-[#737373]"
											>
												<p class="leading-[20px]">Show more offers</p>
											</div>
											<div class="relative size-[14px] shrink-0" data-name="ICON">
												<img
													alt=""
													class="absolute inset-0 block size-full max-w-none"
													src={imgIcon4}
												/>
											</div>
										</div>
									</div>
								</div>
								<div
									class="relative flex w-full shrink-0 content-stretch items-start justify-center rounded-[6px] bg-white px-[14px] py-[10px]"
									data-name="Flex Horizontal"
								>
									<div
										class="relative flex min-w-px flex-[1_0_0] flex-col justify-center font-['Geist:Regular'] text-[12px] leading-[0] font-normal [word-break:break-word] text-[#737373]"
									>
										<p class="leading-[16px]">Add discount code</p>
									</div>
								</div>
							</div>
						</div>
						<div
							class="relative flex w-full shrink-0 flex-col content-stretch items-start gap-[14px] text-[18px] leading-[28px] [word-break:break-word] text-[#0a0a0a]"
							data-name="Flex Vertical"
						>
							<div
								class="relative flex w-full shrink-0 content-stretch items-start gap-[24px]"
								data-name="Flex Horizontal"
							>
								<p class="relative min-w-px flex-[1_0_0] font-['Geist:Regular'] font-normal">
									Subtotal
								</p>
								<p class="relative shrink-0 font-['Geist:Medium'] font-medium whitespace-nowrap">
									$220
								</p>
							</div>
							<div
								class="relative flex w-full shrink-0 content-stretch items-start gap-[24px]"
								data-name="Flex Horizontal"
							>
								<p class="relative min-w-px flex-[1_0_0] font-['Geist:Regular'] font-normal">
									Shipping Cost (+)
								</p>
								<p class="relative shrink-0 font-['Geist:Medium'] font-medium whitespace-nowrap">
									$10.66
								</p>
							</div>
							<div
								class="relative flex w-full shrink-0 content-stretch items-start gap-[24px]"
								data-name="Flex Horizontal"
							>
								<p class="relative min-w-px flex-[1_0_0] font-['Geist:Regular'] font-normal">
									{`Discount (-) `}
								</p>
								<p class="relative shrink-0 font-['Geist:Medium'] font-medium whitespace-nowrap">
									$29.00
								</p>
							</div>
						</div>
						<div class="relative h-0 w-full shrink-0" data-name="Separator">
							<div class="absolute inset-[-1px_0_0_0]">
								<img alt="" class="block size-full max-w-none" src={imgSeparator} />
							</div>
						</div>
						<div
							class="relative flex w-full shrink-0 content-stretch items-start gap-[24px] text-[18px] leading-[28px] [word-break:break-word] text-[#0a0a0a]"
							data-name="Flex Horizontal"
						>
							<p class="relative min-w-px flex-[1_0_0] font-['Geist:Medium'] font-medium">
								Total Payable
							</p>
							<p class="relative shrink-0 font-['Geist:SemiBold'] font-semibold whitespace-nowrap">
								$230.15
							</p>
						</div>
						<div
							class="relative flex w-full shrink-0 flex-col content-stretch items-start"
							data-name="Action"
						>
							<button
								type="button"
								class="relative flex w-full shrink-0 cursor-pointer content-stretch items-center justify-center gap-[6px] overflow-clip rounded-[10px] border border-solid border-[#171717] bg-[#171717] px-[16px] py-[8px]"
								data-name="Solid Button"
								onclick={() => goto('/checkout/address')}
							>
								<div
									class="relative flex shrink-0 flex-col justify-center font-['Geist:Medium'] text-[14px] leading-[0] font-medium [word-break:break-word] whitespace-nowrap text-[#fafafa]"
								>
									<p class="leading-[20px]">Continue</p>
								</div>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<SiteFooter />
</div>
