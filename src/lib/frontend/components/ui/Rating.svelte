<script lang="ts">
	let { class: className = 'content-stretch flex items-start relative' }: { class?: string } =
		$props();
</script>

<div class={className}>
	<div class="relative size-[16px] shrink-0" data-name="Rating / Item">
		<img alt="" class="absolute inset-0 block size-full max-w-none" src="/assets/a4c13.svg" />
	</div>
	<div class="relative size-[16px] shrink-0" data-name="Rating / Item">
		<img alt="" class="absolute inset-0 block size-full max-w-none" src="/assets/a4c13.svg" />
	</div>
	<div class="relative size-[16px] shrink-0" data-name="Rating / Item">
		<img alt="" class="absolute inset-0 block size-full max-w-none" src="/assets/a4c13.svg" />
	</div>
	<div class="relative size-[16px] shrink-0" data-name="Rating / Item">
		<img alt="" class="absolute inset-0 block size-full max-w-none" src="/assets/a4c13.svg" />
	</div>
	<div class="relative size-[16px] shrink-0" data-name="Half filled star">
		<div class="absolute inset-0 contents" data-name="Mask group">
			<div
				class="absolute top-0 right-0 bottom-0 left-1/2 bg-[rgba(217,119,6,0.2)] mask-intersect mask-alpha mask-size-[16px_16px] mask-no-clip mask-position-[-8px_0px] mask-no-repeat"
				style="mask-image: url('/assets/e5691.svg')"
			></div>
		</div>
		<div class="absolute inset-0 contents" style="container-type: size">
			<div
				class="absolute top-0 right-1/2 bottom-0 left-0 flex items-center justify-center"
				style="container-type: size"
			>
				<div class="h-[100cqh] w-[100cqw] flex-none -scale-x-100">
					<div
						class="relative size-full bg-[#d97706] mask-intersect mask-alpha mask-size-[16px_16px] mask-no-clip mask-no-repeat"
						style="mask-image: url('/assets/e5691.svg')"
					></div>
				</div>
			</div>
		</div>
	</div>
</div>
