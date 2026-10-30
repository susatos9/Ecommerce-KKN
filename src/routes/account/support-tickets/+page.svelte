<script lang="ts">
	import SiteHeader from '#lib/frontend/components/SiteHeader.svelte';
	import SiteFooter from '#lib/frontend/components/SiteFooter.svelte';
	import { signOutUser } from '#frontend/modules/auth/index.ts';
	const imgPic = '/assets/d94d6.png';
	const imgImage19 = '/assets/3cc20.png';
	const imgImage13 = '/assets/ad1bf.png';
	const imgImage11 = '/assets/c2747.png';
	const imgImage12 = '/assets/d5a5f.png';
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
	const imgSeparator = '/assets/42c25.svg';
	const imgIcon4 = '/assets/f0c09.svg';
	const imgIcon5 = '/assets/95ca5.svg';
	const imgIcon6 = '/assets/9bb2e.svg';
	const imgIcon7 = '/assets/0f28d.svg';
	const imgIcon8 = '/assets/0a5ac.svg';
	const imgIcon9 = '/assets/5c98f.svg';
	const imgIcon10 = '/assets/29081.svg';
	const imgIcon11 = '/assets/6f477.svg';
	const imgIcon12 = '/assets/d573d.svg';
	const imgIcon13 = '/assets/c366e.svg';
	const imgIcon14 = '/assets/5f833.svg';
	const imgIcon15 = '/assets/82316.svg';
	const imgGroup2 = '/assets/bf7d8.svg';
	const imgIcon16 = '/assets/f7856.svg';
	const imgIcon17 = '/assets/008f3.svg';
	const imgIcon18 = '/assets/48e75.svg';
	const imgAppleIcon = '/assets/256e4.svg';
	const imgGroup3 = '/assets/8725c.svg';
	const imgShield = '/assets/557e7.svg';
	const imgIcon19 = '/assets/18d4b.svg';
	const imgIcon20 = '/assets/dc7e2.svg';
	const imgIcon21 = '/assets/dc1ab.svg';
</script>

<div
	class="relative flex size-full flex-col content-stretch items-center bg-white"
	data-name="Shopix - Support Tickets"
>
	<SiteHeader />
	<div
		class="relative flex w-full max-w-[1440px] shrink-0 flex-col content-stretch items-center justify-center bg-white py-[56px]"
		data-name="Support tickets"
	>
		<div
			class="relative flex w-full max-w-[1280px] min-w-[328px] shrink-0 content-stretch items-start gap-[24px] overflow-clip px-[32px]"
			data-name="Flex Horizontal"
		>
			<div
				class="relative flex shrink-0 flex-col content-stretch items-start"
				data-name="User Profile Sidebar"
			>
				<div
					class="relative flex h-[922px] w-[299px] shrink-0 flex-col content-stretch items-start gap-[12px] overflow-clip rounded-[14px] bg-white py-[16px] shadow-[0px_0px_0px_1px_rgba(10,10,10,0.1)]"
					data-name="Card"
				>
					<div
						class="relative flex w-full shrink-0 flex-col content-stretch items-start gap-[12px] px-[16px]"
						data-name="card-body"
					>
						<div
							class="relative flex w-full shrink-0 flex-col content-stretch items-start gap-[16px]"
							data-name="Flex Vertical"
						>
							<div
								class="relative flex w-full shrink-0 flex-col content-stretch items-start justify-center gap-[8px]"
								data-name="Flex Vertical"
							>
								<div
									class="relative size-[48px] shrink-0 overflow-clip rounded-[10px] border border-solid border-[#e5e5e5]"
									data-name="Avatar"
								>
									<div class="absolute inset-[-1px]" data-name="pic">
										<div class="pointer-events-none absolute inset-0 overflow-hidden">
											<img
												alt=""
												class="absolute top-[2.89%] left-[-39.55%] h-[152.08%] w-[179.54%] max-w-none"
												src={imgPic}
											/>
										</div>
									</div>
								</div>
								<div
									class="relative flex shrink-0 content-stretch items-center justify-center gap-[4px] rounded-[8px]"
									data-name="Ghost Button"
								>
									<div
										class="relative flex shrink-0 flex-col justify-center font-['Geist:Medium'] text-[12px] leading-[0] font-medium [word-break:break-word] whitespace-nowrap text-[#0a0a0a]"
									>
										<p class="leading-[16px]">Edit Profile Photo</p>
									</div>
								</div>
							</div>
							<div
								class="relative flex w-full shrink-0 flex-col content-stretch items-start gap-[2px] [word-break:break-word]"
								data-name="Flex Vertical"
							>
								<p
									class="relative w-[min-content] min-w-full shrink-0 font-['Geist:SemiBold'] text-[18px] leading-[28px] font-semibold text-[#0a0a0a]"
								>
									Cristofer Torff
								</p>
								<p
									class="relative shrink-0 font-['Geist:Light'] text-[16px] leading-[24px] font-light whitespace-nowrap text-[#737373]"
								>
									Cri@example.com
								</p>
							</div>
						</div>
						<div class="relative h-[8px] w-full shrink-0" data-name="separator">
							<img alt="" class="absolute inset-0 block size-full max-w-none" src={imgSeparator} />
						</div>
						<div
							class="relative flex w-full shrink-0 flex-col content-stretch items-center"
							data-name="Flex Vertical"
						>
							<div
								class="relative flex w-full shrink-0 flex-col content-stretch items-start gap-[2px]"
								data-name="Flex Vertical"
							>
								<div
									class="relative flex w-full shrink-0 content-stretch items-center gap-[8px] rounded-[6px] px-[12px] py-[10px]"
									data-name="Flex Horizontal"
								>
									<div class="relative size-[20px] shrink-0" data-name="Icon">
										<img
											alt=""
											class="absolute inset-0 block size-full max-w-none"
											src={imgIcon4}
										/>
									</div>
									<p
										class="relative h-full min-w-px flex-[1_0_0] font-['Geist:Medium'] text-[16px] leading-[24px] font-medium [word-break:break-word] text-[#0a0a0a]"
									>
										My account
									</p>
								</div>
								<div
									class="relative flex w-full shrink-0 content-stretch items-center gap-[8px] rounded-[6px] px-[12px] py-[10px]"
									data-name="Flex Horizontal"
								>
									<div class="relative size-[20px] shrink-0" data-name="Icon">
										<img
											alt=""
											class="absolute inset-0 block size-full max-w-none"
											src={imgIcon5}
										/>
									</div>
									<p
										class="relative h-full min-w-px flex-[1_0_0] font-['Geist:Regular'] text-[16px] leading-[24px] font-normal [word-break:break-word] text-[#0a0a0a]"
									>
										My Wishlist
									</p>
								</div>
								<div
									class="relative flex w-full shrink-0 content-stretch items-center gap-[8px] rounded-[6px] px-[12px] py-[10px]"
									data-name="Flex Horizontal"
								>
									<div class="relative size-[20px] shrink-0" data-name="Icon">
										<img
											alt=""
											class="absolute inset-0 block size-full max-w-none"
											src={imgIcon6}
										/>
									</div>
									<p
										class="relative h-full min-w-px flex-[1_0_0] font-['Geist:Regular'] text-[16px] leading-[24px] font-normal [word-break:break-word] text-[#0a0a0a]"
									>
										My Orders
									</p>
								</div>
								<div
									class="relative flex w-full shrink-0 content-stretch items-center gap-[8px] rounded-[6px] px-[12px] py-[10px]"
									data-name="Flex Horizontal"
								>
									<div class="relative size-[20px] shrink-0" data-name="Icon">
										<img
											alt=""
											class="absolute inset-0 block size-full max-w-none"
											src={imgIcon7}
										/>
									</div>
									<p
										class="relative h-full min-w-px flex-[1_0_0] font-['Geist:Regular'] text-[16px] leading-[24px] font-normal [word-break:break-word] text-[#0a0a0a]"
									>
										Order Details
									</p>
								</div>
								<div
									class="relative flex w-full shrink-0 content-stretch items-center gap-[8px] rounded-[6px] px-[12px] py-[10px]"
									data-name="Flex Horizontal"
								>
									<div class="relative size-[20px] shrink-0" data-name="Icon">
										<img
											alt=""
											class="absolute inset-0 block size-full max-w-none"
											src={imgIcon8}
										/>
									</div>
									<p
										class="relative min-w-px flex-[1_0_0] font-['Geist:Regular'] text-[16px] leading-[24px] font-normal [word-break:break-word] text-[#0a0a0a]"
									>
										My Addresses
									</p>
								</div>
								<div
									class="relative flex w-full shrink-0 content-stretch items-center gap-[8px] rounded-[6px] px-[12px] py-[10px]"
									data-name="Flex Horizontal"
								>
									<div class="relative size-[20px] shrink-0" data-name="Icon">
										<img
											alt=""
											class="absolute inset-0 block size-full max-w-none"
											src={imgIcon9}
										/>
									</div>
									<p
										class="relative h-full min-w-px flex-[1_0_0] font-['Geist:Regular'] text-[16px] leading-[24px] font-normal [word-break:break-word] text-[#0a0a0a]"
									>
										My Wallet
									</p>
								</div>
								<div class="relative h-[8px] w-full shrink-0" data-name="separator">
									<img
										alt=""
										class="absolute inset-0 block size-full max-w-none"
										src={imgSeparator}
									/>
								</div>
								<a
									href="/account/payment"
									class="relative flex w-full shrink-0 content-stretch items-center gap-[8px] rounded-[6px] px-[12px] py-[10px] hover:bg-gray-50"
									data-name="Flex Horizontal"
								>
									<div class="relative size-[20px] shrink-0" data-name="Icon">
										<img
											alt=""
											class="absolute inset-0 block size-full max-w-none"
											src={imgIcon10}
										/>
									</div>
									<p
										class="relative h-full min-w-px flex-[1_0_0] font-['Geist:Regular'] text-[16px] leading-[24px] font-normal [word-break:break-word] text-[#0a0a0a]"
									>
										Payment
									</p>
								</a>
								<a
									href="/account/gift-cards"
									class="relative flex w-full shrink-0 content-stretch items-center gap-[8px] rounded-[6px] px-[12px] py-[10px] hover:bg-gray-50"
									data-name="Flex Horizontal"
								>
									<div class="relative size-[20px] shrink-0" data-name="Icon">
										<img
											alt=""
											class="absolute inset-0 block size-full max-w-none"
											src={imgIcon11}
										/>
									</div>
									<p
										class="relative h-full min-w-px flex-[1_0_0] font-['Geist:Regular'] text-[16px] leading-[24px] font-normal [word-break:break-word] text-[#0a0a0a]"
									>
										Gift Cards
									</p>
								</a>
								<a
									href="/account/returns-refunds"
									class="relative flex w-full shrink-0 content-stretch items-center gap-[8px] rounded-[6px] px-[12px] py-[10px] hover:bg-gray-50"
									data-name="Flex Horizontal"
								>
									<div class="relative size-[20px] shrink-0" data-name="Icon">
										<img
											alt=""
											class="absolute inset-0 block size-full max-w-none"
											src={imgIcon12}
										/>
									</div>
									<p
										class="relative h-full min-w-px flex-[1_0_0] font-['Geist:Regular'] text-[16px] leading-[24px] font-normal [word-break:break-word] text-[#0a0a0a]"
									>
										{`Return & Refunds`}
									</p>
								</a>
								<a
									href="/account/newsletter"
									class="relative flex w-full shrink-0 content-stretch items-center gap-[8px] rounded-[6px] px-[12px] py-[10px] hover:bg-gray-50"
									data-name="Flex Horizontal"
								>
									<div class="relative size-[20px] shrink-0" data-name="Icon">
										<img
											alt=""
											class="absolute inset-0 block size-full max-w-none"
											src={imgIcon13}
										/>
									</div>
									<p
										class="relative h-full min-w-px flex-[1_0_0] font-['Geist:Regular'] text-[16px] leading-[24px] font-normal [word-break:break-word] text-[#0a0a0a]"
									>
										Email Newsletter
									</p>
								</a>
								<a
									href="/account/support-tickets"
									class="relative flex w-full shrink-0 content-stretch items-center gap-[8px] rounded-[6px] bg-[#f5f5f5] px-[12px] py-[10px]"
									data-name="Flex Horizontal"
								>
									<div class="relative size-[20px] shrink-0" data-name="Icon">
										<img
											alt=""
											class="absolute inset-0 block size-full max-w-none"
											src={imgIcon14}
										/>
									</div>
									<p
										class="relative h-full min-w-px flex-[1_0_0] font-['Geist:Regular'] text-[16px] leading-[24px] font-normal [word-break:break-word] text-[#0a0a0a]"
									>
										Support Tickets
									</p>
								</a>
								<div class="relative h-[8px] w-full shrink-0" data-name="separator">
									<img
										alt=""
										class="absolute inset-0 block size-full max-w-none"
										src={imgSeparator}
									/>
								</div>
								<button
									type="button"
									class="relative flex w-full shrink-0 cursor-pointer content-stretch items-center gap-[8px] rounded-[6px] px-[12px] py-[10px] text-left hover:bg-gray-50"
									data-name="Flex Horizontal"
									onclick={() => signOutUser()}
								>
									<div class="relative size-[20px] shrink-0" data-name="Icon">
										<img
											alt=""
											class="absolute inset-0 block size-full max-w-none"
											src={imgIcon15}
										/>
									</div>
									<p
										class="relative h-full w-[229px] shrink-0 font-['Geist:Regular'] text-[16px] leading-[24px] font-normal [word-break:break-word] text-[#0a0a0a]"
									>
										Logout
									</p>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div
				class="relative flex w-[893px] shrink-0 flex-col content-stretch items-start gap-[14px]"
				data-name="Flex Vertical"
			>
				<p
					class="relative w-full shrink-0 font-['Geist:SemiBold'] text-[20px] leading-[28px] font-semibold [word-break:break-word] text-[#0a0a0a]"
				>
					Support Tickets
				</p>
				<div
					class="relative flex w-full shrink-0 flex-col content-stretch items-start gap-[16px] overflow-clip rounded-[14px] bg-white py-[16px] shadow-[0px_0px_0px_1px_rgba(10,10,10,0.1)]"
					data-name="Card"
				>
					<div
						class="relative flex w-full shrink-0 flex-col content-stretch items-start px-[16px]"
						data-name="card-body"
					>
						<div
							class="relative flex w-full shrink-0 flex-col content-stretch items-start gap-[8px] [word-break:break-word]"
							data-name="Flex Vertical"
						>
							<p
								class="relative w-full shrink-0 font-['Geist:Medium'] text-[20px] leading-[28px] font-medium text-[#0a0a0a]"
							>
								Mastercard ending in 7830
							</p>
							<p
								class="relative w-full shrink-0 font-['Geist:Regular'] text-[14px] leading-[20px] font-normal text-[#737373]"
							>
								Jul 02, 2025 — Order Problem
							</p>
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
						<div
							class="relative flex w-full shrink-0 flex-col content-stretch items-start gap-[8px] [word-break:break-word]"
							data-name="Flex Vertical"
						>
							<p
								class="relative w-full shrink-0 font-['Geist:Medium'] text-[20px] leading-[28px] font-medium text-[#0a0a0a]"
							>
								Promo Code Not Working at Checkout
							</p>
							<p
								class="relative w-full shrink-0 font-['Geist:Regular'] text-[14px] leading-[20px] font-normal text-[#737373]"
							>
								Jul 01, 2025 — Website Help
							</p>
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
						<div
							class="relative flex w-full shrink-0 flex-col content-stretch items-start gap-[8px] [word-break:break-word]"
							data-name="Flex Vertical"
						>
							<p
								class="relative w-full shrink-0 font-['Geist:Medium'] text-[20px] leading-[28px] font-medium text-[#0a0a0a]"
							>
								Request to Change Delivery Address
							</p>
							<p
								class="relative w-full shrink-0 font-['Geist:Regular'] text-[14px] leading-[20px] font-normal text-[#737373]"
							>
								Jun 29, 2025 — Order Update
							</p>
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
						<div
							class="relative flex w-full shrink-0 flex-col content-stretch items-start gap-[8px] [word-break:break-word]"
							data-name="Flex Vertical"
						>
							<p
								class="relative w-full shrink-0 font-['Geist:Medium'] text-[20px] leading-[28px] font-medium text-[#0a0a0a]"
							>
								Damaged Package — Replacement Needed
							</p>
							<p
								class="relative w-full shrink-0 font-['Geist:Regular'] text-[14px] leading-[20px] font-normal text-[#737373]"
							>
								{`Jun 28, 2025 — Returns & Refunds`}
							</p>
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
						<div
							class="relative flex w-full shrink-0 flex-col content-stretch items-start gap-[8px] [word-break:break-word]"
							data-name="Flex Vertical"
						>
							<p
								class="relative w-full shrink-0 font-['Geist:Medium'] text-[20px] leading-[28px] font-medium text-[#0a0a0a]"
							>
								Account Login Help Needed
							</p>
							<p
								class="relative w-full shrink-0 font-['Geist:Regular'] text-[14px] leading-[20px] font-normal text-[#737373]"
							>
								Jun 27, 2025 — Website Help
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<SiteFooter />
</div>
