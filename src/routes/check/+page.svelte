<script>
	import { authClient } from '#frontend/modules/auth/index.ts';
	const session = $state(authClient.useSession());
</script>

<div>
	{#if $session.data}
		<p>Welcome, {$session.data.user.name}!</p>
	{:else}
		<p>Please log in to access your account.</p>
	{/if}
</div>
