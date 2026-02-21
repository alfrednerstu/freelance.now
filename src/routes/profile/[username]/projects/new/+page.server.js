import { redirect, error } from "@sveltejs/kit";
import { auth } from "$lib/server/auth.js";
import { db } from "$lib/server/db.js";
import { project } from "$lib/server/schema.js";
import crypto from "node:crypto";

export async function load({ request, params }) {
	const session = await auth.api.getSession({ headers: request.headers });
	if (!session) {
		throw redirect(302, "/log-in");
	}
	if (session.user.username !== params.username) {
		throw error(403, "Forbidden");
	}
	return {};
}

function slugify(text) {
	return text
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/^-|-$/g, "");
}

export const actions = {
	default: async ({ request, params }) => {
		const session = await auth.api.getSession({ headers: request.headers });
		if (!session || session.user.username !== params.username) {
			throw error(403, "Forbidden");
		}

		const formData = await request.formData();
		const title = formData.get("title");
		const description = formData.get("description");
		const url = formData.get("url");
		const slug = slugify(title);

		await db.insert(project).values({
			id: crypto.randomUUID(),
			title,
			slug,
			description: description || null,
			url: url || null,
			userId: session.user.id,
		});

		throw redirect(302, `/profile/${params.username}/projects/${slug}`);
	},
};
