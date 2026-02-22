<script>
	let { data } = $props();
</script>

<h1>Projects</h1>

<a href="/profile/{data.username}/projects/new" class="add-btn">Add project</a>

{#if data.projects.length === 0}
	<p>No projects yet.</p>
{:else}
	<ul>
		{#each data.projects as proj}
			<li>
				<a href="/profile/{data.username}/projects/{proj.slug}">
					<strong>{proj.title}</strong>
					{#if proj.description}
						<span>{proj.description}</span>
					{/if}
				</a>
			</li>
		{/each}
	</ul>
{/if}

<style>
	h1 { margin-bottom: 1rem; }
	.add-btn {
		display: inline-block;
		margin-bottom: 1.5rem;
		padding: 0.5rem 1rem;
		background: #111;
		color: #fff;
		text-decoration: none;
		border-radius: 4px;
		font-weight: 600;
	}
	.add-btn:hover { background: #333; }
	ul {
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}
	li a {
		display: block;
		padding: 0.75rem 1rem;
		border: 1px solid #e5e5e5;
		border-radius: 4px;
		text-decoration: none;
	}
	li a:hover { background: #f5f5f5; }
	span {
		display: block;
		color: #555;
		font-size: 0.9rem;
		margin-top: 0.25rem;
	}
</style>
