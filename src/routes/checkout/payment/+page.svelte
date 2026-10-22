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
	const imgImage110 = '/assets/a8912.png';
	const imgImage19 = '/assets/3cc20.png';
	const imgImage13 = '/assets/ad1bf.png';
	const imgImage11 = '/assets/c2747.png';
	const imgImage12 = '/assets/d5a5f.png';
	const imgShoppingCart = '/assets/64b14.svg';
	const imgMapPin = '/assets/a58c0.svg';
	const imgDollarSign = '/assets/43c76.svg';
	const imgSeparator = '/assets/72948.svg';
	const imgGroup2 = '/assets/bf7d8.svg';
	const imgIcon4 = '/assets/f7856.svg';
	const imgIcon5 = '/assets/008f3.svg';
	const imgIcon6 = '/assets/48e75.svg';
	const imgAppleIcon = '/assets/256e4.svg';
	const imgGroup3 = '/assets/f943f.svg';
	const imgShield = '/assets/557e7.svg';
	const imgIcon7 = '/assets/18d4b.svg';
	const imgIcon8 = '/assets/dc7e2.svg';
	const imgIcon9 = '/assets/dc1ab.svg';
</script>

<div
	class="relative flex size-full flex-col content-stretch items-center bg-white"
	data-name="Shopix - Payment"
>
	<SiteHeader />
	<div
		class="relative flex w-full max-w-[1440px] shrink-0 flex-col content-stretch items-center justify-center bg-white py-[56px]"
		data-name="Checkout"
	>
		<div
			class="relative flex w-full max-w-[1280px] min-w-[328px] shrink-0 flex-col content-stretch items-start justify-center gap-[16px] px-[32px]"
			data-name="Flex Vertical"
		>
			<div
				class="relative flex h-[136px] w-full shrink-0 flex-col content-stretch items-center rounded-[8px] border border-solid border-[#e5e5e5] bg-[#f5f5f5] pt-[32px]"
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
								class="relative flex size-[38px] shrink-0 flex-col content-stretch items-center justify-center rounded-[9999px] bg-black p-[8px]"
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
								class="relative flex size-[38px] shrink-0 flex-col content-stretch items-center justify-center rounded-[9999px] bg-black p-[8px]"
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
					class="relative flex w-[678px] shrink-0 flex-col content-stretch items-start gap-[24px] overflow-clip rounded-[14px] bg-white py-[16px] shadow-[0px_0px_0px_1px_rgba(10,10,10,0.1)]"
					data-name="Card"
				>
					<div
						class="relative flex w-full shrink-0 flex-col content-stretch items-start px-[16px]"
						data-name="card-header"
					>
						<p
							class="relative h-[22px] w-full shrink-0 font-['Geist:SemiBold'] text-[20px] leading-[28px] font-semibold [word-break:break-word] text-[#0a0a0a]"
						>
							Select Payment Mode
						</p>
					</div>
					<div
						class="relative flex w-full shrink-0 flex-col content-stretch items-start gap-[24px] px-[16px]"
						data-name="card-body"
					>
						<div
							class="relative isolate flex w-full shrink-0 flex-wrap content-center items-center overflow-clip rounded-[10px] bg-[#f5f5f5] p-[3px]"
							data-name="Advance Tabs"
						>
							<div
								class="relative z-[1] flex min-w-px flex-[1_0_0] content-stretch items-center"
								data-name="Items"
							>
								<div
									class="relative flex min-w-px flex-[1_0_0] content-stretch items-center justify-center gap-[4px] overflow-clip rounded-[10px] border border-solid border-[#e5e5e5] bg-white px-[10px] py-[6px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]"
									data-name="Tab 01"
								>
									<p
										class="relative shrink-0 font-['Geist:Medium'] text-[14px] leading-[20px] font-medium [word-break:break-word] whitespace-nowrap text-[#0a0a0a]"
									>
										Debit Card
									</p>
								</div>
								<div
									class="relative flex min-w-px flex-[1_0_0] content-stretch items-center justify-center gap-[4px] rounded-[10px] px-[10px] py-[6px]"
									data-name="Tab 02"
								>
									<p
										class="relative shrink-0 font-['Geist:Medium'] text-[14px] leading-[20px] font-medium [word-break:break-word] whitespace-nowrap text-[#0a0a0a] opacity-60"
									>
										Credit Card
									</p>
								</div>
								<div
									class="relative flex min-w-px flex-[1_0_0] content-stretch items-center justify-center gap-[4px] rounded-[8px] px-[10px] py-[6px]"
									data-name="Tab item"
								>
									<p
										class="relative shrink-0 font-['Geist:Medium'] text-[14px] leading-[20px] font-medium [word-break:break-word] whitespace-nowrap text-[#0a0a0a] opacity-60"
									>
										Cash on delivery
									</p>
								</div>
								<div
									class="relative flex min-w-px flex-[1_0_0] content-stretch items-center justify-center gap-[4px] rounded-[10px] px-[10px] py-[6px]"
									data-name="Tab 04"
								>
									<p
										class="relative shrink-0 font-['Geist:Medium'] text-[14px] leading-[20px] font-medium [word-break:break-word] whitespace-nowrap text-[#171717] opacity-60"
									>
										Gift card
									</p>
								</div>
							</div>
						</div>
						<div
							class="relative flex w-full shrink-0 flex-col content-stretch items-start gap-[24px]"
							data-name="Flex Vertical"
						>
							<div
								class="relative flex w-full shrink-0 flex-col content-stretch items-start gap-[14px]"
								data-name="Flex Vertical"
							>
								<p
									class="relative w-full shrink-0 font-['Geist:Medium'] text-[14px] leading-[20px] font-medium [word-break:break-word] text-[#0a0a0a]"
								>
									Card Number
								</p>
								<div
									class="relative flex w-full shrink-0 flex-col content-stretch items-start gap-[8px]"
									data-name="Default Input"
								>
									<div
										class="relative flex w-full shrink-0 content-stretch items-start"
										data-name="input-container"
									>
										<div
											class="relative flex h-[32px] min-w-px flex-[1_0_0] content-stretch items-center gap-[6px] rounded-[10px] border border-solid border-[#e5e5e5] bg-white px-[10px] py-[4px]"
											data-name="input"
										>
											<div
												class="relative flex h-[26px] min-w-px flex-[1_0_0] flex-col justify-center overflow-hidden font-['Geist:Regular'] text-[14px] leading-[0] font-normal [word-break:break-word] text-ellipsis whitespace-nowrap text-[#0a0a0a]"
											>
												<p class="overflow-hidden leading-[20px] text-ellipsis">12314 4562 251</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div
								class="relative flex w-full min-w-[280px] shrink-0 flex-wrap content-start items-start gap-[24px]"
								data-name="Flex Horizontal"
							>
								<div
									class="relative flex shrink-0 flex-col content-stretch items-start gap-[14px]"
									data-name="Flex Vertical"
								>
									<p
										class="relative w-[min-content] min-w-full shrink-0 font-['Geist:Medium'] text-[14px] leading-[20px] font-medium [word-break:break-word] text-[#0a0a0a]"
									>
										Card Name
									</p>
									<div
										class="relative flex w-[288px] shrink-0 flex-col content-stretch items-start gap-[8px]"
										data-name="Default Input"
									>
										<div
											class="relative flex w-full shrink-0 content-stretch items-start"
											data-name="input-container"
										>
											<div
												class="relative flex h-[32px] min-w-px flex-[1_0_0] content-stretch items-center gap-[6px] rounded-[10px] border border-solid border-[#e5e5e5] bg-white px-[10px] py-[4px]"
												data-name="input"
											>
												<div
													class="relative flex h-[26px] min-w-px flex-[1_0_0] flex-col justify-center overflow-hidden font-['Geist:Regular'] text-[14px] leading-[0] font-normal [word-break:break-word] text-ellipsis whitespace-nowrap text-[#0a0a0a]"
												>
													<p class="overflow-hidden leading-[20px] text-ellipsis">John Doe</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div
									class="relative flex min-w-[77px] flex-[1_0_0] flex-col content-stretch items-start gap-[14px]"
									data-name="Flex Vertical"
								>
									<p
										class="relative w-full shrink-0 font-['Geist:Medium'] text-[14px] leading-[20px] font-medium [word-break:break-word] text-[#0a0a0a]"
									>
										Exp. Date
									</p>
									<div
										class="relative flex w-full shrink-0 flex-col content-stretch items-start gap-[8px]"
										data-name="Default Input"
									>
										<div
											class="relative flex w-full shrink-0 content-stretch items-start"
											data-name="input-container"
										>
											<div
												class="relative flex min-w-px flex-[1_0_0] content-stretch items-center gap-[6px] self-stretch rounded-[10px] border border-solid border-[#e5e5e5] bg-white px-[10px] py-[4px]"
												data-name="input"
											>
												<div
													class="relative flex min-w-px flex-[1_0_0] flex-col justify-center overflow-hidden font-['Geist:Regular'] text-[14px] leading-[0] font-normal [word-break:break-word] text-ellipsis whitespace-nowrap text-[#737373]"
												>
													<p class="overflow-hidden leading-[20px] text-ellipsis">MM/YY</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div
									class="relative flex min-w-px flex-[1_0_0] flex-col content-stretch items-start gap-[14px]"
									data-name="Flex Vertical"
								>
									<p
										class="relative shrink-0 font-['Geist:Medium'] text-[14px] leading-[20px] font-medium [word-break:break-word] whitespace-nowrap text-[#0a0a0a]"
									>
										CVV Code
									</p>
									<div
										class="relative flex w-full shrink-0 flex-col content-stretch items-start gap-[8px]"
										data-name="Default Input"
									>
										<div
											class="relative flex w-full shrink-0 content-stretch items-start"
											data-name="input-container"
										>
											<div
												class="relative flex h-[32px] min-w-px flex-[1_0_0] content-stretch items-center gap-[6px] rounded-[10px] border border-solid border-[#e5e5e5] bg-white px-[10px] py-[4px]"
												data-name="input"
											>
												<div
													class="relative flex shrink-0 flex-col justify-center overflow-hidden font-['Geist:Regular'] text-[14px] leading-[0] font-normal [word-break:break-word] text-ellipsis whitespace-nowrap text-[#737373]"
												>
													<p class="overflow-hidden leading-[20px] text-ellipsis">652</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div
							class="relative flex w-full shrink-0 content-stretch items-start gap-[14px]"
							data-name="Actions"
						>
							<div
								class="relative flex shrink-0 content-stretch items-center justify-center gap-[6px] overflow-clip rounded-[10px] bg-[#171717] px-[16px] py-[8px]"
								data-name="Solid Button"
							>
								<div
									class="relative flex shrink-0 flex-col justify-center font-['Geist:Medium'] text-[14px] leading-[0] font-medium [word-break:break-word] whitespace-nowrap text-[#fafafa]"
								>
									<p class="leading-[20px]">Save Changes</p>
								</div>
							</div>
							<div
								class="relative flex shrink-0 content-stretch items-center justify-center gap-[6px] overflow-clip rounded-[10px] border border-solid border-[#f5f5f5] bg-[#f5f5f5] px-[16px] py-[8px]"
								data-name="Solid Button"
							>
								<div
									class="relative flex shrink-0 flex-col justify-center font-['Geist:Medium'] text-[14px] leading-[0] font-medium [word-break:break-word] whitespace-nowrap text-[#171717]"
								>
									<p class="leading-[20px]">Reset</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div
					class="relative flex max-w-[522px] min-w-px flex-[1_0_0] flex-col content-stretch items-start gap-[16px] overflow-clip rounded-[14px] bg-white py-[24px] shadow-[0px_0px_0px_1px_rgba(10,10,10,0.1)]"
					data-name="Card"
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
								You have 1 item in your cart
							</p>
						</div>
						<div
							class="relative flex w-full shrink-0 content-stretch items-center gap-[16px]"
							data-name="Flex Horizontal"
						>
							<div class="relative h-[86px] w-[92px] shrink-0 rounded-[8px]" data-name="image 110">
								<div aria-hidden="true" class="pointer-events-none absolute inset-0 rounded-[8px]">
									<div class="absolute inset-0 rounded-[8px] bg-[#f5f5f5]"></div>
									<div class="absolute inset-0 overflow-hidden rounded-[8px]">
										<img
											alt=""
											class="absolute top-[-0.33%] left-[0.34%] h-[119.01%] w-full max-w-none"
											src={imgImage110}
										/>
									</div>
								</div>
							</div>
							<div
								class="relative flex h-[72px] min-w-px flex-[1_0_0] flex-col content-stretch items-start gap-[4px] [word-break:break-word]"
								data-name="Flex Vertical"
							>
								<div
									class="relative flex w-full shrink-0 flex-col content-stretch items-start gap-[4px]"
									data-name="Flex Vertical"
								>
									<p
										class="relative w-full shrink-0 font-['Geist:SemiBold'] text-[18px] leading-[28px] font-semibold text-[#0a0a0a]"
									>
										{`H&M`}
									</p>
									<p
										class="relative w-full shrink-0 font-['Geist:Regular'] text-[14px] leading-[20px] font-normal text-[#737373]"
									>
										Soft, breathable cotton with a comfortable...
									</p>
								</div>
								<div
									class="relative flex w-full shrink-0 flex-col justify-center font-['Geist:Regular'] text-[12px] leading-[0] font-normal text-[#16a34a]"
								>
									<p class="leading-[16px]">Estimated Delivery: 12 Jan 2026</p>
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
									$108
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
									$9.00
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
								$88.15
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
								onclick={() => goto('/account/order-tracking')}
							>
								<div
									class="relative flex shrink-0 flex-col justify-center font-['Geist:Medium'] text-[14px] leading-[0] font-medium [word-break:break-word] whitespace-nowrap text-[#fafafa]"
								>
									<p class="leading-[20px]">Place Order</p>
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
