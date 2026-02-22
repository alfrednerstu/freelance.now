<script>
	import Header from "$lib/components/Header.svelte";
	import Footer from "$lib/components/Footer.svelte";

	let { children } = $props();
</script>

<Header />
<main>
	{@render children()}
</main>
<Footer />

<style>
	:global(*, *::before, *::after) {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}
	:global(body) {
		font-family: system-ui, -apple-system, sans-serif;
		color: #111;
		background: #fff;
	}
	main {
		max-width: 960px;
		margin: 0 auto;
		padding: 2rem;
	}
	:global(a) {
		color: #111;
	}
</style>
