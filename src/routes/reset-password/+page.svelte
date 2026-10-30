<script lang="ts">
	import { goto } from '$app/navigation';
	import AuthShell from '#lib/frontend/components/auth/AuthShell.svelte';
	import PasswordField from '#lib/frontend/components/auth/PasswordField.svelte';
	import * as Field from '#lib/frontend/components/ui/field/index.ts';
	import { Button } from '#lib/frontend/components/ui/button/index.ts';

	let password = $state('');
	let confirmPassword = $state('');

	function handleSubmit(event: SubmitEvent) {
		event.preventDefault();
		goto('/login');
	}
</script>

<AuthShell
	title="Reset password"
	description="Time for a fresh start! Go ahead and set a new password."
>
	<form class="grid gap-4" onsubmit={handleSubmit}>
		<Field.Group>
			<PasswordField
				id="password"
				label="New password"
				bind:value={password}
				placeholder="Enter a new password"
				autocomplete="new-password"
				hint="Use at least 8 characters."
			/>
			<PasswordField
				id="confirm-password"
				label="Confirm password"
				bind:value={confirmPassword}
				placeholder="Repeat your new password"
				autocomplete="new-password"
			/>
		</Field.Group>
		<div class="grid gap-2">
			<Button type="submit" class="w-full">Save changes</Button>
			<Button type="button" variant="outline" class="w-full" onclick={() => goto('/login')}>
				Back to login
			</Button>
		</div>
	</form>
</AuthShell>
