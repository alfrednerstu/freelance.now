<script>
	let { data } = $props();
</script>

<h1>Hello {data.user.name}</h1>

<nav class="links">
	<a href="/profile/{data.user.username}">
		<strong>My profile</strong>
		<span>View your profile</span>
	</a>
	<a href="/profile/{data.user.username}/edit">
		<strong>Edit profile</strong>
		<span>Edit your profile</span>
	</a>
	<a href="/profile/{data.user.username}/projects">Projects</a>
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
	a span {
		display: block;
		color: light-dark(#555, #aaa);
		font-size: 0.9rem;
		margin-top: 0.25rem;
	}
	a:hover {
		background: light-dark(#f5f5f5, #333);
	}
</style>
