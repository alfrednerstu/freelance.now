<script>
	import "@fontsource-variable/hanken-grotesk";
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
		font-family: "Hanken Grotesk Variable", system-ui, -apple-system, sans-serif;
		font-weight: 500;
		color-scheme: light dark;
	}
	main {
		max-width: 960px;
		margin: 0 auto;
		padding: 2rem;
	}
	:global(a) {
		color: inherit;
	}
	:global(h1) {
		font-weight: 400;
		text-wrap: balanced;
		margin-bottom: 1rem;
	}
	:global(input), :global(textarea) {
		padding: 0.5rem;
		border: 1px solid light-dark(#ccc, #555);
		border-radius: 4px;
		font: inherit;
		background: inherit;
		color: inherit;
	}
	:global(button) {
		padding: 0.6rem;
		background: light-dark(#111, #eee);
		color: light-dark(#fff, #111);
		border: none;
		border-radius: 4px;
		cursor: pointer;
		font: inherit;
		font-weight: 600;
	}
	:global(button:hover) {
		background: light-dark(#333, #ccc);
	}
	:global(form) {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		max-width: 400px;
	}
	:global(label) {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		font-weight: 500;
	}
</style>
