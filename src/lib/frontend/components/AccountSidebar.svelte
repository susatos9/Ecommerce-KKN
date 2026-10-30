<script lang="ts">
	import { signOutUser } from '#frontend/modules/auth/index.ts';

	const imgPic = '/assets/d94d6.png';
	const imgSeparator = '/assets/42c25.svg';
	const imgIcon = '/assets/f0c09.svg';
	const imgIcon1 = '/assets/95ca5.svg';
	const imgIcon2 = '/assets/9bb2e.svg';
	const imgIcon3 = '/assets/0f28d.svg';
	const imgIcon4 = '/assets/0a5ac.svg';
	const imgIcon5 = '/assets/5c98f.svg';
	const imgIcon6 = '/assets/29081.svg';
	const imgIcon7 = '/assets/6f477.svg';
	const imgIcon8 = '/assets/d573d.svg';
	const imgIcon9 = '/assets/c366e.svg';
	const imgIcon10 = '/assets/5f833.svg';
	const imgIcon11 = '/assets/82316.svg';

	let { class: className = undefined }: { class?: string } = $props();
	let mobileExpanded = $state(false);
</script>

<div
	class={className ||
		'relative flex w-full shrink-0 flex-col content-stretch items-start lg:w-[299px]'}
	data-name="User Profile Sidebar"
>
	<div
		class="relative flex h-auto w-full shrink-0 flex-col content-stretch items-start gap-[12px] overflow-clip rounded-[14px] bg-white py-[16px] shadow-[0px_0px_0px_1px_rgba(10,10,10,0.1)] lg:h-[922px]"
		data-name="Card"
	>
		<div
			class="relative flex w-full shrink-0 flex-col content-stretch items-start gap-[12px] px-[16px]"
			data-name="card-body"
		>
			<div
				class="relative flex w-full shrink-0 content-stretch items-center justify-between gap-[16px] lg:flex-col lg:items-start"
				data-name="Flex Vertical"
			>
				<div class="flex items-center gap-3">
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
						class="relative flex flex-col content-stretch items-start gap-[2px] [word-break:break-word]"
						data-name="Flex Vertical"
					>
						<p
							class="relative shrink-0 font-['Geist:SemiBold'] text-[16px] leading-[24px] font-semibold text-[#0a0a0a] lg:text-[18px] lg:leading-[28px]"
						>
							Cristofer Torff
						</p>
						<p
							class="relative shrink-0 font-['Geist:Light'] text-[14px] leading-[20px] font-light whitespace-nowrap text-[#737373] lg:text-[16px] lg:leading-[24px]"
						>
							Cri@example.com
						</p>
					</div>
				</div>

				<button
					onclick={() => (mobileExpanded = !mobileExpanded)}
					class="rounded-lg bg-gray-100 px-3 py-1.5 text-xs font-semibold text-gray-800 lg:hidden"
				>
					{mobileExpanded ? 'Hide Menu ▲' : 'Account Menu ▼'}
				</button>
			</div>

			<div class="relative hidden h-[8px] w-full shrink-0 lg:block" data-name="separator">
				<img alt="" class="absolute inset-0 block size-full max-w-none" src={imgSeparator} />
			</div>

			<div
				class={`${mobileExpanded ? 'flex' : 'hidden lg:flex'} relative w-full shrink-0 flex-col content-stretch items-center`}
				data-name="Flex Vertical"
			>
				<div
					class="relative flex w-full shrink-0 flex-col content-stretch items-start gap-[2px]"
					data-name="Flex Vertical"
				>
					<a
						href="/account/payment"
						class="relative flex w-full shrink-0 content-stretch items-center gap-[8px] rounded-[6px] bg-[#f5f5f5] px-[12px] py-[10px] hover:bg-gray-100"
						data-name="Flex Horizontal"
					>
						<div class="relative size-[20px] shrink-0" data-name="Icon">
							<img alt="" class="absolute inset-0 block size-full max-w-none" src={imgIcon} />
						</div>
						<p
							class="relative h-full min-w-px flex-[1_0_0] font-['Geist:Medium'] text-[16px] leading-[24px] font-medium [word-break:break-word] text-[#0a0a0a]"
						>
							My account
						</p>
					</a>
					<a
						href="/categories"
						class="relative flex w-full shrink-0 content-stretch items-center gap-[8px] rounded-[6px] px-[12px] py-[10px] hover:bg-gray-50"
						data-name="Flex Horizontal"
					>
						<div class="relative size-[20px] shrink-0" data-name="Icon">
							<img alt="" class="absolute inset-0 block size-full max-w-none" src={imgIcon1} />
						</div>
						<p
							class="relative h-full min-w-px flex-[1_0_0] font-['Geist:Regular'] text-[16px] leading-[24px] font-normal [word-break:break-word] text-[#0a0a0a]"
						>
							My Wishlist
						</p>
					</a>
					<a
						href="/account/order-tracking"
						class="relative flex w-full shrink-0 content-stretch items-center gap-[8px] rounded-[6px] px-[12px] py-[10px] hover:bg-gray-50"
						data-name="Flex Horizontal"
					>
						<div class="relative size-[20px] shrink-0" data-name="Icon">
							<img alt="" class="absolute inset-0 block size-full max-w-none" src={imgIcon2} />
						</div>
						<p
							class="relative h-full min-w-px flex-[1_0_0] font-['Geist:Regular'] text-[16px] leading-[24px] font-normal [word-break:break-word] text-[#0a0a0a]"
						>
							My Orders
						</p>
					</a>
					<a
						href="/account/order-tracking"
						class="relative flex w-full shrink-0 content-stretch items-center gap-[8px] rounded-[6px] px-[12px] py-[10px] hover:bg-gray-50"
						data-name="Flex Horizontal"
					>
						<div class="relative size-[20px] shrink-0" data-name="Icon">
							<img alt="" class="absolute inset-0 block size-full max-w-none" src={imgIcon3} />
						</div>
						<p
							class="relative h-full min-w-px flex-[1_0_0] font-['Geist:Regular'] text-[16px] leading-[24px] font-normal [word-break:break-word] text-[#0a0a0a]"
						>
							Order Details
						</p>
					</a>
					<a
						href="/checkout/address"
						class="relative flex w-full shrink-0 content-stretch items-center gap-[8px] rounded-[6px] px-[12px] py-[10px] hover:bg-gray-50"
						data-name="Flex Horizontal"
					>
						<div class="relative size-[20px] shrink-0" data-name="Icon">
							<img alt="" class="absolute inset-0 block size-full max-w-none" src={imgIcon4} />
						</div>
						<p
							class="relative min-w-px flex-[1_0_0] font-['Geist:Regular'] text-[16px] leading-[24px] font-normal [word-break:break-word] text-[#0a0a0a]"
						>
							My Addresses
						</p>
					</a>
					<a
						href="/account/payment"
						class="relative flex w-full shrink-0 content-stretch items-center gap-[8px] rounded-[6px] px-[12px] py-[10px] hover:bg-gray-50"
						data-name="Flex Horizontal"
					>
						<div class="relative size-[20px] shrink-0" data-name="Icon">
							<img alt="" class="absolute inset-0 block size-full max-w-none" src={imgIcon5} />
						</div>
						<p
							class="relative h-full min-w-px flex-[1_0_0] font-['Geist:Regular'] text-[16px] leading-[24px] font-normal [word-break:break-word] text-[#0a0a0a]"
						>
							My Wallet
						</p>
					</a>
					<div class="relative h-[8px] w-full shrink-0" data-name="separator">
						<img alt="" class="absolute inset-0 block size-full max-w-none" src={imgSeparator} />
					</div>
					<a
						href="/account/payment"
						class="relative flex w-full shrink-0 content-stretch items-center gap-[8px] rounded-[6px] px-[12px] py-[10px] hover:bg-gray-50"
						data-name="Flex Horizontal"
					>
						<div class="relative size-[20px] shrink-0" data-name="Icon">
							<img alt="" class="absolute inset-0 block size-full max-w-none" src={imgIcon6} />
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
							<img alt="" class="absolute inset-0 block size-full max-w-none" src={imgIcon7} />
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
							<img alt="" class="absolute inset-0 block size-full max-w-none" src={imgIcon8} />
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
							<img alt="" class="absolute inset-0 block size-full max-w-none" src={imgIcon9} />
						</div>
						<p
							class="relative h-full min-w-px flex-[1_0_0] font-['Geist:Regular'] text-[16px] leading-[24px] font-normal [word-break:break-word] text-[#0a0a0a]"
						>
							Email Newsletter
						</p>
					</a>
					<a
						href="/account/support-tickets"
						class="relative flex w-full shrink-0 content-stretch items-center gap-[8px] rounded-[6px] px-[12px] py-[10px] hover:bg-gray-50"
						data-name="Flex Horizontal"
					>
						<div class="relative size-[20px] shrink-0" data-name="Icon">
							<img alt="" class="absolute inset-0 block size-full max-w-none" src={imgIcon10} />
						</div>
						<p
							class="relative h-full min-w-px flex-[1_0_0] font-['Geist:Regular'] text-[16px] leading-[24px] font-normal [word-break:break-word] text-[#0a0a0a]"
						>
							Support Tickets
						</p>
					</a>
					<div class="relative h-[8px] w-full shrink-0" data-name="separator">
						<img alt="" class="absolute inset-0 block size-full max-w-none" src={imgSeparator} />
					</div>
					<button
						type="button"
						class="relative flex w-full shrink-0 cursor-pointer content-stretch items-center gap-[8px] rounded-[6px] px-[12px] py-[10px] text-left text-red-600 hover:bg-gray-50"
						data-name="Flex Horizontal"
						onclick={() => signOutUser()}
					>
						<div class="relative size-[20px] shrink-0" data-name="Icon">
							<img alt="" class="absolute inset-0 block size-full max-w-none" src={imgIcon11} />
						</div>
						<p
							class="relative h-full shrink-0 font-['Geist:Regular'] text-[16px] leading-[24px] font-normal [word-break:break-word]"
						>
							Logout
						</p>
					</button>
				</div>
			</div>
		</div>
	</div>
</div>
