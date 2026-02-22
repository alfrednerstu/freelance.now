import { redirect, error } from "@sveltejs/kit";
import { auth } from "$lib/server/auth.js";
import { db } from "$lib/server/db.js";
import { user } from "$lib/server/schema.js";
import { eq } from "drizzle-orm";

export async function load({ request, params }) {
	const session = await auth.api.getSession({ headers: request.headers });
	if (!session) {
		throw redirect(302, "/log-in");
	}
	if (session.user.username !== params.username) {
		throw error(403, "Forbidden");
	}
	return {
		user: session.user,
	};
}

export const actions = {
	default: async ({ request, params }) => {
		const session = await auth.api.getSession({ headers: request.headers });
		if (!session || session.user.username !== params.username) {
			throw error(403, "Forbidden");
		}

		const formData = await request.formData();
		const name = formData.get("name");

		await db
			.update(user)
			.set({ name, updatedAt: new Date() })
			.where(eq(user.id, session.user.id));

		throw redirect(302, `/profile/${params.username}`);
	},
};
