<script lang="ts">
	import { goto } from '$app/navigation';
	import AuthShell from '#lib/frontend/components/auth/AuthShell.svelte';
	import * as Field from '#lib/frontend/components/ui/field/index.ts';
	import * as InputOTP from '#lib/frontend/components/ui/input-otp/index.ts';
	import { Button } from '#lib/frontend/components/ui/button/index.ts';

	let code = $state('');
	let resent = $state(false);

	function handleSubmit(event: SubmitEvent) {
		event.preventDefault();
		goto('/');
	}
</script>

<AuthShell
	title="Two factor authentication"
	description="We sent a verification code to your inbox. Enter the code from the inbox in the field below."
>
	<form class="grid gap-6" onsubmit={handleSubmit}>
		<Field.Field class="items-center">
			<Field.Label for="code">Type your 6 digit security code</Field.Label>
			<InputOTP.Root inputId="code" maxlength={6} bind:value={code} class="justify-center" required>
				{#snippet children({ cells })}
					<InputOTP.Group>
						{#each cells.slice(0, 3) as cell, i (i)}
							<InputOTP.Slot {cell} />
						{/each}
					</InputOTP.Group>
					<InputOTP.Separator />
					<InputOTP.Group>
						{#each cells.slice(3) as cell, i (i + 3)}
							<InputOTP.Slot {cell} />
						{/each}
					</InputOTP.Group>
				{/snippet}
			</InputOTP.Root>
		</Field.Field>
		<Button type="submit" class="w-full">Verify my account</Button>
	</form>
	<div class="mt-4 text-center text-sm text-muted-foreground">
		Didn’t get the mail?
		<button
			type="button"
			class="font-medium text-foreground underline-offset-4 hover:underline"
			onclick={() => (resent = true)}
		>
			{resent ? 'Code sent' : 'Resend'}
		</button>
	</div>
</AuthShell>
