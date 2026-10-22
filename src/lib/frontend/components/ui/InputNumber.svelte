<script lang="ts">
	import Plus from './Plus.svelte';
	import Minus from './Minus.svelte';

	let {
		class:
			className = 'content-stretch flex flex-col gap-[8px] h-[36px] items-start relative w-[128px]',
		showTop = false,
		showBottom = false
	}: { class?: string; showTop?: boolean; showBottom?: boolean } = $props();
</script>

<div class={className}>
	{#if showTop}
		<p
			class="relative w-[min-content] min-w-full shrink-0 font-['Geist:Regular'] text-[14px] leading-[20px] font-normal [word-break:break-word] text-[#737373]"
		>
			Label
		</p>
	{/if}
	<div
		class="relative flex h-[36px] w-full shrink-0 content-stretch items-center gap-[6px] overflow-clip rounded-[8px] border border-solid border-[#e5e5e5] bg-white px-[12px] py-[8px]"
		data-name="input number"
	>
		<div
			class="relative flex size-[20px] shrink-0 content-stretch items-center justify-center rounded-[4px] bg-[#f5f5f5] p-[4px]"
			data-name="box Icon"
		>
			<Minus class="relative size-[12px] shrink-0" />
		</div>
		<div
			class="relative flex h-[36px] min-w-px flex-[1_0_0] flex-col content-stretch items-start"
			data-name="Default Input"
		>
			<div
				class="relative flex min-h-px w-[52px] flex-[1_0_0] content-stretch items-center rounded-[8px] bg-white px-[10px] py-[4px]"
				data-name="input"
			>
				<div
					class="relative flex min-w-px flex-[1_0_0] flex-col justify-center overflow-hidden text-center font-['Geist:Regular'] text-[14px] leading-[0] font-normal [word-break:break-word] text-ellipsis whitespace-nowrap text-[#0a0a0a]"
				>
					<p class="overflow-hidden leading-[20px] text-ellipsis">1</p>
				</div>
			</div>
		</div>
		<div
			class="relative flex size-[20px] shrink-0 content-stretch items-center justify-center rounded-[4px] bg-[#f5f5f5] p-[4px]"
			data-name="box Icon"
		>
			<Plus class="relative size-[12px] shrink-0" />
		</div>
	</div>
	{#if showBottom}
		<p
			class="relative min-h-px w-[128px] flex-[1_0_0] font-['Geist:Regular'] text-[14px] leading-[20px] font-normal [word-break:break-word] text-[#737373] opacity-80"
		>
			Bottom Text
		</p>
	{/if}
</div>
