<script lang="ts">
	import { goto } from '$app/navigation';
	import SiteHeader from '#lib/frontend/components/SiteHeader.svelte';
	import SiteFooter from '#lib/frontend/components/SiteFooter.svelte';
	import AccountSidebar from '#lib/frontend/components/AccountSidebar.svelte';

	const logos: [string, string, string][] = [
		['cf080.svg', 'Zara', '76px'],
		['52e29.svg', 'H&M', '49px'],
		['116fd.svg', 'Chanel', '52px'],
		['16fe8.svg', 'Louis Vuitton', '27px'],
		['e78f9.svg', 'Samsung', '120px'],
		['ef8c2.svg', 'LG', '58px']
	];

	const asset = (name: string) => `/assets/${name}`;
</script>

{#snippet solidBadge(variant = 'New')}
	<span
		class="rounded-full px-2 py-0.5 font-['Geist:Medium'] text-xs leading-4 text-white {variant ===
		'New'
			? 'bg-[#16a34a]'
			: 'bg-[#dc2626]'}"
	>
		{variant}
	</span>
{/snippet}

{#snippet productCard(hovered = false)}
	<article
		class="group w-[292px] overflow-hidden rounded-[14px] bg-white shadow-[0_0_0_1px_rgba(10,10,10,.1)]"
	>
		<div class="relative h-[280px] bg-[#f5f5f5]">
			<img
				alt="Bellavita product"
				class="absolute bottom-0 left-1/2 h-[260px] w-[252px] -translate-x-1/2 object-contain object-bottom"
				src={asset(hovered ? '99378.png' : '0e0d4.png')}
			/>
			<div class="absolute top-[19px] left-3.5">{@render solidBadge()}</div>
			<button
				aria-label="Add to wishlist"
				class="absolute top-3.5 right-3.5 rounded-full bg-white p-1"
			>
				<img alt="" src={asset('4d9b4.svg')} width="21" height="21" />
			</button>
		</div>
		<div class="flex flex-col gap-3 p-4">
			<div>
				<h3 class="font-['Geist:SemiBold'] text-lg leading-7">Bellavita</h3>
				<p class="truncate font-['Geist:Regular'] text-sm leading-5 text-[#737373]">
					Layer'r Wottagirl Vanilla twist...
				</p>
				<p class="font-['Geist:SemiBold'] text-sm leading-5">
					$225.00 <del class="font-['Geist:Regular'] text-[#737373]">$249.00</del>
				</p>
			</div>
			<button
				type="button"
				onclick={() => goto('/products/phone')}
				class="{hovered
					? 'border border-[#e5e5e5] bg-white text-black'
					: 'bg-[#171717] text-white'} flex w-full items-center justify-center gap-1.5 rounded-[10px] px-3 py-1.5 font-['Geist:Medium'] text-sm shadow-sm"
			>
				Add to Cart <img
					alt=""
					src={asset(hovered ? '71743.svg' : '9b179.svg')}
					width="16"
					height="16"
				/>
			</button>
		</div>
	</article>
{/snippet}

{#snippet listingProductCard()}
	<article
		class="flex w-full max-w-[901px] overflow-hidden rounded-[14px] bg-white shadow-[0_0_0_1px_rgba(10,10,10,.1)] max-sm:flex-col"
	>
		<div class="relative min-h-44 w-[201px] shrink-0 bg-[#f5f5f5] max-sm:w-full">
			<img
				alt="Nike smartwatch"
				class="absolute inset-0 h-full w-full object-contain"
				src={asset('098a6.png')}
			/>
			<div class="absolute top-3 left-3">{@render solidBadge()}</div>
			<img
				alt=""
				class="absolute top-2 right-3 rounded-full bg-white p-1"
				src={asset('4d9b4.svg')}
				width="29"
				height="29"
			/>
		</div>
		<div class="flex min-w-0 flex-1 flex-col gap-3 p-4">
			<div>
				<h3 class="font-['Geist:SemiBold'] text-lg leading-7">Nike</h3>
				<p class="font-['Geist:Regular'] text-sm leading-5 text-[#737373]">
					This smartwatch features a large 1.83" HD display that delivers clear visuals and a smooth
					user experience for everyday use. It comes with ASAP fast charging, up to 15 days of
					battery life, and a functional crown for convenient and easy control.
				</p>
				<p class="font-['Geist:SemiBold'] text-sm">
					$225.00 <del class="font-['Geist:Regular'] text-[#737373]">$249.00</del>
				</p>
			</div>
			<button
				type="button"
				onclick={() => goto('/products/phone')}
				class="self-start rounded-[10px] bg-[#171717] px-3 py-1.5 font-['Geist:Medium'] text-sm text-white"
				>Add to Cart</button
			>
		</div>
	</article>
{/snippet}

{#snippet reviewProductCard()}
	<article
		class="w-[310px] overflow-hidden rounded-[14px] bg-white shadow-[0_0_0_1px_rgba(10,10,10,.1)]"
	>
		<div class="relative h-[280px] bg-[#f5f5f5]">
			<img
				alt="Nike sneakers"
				class="absolute bottom-0 h-36 w-full object-contain"
				src={asset('d805c.png')}
			/>
			<img
				alt=""
				class="absolute top-3.5 right-3.5 rounded-full bg-white p-1"
				src={asset('4d9b4.svg')}
				width="29"
				height="29"
			/>
		</div>
		<div class="p-4">
			<h3 class="font-['Geist:SemiBold'] text-lg">Nike</h3>
			<p class="mt-2 font-['Geist:Regular'] text-sm leading-5 text-[#737373]">
				Lightweight everyday sneakers designed for all-day comfort, featuring breathable materials
				and iconic Air cushioning for smooth, responsive support.
			</p>
		</div>
	</article>
{/snippet}

{#snippet categoriesCard()}
	<article
		class="w-[280px] overflow-hidden rounded-[14px] bg-white shadow-[0_0_0_1px_rgba(10,10,10,.1)]"
	>
		<div class="h-[228px] bg-[#f5f5f5]">
			<img
				alt="Headphones"
				class="h-full w-full object-contain object-bottom"
				src={asset('7e3a0.png')}
			/>
		</div>
		<h3 class="p-4 font-['Geist:SemiBold'] text-lg leading-7">Ready, Set, Glow</h3>
	</article>
{/snippet}

<div class="min-h-screen bg-white">
	<SiteHeader />
	<main class="mx-auto flex max-w-[1280px] flex-col gap-16 px-8 py-12">
		<section class="flex w-full flex-col items-center gap-8 px-8 py-14">
			<h2 class="font-['Geist:Bold'] text-[30px] leading-9">Shop By Brands</h2>
			<div class="flex w-full max-w-[976px] flex-wrap justify-center gap-8">
				{#each logos as [src, alt, width] (alt)}
					<div
						class="flex h-20 w-[136px] items-center justify-center rounded-[14px] border border-[#e5e5e5]"
					>
						<img src={asset(src)} {alt} style="width: {width}; max-height: 32px" />
					</div>
				{/each}
			</div>
		</section>
		<section class="flex flex-wrap items-start gap-8">
			{@render productCard()}
			{@render productCard(true)}
			{@render reviewProductCard()}
			{@render categoriesCard()}
		</section>
		{@render listingProductCard()}
		<div class="flex flex-wrap items-start gap-12">
			<AccountSidebar />
			<div class="flex gap-4 pt-4">
				{@render solidBadge()}
				{@render solidBadge('20% off')}
			</div>
		</div>
	</main>
	<SiteFooter />
</div>
