<script lang="ts">
	import { goto } from '$app/navigation';
	import AuthShell from '#lib/frontend/components/auth/AuthShell.svelte';
	import * as Field from '#lib/frontend/components/ui/field/index.ts';
	import { Input } from '#lib/frontend/components/ui/input/index.ts';
	import { Button } from '#lib/frontend/components/ui/button/index.ts';

	let email = $state('');

	function handleSubmit(event: SubmitEvent) {
		event.preventDefault();
		goto('/reset-password');
	}
</script>

<AuthShell
	title="Forgot password?"
	description="Enter your email and we’ll send you instructions to reset your password"
>
	<form class="grid gap-4" onsubmit={handleSubmit}>
		<Field.Group>
			<Field.Field>
				<Field.Label for="email">Email</Field.Label>
				<Input
					id="email"
					type="email"
					placeholder="john@example.com"
					autocomplete="email"
					bind:value={email}
					required
				/>
			</Field.Field>
		</Field.Group>
		<div class="grid gap-2">
			<Button type="submit" class="w-full">Reset password</Button>
			<Button type="button" variant="outline" class="w-full" onclick={() => goto('/login')}>
				Back to login
			</Button>
		</div>
	</form>
</AuthShell>
