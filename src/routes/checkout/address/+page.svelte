<script lang="ts">
	import { goto } from '$app/navigation';
	import Radio from '#lib/frontend/components/ui/Radio.svelte';
	import SiteHeader from '#lib/frontend/components/SiteHeader.svelte';
	import SiteFooter from '#lib/frontend/components/SiteFooter.svelte';
	const imgRadio = '/assets/6dacc.svg';
	const imgRadio1 = '/assets/24ffa.svg';
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
	const imgDollarSign = '/assets/f6f6f.svg';
	const imgRadio2 = '/assets/25caf.svg';
	const imgLeftIcon5 = '/assets/f848c.svg';
	const imgSeparator = '/assets/4aa6b.svg';
	const imgRadio3 = '/assets/9dbf9.svg';
	const imgLeftIcon6 = '/assets/93584.svg';
	const imgSeparator1 = '/assets/72948.svg';
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
	data-name="Shopix - Address"
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
					class="relative flex min-w-px flex-[1_0_0] flex-col content-stretch items-start gap-[16px]"
					data-name="Flex Vertical"
				>
					<p
						class="relative h-[28px] w-full shrink-0 font-['Geist:SemiBold'] text-[20px] leading-[28px] font-semibold [word-break:break-word] text-[#0a0a0a]"
					>
						Select Delivery Address
					</p>
					<div
						class="relative flex w-full shrink-0 content-stretch items-start overflow-clip rounded-[10px] border border-solid border-[#e5e5e5] bg-white p-[12px]"
						data-name="Card Radio"
					>
						<div
							class="relative flex min-w-px flex-[1_0_0] content-stretch items-start gap-[10px]"
							data-name="Radio"
						>
							<div class="relative size-[20px] shrink-0" data-name="Radio">
								<img alt="" class="absolute inset-0 block size-full max-w-none" src={imgRadio2} />
							</div>
							<div
								class="relative flex min-w-px flex-[1_0_0] flex-col content-stretch items-start justify-center self-stretch"
								data-name="radio-container"
							>
								<div
									class="relative flex w-full shrink-0 flex-col content-stretch items-start gap-[14px]"
									data-name="Text"
								>
									<div
										class="relative flex w-full shrink-0 content-stretch items-center gap-[8px]"
										data-name="Header"
									>
										<p
											class="relative min-w-px flex-[1_0_0] font-['Geist:Medium'] text-[16px] leading-[24px] font-medium [word-break:break-word] text-[#0a0a0a]"
										>
											Joh Doe (Default)
										</p>
										<div
											class="relative flex h-[22px] shrink-0 content-stretch items-center justify-center gap-[4px] rounded-[8px] px-[8px] py-[2px]"
											style="background-image: linear-gradient(90deg, rgba(22, 163, 74, 0.1) 0%, rgba(22, 163, 74, 0.1) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)"
											data-name="Soft Badge"
										>
											<div
												class="relative flex shrink-0 flex-col justify-center text-center font-['Geist:Medium'] text-[12px] leading-[0] font-medium [word-break:break-word] whitespace-nowrap text-[#16a34a]"
											>
												<p class="leading-[16px]">Home</p>
											</div>
										</div>
									</div>
									<div
										class="relative flex w-full shrink-0 flex-col content-stretch items-start justify-center gap-[8px]"
										data-name="content"
									>
										<div
											class="relative w-full shrink-0 font-['Geist:Regular'] text-[14px] leading-[0] font-normal [word-break:break-word] whitespace-pre-wrap text-[#737373]"
										>
											<p class="mb-0 leading-[20px]">Carlyle Hall</p>
											<p class="mb-0 leading-[20px]">{`25 Union Square W, `}</p>
											<p class="leading-[20px]">New York, NY 10003, USA</p>
										</div>
										<div
											class="relative flex w-full shrink-0 content-stretch items-center gap-[8px]"
											data-name="contact"
										>
											<div class="relative size-[14px] shrink-0" data-name="Left-icon">
												<img
													alt=""
													class="absolute inset-0 block size-full max-w-none"
													src={imgLeftIcon5}
												/>
											</div>
											<p
												class="relative shrink-0 font-['Geist:Regular'] text-[14px] leading-[20px] font-normal [word-break:break-word] whitespace-nowrap text-[#737373]"
											>
												123 456 0789
											</p>
										</div>
									</div>
									<div class="relative h-0 w-full shrink-0" data-name="Separator">
										<div class="absolute inset-[-1px_0_0_0]">
											<img alt="" class="block size-full max-w-none" src={imgSeparator} />
										</div>
									</div>
									<div
										class="relative flex w-full shrink-0 content-stretch items-center gap-[20px] font-['Geist:Medium'] text-[16px] leading-[24px] font-medium [word-break:break-word] whitespace-nowrap text-[#0a0a0a]"
										data-name="content"
									>
										<p class="relative shrink-0">Edit</p>
										<p class="relative shrink-0">Remove</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div
						class="relative flex w-full shrink-0 flex-col content-stretch items-start gap-[16px]"
						data-name="Flex Vertical"
					>
						<p
							class="relative w-full shrink-0 font-['Geist:SemiBold'] text-[20px] leading-[28px] font-semibold [word-break:break-word] text-[#0a0a0a]"
						>
							Choose a delivery speed
						</p>
						<div
							class="relative flex w-full shrink-0 flex-wrap content-start items-start gap-[12px]"
							data-name="Flex Horizontal"
						>
							<Radio
								class="relative flex shrink-0 content-stretch items-start gap-[8px]"
								status
								subLabel
								src={imgRadio}
								srcChecked={imgRadio1}
							>
								<div class="relative flex shrink-0 content-stretch items-start gap-[2px]">
									<div
										class="relative flex shrink-0 flex-col justify-center font-['Geist:Medium'] text-[14px] leading-[0] font-medium [word-break:break-word] whitespace-nowrap text-[#0a0a0a]"
									>
										<p class="leading-[20px]">Standard</p>
									</div>
									<div
										class="relative flex h-[20px] shrink-0 content-stretch items-center justify-center gap-[2px] rounded-[8px] px-[6px] py-[2px]"
										style="background-image: linear-gradient(90deg, rgba(22, 163, 74, 0.1) 0%, rgba(22, 163, 74, 0.1) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)"
										data-name="Soft Badge"
									>
										<div
											class="relative flex shrink-0 flex-col justify-center text-center font-['Geist:Medium'] text-[12px] leading-[0] font-medium [word-break:break-word] whitespace-nowrap text-[#16a34a]"
										>
											<p class="leading-[16px]">Free</p>
										</div>
									</div>
								</div>
								<p
									class="relative shrink-0 font-['Geist:Regular'] text-[14px] leading-[20px] font-normal [word-break:break-word] whitespace-nowrap text-[#737373]"
								>
									Get your product in 1 week
								</p>
							</Radio>
							<Radio
								class="relative flex shrink-0 content-stretch items-start gap-[8px]"
								subLabel
								src={imgRadio}
								srcChecked={imgRadio1}
							>
								<div class="relative flex shrink-0 content-stretch items-start gap-[2px]">
									<div
										class="relative flex shrink-0 flex-col justify-center font-['Geist:Medium'] text-[14px] leading-[0] font-medium [word-break:break-word] whitespace-nowrap text-[#0a0a0a]"
									>
										<p class="leading-[20px]">Express</p>
									</div>
									<div
										class="relative flex h-[20px] shrink-0 content-stretch items-center justify-center gap-[2px] rounded-[8px] px-[6px] py-[2px]"
										style="background-image: linear-gradient(90deg, rgba(2, 132, 199, 0.1) 0%, rgba(2, 132, 199, 0.1) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)"
										data-name="Soft Badge"
									>
										<div
											class="relative flex shrink-0 flex-col justify-center text-center font-['Geist:Medium'] text-[12px] leading-[0] font-medium [word-break:break-word] whitespace-nowrap text-[#0284c7]"
										>
											<p class="leading-[16px]">$20</p>
										</div>
									</div>
								</div>
								<p
									class="relative shrink-0 font-['Geist:Regular'] text-[14px] leading-[20px] font-normal [word-break:break-word] whitespace-nowrap text-[#737373]"
								>
									Get your product in 0-1 days
								</p>
							</Radio>
							<div
								class="relative flex shrink-0 content-stretch items-start gap-[12px]"
								data-name="Radio"
							>
								<div class="relative size-[20px] shrink-0" data-name="Radio">
									<div class="absolute inset-[-5%_-10%_-15%_-10%]">
										<img alt="" class="block size-full max-w-none" src={imgRadio3} />
									</div>
								</div>
								<div
									class="relative flex shrink-0 flex-col content-stretch items-start justify-center gap-[4px] self-stretch"
									data-name="Text"
								>
									<div class="relative flex w-full shrink-0 content-stretch items-start gap-[4px]">
										<div
											class="relative flex shrink-0 flex-col justify-center font-['Geist:Medium'] text-[14px] leading-[0] font-medium [word-break:break-word] whitespace-nowrap text-[#0a0a0a]"
										>
											<p class="leading-[20px]">Basic</p>
										</div>
										<div
											class="relative flex h-[20px] shrink-0 content-stretch items-center justify-center gap-[2px] rounded-[8px] px-[6px] py-[2px]"
											style="background-image: linear-gradient(90deg, rgba(2, 132, 199, 0.1) 0%, rgba(2, 132, 199, 0.1) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)"
											data-name="Soft Badge"
										>
											<div
												class="relative flex shrink-0 flex-col justify-center text-center font-['Geist:Medium'] text-[12px] leading-[0] font-medium [word-break:break-word] whitespace-nowrap text-[#0284c7]"
											>
												<p class="leading-[16px]">$10</p>
											</div>
										</div>
									</div>
									<p
										class="relative h-[20px] w-full shrink-0 font-['Geist:Regular'] text-[14px] leading-[20px] font-normal [word-break:break-word] text-[#737373]"
									>
										Get your product in 3-4 days
									</p>
								</div>
							</div>
						</div>
					</div>
					<div
						class="relative flex w-full shrink-0 flex-col content-stretch items-start rounded-[8px] border border-solid border-[#e5e5e5] bg-[#f5f5f5] py-[12px]"
						data-name="Flex Vertical"
					>
						<div
							class="relative flex h-[28px] w-[580px] shrink-0 content-stretch items-center gap-[4px] px-[16px]"
							data-name="Flex Horizontal"
						>
							<div class="relative size-[27px] shrink-0" data-name="Left-icon">
								<img
									alt=""
									class="absolute inset-0 block size-full max-w-none"
									src={imgLeftIcon6}
								/>
							</div>
							<div
								class="relative flex shrink-0 flex-col justify-center font-['Geist:Medium'] text-[20px] leading-[0] font-medium [word-break:break-word] whitespace-nowrap text-[#0a0a0a]"
							>
								<p class="leading-[28px]">Add new Address</p>
							</div>
						</div>
					</div>
				</div>
				<div
					class="relative flex max-w-[522px] min-w-px flex-[1_0_0] flex-col content-stretch items-start gap-[16px] overflow-clip rounded-[14px] bg-white py-[24px] shadow-[0px_0px_0px_1px_rgba(10,10,10,0.1)]"
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
								<img alt="" class="block size-full max-w-none" src={imgSeparator1} />
							</div>
						</div>
						<div
							class="relative flex w-full shrink-0 content-stretch items-start gap-[24px] text-[18px] leading-[28px] [word-break:break-word] text-[#0a0a0a]"
							data-name="Total Payable"
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
								onclick={() => goto('/checkout/payment')}
							>
								<div
									class="relative flex shrink-0 flex-col justify-center font-['Geist:Medium'] text-[14px] leading-[0] font-medium [word-break:break-word] whitespace-nowrap text-[#fafafa]"
								>
									<p class="leading-[20px]">Continue Payment</p>
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
