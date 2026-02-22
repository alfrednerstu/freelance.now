<script>
	let { data } = $props();
</script>

<h1>{data.project.title}</h1>

{#if data.project.description}
	<p>{data.project.description}</p>
{/if}

{#if data.project.url}
	<p><a href={data.project.url} target="_blank" rel="noopener">{data.project.url}</a></p>
{/if}

<a href="/profile/{data.username}/projects/{data.project.slug}/edit" class="edit-link">Edit project</a>

<style>
	h1 { margin-bottom: 0.5rem; }
	p { margin-bottom: 0.5rem; color: light-dark(#555, #aaa); }
	.edit-link {
		display: inline-block;
		margin-top: 1rem;
		padding: 0.5rem 1rem;
		border: 1px solid light-dark(#ccc, #555);
		border-radius: 4px;
		text-decoration: none;
	}
	.edit-link:hover { background: light-dark(#f5f5f5, #333); }
</style>
