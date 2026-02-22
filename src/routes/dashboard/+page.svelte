<script>
	let { data } = $props();
</script>

<h1>Dashboard</h1>

<nav class="links">
	<a href="/profile/{data.user.username}">My profile</a>
	<a href="/profile/{data.user.username}/edit">Edit profile</a>
	<a href="/profile/{data.user.username}/projects">Projects</a>
	<a href="/profile/{data.user.username}/projects/new">Add project</a>
</nav>

<style>
	h1 { margin-bottom: 1.5rem; }
	.links {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}
	a {
		display: block;
		padding: 0.75rem 1rem;
		border: 1px solid light-dark(#e5e5e5, #333);
		border-radius: 4px;
		text-decoration: none;
	}
	a:hover {
		background: light-dark(#f5f5f5, #333);
	}
</style>
