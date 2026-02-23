<script>
	let { data } = $props();
</script>

<p class="kicker"><a href="/profile/{data.username}">{data.profileName}</a></p>

<h1>{data.project.title}</h1>

{#if data.project.description}
	<p>{data.project.description}</p>
{/if}

{#if data.project.url}
	<p><a href={data.project.url} target="_blank" rel="noopener">{data.project.url}</a></p>
{/if}

<style>
	.kicker {
		margin-bottom: 0.25rem;
		font-size: 0.85rem;
	}
	.kicker a {
		color: light-dark(#555, #aaa);
		text-decoration: none;
	}
	.kicker a:hover { text-decoration: underline; }
	h1 { margin-bottom: 0.5rem; }
	p { margin-bottom: 0.5rem; color: light-dark(#555, #aaa); }
</style>
