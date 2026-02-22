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
	input {
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
