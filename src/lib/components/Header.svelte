<script>
	import { authClient } from "$lib/auth-client.js";

	const session = authClient.useSession();
</script>

<header>
	<nav>
		<a href="/" class="logo">Freelance.now</a>
		<div class="nav-right">
			{#if $session?.data}
				<a href="/dashboard">Dashboard</a>
				<button onclick={() => authClient.signOut().then(() => window.location.href = '/')}>
					Log out
				</button>
			{:else}
				<a href="/log-in">Log in</a>
			{/if}
		</div>
	</nav>
</header>

<style>
	header {
		border-bottom: 1px solid #e5e5e5;
		padding: 1rem 2rem;
	}
	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		max-width: 960px;
		margin: 0 auto;
	}
	.logo {
		font-weight: 700;
		font-size: 1.25rem;
		text-decoration: none;
		color: #111;
	}
	.nav-right {
		display: flex;
		align-items: center;
		gap: 1rem;
	}
	a {
		color: #111;
		text-decoration: none;
	}
	a:hover {
		text-decoration: underline;
	}
	button {
		background: none;
		border: 1px solid #ccc;
		padding: 0.4rem 0.8rem;
		border-radius: 4px;
		cursor: pointer;
		font: inherit;
	}
	button:hover {
		background: #f5f5f5;
	}
</style>
