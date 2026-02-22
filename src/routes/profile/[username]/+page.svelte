<script>
	let { data } = $props();
</script>

<h1>{data.profile.name}</h1>
<p>@{data.profile.displayUsername || data.profile.username}</p>

<style>
	h1 { margin-bottom: 0.25rem; }
	p { color: #555; }
</style>
