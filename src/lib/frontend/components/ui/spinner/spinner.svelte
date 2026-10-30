<script lang="ts">
	import Loader2Icon from '@lucide/svelte/icons/loader-2';
	import { cn } from '#lib/frontend/utils.ts';

	let {
		class: className,
		role = 'status',
		'aria-label': ariaLabel = 'Loading'
	}: { class?: string; role?: string; 'aria-label'?: string } = $props();
</script>

<Loader2Icon {role} aria-label={ariaLabel} class={cn('size-4 animate-spin', className)} />
