<script>
	import { authClient } from "$lib/auth-client.js";
	import { goto } from "$app/navigation";

	let email = $state("");
	let password = $state("");
	let error = $state("");

	async function handleLogin(e) {
		e.preventDefault();
		error = "";
		const { error: err } = await authClient.signIn.email({
			email,
			password,
		});
		if (err) {
			error = err.message;
		} else {
			goto("/dashboard");
		}
	}
</script>

<h1>Log in</h1>

{#if error}
	<p class="error">{error}</p>
{/if}

<form onsubmit={handleLogin}>
	<label>
		Email
		<input type="email" bind:value={email} required />
	</label>
	<label>
		Password
		<input type="password" bind:value={password} required />
	</label>
	<button type="submit">Log in</button>
</form>

<p class="alt">Don't have an account? <a href="/sign-up">Sign up</a></p>

<style>
	.error {
		color: red;
		margin-bottom: 1rem;
	}
	.alt {
		margin-top: 1rem;
	}
</style>
