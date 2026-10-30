<script lang="ts">
	import { goto } from '$app/navigation';
	import MailCheck from '@lucide/svelte/icons/mail-check';
	import AuthShell from '#lib/frontend/components/auth/AuthShell.svelte';
	import { Button } from '#lib/frontend/components/ui/button/index.ts';

	let resent = $state(false);
</script>

<AuthShell
	showLogo={false}
	title="Verify your email"
	description="An activation link has been sent to your email address: hello@example.com. Please check your inbox and click on the link to complete the activation process."
>
	{#snippet icon()}
		<div class="flex size-12 items-center justify-center rounded-full bg-muted text-foreground">
			<MailCheck class="size-6" />
		</div>
	{/snippet}

	<div class="grid gap-6">
		<Button type="button" class="w-full" onclick={() => goto('/')}>Skip for now</Button>
		<p class="text-center text-sm text-muted-foreground">
			Didn't get the mail?
			<button
				type="button"
				class="font-medium text-foreground underline-offset-4 hover:underline"
				onclick={() => (resent = true)}
			>
				{resent ? 'Sent' : 'Resend'}
			</button>
		</p>
	</div>
</AuthShell>
