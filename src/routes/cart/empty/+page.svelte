<script lang="ts">
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
	const imgImage27 = '/assets/37571.png';
	const imgImage19 = '/assets/3cc20.png';
	const imgImage13 = '/assets/ad1bf.png';
	const imgImage11 = '/assets/c2747.png';
	const imgImage12 = '/assets/d5a5f.png';
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
	data-name="Shopix - Empty Cart"
>
	<SiteHeader />
	<div
		class="relative flex w-full max-w-[1440px] shrink-0 flex-col content-stretch items-center justify-center bg-white py-[56px]"
		data-name="Error"
	>
		<div
			class="relative flex w-full max-w-[1216px] shrink-0 flex-col content-stretch items-center justify-center gap-[24px] overflow-clip rounded-[6px] bg-[#f5f5f5] px-[24px] py-[48px]"
			data-name="Flex Horizontal"
		>
			<div class="relative h-[233px] w-[288px] shrink-0" data-name="image 27">
				<img
					alt=""
					class="pointer-events-none absolute inset-0 size-full max-w-none object-bottom"
					src={imgImage27}
				/>
			</div>
			<div
				class="relative flex w-[530px] shrink-0 flex-col content-stretch items-start gap-[8px] text-center [word-break:break-word]"
				data-name="Product details"
			>
				<p
					class="relative w-full shrink-0 font-['Geist:SemiBold'] text-[30px] leading-[36px] font-semibold text-[#0a0a0a]"
				>
					Your cart is currently empty
				</p>
				<p
					class="relative w-full shrink-0 font-['Geist:Regular'] text-[0px] leading-[0] font-normal text-[#737373]"
				>
					<span class="text-[14px] leading-[20px]"
						>{`Start filling it with great finds, hot deals, and everyday essentials. We have something special waiting for you! `}</span
					>
					<a
						href="/products"
						class="text-[14px] leading-[20px] text-[#0a0a0a] underline decoration-solid decoration-from-font [text-decoration-skip-ink:none] [text-underline-position:from-font] hover:underline"
						>Continue Shopping</a
					>
				</p>
			</div>
		</div>
	</div>
	<SiteFooter />
</div>
