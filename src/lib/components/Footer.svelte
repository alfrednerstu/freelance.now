<script>
	import { authClient } from "$lib/auth-client.js";

	const session = authClient.useSession();
</script>

<footer>
	{#if !$session?.data}
		<a href="/sign-up">Sign up as a freelancer</a>
	{/if}
</footer>

<style>
	footer {
		border-top: 1px solid light-dark(#e5e5e5, #333);
		padding: 1rem 2rem;
		text-align: center;
	}
	a {
		color: inherit;
	}
</style>
