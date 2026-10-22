<script lang="ts">
	import { goto } from '$app/navigation';
	import Pagination from '#lib/frontend/components/ui/Pagination.svelte';
	import SiteHeader from '#lib/frontend/components/SiteHeader.svelte';
	import SiteFooter from '#lib/frontend/components/SiteFooter.svelte';
	const imgLeftIcon = '/assets/ca51b.svg';
	const imgEllipsis = '/assets/5c61b.svg';
	const imgLeftIcon1 = '/assets/6b5ef.svg';
	const imgEllipse1 = '/assets/9c996.svg';
	const imgPic = '/assets/d94d6.png';
	const imgCardBody14 = '/assets/972d5.png';
	const imgCardBody17 = '/assets/fa812.png';
	const imgCardBody18 = '/assets/886b2.png';
	const imgCardBody19 = '/assets/46675.png';
	const imgCardBody20 = '/assets/786c1.png';
	const imgCardBody21 = '/assets/f1ede.png';
	const imgCardBody22 = '/assets/c746f.png';
	const imgCardBody23 = '/assets/32daa.png';
	const imgCardBody24 = '/assets/c88b3.png';
	const imgCardBody25 = '/assets/d4e6e.png';
	const imgCardBody26 = '/assets/8cd4d.png';
	const imgCardBody27 = '/assets/deba9.png';
	const imgImage19 = '/assets/3cc20.png';
	const imgImage13 = '/assets/ad1bf.png';
	const imgImage11 = '/assets/c2747.png';
	const imgImage12 = '/assets/d5a5f.png';
	const imgOrnament54 = '/assets/c7bb1.svg';
	const imgOrnament51 = '/assets/ddcaa.svg';
	const imgOrnament52 = '/assets/658ce.svg';
	const imgOrnament53 = '/assets/0d8d6.svg';
	const imgLeftIcon2 = '/assets/a05bd.svg';
	const imgIcon = '/assets/fd9fe.svg';
	const imgIcon1 = '/assets/d2675.svg';
	const imgEllipse90 = '/assets/7af52.svg';
	const imgGroup = '/assets/9c2d9.svg';
	const imgGroup1 = '/assets/f2165.svg';
	const imgLeftIcon3 = '/assets/525ae.svg';
	const imgLeftIcon4 = '/assets/51c3a.svg';
	const imgLeftIcon5 = '/assets/a3682.svg';
	const imgLeftIcon6 = '/assets/dad92.svg';
	const imgIcon2 = '/assets/303ae.svg';
	const imgIcon3 = '/assets/bf68c.svg';
	const imgItems = '/assets/20e59.svg';
	const imgCardBody = '/assets/1952d.svg';
	const imgCardBody1 = '/assets/f64b2.svg';
	const imgCardBody2 = '/assets/402db.svg';
	const imgCardBody3 = '/assets/f8b18.svg';
	const imgCardBody4 = '/assets/babef.svg';
	const imgCardBody5 = '/assets/82e9f.svg';
	const imgCardBody6 = '/assets/3d7f3.svg';
	const imgCardBody7 = '/assets/39b1e.svg';
	const imgCardBody8 = '/assets/026f8.svg';
	const imgCardBody9 = '/assets/b9113.svg';
	const imgCardBody10 = '/assets/4b11f.svg';
	const imgCardBody11 = '/assets/a23dc.svg';
	const imgCardBody12 = '/assets/70098.svg';
	const imgCardBody13 = '/assets/728b9.svg';
	const imgItems1 = '/assets/1b829.svg';
	const imgItems2 = '/assets/0d4d6.svg';
	const imgSelectValue = '/assets/2ea59.svg';
	const imgX = '/assets/21a32.svg';
	const imgCardBody15 = '/assets/e5b95.svg';
	const imgCardBody16 = '/assets/078ee.svg';
	const imgGroup2 = '/assets/f5a29.svg';
	const imgIcon4 = '/assets/f7856.svg';
	const imgIcon5 = '/assets/008f3.svg';
	const imgIcon6 = '/assets/48e75.svg';
	const imgAppleIcon = '/assets/256e4.svg';
	const imgGroup3 = '/assets/3ea43.svg';
	const imgShield = '/assets/557e7.svg';
	const imgIcon7 = '/assets/18d4b.svg';
	const imgIcon8 = '/assets/dc7e2.svg';
	const imgIcon9 = '/assets/dc1ab.svg';
</script>

<div
	class="relative flex size-full flex-col content-stretch items-center bg-white"
	data-name="Shopix - Product Listing List View With Sidebar"
>
	<SiteHeader />
	<div
		class="relative flex w-full max-w-[1440px] shrink-0 flex-col content-stretch items-center justify-center gap-[14px] bg-white py-[56px]"
		data-name="Category filter"
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
					class="relative flex shrink-0 content-stretch items-center justify-center"
					data-name="Breadcrumb item"
				>
					<p
						class="relative shrink-0 font-['Geist:Regular'] text-[14px] leading-[20px] font-normal [word-break:break-word] whitespace-nowrap text-[#737373]"
					>
						Accessories
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
						Watches
					</p>
				</div>
			</div>
		</div>
		<div
			class="relative flex w-full max-w-[1280px] min-w-[328px] shrink-0 content-stretch items-start gap-[16px] px-[32px]"
			data-name="Flex Horizontal"
		>
			<div
				class="relative flex max-w-[323px] min-w-[299px] flex-[1_0_0] flex-col content-stretch items-start gap-[16px] overflow-clip rounded-[14px] bg-white py-[16px] shadow-[0px_0px_0px_1px_rgba(10,10,10,0.1)]"
				data-name="Card"
			>
				<div
					class="relative flex w-full shrink-0 flex-col content-stretch items-start px-[16px]"
					data-name="card-header"
				>
					<div
						class="relative flex w-full shrink-0 content-stretch items-center justify-center gap-[10px] [word-break:break-word]"
						data-name="Flex Horizontal"
					>
						<p
							class="relative min-w-px flex-[1_0_0] font-['Geist:SemiBold'] text-[24px] leading-[32px] font-semibold text-[#0a0a0a]"
						>
							Filter
						</p>
						<p
							class="relative min-w-px flex-[1_0_0] text-right font-['Geist:Regular'] text-[16px] leading-[24px] font-normal text-[#dc2626]"
						>
							Clear All
						</p>
					</div>
				</div>
				<div
					class="relative flex w-full shrink-0 flex-col content-stretch items-start gap-[24px] px-[16px]"
					data-name="card-body"
				>
					<div class="relative h-0 w-full shrink-0" data-name="Separator">
						<div class="absolute inset-[-1px_0_0_0]">
							<img alt="" class="block size-full max-w-none" src={imgCardBody} />
						</div>
					</div>
					<div
						class="relative flex w-full shrink-0 flex-col content-stretch items-start gap-[10px]"
						data-name="Flex Vertical"
					>
						<div
							class="relative flex w-full shrink-0 content-stretch items-start gap-[10px]"
							data-name="Radio"
						>
							<div class="relative size-[24px] shrink-0" data-name="Radio">
								<img
									alt=""
									class="absolute inset-0 block size-full max-w-none"
									src={imgCardBody1}
								/>
							</div>
							<div
								class="relative flex shrink-0 flex-col content-stretch items-start justify-center gap-[2px] self-stretch"
								data-name="radio-container"
							>
								<div
									class="relative flex w-full shrink-0 flex-col justify-center font-['Geist:Regular'] text-[14px] leading-[0] font-normal [word-break:break-word] whitespace-nowrap text-[#0a0a0a]"
								>
									<p class="leading-[20px]">Men</p>
								</div>
							</div>
						</div>
						<div
							class="relative flex w-full shrink-0 content-stretch items-start gap-[10px]"
							data-name="Radio"
						>
							<div class="relative size-[24px] shrink-0" data-name="Radio">
								<img
									alt=""
									class="absolute inset-0 block size-full max-w-none"
									src={imgCardBody2}
								/>
							</div>
							<div
								class="relative flex shrink-0 flex-col content-stretch items-start justify-center gap-[2px] self-stretch"
								data-name="radio-container"
							>
								<div
									class="relative flex w-full shrink-0 flex-col justify-center font-['Geist:Regular'] text-[14px] leading-[0] font-normal [word-break:break-word] whitespace-nowrap text-[#0a0a0a]"
								>
									<p class="leading-[20px]">Women</p>
								</div>
							</div>
						</div>
						<div
							class="relative flex w-full shrink-0 content-stretch items-start gap-[10px]"
							data-name="Radio"
						>
							<div class="relative size-[24px] shrink-0" data-name="Radio">
								<img
									alt=""
									class="absolute inset-0 block size-full max-w-none"
									src={imgCardBody1}
								/>
							</div>
							<div
								class="relative flex shrink-0 flex-col content-stretch items-start justify-center gap-[2px] self-stretch"
								data-name="radio-container"
							>
								<div
									class="relative flex h-[24px] w-full shrink-0 flex-col justify-center font-['Geist:Regular'] text-[14px] leading-[0] font-normal [word-break:break-word] text-[#0a0a0a]"
								>
									<p class="leading-[20px]">Girls</p>
								</div>
							</div>
						</div>
						<div
							class="relative flex w-full shrink-0 content-stretch items-start gap-[10px]"
							data-name="Radio"
						>
							<div class="relative size-[24px] shrink-0" data-name="Radio">
								<img
									alt=""
									class="absolute inset-0 block size-full max-w-none"
									src={imgCardBody1}
								/>
							</div>
							<div
								class="relative flex shrink-0 flex-col content-stretch items-start justify-center gap-[2px] self-stretch"
								data-name="radio-container"
							>
								<div
									class="relative flex h-[24px] w-full shrink-0 flex-col justify-center font-['Geist:Regular'] text-[14px] leading-[0] font-normal [word-break:break-word] text-[#0a0a0a]"
								>
									<p class="leading-[20px]">Boys</p>
								</div>
							</div>
						</div>
					</div>
					<div class="relative h-0 w-full shrink-0" data-name="Separator">
						<div class="absolute inset-[-1px_0_0_0]">
							<img alt="" class="block size-full max-w-none" src={imgCardBody3} />
						</div>
					</div>
					<div
						class="relative flex w-full shrink-0 flex-col content-stretch items-start gap-[16px]"
						data-name="Flex Vertical"
					>
						<div
							class="relative flex w-full shrink-0 content-stretch items-center justify-between"
							data-name="Flex Horizontal"
						>
							<p
								class="relative shrink-0 font-['Geist:Medium'] text-[20px] leading-[28px] font-medium [word-break:break-word] whitespace-nowrap text-[#0a0a0a]"
							>
								Brand
							</p>
							<div class="relative size-[24px] shrink-0" data-name="Left-icon">
								<img
									alt=""
									class="absolute inset-0 block size-full max-w-none"
									src={imgCardBody4}
								/>
							</div>
						</div>
						<div
							class="relative flex h-[20px] w-full shrink-0 content-stretch items-start gap-[8px]"
							data-name="Check box"
						>
							<div
								class="relative flex size-[20px] shrink-0 content-stretch items-center justify-center rounded-[4px] border border-solid border-[#171717] bg-[#171717] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)]"
								data-name="Checkbox"
							>
								<div class="relative size-[16px] shrink-0" data-name="check">
									<img
										alt=""
										class="absolute inset-0 block size-full max-w-none"
										src={imgCardBody5}
									/>
								</div>
							</div>
							<div
								class="relative flex h-full shrink-0 flex-col content-stretch items-start justify-center gap-[8px]"
								data-name="Text"
							>
								<div
									class="relative flex shrink-0 flex-col justify-center font-['Geist:Regular'] text-[14px] leading-[0] font-normal [word-break:break-word] whitespace-nowrap text-[#0a0a0a]"
								>
									<p class="leading-[20px]">Apple</p>
								</div>
							</div>
						</div>
						<div
							class="relative flex w-full shrink-0 content-stretch items-center gap-[8px]"
							data-name="Check box"
						>
							<div
								class="relative flex size-[20px] shrink-0 flex-col content-stretch items-center justify-center rounded-[4px] border border-solid border-[#e5e5e5] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]"
								data-name="Checkbox"
							></div>
							<div
								class="relative flex shrink-0 flex-col content-stretch items-start justify-center gap-[8px]"
								data-name="Text"
							>
								<div
									class="relative flex shrink-0 flex-col justify-center font-['Geist:Regular'] text-[14px] leading-[0] font-normal [word-break:break-word] whitespace-nowrap text-[#0a0a0a]"
								>
									<p class="leading-[20px]">Samsung</p>
								</div>
							</div>
						</div>
						<div
							class="relative flex h-[20px] w-full shrink-0 content-stretch items-start gap-[8px]"
							data-name="Check box"
						>
							<div
								class="relative flex size-[20px] shrink-0 content-stretch items-center justify-center rounded-[4px] border border-solid border-[#171717] bg-[#171717] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)]"
								data-name="Checkbox"
							>
								<div class="relative size-[16px] shrink-0" data-name="check">
									<img
										alt=""
										class="absolute inset-0 block size-full max-w-none"
										src={imgCardBody5}
									/>
								</div>
							</div>
							<div
								class="relative flex h-full shrink-0 flex-col content-stretch items-start justify-center gap-[8px]"
								data-name="Text"
							>
								<div
									class="relative flex shrink-0 flex-col justify-center font-['Geist:Regular'] text-[14px] leading-[0] font-normal [word-break:break-word] whitespace-nowrap text-[#0a0a0a]"
								>
									<p class="leading-[20px]">Xiaomi</p>
								</div>
							</div>
						</div>
						<p
							class="relative w-full shrink-0 font-['Geist:Medium'] text-[16px] leading-[24px] font-medium [word-break:break-word] text-[#0a0a0a] underline decoration-solid decoration-from-font [text-decoration-skip-ink:none] [text-underline-position:from-font]"
						>
							6+ more
						</p>
					</div>
					<div class="relative h-0 w-full shrink-0" data-name="Separator">
						<div class="absolute inset-[-1px_0_0_0]">
							<img alt="" class="block size-full max-w-none" src={imgCardBody3} />
						</div>
					</div>
					<div
						class="relative flex w-full shrink-0 flex-col content-stretch items-start gap-[16px]"
						data-name="Flex Vertical"
					>
						<div
							class="relative flex w-full shrink-0 content-stretch items-center justify-between"
							data-name="Flex Horizontal"
						>
							<p
								class="relative shrink-0 font-['Geist:Medium'] text-[20px] leading-[28px] font-medium [word-break:break-word] whitespace-nowrap text-[#0a0a0a]"
							>
								Display type
							</p>
							<div class="relative size-[24px] shrink-0" data-name="Left-icon">
								<img
									alt=""
									class="absolute inset-0 block size-full max-w-none"
									src={imgCardBody4}
								/>
							</div>
						</div>
						<div
							class="relative flex h-[20px] w-full shrink-0 content-stretch items-start gap-[8px]"
							data-name="Check box"
						>
							<div
								class="relative flex size-[20px] shrink-0 content-stretch items-center justify-center rounded-[4px] border border-solid border-[#171717] bg-[#171717] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)]"
								data-name="Checkbox"
							>
								<div class="relative size-[16px] shrink-0" data-name="check">
									<img
										alt=""
										class="absolute inset-0 block size-full max-w-none"
										src={imgCardBody5}
									/>
								</div>
							</div>
							<div
								class="relative flex h-full shrink-0 flex-col content-stretch items-start justify-center gap-[8px]"
								data-name="Text"
							>
								<div
									class="relative flex shrink-0 flex-col justify-center font-['Geist:Regular'] text-[14px] leading-[0] font-normal [word-break:break-word] whitespace-nowrap text-[#0a0a0a]"
								>
									<p class="leading-[20px]">AMOLED</p>
								</div>
							</div>
						</div>
						<div
							class="relative flex w-full shrink-0 content-stretch items-center gap-[8px]"
							data-name="Check box"
						>
							<div
								class="relative flex size-[20px] shrink-0 flex-col content-stretch items-center justify-center rounded-[4px] border border-solid border-[#e5e5e5] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]"
								data-name="Checkbox"
							></div>
							<div
								class="relative flex shrink-0 flex-col content-stretch items-start justify-center gap-[8px]"
								data-name="Text"
							>
								<div
									class="relative flex shrink-0 flex-col justify-center font-['Geist:Regular'] text-[14px] leading-[0] font-normal [word-break:break-word] whitespace-nowrap text-[#0a0a0a]"
								>
									<p class="leading-[20px]">Analog</p>
								</div>
							</div>
						</div>
						<div
							class="relative flex h-[20px] w-full shrink-0 content-stretch items-start gap-[8px]"
							data-name="Check box"
						>
							<div
								class="relative flex size-[20px] shrink-0 content-stretch items-center justify-center rounded-[4px] border border-solid border-[#171717] bg-[#171717] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)]"
								data-name="Checkbox"
							>
								<div class="relative size-[16px] shrink-0" data-name="check">
									<img
										alt=""
										class="absolute inset-0 block size-full max-w-none"
										src={imgCardBody5}
									/>
								</div>
							</div>
							<div
								class="relative flex h-full shrink-0 flex-col content-stretch items-start justify-center gap-[8px]"
								data-name="Text"
							>
								<div
									class="relative flex shrink-0 flex-col justify-center font-['Geist:Regular'] text-[14px] leading-[0] font-normal [word-break:break-word] whitespace-nowrap text-[#0a0a0a]"
								>
									<p class="leading-[20px]">Analog-Digital</p>
								</div>
							</div>
						</div>
						<p
							class="relative w-full shrink-0 font-['Geist:Medium'] text-[16px] leading-[24px] font-medium [word-break:break-word] text-[#0a0a0a] underline decoration-solid decoration-from-font [text-decoration-skip-ink:none] [text-underline-position:from-font]"
						>
							6+ more
						</p>
					</div>
					<div
						class="relative flex w-full shrink-0 flex-col content-stretch items-start gap-[16px]"
						data-name="Flex Vertical"
					>
						<div
							class="relative flex w-full shrink-0 content-stretch items-center justify-between"
							data-name="Flex Horizontal"
						>
							<p
								class="relative shrink-0 font-['Geist:Medium'] text-[20px] leading-[28px] font-medium [word-break:break-word] whitespace-nowrap text-[#0a0a0a]"
							>
								Screen size
							</p>
							<div class="relative size-[24px] shrink-0" data-name="Left-icon">
								<img
									alt=""
									class="absolute inset-0 block size-full max-w-none"
									src={imgCardBody4}
								/>
							</div>
						</div>
						<div
							class="relative flex h-[20px] w-full shrink-0 content-stretch items-start gap-[8px]"
							data-name="Check box"
						>
							<div
								class="relative flex size-[20px] shrink-0 content-stretch items-center justify-center rounded-[4px] border border-solid border-[#171717] bg-[#171717] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)]"
								data-name="Checkbox"
							>
								<div class="relative size-[16px] shrink-0" data-name="check">
									<img
										alt=""
										class="absolute inset-0 block size-full max-w-none"
										src={imgCardBody5}
									/>
								</div>
							</div>
							<div
								class="relative flex h-full shrink-0 flex-col content-stretch items-start justify-center gap-[8px]"
								data-name="Text"
							>
								<div
									class="relative flex shrink-0 flex-col justify-center font-['Geist:Regular'] text-[14px] leading-[0] font-normal [word-break:break-word] whitespace-nowrap text-[#0a0a0a]"
								>
									<p class="leading-[20px]">Up to 32.9 mm</p>
								</div>
							</div>
						</div>
						<div
							class="relative flex w-full shrink-0 content-stretch items-center gap-[8px]"
							data-name="Check box"
						>
							<div
								class="relative flex size-[20px] shrink-0 flex-col content-stretch items-center justify-center rounded-[4px] border border-solid border-[#e5e5e5] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]"
								data-name="Checkbox"
							></div>
							<div
								class="relative flex shrink-0 flex-col content-stretch items-start justify-center gap-[8px]"
								data-name="Text"
							>
								<div
									class="relative flex shrink-0 flex-col justify-center font-['Geist:Regular'] text-[14px] leading-[0] font-normal [word-break:break-word] whitespace-nowrap text-[#0a0a0a]"
								>
									<p class="leading-[20px]">33.0 to 34.9 mm</p>
								</div>
							</div>
						</div>
						<div
							class="relative flex h-[20px] w-full shrink-0 content-stretch items-start gap-[8px]"
							data-name="Check box"
						>
							<div
								class="relative flex size-[20px] shrink-0 content-stretch items-center justify-center rounded-[4px] border border-solid border-[#171717] bg-[#171717] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)]"
								data-name="Checkbox"
							>
								<div class="relative size-[16px] shrink-0" data-name="check">
									<img
										alt=""
										class="absolute inset-0 block size-full max-w-none"
										src={imgCardBody5}
									/>
								</div>
							</div>
							<div
								class="relative flex h-full shrink-0 flex-col content-stretch items-start justify-center gap-[8px]"
								data-name="Text"
							>
								<div
									class="relative flex shrink-0 flex-col justify-center font-['Geist:Regular'] text-[14px] leading-[0] font-normal [word-break:break-word] whitespace-nowrap text-[#0a0a0a]"
								>
									<p class="leading-[20px]">35.0 to 36.9 mm</p>
								</div>
							</div>
						</div>
						<p
							class="relative w-full shrink-0 font-['Geist:Medium'] text-[16px] leading-[24px] font-medium [word-break:break-word] text-[#0a0a0a] underline decoration-solid decoration-from-font [text-decoration-skip-ink:none] [text-underline-position:from-font]"
						>
							6+ more
						</p>
					</div>
					<div class="relative h-0 w-full shrink-0" data-name="Separator">
						<div class="absolute inset-[-1px_0_0_0]">
							<img alt="" class="block size-full max-w-none" src={imgCardBody3} />
						</div>
					</div>
					<div
						class="relative flex w-full shrink-0 flex-col content-stretch items-start gap-[16px]"
						data-name="Flex Vertical"
					>
						<div
							class="relative flex w-full shrink-0 content-stretch items-center justify-between"
							data-name="Flex Horizontal"
						>
							<p
								class="relative shrink-0 font-['Geist:Medium'] text-[20px] leading-[28px] font-medium [word-break:break-word] whitespace-nowrap text-[#0a0a0a]"
							>
								Item shape
							</p>
							<div class="relative size-[24px] shrink-0" data-name="Left-icon">
								<img
									alt=""
									class="absolute inset-0 block size-full max-w-none"
									src={imgCardBody4}
								/>
							</div>
						</div>
						<div
							class="relative flex h-[20px] w-full shrink-0 content-stretch items-start gap-[8px]"
							data-name="Check box"
						>
							<div
								class="relative flex size-[20px] shrink-0 content-stretch items-center justify-center rounded-[4px] border border-solid border-[#171717] bg-[#171717] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)]"
								data-name="Checkbox"
							>
								<div class="relative size-[16px] shrink-0" data-name="check">
									<img
										alt=""
										class="absolute inset-0 block size-full max-w-none"
										src={imgCardBody5}
									/>
								</div>
							</div>
							<div
								class="relative flex h-full shrink-0 flex-col content-stretch items-start justify-center gap-[8px]"
								data-name="Text"
							>
								<div
									class="relative flex shrink-0 flex-col justify-center font-['Geist:Regular'] text-[14px] leading-[0] font-normal [word-break:break-word] whitespace-nowrap text-[#0a0a0a]"
								>
									<p class="leading-[20px]">Rectangular</p>
								</div>
							</div>
						</div>
						<div
							class="relative flex w-full shrink-0 content-stretch items-center gap-[8px]"
							data-name="Check box"
						>
							<div
								class="relative flex size-[20px] shrink-0 flex-col content-stretch items-center justify-center rounded-[4px] border border-solid border-[#e5e5e5] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]"
								data-name="Checkbox"
							></div>
							<div
								class="relative flex shrink-0 flex-col content-stretch items-start justify-center gap-[8px]"
								data-name="Text"
							>
								<div
									class="relative flex shrink-0 flex-col justify-center font-['Geist:Regular'] text-[14px] leading-[0] font-normal [word-break:break-word] whitespace-nowrap text-[#0a0a0a]"
								>
									<p class="leading-[20px]">Square</p>
								</div>
							</div>
						</div>
						<div
							class="relative flex h-[20px] w-full shrink-0 content-stretch items-start gap-[8px]"
							data-name="Check box"
						>
							<div
								class="relative flex size-[20px] shrink-0 content-stretch items-center justify-center rounded-[4px] border border-solid border-[#171717] bg-[#171717] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)]"
								data-name="Checkbox"
							>
								<div class="relative size-[16px] shrink-0" data-name="check">
									<img
										alt=""
										class="absolute inset-0 block size-full max-w-none"
										src={imgCardBody5}
									/>
								</div>
							</div>
							<div
								class="relative flex h-full shrink-0 flex-col content-stretch items-start justify-center gap-[8px]"
								data-name="Text"
							>
								<div
									class="relative flex shrink-0 flex-col justify-center font-['Geist:Regular'] text-[14px] leading-[0] font-normal [word-break:break-word] whitespace-nowrap text-[#0a0a0a]"
								>
									<p class="leading-[20px]">Oval</p>
								</div>
							</div>
						</div>
						<p
							class="relative w-full shrink-0 font-['Geist:Medium'] text-[16px] leading-[24px] font-medium [word-break:break-word] text-[#0a0a0a] underline decoration-solid decoration-from-font [text-decoration-skip-ink:none] [text-underline-position:from-font]"
						>
							6+ more
						</p>
					</div>
					<div class="relative h-0 w-full shrink-0" data-name="Separator">
						<div class="absolute inset-[-1px_0_0_0]">
							<img alt="" class="block size-full max-w-none" src={imgCardBody3} />
						</div>
					</div>
					<div
						class="relative flex w-full shrink-0 flex-col content-stretch items-start gap-[16px]"
						data-name="Advance slider"
					>
						<p
							class="relative w-[min-content] min-w-full shrink-0 font-['Geist:Medium'] text-[20px] leading-[28px] font-medium [word-break:break-word] text-[#0a0a0a]"
						>
							Price
						</p>
						<div
							class="relative flex w-full shrink-0 content-stretch items-center gap-[12px]"
							data-name="slider content"
						>
							<p
								class="relative shrink-0 text-center font-['Geist:Medium'] text-[14px] leading-[20px] font-medium [word-break:break-word] whitespace-nowrap text-[#737373]"
							>
								$500
							</p>
							<div
								class="relative isolate flex min-w-px flex-[1_0_0] content-stretch items-center"
								data-name="Slider/Half-Full/Primary/Default/sm/Default"
							>
								<div
									class="relative z-[2] mr-[-8px] flex min-w-px flex-[1_0_0] content-stretch items-center"
									data-name="Slider Basic"
								>
									<div
										class="relative mr-[-6px] h-[6px] min-w-px flex-[1_0_0] rounded-tl-[9999px] rounded-bl-[9999px] border border-solid border-[#171717] bg-[#171717]"
										data-name="drag"
									></div>
									<div class="relative size-[16px] shrink-0">
										<div class="absolute inset-[-12.5%_-18.75%_-25%_-18.75%]">
											<img alt="" class="block size-full max-w-none" src={imgEllipse1} />
										</div>
									</div>
								</div>
								<div
									class="relative z-[1] h-[6px] min-w-px flex-[1_0_0] rounded-tr-[9999px] rounded-br-[9999px] bg-[#f5f5f5]"
								></div>
							</div>
							<p
								class="relative shrink-0 text-center font-['Geist:Medium'] text-[14px] leading-[20px] font-medium [word-break:break-word] whitespace-nowrap text-[#737373]"
							>
								$2000
							</p>
						</div>
						<div
							class="absolute top-0 left-[calc(50%-11.5px)] flex -translate-x-1/2 content-stretch items-start rounded-[8px] bg-[#0a0a0a] px-[12px] py-[6px]"
							data-name="Tooltip"
						>
							<div
								class="relative flex shrink-0 content-stretch items-center gap-[6px]"
								data-name="Container"
							>
								<div
									class="relative flex shrink-0 flex-col content-stretch items-start gap-[4px]"
									data-name="Text Container"
								>
									<div
										class="relative flex w-full shrink-0 flex-col justify-center font-['Geist:Regular'] text-[12px] leading-[0] font-normal [word-break:break-word] text-white"
									>
										<p class="leading-[16px]">$1000</p>
									</div>
								</div>
							</div>
							<div
								class="absolute bottom-[-4px] left-[calc(50%+0.5px)] h-[4px] w-[8px] -translate-x-1/2"
								data-name="Bottom"
							>
								<img
									alt=""
									class="absolute inset-0 block size-full max-w-none"
									src={imgCardBody6}
								/>
							</div>
						</div>
					</div>
					<div class="relative h-0 w-full shrink-0" data-name="Separator">
						<div class="absolute inset-[-1px_0_0_0]">
							<img alt="" class="block size-full max-w-none" src={imgCardBody3} />
						</div>
					</div>
					<div
						class="relative flex w-full shrink-0 flex-col content-stretch items-start gap-[16px]"
						data-name="Flex Vertical"
					>
						<div
							class="relative flex w-full shrink-0 content-stretch items-center justify-between"
							data-name="Flex Horizontal"
						>
							<p
								class="relative shrink-0 font-['Geist:Medium'] text-[20px] leading-[28px] font-medium [word-break:break-word] whitespace-nowrap text-[#0a0a0a]"
							>
								Color
							</p>
							<div class="relative size-[24px] shrink-0" data-name="Left-icon">
								<img
									alt=""
									class="absolute inset-0 block size-full max-w-none"
									src={imgCardBody4}
								/>
							</div>
						</div>
						<div
							class="relative flex shrink-0 content-stretch items-center gap-[6.913px]"
							data-name="Flex Horizontal"
						>
							<div class="relative size-[30px] shrink-0" data-name="Color">
								<img
									alt=""
									class="absolute inset-0 block size-full max-w-none"
									src={imgCardBody7}
								/>
							</div>
							<div class="relative size-[24px] shrink-0" data-name="Color">
								<img
									alt=""
									class="absolute inset-0 block size-full max-w-none"
									src={imgCardBody8}
								/>
							</div>
							<div class="relative size-[24px] shrink-0" data-name="Color">
								<img
									alt=""
									class="absolute inset-0 block size-full max-w-none"
									src={imgCardBody9}
								/>
							</div>
							<div class="relative size-[24px] shrink-0" data-name="Color">
								<img
									alt=""
									class="absolute inset-0 block size-full max-w-none"
									src={imgCardBody10}
								/>
							</div>
							<div class="relative size-[24px] shrink-0" data-name="Color">
								<img
									alt=""
									class="absolute inset-0 block size-full max-w-none"
									src={imgCardBody11}
								/>
							</div>
							<div class="relative size-[24px] shrink-0" data-name="Color">
								<img
									alt=""
									class="absolute inset-0 block size-full max-w-none"
									src={imgCardBody12}
								/>
							</div>
							<div class="relative size-[24px] shrink-0" data-name="Color">
								<img
									alt=""
									class="absolute inset-0 block size-full max-w-none"
									src={imgCardBody13}
								/>
							</div>
						</div>
						<p
							class="relative w-[min-content] min-w-full shrink-0 font-['Geist:Medium'] text-[16px] leading-[24px] font-medium [word-break:break-word] text-[#0a0a0a] underline decoration-solid decoration-from-font [text-decoration-skip-ink:none] [text-underline-position:from-font]"
						>
							6+ more
						</p>
					</div>
					<div class="relative h-0 w-full shrink-0" data-name="Separator">
						<div class="absolute inset-[-1px_0_0_0]">
							<img alt="" class="block size-full max-w-none" src={imgCardBody3} />
						</div>
					</div>
					<div
						class="relative flex w-full shrink-0 flex-col content-stretch items-start gap-[10px]"
						data-name="Flex Vertical"
					>
						<p
							class="relative h-[28px] w-[256px] shrink-0 font-['Geist:Medium'] text-[20px] leading-[28px] font-medium [word-break:break-word] text-[#0a0a0a]"
						>
							Discount Range
						</p>
						<div
							class="relative flex w-full shrink-0 content-stretch items-start gap-[10px]"
							data-name="Radio"
						>
							<div class="relative size-[24px] shrink-0" data-name="Radio">
								<img
									alt=""
									class="absolute inset-0 block size-full max-w-none"
									src={imgCardBody1}
								/>
							</div>
							<div
								class="relative flex shrink-0 flex-col content-stretch items-start justify-center gap-[2px] self-stretch"
								data-name="radio-container"
							>
								<div
									class="relative flex w-full shrink-0 flex-col justify-center font-['Geist:Regular'] text-[14px] leading-[0] font-normal [word-break:break-word] whitespace-nowrap text-[#0a0a0a]"
								>
									<p class="leading-[20px]">60% more</p>
								</div>
							</div>
						</div>
						<div
							class="relative flex w-full shrink-0 content-stretch items-start gap-[10px]"
							data-name="Radio"
						>
							<div class="relative size-[24px] shrink-0" data-name="Radio">
								<img
									alt=""
									class="absolute inset-0 block size-full max-w-none"
									src={imgCardBody2}
								/>
							</div>
							<div
								class="relative flex shrink-0 flex-col content-stretch items-start justify-center gap-[2px] self-stretch"
								data-name="radio-container"
							>
								<div
									class="relative flex w-full shrink-0 flex-col justify-center font-['Geist:Regular'] text-[14px] leading-[0] font-normal [word-break:break-word] whitespace-nowrap text-[#0a0a0a]"
								>
									<p class="leading-[20px]">50% more</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div
				class="relative flex min-w-px flex-[1_0_0] flex-col content-stretch items-center justify-center gap-[32px]"
				data-name="Flex Vertical"
			>
				<div
					class="relative flex w-full shrink-0 flex-col content-stretch items-start justify-center gap-[8px]"
					data-name="Flex Vertical"
				>
					<div
						class="relative flex w-full shrink-0 content-stretch items-center"
						data-name="Flex Horizontal"
					>
						<div
							class="relative flex w-[468px] shrink-0 content-stretch items-center gap-[12px]"
							data-name="Flex Horizontal"
						>
							<div
								class="relative flex shrink-0 content-stretch items-center justify-center gap-[10px]"
								data-name="Menu Item"
							>
								<p
									class="relative shrink-0 font-['Geist:Medium'] text-[16px] leading-[24px] font-medium [word-break:break-word] whitespace-nowrap text-[#0a0a0a]"
								>
									Active Tracking
								</p>
								<div class="relative size-[16px] shrink-0" data-name="Left-icon">
									<img
										alt=""
										class="absolute inset-0 block size-full max-w-none"
										src={imgLeftIcon2}
									/>
								</div>
							</div>
							<div
								class="relative flex shrink-0 content-stretch items-center justify-center gap-[10px]"
								data-name="Menu Item"
							>
								<p
									class="relative shrink-0 font-['Geist:Medium'] text-[16px] leading-[24px] font-medium [word-break:break-word] whitespace-nowrap text-[#0a0a0a]"
								>
									Battery Life
								</p>
								<div class="relative size-[16px] shrink-0" data-name="Left-icon">
									<img
										alt=""
										class="absolute inset-0 block size-full max-w-none"
										src={imgLeftIcon2}
									/>
								</div>
							</div>
							<div
								class="relative flex shrink-0 content-stretch items-center justify-center gap-[10px]"
								data-name="Menu Item"
							>
								<p
									class="relative shrink-0 font-['Geist:Medium'] text-[16px] leading-[24px] font-medium [word-break:break-word] whitespace-nowrap text-[#0a0a0a]"
								>
									Bluetooth
								</p>
								<div class="relative size-[16px] shrink-0" data-name="Left-icon">
									<img
										alt=""
										class="absolute inset-0 block size-full max-w-none"
										src={imgLeftIcon2}
									/>
								</div>
							</div>
							<p
								class="relative shrink-0 font-['Geist:Medium'] text-[16px] leading-[24px] font-medium [word-break:break-word] whitespace-nowrap text-[#0a0a0a]"
							>
								+13 more
							</p>
						</div>
						<div
							class="relative flex min-w-px flex-[1_0_0] content-stretch items-center justify-end gap-[16px]"
							data-name="Flex Horizontal"
						>
							<div
								class="relative flex shrink-0 flex-col content-stretch items-end justify-center"
								data-name="Flex Horizontal"
							>
								<div
									class="relative isolate flex shrink-0 flex-wrap content-center items-center overflow-clip rounded-[10px] bg-[#f5f5f5] p-[3px]"
									data-name="Advance Tabs"
								>
									<div
										class="relative z-[1] flex w-[358px] shrink-0 content-stretch items-center"
										data-name="Items"
									>
										<a
											href="/products?sidebar=1"
											class="relative flex shrink-0 content-stretch items-center justify-center gap-[4px] overflow-clip rounded-[10px] border border-solid border-[#e5e5e5] bg-white px-[8px] py-[4px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]"
											data-name="Tab 01"
										>
											<div class="relative size-[16px] shrink-0" data-name="left-icon">
												<img
													alt=""
													class="absolute inset-0 block size-full max-w-none"
													src={imgItems1}
												/>
											</div>
											<p
												class="relative shrink-0 font-['Geist:Medium'] text-[14px] leading-[20px] font-medium [word-break:break-word] whitespace-nowrap text-[#0a0a0a]"
											>
												Grid
											</p>
										</a>
										<a
											href="/products?view=list&sidebar=1"
											class="relative flex shrink-0 content-stretch items-center justify-center gap-[4px] rounded-[10px] px-[8px] py-[4px]"
											data-name="Tab 02"
										>
											<div class="relative size-[16px] shrink-0" data-name="left-icon">
												<img
													alt=""
													class="absolute inset-0 block size-full max-w-none"
													src={imgItems2}
												/>
											</div>
											<p
												class="relative shrink-0 font-['Geist:Medium'] text-[14px] leading-[20px] font-medium [word-break:break-word] whitespace-nowrap text-[#0a0a0a] opacity-60"
											>
												List
											</p>
										</a>
									</div>
								</div>
							</div>
							<div class="flex flex-row items-center self-stretch">
								<div
									class="relative flex h-full w-[160px] shrink-0 flex-col content-stretch items-start gap-[8px]"
									data-name="Default Select"
								>
									<div
										class="relative flex min-h-px w-full flex-[1_0_0] content-stretch items-center gap-[6px] rounded-[10px] border border-solid border-[#e5e5e5] bg-white px-[10px] py-[6px]"
										data-name="SelectValue"
									>
										<p
											class="relative shrink-0 overflow-hidden font-['Geist:Regular'] text-[12px] leading-[16px] font-normal [word-break:break-word] text-ellipsis whitespace-nowrap text-[#737373]"
										>
											Sort : Recommended
										</p>
										<div class="relative size-[16px] shrink-0" data-name="chevron-down">
											<img
												alt=""
												class="absolute inset-0 block size-full max-w-none"
												src={imgSelectValue}
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div
						class="relative flex shrink-0 content-stretch items-start gap-[12px]"
						data-name="Flex Horizontal"
					>
						<div
							class="relative flex h-[26px] shrink-0 content-stretch items-center justify-center gap-[4px] rounded-[9999px] px-[12px] py-[4px]"
							style="background-image: linear-gradient(90deg, rgba(23, 23, 23, 0.1) 0%, rgba(23, 23, 23, 0.1) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)"
							data-name="Soft Badge"
						>
							<div
								class="relative flex shrink-0 flex-col justify-center text-center font-['Geist:Medium'] text-[12px] leading-[0] font-medium [word-break:break-word] whitespace-nowrap text-[#171717]"
							>
								<p class="leading-[16px]">Noise</p>
							</div>
							<div class="relative size-[12px] shrink-0" data-name="x">
								<img alt="" class="absolute inset-0 block size-full max-w-none" src={imgX} />
							</div>
						</div>
						<div
							class="relative flex h-[26px] shrink-0 content-stretch items-center justify-center gap-[4px] rounded-[9999px] px-[12px] py-[4px]"
							style="background-image: linear-gradient(90deg, rgba(23, 23, 23, 0.1) 0%, rgba(23, 23, 23, 0.1) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)"
							data-name="Soft Badge"
						>
							<div
								class="relative flex shrink-0 flex-col justify-center text-center font-['Geist:Medium'] text-[12px] leading-[0] font-medium [word-break:break-word] whitespace-nowrap text-[#171717]"
							>
								<p class="leading-[16px]">$0 to $500</p>
							</div>
							<div class="relative size-[12px] shrink-0" data-name="x">
								<img alt="" class="absolute inset-0 block size-full max-w-none" src={imgX} />
							</div>
						</div>
					</div>
				</div>
				<div
					class="relative flex w-full shrink-0 flex-col content-stretch items-start gap-[16px]"
					data-name="Flex Vertical"
				>
					<div
						class="relative flex w-full shrink-0 flex-col content-stretch items-start"
						data-name="lisitng Product Card"
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
										class="relative flex w-[201px] shrink-0 flex-col content-stretch items-center justify-center self-stretch rounded-tl-[8px] rounded-bl-[8px] bg-[#f5f5f5] px-[16px]"
										data-name="Product Image"
									>
										<div
											class="absolute top-1/2 left-[calc(50%+0.5px)] h-[176px] w-[178px] -translate-x-1/2 -translate-y-1/2"
											data-name="Product Image"
										>
											<div class="pointer-events-none absolute inset-0 overflow-hidden">
												<img
													alt=""
													class="absolute top-[-8.14%] left-[-5.55%] h-[110.96%] w-[118.12%] max-w-none"
													src={imgCardBody14}
												/>
											</div>
										</div>
										<div
											class="absolute top-[8px] left-[164px] flex content-stretch items-center justify-center rounded-[9999px] bg-white p-[4px]"
											data-name="Wishlist Icon"
										>
											<div class="relative flex shrink-0 items-center justify-center">
												<div class="flex-none -scale-y-100 rotate-180">
													<div class="relative size-[21px]" data-name="ICON">
														<img
															alt=""
															class="absolute inset-0 block size-full max-w-none"
															src={imgCardBody15}
														/>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div
										class="relative flex min-w-px flex-[1_0_0] flex-col content-stretch items-start gap-[12px] py-[16px]"
										data-name="Flex Vertical"
									>
										<div
											class="relative flex w-full shrink-0 flex-col content-stretch items-start gap-[6px] px-[16px] [word-break:break-word]"
										>
											<div
												class="relative flex w-full shrink-0 flex-col content-stretch items-start gap-[4px]"
												data-name="Product details"
											>
												<p
													class="relative w-full shrink-0 font-['Geist:SemiBold'] text-[18px] leading-[28px] font-semibold text-[#0a0a0a]"
												>
													Nike
												</p>
												<p
													class="relative w-full shrink-0 font-['Geist:Regular'] text-[14px] leading-[20px] font-normal text-[#737373]"
												>
													{`This smartwatch features a large 1.83" HD display that delivers clear visuals and a smooth user experience for everyday use. It comes with ASAP fast charging, up to 15 days of battery life, and a functional crown for convenient and easy control. `}
												</p>
											</div>
											<div
												class="relative flex h-[24px] w-full shrink-0 content-stretch items-center gap-[6px] whitespace-nowrap"
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
											class="relative flex w-full shrink-0 flex-col content-stretch items-start px-[16px]"
											data-name="Actions"
										>
											<button
												type="button"
												class="relative flex shrink-0 cursor-pointer content-stretch items-center justify-center gap-[6px] overflow-clip rounded-[10px] bg-[#171717] px-[12px] py-[6px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]"
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
														src={imgCardBody16}
													/>
												</div>
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div
						class="relative flex w-full shrink-0 flex-col content-stretch items-start"
						data-name="lisitng Product Card"
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
										class="relative flex w-[201px] shrink-0 flex-col content-stretch items-center justify-center self-stretch rounded-tl-[8px] rounded-bl-[8px] bg-[#f5f5f5] px-[16px]"
										data-name="Product Image"
									>
										<div
											class="absolute top-1/2 left-[calc(50%+0.5px)] h-[176px] w-[178px] -translate-x-1/2 -translate-y-1/2"
											data-name="Product Image"
										>
											<img
												alt=""
												class="pointer-events-none absolute inset-0 size-full max-w-none object-cover"
												src={imgCardBody17}
											/>
										</div>
										<div
											class="absolute top-[8px] left-[164px] flex content-stretch items-center justify-center rounded-[9999px] bg-white p-[4px]"
											data-name="Wishlist Icon"
										>
											<div class="relative flex shrink-0 items-center justify-center">
												<div class="flex-none -scale-y-100 rotate-180">
													<div class="relative size-[21px]" data-name="ICON">
														<img
															alt=""
															class="absolute inset-0 block size-full max-w-none"
															src={imgCardBody15}
														/>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div
										class="relative flex min-w-px flex-[1_0_0] flex-col content-stretch items-start gap-[12px] py-[16px]"
										data-name="Flex Vertical"
									>
										<div
											class="relative flex w-full shrink-0 flex-col content-stretch items-start gap-[6px] px-[16px] [word-break:break-word]"
										>
											<div
												class="relative flex w-full shrink-0 flex-col content-stretch items-start gap-[4px]"
												data-name="Product details"
											>
												<p
													class="relative w-full shrink-0 font-['Geist:SemiBold'] text-[18px] leading-[28px] font-semibold text-[#0a0a0a]"
												>
													Nike
												</p>
												<p
													class="relative w-full shrink-0 font-['Geist:Regular'] text-[14px] leading-[20px] font-normal text-[#737373]"
												>
													{`This smartwatch features a large 1.83" HD display that delivers clear visuals and a smooth user experience for everyday use. It comes with ASAP fast charging, up to 15 days of battery life, and a functional crown for convenient and easy control. `}
												</p>
											</div>
											<div
												class="relative flex h-[24px] w-full shrink-0 content-stretch items-center gap-[6px] whitespace-nowrap"
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
											class="relative flex w-full shrink-0 flex-col content-stretch items-start px-[16px]"
											data-name="Actions"
										>
											<button
												type="button"
												class="relative flex shrink-0 cursor-pointer content-stretch items-center justify-center gap-[6px] overflow-clip rounded-[10px] bg-[#171717] px-[12px] py-[6px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]"
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
														src={imgCardBody16}
													/>
												</div>
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div
						class="relative flex w-full shrink-0 flex-col content-stretch items-start"
						data-name="lisitng Product Card"
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
										class="relative flex w-[201px] shrink-0 flex-col content-stretch items-center justify-center self-stretch rounded-tl-[8px] rounded-bl-[8px] bg-[#f5f5f5] px-[16px]"
										data-name="Product Image"
									>
										<div
											class="absolute top-1/2 left-[calc(50%+0.5px)] h-[176px] w-[178px] -translate-x-1/2 -translate-y-1/2"
											data-name="Product Image"
										>
											<div class="pointer-events-none absolute inset-0 overflow-hidden">
												<img
													alt=""
													class="absolute top-[8.9%] left-[1.64%] h-[91.27%] w-[97.16%] max-w-none"
													src={imgCardBody18}
												/>
											</div>
										</div>
										<div
											class="absolute top-[8px] left-[164px] flex content-stretch items-center justify-center rounded-[9999px] bg-white p-[4px]"
											data-name="Wishlist Icon"
										>
											<div class="relative flex shrink-0 items-center justify-center">
												<div class="flex-none -scale-y-100 rotate-180">
													<div class="relative size-[21px]" data-name="ICON">
														<img
															alt=""
															class="absolute inset-0 block size-full max-w-none"
															src={imgCardBody15}
														/>
													</div>
												</div>
											</div>
										</div>
										<div
											class="absolute top-[13px] left-[12px] flex content-stretch items-start"
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
										class="relative flex min-w-px flex-[1_0_0] flex-col content-stretch items-start gap-[12px] py-[16px]"
										data-name="Flex Vertical"
									>
										<div
											class="relative flex w-full shrink-0 flex-col content-stretch items-start gap-[6px] px-[16px] [word-break:break-word]"
										>
											<div
												class="relative flex w-full shrink-0 flex-col content-stretch items-start gap-[4px]"
												data-name="Product details"
											>
												<p
													class="relative w-full shrink-0 font-['Geist:SemiBold'] text-[18px] leading-[28px] font-semibold text-[#0a0a0a]"
												>
													Nike
												</p>
												<p
													class="relative w-full shrink-0 font-['Geist:Regular'] text-[14px] leading-[20px] font-normal text-[#737373]"
												>
													{`This smartwatch features a large 1.83" HD display that delivers clear visuals and a smooth user experience for everyday use. It comes with ASAP fast charging, up to 15 days of battery life, and a functional crown for convenient and easy control. `}
												</p>
											</div>
											<div
												class="relative flex h-[24px] w-full shrink-0 content-stretch items-center gap-[6px] whitespace-nowrap"
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
											class="relative flex w-full shrink-0 flex-col content-stretch items-start px-[16px]"
											data-name="Actions"
										>
											<button
												type="button"
												class="relative flex shrink-0 cursor-pointer content-stretch items-center justify-center gap-[6px] overflow-clip rounded-[10px] bg-[#171717] px-[12px] py-[6px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]"
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
														src={imgCardBody16}
													/>
												</div>
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div
						class="relative flex w-full shrink-0 flex-col content-stretch items-start"
						data-name="lisitng Product Card"
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
										class="relative flex w-[201px] shrink-0 flex-col content-stretch items-center justify-center self-stretch rounded-tl-[8px] rounded-bl-[8px] bg-[#f5f5f5] px-[16px]"
										data-name="Product Image"
									>
										<div
											class="absolute top-1/2 left-[calc(50%+0.5px)] h-[176px] w-[178px] -translate-x-1/2 -translate-y-1/2"
											data-name="Product Image"
										>
											<div class="pointer-events-none absolute inset-0 overflow-hidden">
												<img
													alt=""
													class="absolute top-[8.9%] left-[1.64%] h-[91.27%] w-[97.16%] max-w-none"
													src={imgCardBody19}
												/>
											</div>
										</div>
										<div
											class="absolute top-[8px] left-[164px] flex content-stretch items-center justify-center rounded-[9999px] bg-white p-[4px]"
											data-name="Wishlist Icon"
										>
											<div class="relative flex shrink-0 items-center justify-center">
												<div class="flex-none -scale-y-100 rotate-180">
													<div class="relative size-[21px]" data-name="ICON">
														<img
															alt=""
															class="absolute inset-0 block size-full max-w-none"
															src={imgCardBody15}
														/>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div
										class="relative flex min-w-px flex-[1_0_0] flex-col content-stretch items-start gap-[12px] py-[16px]"
										data-name="Flex Vertical"
									>
										<div
											class="relative flex w-full shrink-0 flex-col content-stretch items-start gap-[6px] px-[16px] [word-break:break-word]"
										>
											<div
												class="relative flex w-full shrink-0 flex-col content-stretch items-start gap-[4px]"
												data-name="Product details"
											>
												<p
													class="relative w-full shrink-0 font-['Geist:SemiBold'] text-[18px] leading-[28px] font-semibold text-[#0a0a0a]"
												>
													Nike
												</p>
												<p
													class="relative w-full shrink-0 font-['Geist:Regular'] text-[14px] leading-[20px] font-normal text-[#737373]"
												>
													{`This smartwatch features a large 1.83" HD display that delivers clear visuals and a smooth user experience for everyday use. It comes with ASAP fast charging, up to 15 days of battery life, and a functional crown for convenient and easy control. `}
												</p>
											</div>
											<div
												class="relative flex h-[24px] w-full shrink-0 content-stretch items-center gap-[6px] whitespace-nowrap"
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
											class="relative flex w-full shrink-0 flex-col content-stretch items-start px-[16px]"
											data-name="Actions"
										>
											<button
												type="button"
												class="relative flex shrink-0 cursor-pointer content-stretch items-center justify-center gap-[6px] overflow-clip rounded-[10px] bg-[#171717] px-[12px] py-[6px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]"
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
														src={imgCardBody16}
													/>
												</div>
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div
						class="relative flex w-full shrink-0 flex-col content-stretch items-start"
						data-name="lisitng Product Card"
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
										class="relative flex w-[201px] shrink-0 flex-col content-stretch items-center justify-center self-stretch rounded-tl-[8px] rounded-bl-[8px] bg-[#f5f5f5] px-[16px]"
										data-name="Product Image"
									>
										<div
											class="absolute top-1/2 left-[calc(50%+0.5px)] h-[176px] w-[178px] -translate-x-1/2 -translate-y-1/2"
											data-name="Product Image"
										>
											<div class="pointer-events-none absolute inset-0 overflow-hidden">
												<img
													alt=""
													class="absolute top-[5.97%] left-[16.2%] h-[87.5%] w-[72.66%] max-w-none"
													src={imgCardBody20}
												/>
											</div>
										</div>
										<div
											class="absolute top-[8px] left-[164px] flex content-stretch items-center justify-center rounded-[9999px] bg-white p-[4px]"
											data-name="Wishlist Icon"
										>
											<div class="relative flex shrink-0 items-center justify-center">
												<div class="flex-none -scale-y-100 rotate-180">
													<div class="relative size-[21px]" data-name="ICON">
														<img
															alt=""
															class="absolute inset-0 block size-full max-w-none"
															src={imgCardBody15}
														/>
													</div>
												</div>
											</div>
										</div>
										<div
											class="absolute top-[13px] left-[12px] flex content-stretch items-start"
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
										class="relative flex min-w-px flex-[1_0_0] flex-col content-stretch items-start gap-[12px] py-[16px]"
										data-name="Flex Vertical"
									>
										<div
											class="relative flex w-full shrink-0 flex-col content-stretch items-start gap-[6px] px-[16px] [word-break:break-word]"
										>
											<div
												class="relative flex w-full shrink-0 flex-col content-stretch items-start gap-[4px]"
												data-name="Product details"
											>
												<p
													class="relative w-full shrink-0 font-['Geist:SemiBold'] text-[18px] leading-[28px] font-semibold text-[#0a0a0a]"
												>
													Nike
												</p>
												<p
													class="relative w-full shrink-0 font-['Geist:Regular'] text-[14px] leading-[20px] font-normal text-[#737373]"
												>
													{`This smartwatch features a large 1.83" HD display that delivers clear visuals and a smooth user experience for everyday use. It comes with ASAP fast charging, up to 15 days of battery life, and a functional crown for convenient and easy control. `}
												</p>
											</div>
											<div
												class="relative flex h-[24px] w-full shrink-0 content-stretch items-center gap-[6px] whitespace-nowrap"
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
											class="relative flex w-full shrink-0 flex-col content-stretch items-start px-[16px]"
											data-name="Actions"
										>
											<button
												type="button"
												class="relative flex shrink-0 cursor-pointer content-stretch items-center justify-center gap-[6px] overflow-clip rounded-[10px] bg-[#171717] px-[12px] py-[6px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]"
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
														src={imgCardBody16}
													/>
												</div>
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div
						class="relative flex w-full shrink-0 flex-col content-stretch items-start"
						data-name="lisitng Product Card"
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
										class="relative flex w-[201px] shrink-0 flex-col content-stretch items-center justify-center self-stretch rounded-tl-[8px] rounded-bl-[8px] bg-[#f5f5f5] px-[16px]"
										data-name="Product Image"
									>
										<div
											class="absolute top-1/2 left-[calc(50%+0.5px)] h-[176px] w-[178px] -translate-x-1/2 -translate-y-1/2"
											data-name="Product Image"
										>
											<div class="pointer-events-none absolute inset-0 overflow-hidden">
												<img
													alt=""
													class="absolute top-[4.55%] left-[1.21%] h-[98.27%] w-[104.62%] max-w-none"
													src={imgCardBody21}
												/>
											</div>
										</div>
										<div
											class="absolute top-[8px] left-[164px] flex content-stretch items-center justify-center rounded-[9999px] bg-white p-[4px]"
											data-name="Wishlist Icon"
										>
											<div class="relative flex shrink-0 items-center justify-center">
												<div class="flex-none -scale-y-100 rotate-180">
													<div class="relative size-[21px]" data-name="ICON">
														<img
															alt=""
															class="absolute inset-0 block size-full max-w-none"
															src={imgCardBody15}
														/>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div
										class="relative flex min-w-px flex-[1_0_0] flex-col content-stretch items-start gap-[12px] py-[16px]"
										data-name="Flex Vertical"
									>
										<div
											class="relative flex w-full shrink-0 flex-col content-stretch items-start gap-[6px] px-[16px] [word-break:break-word]"
										>
											<div
												class="relative flex w-full shrink-0 flex-col content-stretch items-start gap-[4px]"
												data-name="Product details"
											>
												<p
													class="relative w-full shrink-0 font-['Geist:SemiBold'] text-[18px] leading-[28px] font-semibold text-[#0a0a0a]"
												>
													Nike
												</p>
												<p
													class="relative w-full shrink-0 font-['Geist:Regular'] text-[14px] leading-[20px] font-normal text-[#737373]"
												>
													{`This smartwatch features a large 1.83" HD display that delivers clear visuals and a smooth user experience for everyday use. It comes with ASAP fast charging, up to 15 days of battery life, and a functional crown for convenient and easy control. `}
												</p>
											</div>
											<div
												class="relative flex h-[24px] w-full shrink-0 content-stretch items-center gap-[6px] whitespace-nowrap"
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
											class="relative flex w-full shrink-0 flex-col content-stretch items-start px-[16px]"
											data-name="Actions"
										>
											<button
												type="button"
												class="relative flex shrink-0 cursor-pointer content-stretch items-center justify-center gap-[6px] overflow-clip rounded-[10px] bg-[#171717] px-[12px] py-[6px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]"
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
														src={imgCardBody16}
													/>
												</div>
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div
						class="relative flex w-full shrink-0 flex-col content-stretch items-start"
						data-name="lisitng Product Card"
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
										class="relative flex w-[201px] shrink-0 flex-col content-stretch items-center justify-center self-stretch rounded-tl-[8px] rounded-bl-[8px] bg-[#f5f5f5] px-[16px]"
										data-name="Product Image"
									>
										<div
											class="absolute top-1/2 left-[calc(50%+0.5px)] h-[176px] w-[178px] -translate-x-1/2 -translate-y-1/2"
											data-name="Product Image"
										>
											<div class="pointer-events-none absolute inset-0 overflow-hidden">
												<img
													alt=""
													class="absolute top-[4.36%] left-[6.96%] h-[99.79%] w-[85.56%] max-w-none"
													src={imgCardBody22}
												/>
											</div>
										</div>
										<div
											class="absolute top-[8px] left-[164px] flex content-stretch items-center justify-center rounded-[9999px] bg-white p-[4px]"
											data-name="Wishlist Icon"
										>
											<div class="relative flex shrink-0 items-center justify-center">
												<div class="flex-none -scale-y-100 rotate-180">
													<div class="relative size-[21px]" data-name="ICON">
														<img
															alt=""
															class="absolute inset-0 block size-full max-w-none"
															src={imgCardBody15}
														/>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div
										class="relative flex min-w-px flex-[1_0_0] flex-col content-stretch items-start gap-[12px] py-[16px]"
										data-name="Flex Vertical"
									>
										<div
											class="relative flex w-full shrink-0 flex-col content-stretch items-start gap-[6px] px-[16px] [word-break:break-word]"
										>
											<div
												class="relative flex h-[90px] w-full shrink-0 flex-col content-stretch items-start gap-[4px]"
												data-name="Product details"
											>
												<p
													class="relative w-full shrink-0 font-['Geist:SemiBold'] text-[18px] leading-[28px] font-semibold text-[#0a0a0a]"
												>
													Nike
												</p>
												<p
													class="relative w-full shrink-0 font-['Geist:Regular'] text-[14px] leading-[20px] font-normal text-[#737373]"
												>
													{`This smartwatch features a large 1.83" HD display that delivers clear visuals and a smooth user experience for everyday use. It comes with ASAP fast charging, up to 15 days of battery life, and a functional crown for convenient and easy control. `}
												</p>
											</div>
											<div
												class="relative flex h-[24px] w-full shrink-0 content-stretch items-center gap-[6px] whitespace-nowrap"
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
											class="relative flex w-full shrink-0 flex-col content-stretch items-start px-[16px]"
											data-name="Actions"
										>
											<button
												type="button"
												class="relative flex shrink-0 cursor-pointer content-stretch items-center justify-center gap-[6px] overflow-clip rounded-[10px] bg-[#171717] px-[12px] py-[6px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]"
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
														src={imgCardBody16}
													/>
												</div>
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div
						class="relative flex w-full shrink-0 flex-col content-stretch items-start"
						data-name="lisitng Product Card"
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
										class="relative flex w-[201px] shrink-0 flex-col content-stretch items-center justify-center self-stretch rounded-tl-[8px] rounded-bl-[8px] bg-[#f5f5f5] px-[16px]"
										data-name="Product Image"
									>
										<div
											class="absolute top-1/2 left-[calc(50%+0.5px)] h-[176px] w-[178px] -translate-x-1/2 -translate-y-1/2"
											data-name="Product Image"
										>
											<div class="pointer-events-none absolute inset-0 overflow-hidden">
												<img
													alt=""
													class="absolute top-[12.02%] left-[18%] h-[84.64%] w-[70.29%] max-w-none"
													src={imgCardBody23}
												/>
											</div>
										</div>
										<div
											class="absolute top-[8px] left-[164px] flex content-stretch items-center justify-center rounded-[9999px] bg-white p-[4px]"
											data-name="Wishlist Icon"
										>
											<div class="relative flex shrink-0 items-center justify-center">
												<div class="flex-none -scale-y-100 rotate-180">
													<div class="relative size-[21px]" data-name="ICON">
														<img
															alt=""
															class="absolute inset-0 block size-full max-w-none"
															src={imgCardBody15}
														/>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div
										class="relative flex min-w-px flex-[1_0_0] flex-col content-stretch items-start gap-[12px] py-[24px]"
										data-name="Flex Vertical"
									>
										<div
											class="relative flex w-full shrink-0 flex-col content-stretch items-start gap-[6px] px-[24px] [word-break:break-word]"
										>
											<div
												class="relative flex h-[90px] w-full shrink-0 flex-col content-stretch items-start gap-[4px]"
												data-name="Product details"
											>
												<p
													class="relative w-full shrink-0 font-['Geist:SemiBold'] text-[18px] leading-[28px] font-semibold text-[#0a0a0a]"
												>
													Nike
												</p>
												<p
													class="relative w-full shrink-0 font-['Geist:Regular'] text-[14px] leading-[20px] font-normal text-[#737373]"
												>
													{`This smartwatch features a large 1.83" HD display that delivers clear visuals and a smooth user experience for everyday use. It comes with ASAP fast charging, up to 15 days of battery life, and a functional crown for convenient and easy control. `}
												</p>
											</div>
											<div
												class="relative flex h-[24px] w-full shrink-0 content-stretch items-center gap-[6px] whitespace-nowrap"
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
											class="relative flex w-full shrink-0 flex-col content-stretch items-start px-[24px]"
											data-name="Actions"
										>
											<button
												type="button"
												class="relative flex shrink-0 cursor-pointer content-stretch items-center justify-center gap-[6px] overflow-clip rounded-[10px] bg-[#171717] px-[12px] py-[6px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]"
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
														src={imgCardBody16}
													/>
												</div>
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div
						class="relative flex w-full shrink-0 flex-col content-stretch items-start"
						data-name="lisitng Product Card"
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
										class="relative flex w-[201px] shrink-0 flex-col content-stretch items-center justify-center self-stretch rounded-tl-[8px] rounded-bl-[8px] bg-[#f5f5f5] px-[16px]"
										data-name="Product Image"
									>
										<div
											class="absolute top-1/2 left-[calc(50%+0.5px)] h-[176px] w-[178px] -translate-x-1/2 -translate-y-1/2"
											data-name="Product Image"
										>
											<div class="pointer-events-none absolute inset-0 overflow-hidden">
												<img
													alt=""
													class="absolute top-[2.78%] left-[9.51%] h-[97.14%] w-[80.67%] max-w-none"
													src={imgCardBody24}
												/>
											</div>
										</div>
										<div
											class="absolute top-[8px] left-[164px] flex content-stretch items-center justify-center rounded-[9999px] bg-white p-[4px]"
											data-name="Wishlist Icon"
										>
											<div class="relative flex shrink-0 items-center justify-center">
												<div class="flex-none -scale-y-100 rotate-180">
													<div class="relative size-[21px]" data-name="ICON">
														<img
															alt=""
															class="absolute inset-0 block size-full max-w-none"
															src={imgCardBody15}
														/>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div
										class="relative flex min-w-px flex-[1_0_0] flex-col content-stretch items-start gap-[12px] py-[24px]"
										data-name="Flex Vertical"
									>
										<div
											class="relative flex w-full shrink-0 flex-col content-stretch items-start gap-[6px] px-[24px] [word-break:break-word]"
										>
											<div
												class="relative flex h-[90px] w-full shrink-0 flex-col content-stretch items-start gap-[4px]"
												data-name="Product details"
											>
												<p
													class="relative w-full shrink-0 font-['Geist:SemiBold'] text-[18px] leading-[28px] font-semibold text-[#0a0a0a]"
												>
													Nike
												</p>
												<p
													class="relative w-full shrink-0 font-['Geist:Regular'] text-[14px] leading-[20px] font-normal text-[#737373]"
												>
													{`This smartwatch features a large 1.83" HD display that delivers clear visuals and a smooth user experience for everyday use. It comes with ASAP fast charging, up to 15 days of battery life, and a functional crown for convenient and easy control. `}
												</p>
											</div>
											<div
												class="relative flex h-[24px] w-full shrink-0 content-stretch items-center gap-[6px] whitespace-nowrap"
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
											class="relative flex w-full shrink-0 flex-col content-stretch items-start px-[24px]"
											data-name="Actions"
										>
											<button
												type="button"
												class="relative flex shrink-0 cursor-pointer content-stretch items-center justify-center gap-[6px] overflow-clip rounded-[10px] bg-[#171717] px-[12px] py-[6px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]"
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
														src={imgCardBody16}
													/>
												</div>
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div
						class="relative flex w-full shrink-0 flex-col content-stretch items-start"
						data-name="lisitng Product Card"
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
										class="relative flex w-[201px] shrink-0 flex-col content-stretch items-center justify-center self-stretch rounded-tl-[8px] rounded-bl-[8px] bg-[#f5f5f5] px-[16px]"
										data-name="Product Image"
									>
										<div
											class="absolute top-1/2 left-[calc(50%+0.5px)] h-[176px] w-[178px] -translate-x-1/2 -translate-y-1/2"
											data-name="Product Image"
										>
											<div class="pointer-events-none absolute inset-0 overflow-hidden">
												<img
													alt=""
													class="absolute top-[6.23%] left-[1.06%] h-[91.92%] w-[97.85%] max-w-none"
													src={imgCardBody25}
												/>
											</div>
										</div>
										<div
											class="absolute top-[8px] left-[164px] flex content-stretch items-center justify-center rounded-[9999px] bg-white p-[4px]"
											data-name="Wishlist Icon"
										>
											<div class="relative flex shrink-0 items-center justify-center">
												<div class="flex-none -scale-y-100 rotate-180">
													<div class="relative size-[21px]" data-name="ICON">
														<img
															alt=""
															class="absolute inset-0 block size-full max-w-none"
															src={imgCardBody15}
														/>
													</div>
												</div>
											</div>
										</div>
										<div
											class="absolute top-[13px] left-[12px] flex content-stretch items-start"
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
										class="relative flex min-w-px flex-[1_0_0] flex-col content-stretch items-start gap-[12px] py-[16px]"
										data-name="Flex Vertical"
									>
										<div
											class="relative flex w-full shrink-0 flex-col content-stretch items-start gap-[6px] px-[16px] [word-break:break-word]"
										>
											<div
												class="relative flex w-full shrink-0 flex-col content-stretch items-start gap-[4px]"
												data-name="Product details"
											>
												<p
													class="relative w-full shrink-0 font-['Geist:SemiBold'] text-[18px] leading-[28px] font-semibold text-[#0a0a0a]"
												>
													Nike
												</p>
												<p
													class="relative w-full shrink-0 font-['Geist:Regular'] text-[14px] leading-[20px] font-normal text-[#737373]"
												>
													{`This smartwatch features a large 1.83" HD display that delivers clear visuals and a smooth user experience for everyday use. It comes with ASAP fast charging, up to 15 days of battery life, and a functional crown for convenient and easy control. `}
												</p>
											</div>
											<div
												class="relative flex h-[24px] w-full shrink-0 content-stretch items-center gap-[6px] whitespace-nowrap"
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
											class="relative flex w-full shrink-0 flex-col content-stretch items-start px-[16px]"
											data-name="Actions"
										>
											<button
												type="button"
												class="relative flex shrink-0 cursor-pointer content-stretch items-center justify-center gap-[6px] overflow-clip rounded-[10px] bg-[#171717] px-[12px] py-[6px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]"
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
														src={imgCardBody16}
													/>
												</div>
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div
						class="relative flex w-full shrink-0 flex-col content-stretch items-start"
						data-name="lisitng Product Card"
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
										class="relative flex w-[201px] shrink-0 flex-col content-stretch items-center justify-center self-stretch rounded-tl-[8px] rounded-bl-[8px] bg-[#f5f5f5] px-[16px]"
										data-name="Product Image"
									>
										<div
											class="absolute top-1/2 left-[calc(50%+0.5px)] h-[176px] w-[178px] -translate-x-1/2 -translate-y-1/2"
											data-name="Product Image"
										>
											<div class="pointer-events-none absolute inset-0 overflow-hidden">
												<img
													alt=""
													class="absolute top-[2.42%] left-[2.73%] h-[95.24%] w-[94.17%] max-w-none"
													src={imgCardBody26}
												/>
											</div>
										</div>
										<div
											class="absolute top-[8px] left-[164px] flex content-stretch items-center justify-center rounded-[9999px] bg-white p-[4px]"
											data-name="Wishlist Icon"
										>
											<div class="relative flex shrink-0 items-center justify-center">
												<div class="flex-none -scale-y-100 rotate-180">
													<div class="relative size-[21px]" data-name="ICON">
														<img
															alt=""
															class="absolute inset-0 block size-full max-w-none"
															src={imgCardBody15}
														/>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div
										class="relative flex min-w-px flex-[1_0_0] flex-col content-stretch items-start gap-[12px] py-[16px]"
										data-name="Flex Vertical"
									>
										<div
											class="relative flex w-full shrink-0 flex-col content-stretch items-start gap-[6px] px-[16px] [word-break:break-word]"
										>
											<div
												class="relative flex w-full shrink-0 flex-col content-stretch items-start gap-[4px]"
												data-name="Product details"
											>
												<p
													class="relative w-full shrink-0 font-['Geist:SemiBold'] text-[18px] leading-[28px] font-semibold text-[#0a0a0a]"
												>
													Nike
												</p>
												<p
													class="relative w-full shrink-0 font-['Geist:Regular'] text-[14px] leading-[20px] font-normal text-[#737373]"
												>
													{`This smartwatch features a large 1.83" HD display that delivers clear visuals and a smooth user experience for everyday use. It comes with ASAP fast charging, up to 15 days of battery life, and a functional crown for convenient and easy control. `}
												</p>
											</div>
											<div
												class="relative flex h-[24px] w-full shrink-0 content-stretch items-center gap-[6px] whitespace-nowrap"
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
											class="relative flex w-full shrink-0 flex-col content-stretch items-start px-[16px]"
											data-name="Actions"
										>
											<button
												type="button"
												class="relative flex shrink-0 cursor-pointer content-stretch items-center justify-center gap-[6px] overflow-clip rounded-[10px] bg-[#171717] px-[12px] py-[6px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]"
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
														src={imgCardBody16}
													/>
												</div>
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div
						class="relative flex w-full shrink-0 flex-col content-stretch items-start"
						data-name="lisitng Product Card"
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
										class="relative flex w-[201px] shrink-0 flex-col content-stretch items-center justify-center self-stretch rounded-tl-[8px] rounded-bl-[8px] bg-[#f5f5f5] px-[16px]"
										data-name="Product Image"
									>
										<div
											class="absolute top-1/2 left-[calc(50%+0.5px)] h-[176px] w-[178px] -translate-x-1/2 -translate-y-1/2"
											data-name="Product Image"
										>
											<div class="pointer-events-none absolute inset-0 overflow-hidden">
												<img
													alt=""
													class="absolute top-[8.9%] left-[1.64%] h-[91.27%] w-[97.16%] max-w-none"
													src={imgCardBody27}
												/>
											</div>
										</div>
										<div
											class="absolute top-[8px] left-[164px] flex content-stretch items-center justify-center rounded-[9999px] bg-white p-[4px]"
											data-name="Wishlist Icon"
										>
											<div class="relative flex shrink-0 items-center justify-center">
												<div class="flex-none -scale-y-100 rotate-180">
													<div class="relative size-[21px]" data-name="ICON">
														<img
															alt=""
															class="absolute inset-0 block size-full max-w-none"
															src={imgCardBody15}
														/>
													</div>
												</div>
											</div>
										</div>
										<div
											class="absolute top-[13px] left-[12px] flex content-stretch items-start"
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
										class="relative flex min-w-px flex-[1_0_0] flex-col content-stretch items-start gap-[12px] py-[16px]"
										data-name="Flex Vertical"
									>
										<div
											class="relative flex w-full shrink-0 flex-col content-stretch items-start gap-[6px] px-[16px] [word-break:break-word]"
										>
											<div
												class="relative flex w-full shrink-0 flex-col content-stretch items-start gap-[4px]"
												data-name="Product details"
											>
												<p
													class="relative w-full shrink-0 font-['Geist:SemiBold'] text-[18px] leading-[28px] font-semibold text-[#0a0a0a]"
												>
													Nike
												</p>
												<p
													class="relative w-full shrink-0 font-['Geist:Regular'] text-[14px] leading-[20px] font-normal text-[#737373]"
												>
													{`This smartwatch features a large 1.83" HD display that delivers clear visuals and a smooth user experience for everyday use. It comes with ASAP fast charging, up to 15 days of battery life, and a functional crown for convenient and easy control. `}
												</p>
											</div>
											<div
												class="relative flex h-[24px] w-full shrink-0 content-stretch items-center gap-[6px] whitespace-nowrap"
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
											class="relative flex w-full shrink-0 flex-col content-stretch items-start px-[16px]"
											data-name="Actions"
										>
											<button
												type="button"
												class="relative flex shrink-0 cursor-pointer content-stretch items-center justify-center gap-[6px] overflow-clip rounded-[10px] bg-[#171717] px-[12px] py-[6px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]"
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
														src={imgCardBody16}
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
				<Pagination class="relative flex shrink-0 content-stretch items-start" />
			</div>
		</div>
	</div>
	<SiteFooter />
</div>
