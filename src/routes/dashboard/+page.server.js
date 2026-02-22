import { redirect } from "@sveltejs/kit";
import { auth } from "$lib/server/auth.js";

export async function load({ request }) {
	const session = await auth.api.getSession({ headers: request.headers });
	if (!session) {
		throw redirect(302, "/log-in");
	}
	return {
		user: session.user,
	};
}
