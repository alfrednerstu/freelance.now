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

