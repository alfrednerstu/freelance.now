<script>
	let { data } = $props();
</script>

<h1>Edit profile</h1>

<form method="POST">
	<label>
		Name
		<input type="text" name="name" value={data.user.name} required />
	</label>
	<button type="submit">Save</button>
</form>

