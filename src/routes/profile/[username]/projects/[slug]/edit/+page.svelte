<script>
	let { data } = $props();
</script>

<h1>Edit project</h1>

<form method="POST">
	<label>
		Title
		<input type="text" name="title" value={data.project.title} required />
	</label>
	<label>
		Description
		<textarea name="description" rows="4">{data.project.description || ""}</textarea>
	</label>
	<label>
		URL
		<input type="url" name="url" value={data.project.url || ""} />
	</label>
	<button type="submit">Save</button>
</form>

<style>
	h1 { margin-bottom: 1rem; }
	form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		max-width: 400px;
	}
	label {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		font-weight: 500;
	}
	input, textarea {
		padding: 0.5rem;
		border: 1px solid #ccc;
		border-radius: 4px;
		font: inherit;
	}
	button {
		padding: 0.6rem;
		background: #111;
		color: #fff;
		border: none;
		border-radius: 4px;
		cursor: pointer;
		font: inherit;
		font-weight: 600;
	}
	button:hover { background: #333; }
</style>
