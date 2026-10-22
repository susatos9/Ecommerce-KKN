<script lang="ts">
	import { goto } from '$app/navigation';
	import SiteHeader from '#lib/frontend/components/SiteHeader.svelte';
	import SiteFooter from '#lib/frontend/components/SiteFooter.svelte';
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
	const imgEllipse91 = '/assets/ec99f.svg';
	const imgGroup2 = '/assets/0fe4b.svg';
	const imgLeftIcon5 = '/assets/e0a1f.svg';
	const imgSeparator = '/assets/7c830.svg';
	const imgGroup3 = '/assets/bf7d8.svg';
	const imgIcon4 = '/assets/f7856.svg';
	const imgIcon5 = '/assets/008f3.svg';
	const imgIcon6 = '/assets/48e75.svg';
	const imgAppleIcon = '/assets/256e4.svg';
	const imgGroup4 = '/assets/f943f.svg';
	const imgShield = '/assets/557e7.svg';
	const imgIcon7 = '/assets/18d4b.svg';
	const imgIcon8 = '/assets/dc7e2.svg';
	const imgIcon9 = '/assets/dc1ab.svg';
</script>

<div
	class="relative flex size-full flex-col content-stretch items-center bg-white"
	data-name="Shopix - Authentication register"
>
	<SiteHeader />
	<div
		class="relative flex w-full max-w-[1440px] shrink-0 flex-col content-stretch items-center justify-center bg-white py-[56px]"
		data-name="Authentication"
	>
		<div
			class="relative flex w-full max-w-[1280px] min-w-[328px] shrink-0 content-stretch items-center justify-center px-[32px]"
			data-name="Flex Horizontal"
		>
			<div
				class="relative flex max-w-[480px] min-w-[328px] flex-[1_0_0] flex-col content-stretch items-center justify-center gap-[24px] overflow-clip rounded-[14px] py-[24px]"
				data-name="Login Form"
			>
				<a
					href="/"
					class="relative flex shrink-0 cursor-pointer content-stretch items-center justify-center"
					data-name="Logo"
				>
					<div
						class="relative flex h-[32px] shrink-0 content-stretch items-center gap-[8px]"
						data-name="shopix-logo"
					>
						<div
							class="relative inline-grid shrink-0 grid-cols-[max-content] grid-rows-[max-content] place-items-start leading-[0]"
						>
							<div class="relative col-1 row-1 mt-0 ml-0 size-[28px]">
								<img
									alt=""
									class="absolute inset-0 block size-full max-w-none"
									src={imgEllipse91}
								/>
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
										<img
											alt=""
											class="absolute inset-0 block size-full max-w-none"
											src={imgGroup2}
										/>
									</div>
								</div>
							</div>
						</div>
						<div
							class="relative flex shrink-0 content-stretch items-center justify-center pt-[2px]"
						>
							<div
								class="relative flex shrink-0 flex-col justify-end font-['Inter:Semi_Bold'] text-[20px] leading-[0] font-semibold [word-break:break-word] whitespace-nowrap text-[#0a0a0a] not-italic"
							>
								<p class="leading-[26px]">{`Shopix `}</p>
							</div>
						</div>
					</div>
				</a>
				<div
					class="relative flex w-full shrink-0 flex-col content-stretch items-center gap-[8px] text-center [word-break:break-word]"
					data-name="Header"
				>
					<p
						class="relative w-full shrink-0 font-['Geist:SemiBold'] text-[24px] leading-[32px] font-semibold text-[#0a0a0a]"
					>
						Sign Up to Shopix
					</p>
					<p
						class="relative w-full shrink-0 font-['Geist:Regular'] text-[16px] leading-[24px] font-normal text-[#737373]"
					>
						Please enter your details to sign in
					</p>
				</div>
				<div
					class="relative flex w-full shrink-0 content-stretch items-start gap-[10px]"
					data-name="Social login"
				>
					<div
						class="relative flex min-w-px flex-[1_0_0] content-stretch items-center justify-center rounded-[10px] border border-solid border-[#e5e5e5] bg-white p-[8px]"
						data-name="Outline Icon Button"
					>
						<div class="relative size-[16px] shrink-0" data-name="Left-icon">
							<img alt="" class="absolute inset-0 block size-full max-w-none" src={imgLeftIcon5} />
						</div>
					</div>
					<div
						class="relative flex min-w-px flex-[1_0_0] content-stretch items-center justify-center rounded-[10px] border border-solid border-[#e5e5e5] bg-white p-[8px]"
						data-name="Outline Icon Button"
					>
						<div class="relative size-[16px] shrink-0" data-name="Left-icon">
							<img alt="" class="absolute inset-0 block size-full max-w-none" src={imgLeftIcon5} />
						</div>
					</div>
				</div>
				<div
					class="relative flex w-full shrink-0 content-stretch items-center gap-[16px]"
					data-name="Row"
				>
					<div class="relative h-0 min-w-px flex-[1_0_0]" data-name="Separator">
						<div class="absolute inset-[-1px_0_0_0]">
							<img alt="" class="block size-full max-w-none" src={imgSeparator} />
						</div>
					</div>
					<p
						class="relative shrink-0 text-center font-['Geist:Regular'] text-[16px] leading-[24px] font-normal [word-break:break-word] whitespace-nowrap text-[#0a0a0a]"
					>
						or
					</p>
					<div class="relative h-0 min-w-px flex-[1_0_0]" data-name="Separator">
						<div class="absolute inset-[-1px_0_0_0]">
							<img alt="" class="block size-full max-w-none" src={imgSeparator} />
						</div>
					</div>
				</div>
				<div
					class="relative flex w-full shrink-0 flex-col content-stretch items-start justify-center gap-[16px]"
					data-name="Form"
				>
					<div
						class="relative flex w-full shrink-0 flex-col content-stretch items-start gap-[8px]"
						data-name="Default Input"
					>
						<div
							class="relative flex w-full shrink-0 content-stretch items-center gap-[8px]"
							data-name="Top"
						>
							<p
								class="relative min-w-px flex-[1_0_0] font-['Geist:Medium'] text-[14px] leading-[20px] font-medium [word-break:break-word] text-[#0a0a0a]"
							>
								Email*
							</p>
						</div>
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
									<p class="overflow-hidden leading-[20px] text-ellipsis">john@gmail.com</p>
								</div>
							</div>
						</div>
					</div>
					<div
						class="relative flex w-full shrink-0 flex-col content-stretch items-start gap-[8px]"
						data-name="Default Input"
					>
						<div
							class="relative flex w-full shrink-0 content-stretch items-center gap-[8px]"
							data-name="Top"
						>
							<p
								class="relative min-w-px flex-[1_0_0] font-['Geist:Medium'] text-[14px] leading-[20px] font-medium [word-break:break-word] text-[#0a0a0a]"
							>
								Password*
							</p>
						</div>
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
									<p class="overflow-hidden leading-[20px] text-ellipsis">············</p>
								</div>
							</div>
						</div>
					</div>
					<div
						class="relative flex w-full shrink-0 flex-col content-stretch items-start gap-[8px]"
						data-name="Default Input"
					>
						<div
							class="relative flex w-full shrink-0 content-stretch items-center gap-[8px]"
							data-name="Top"
						>
							<p
								class="relative min-w-px flex-[1_0_0] font-['Geist:Medium'] text-[14px] leading-[20px] font-medium [word-break:break-word] text-[#0a0a0a]"
							>
								Confirm Password*
							</p>
						</div>
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
									<p class="overflow-hidden leading-[20px] text-ellipsis">············</p>
								</div>
							</div>
						</div>
					</div>
					<div
						class="relative flex w-full shrink-0 content-stretch items-start gap-[8px]"
						data-name="Check Box"
					>
						<div
							class="relative flex size-[24px] shrink-0 flex-col content-stretch items-center justify-center rounded-[4px] border border-solid border-[#e5e5e5] bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)]"
							data-name="Checkbox"
						></div>
						<div
							class="relative flex shrink-0 flex-col content-stretch items-start justify-center gap-[8px] self-stretch"
							data-name="Text"
						>
							<div
								class="relative flex h-[24px] w-[min-content] min-w-full shrink-0 flex-col justify-center font-['Geist:Medium'] text-[14px] leading-[0] font-medium [word-break:break-word] text-[rgba(63,64,77,0.8)]"
							>
								<p>
									<span class="leading-[20px]">{`I agree to `}</span>
									<span class="leading-[20px] text-[#171717]">{`privacy policy & terms`}</span>
								</p>
							</div>
						</div>
					</div>
					<button
						type="button"
						class="relative flex w-full shrink-0 cursor-pointer content-stretch items-center justify-center gap-[6px] overflow-clip rounded-[10px] bg-[#171717] px-[16px] py-[8px]"
						data-name="Solid Button"
						onclick={() => goto('/verify-email')}
					>
						<div
							class="relative flex shrink-0 flex-col justify-center font-['Geist:Medium'] text-[14px] leading-[0] font-medium [word-break:break-word] whitespace-nowrap text-[#fafafa]"
						>
							<p class="leading-[20px]">Sign in to Shopix</p>
						</div>
					</button>
					<p
						class="relative w-full shrink-0 text-center font-['Geist:Regular'] text-[16px] leading-[0] font-normal [word-break:break-word] text-[#737373]"
					>
						<span class="leading-[24px]">{`Already have an account ? `}</span>
						<a href="/login" class="leading-[24px] text-[#0a0a0a] hover:underline">Log in</a>
					</p>
				</div>
			</div>
		</div>
	</div>
	<SiteFooter />
</div>
