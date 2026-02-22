<script>
	import { authClient } from "$lib/auth-client.js";
	import { getRole } from "$lib/domain.js";
	import { page } from "$app/state";

	const session = authClient.useSession();
	const role = $derived(getRole(page.url.hostname));
</script>

<footer>
	{#if !$session?.data}
		<a href="/sign-up">Sign up as a {role}</a>
	{/if}
</footer>

<style>
	footer {
		padding: 1rem 2rem;
		text-align: center;
	}
	a {
		color: inherit;
	}
</style>
