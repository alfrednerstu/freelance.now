<script>
	import "@fontsource-variable/hanken-grotesk";
	import "./layout.css";
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
	main {
		max-width: 960px;
		margin: 0 auto;
		padding: 2rem;
	}
</style>
