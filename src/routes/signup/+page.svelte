<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import AuthShell from '#lib/frontend/components/auth/AuthShell.svelte';
	import PasswordField from '#lib/frontend/components/auth/PasswordField.svelte';
	import SocialButtons from '#lib/frontend/components/auth/SocialButtons.svelte';
	import * as Field from '#lib/frontend/components/ui/field/index.ts';
	import { Input } from '#lib/frontend/components/ui/input/index.ts';
	import { Checkbox } from '#lib/frontend/components/ui/checkbox/index.ts';
	import { Button } from '#lib/frontend/components/ui/button/index.ts';
	import { Spinner } from '#lib/frontend/components/ui/spinner/index.ts';
	import { authClient, authErrorMessage, safeRedirect } from '#frontend/modules/auth/index.ts';

	const session = authClient.useSession();
	const redirectTo = safeRedirect(page.url.searchParams.get('redirectTo'));

	let name = $state('');
	let email = $state('');
	let password = $state('');
	let confirmPassword = $state('');
	let terms = $state(false);
	let loading = $state(false);
	let error = $state('');

	$effect(() => {
		if (!$session.isPending && $session.data) {
			void goto(redirectTo, { replaceState: true });
		}
	});

	async function handleSubmit(event: SubmitEvent) {
		event.preventDefault();
		error = '';

		if (password.length < 8) {
			error = 'Your password must be at least 8 characters long.';
			return;
		}

		if (password !== confirmPassword) {
			error = 'Passwords do not match.';
			return;
		}

		if (!terms) {
			error = 'Please accept the privacy policy and terms to continue.';
			return;
		}

		loading = true;

		try {
			const { error: authError } = await authClient.signUp.email({
				name,
				email,
				password
			});

			if (authError) {
				error = authErrorMessage(authError);
				return;
			}

			await goto(redirectTo, { replaceState: true });
		} catch (err) {
			error = authErrorMessage(err);
		} finally {
			loading = false;
		}
	}
</script>

<AuthShell title="Sign up to Shopix" description="Please enter your details to create an account">
	<div class="grid gap-6">
		<SocialButtons callbackURL={redirectTo} />
		<form class="grid gap-4" onsubmit={handleSubmit}>
			<Field.Group>
				<Field.Field>
					<Field.Label for="name">Full name</Field.Label>
					<Input
						id="name"
						type="text"
						placeholder="John Doe"
						autocomplete="name"
						bind:value={name}
						required
					/>
				</Field.Field>
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
				<PasswordField
					id="password"
					label="Password"
					bind:value={password}
					placeholder="Create a password"
					autocomplete="new-password"
					hint="Use at least 8 characters."
				/>
				<PasswordField
					id="confirm-password"
					label="Confirm password"
					bind:value={confirmPassword}
					placeholder="Repeat your password"
					autocomplete="new-password"
				/>
			</Field.Group>
			{#if error}
				<Field.Error>{error}</Field.Error>
			{/if}
			<div class="flex items-start gap-2">
				<Checkbox id="terms" bind:checked={terms} class="mt-0.5" required />
				<Field.Label
					for="terms"
					class="items-start text-sm leading-snug font-normal text-muted-foreground"
				>
					I agree to the
					<span class="font-medium text-foreground">privacy policy &amp; terms</span>
				</Field.Label>
			</div>
			<Button type="submit" class="w-full" disabled={loading}>
				{#if loading}
					<Spinner />
					Creating account…
				{:else}
					Create account
				{/if}
			</Button>
		</form>
	</div>

	{#snippet footer()}
		<p class="text-sm text-muted-foreground">
			Already have an account?
			<a href="/login" class="font-medium text-foreground underline-offset-4 hover:underline">
				Log in
			</a>
		</p>
	{/snippet}
</AuthShell>
