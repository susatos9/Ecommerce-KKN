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

	let email = $state('');
	let password = $state('');
	let remember = $state(false);
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
		loading = true;

		try {
			const { error: authError } = await authClient.signIn.email({
				email,
				password,
				rememberMe: remember
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

<AuthShell title="Welcome back" description="Please enter your details to sign in">
	<div class="grid gap-6">
		<SocialButtons callbackURL={redirectTo} />
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
				<PasswordField
					id="password"
					label="Password"
					bind:value={password}
					placeholder="Enter your password"
					autocomplete="current-password"
				/>
			</Field.Group>
			{#if error}
				<Field.Error>{error}</Field.Error>
			{/if}
			<div class="flex items-center justify-between gap-4">
				<div class="flex items-center gap-2">
					<Checkbox id="remember" bind:checked={remember} />
					<Field.Label for="remember" class="font-normal text-muted-foreground">
						Remember me
					</Field.Label>
				</div>
				<a href="/forgot-password" class="text-sm font-medium underline-offset-4 hover:underline">
					Forgot password?
				</a>
			</div>
			<Button type="submit" class="w-full" disabled={loading}>
				{#if loading}
					<Spinner />
					Signing in…
				{:else}
					Sign in to Shopix
				{/if}
			</Button>
		</form>
	</div>

	{#snippet footer()}
		<p class="text-sm text-muted-foreground">
			New on our platform?
			<a href="/signup" class="font-medium text-foreground underline-offset-4 hover:underline">
				Create an account
			</a>
		</p>
	{/snippet}
</AuthShell>
