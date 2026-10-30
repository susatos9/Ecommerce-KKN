<script lang="ts">
	import { Button } from '#lib/frontend/components/ui/button/index.ts';
	import { Spinner } from '#lib/frontend/components/ui/spinner/index.ts';
	import { Separator } from '#lib/frontend/components/ui/separator/index.ts';
	import { authClient, authErrorMessage } from '#frontend/modules/auth/index.ts';

	let { callbackURL = '/' }: { callbackURL?: string } = $props();

	let googleLoading = $state(false);
	let error = $state('');

	async function signInWithGoogle() {
		error = '';
		googleLoading = true;

		try {
			const { error: authError } = await authClient.signIn.social({
				provider: 'google',
				callbackURL
			});

			if (authError) {
				error = authErrorMessage(authError, 'Google sign-in is not available right now.');
			}
		} catch (err) {
			error = authErrorMessage(err, 'Google sign-in is not available right now.');
		} finally {
			googleLoading = false;
		}
	}
</script>

<div class="grid gap-4">
	<div class="grid grid-cols-2 gap-3">
		<Button
			variant="outline"
			type="button"
			class="w-full gap-2"
			aria-label="Continue with Google"
			disabled={googleLoading}
			onclick={signInWithGoogle}
		>
			{#if googleLoading}
				<Spinner />
			{:else}
				<svg viewBox="0 0 24 24" aria-hidden="true">
					<path
						fill="#4285F4"
						d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47a5.54 5.54 0 0 1-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82Z"
					/>
					<path
						fill="#34A853"
						d="M12 24c3.24 0 5.96-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09A11.99 11.99 0 0 0 12 24Z"
					/>
					<path
						fill="#FBBC05"
						d="M5.27 14.29a7.2 7.2 0 0 1 0-4.58V6.62H1.29a11.99 11.99 0 0 0 0 10.76l3.98-3.09Z"
					/>
					<path
						fill="#EA4335"
						d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.7 0 3.99 2.47 1.29 6.62l3.98 3.09C6.22 6.86 8.87 4.75 12 4.75Z"
					/>
				</svg>
			{/if}
			Google
		</Button>
		<Button variant="outline" type="button" class="w-full gap-2" aria-label="Continue with Apple">
			<svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
				<path
					d="M17.05 12.54c-.03-2.5 2.04-3.7 2.13-3.76-1.16-1.7-2.97-1.93-3.62-1.96-1.54-.16-3 .9-3.78.9-.78 0-1.98-.88-3.25-.86-1.67.03-3.21.97-4.07 2.47-1.74 3.02-.44 7.5 1.25 9.96.83 1.2 1.82 2.55 3.12 2.5 1.25-.05 1.72-.81 3.23-.81 1.51 0 1.94.81 3.26.79 1.35-.03 2.2-1.23 3.02-2.44.95-1.39 1.34-2.74 1.36-2.81-.03-.01-2.61-1-2.65-3.98ZM14.63 4.9c.69-.84 1.16-2 1.03-3.16-1 .04-2.21.67-2.92 1.5-.64.74-1.2 1.92-1.05 3.05 1.11.09 2.25-.56 2.94-1.39Z"
				/>
			</svg>
			Apple
		</Button>
	</div>
	{#if error}
		<p class="text-sm font-normal text-destructive" role="alert">{error}</p>
	{/if}
	<div class="relative">
		<Separator />
		<span class="absolute inset-0 flex items-center justify-center">
			<span class="bg-card px-2 text-xs font-medium tracking-wide text-muted-foreground">
				Or continue with
			</span>
		</span>
	</div>
</div>
