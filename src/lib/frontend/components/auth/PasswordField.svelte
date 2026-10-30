<script lang="ts">
	import Eye from '@lucide/svelte/icons/eye';
	import EyeOff from '@lucide/svelte/icons/eye-off';
	import * as Field from '#lib/frontend/components/ui/field/index.ts';
	import { Input } from '#lib/frontend/components/ui/input/index.ts';
	import { Button } from '#lib/frontend/components/ui/button/index.ts';
	import type { HTMLInputAttributes } from 'svelte/elements';

	let {
		id,
		label,
		value = $bindable(''),
		placeholder = '',
		autocomplete = 'current-password',
		hint = '',
		error = '',
		required = true
	}: {
		id: string;
		label: string;
		value?: string;
		placeholder?: string;
		autocomplete?: HTMLInputAttributes['autocomplete'];
		hint?: string;
		error?: string;
		required?: boolean;
	} = $props();

	let visible = $state(false);
</script>

<Field.Field data-invalid={error ? true : undefined}>
	<Field.Label for={id}>{label}</Field.Label>
	<div class="relative">
		<Input
			{id}
			type={visible ? 'text' : 'password'}
			bind:value
			class="pr-9"
			{placeholder}
			{autocomplete}
			{required}
			aria-invalid={error ? true : undefined}
		/>
		<Button
			type="button"
			variant="ghost"
			size="icon-sm"
			class="absolute inset-y-0 right-1 my-auto text-muted-foreground hover:text-foreground"
			onclick={() => (visible = !visible)}
			aria-label={visible ? 'Hide password' : 'Show password'}
			aria-pressed={visible}
		>
			{#if visible}
				<EyeOff />
			{:else}
				<Eye />
			{/if}
		</Button>
	</div>
	{#if hint}
		<Field.Description>{hint}</Field.Description>
	{/if}
	{#if error}
		<Field.Error>{error}</Field.Error>
	{/if}
</Field.Field>
