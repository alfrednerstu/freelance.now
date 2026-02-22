import { auth } from "$lib/server/auth.js";
import { svelteKitHandler } from "better-auth/svelte-kit";

export const GET = (event) => svelteKitHandler({ event, auth });
export const POST = (event) => svelteKitHandler({ event, auth });
