<script>
	import { authClient } from "$lib/auth-client.js";
	import { goto } from "$app/navigation";

	let name = $state("");
	let username = $state("");
	let email = $state("");
	let password = $state("");
	let error = $state("");

	async function handleSignUp(e) {
		e.preventDefault();
		error = "";
		const { error: err } = await authClient.signUp.email({
			name,
			username,
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

<h1>Sign up</h1>

{#if error}
	<p class="error">{error}</p>
{/if}

<form onsubmit={handleSignUp}>
	<label>
		Name
		<input type="text" bind:value={name} required />
	</label>
	<label>
		Username
		<input type="text" bind:value={username} required />
	</label>
	<label>
		Email
		<input type="email" bind:value={email} required />
	</label>
	<label>
		Password
		<input type="password" bind:value={password} required minlength="8" />
	</label>
	<button type="submit">Sign up</button>
</form>

<p class="alt">Already have an account? <a href="/log-in">Log in</a></p>

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
	.error {
		color: red;
		margin-bottom: 1rem;
	}
	.alt {
		margin-top: 1rem;
	}
</style>
