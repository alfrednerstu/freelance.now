<script>
	import { getRole } from "$lib/domain.js";
	import { page } from "$app/state";

	const role = $derived(getRole(page.url.hostname));
</script>

<h1>Find the right {role} for your project</h1>
<a href="/dashboard" class="cta">Find a {role} now</a>

<style>
	.cta {
		display: inline-block;
		background: light-dark(#111, #eee);
		color: light-dark(#fff, #111);
		padding: 0.75rem 1.5rem;
		border-radius: 4px;
		text-decoration: none;
		font-weight: 600;
	}
	.cta:hover {
		background: light-dark(#333, #ccc);
	}
</style>
