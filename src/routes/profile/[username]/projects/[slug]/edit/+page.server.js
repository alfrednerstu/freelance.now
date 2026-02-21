import { redirect, error } from "@sveltejs/kit";
import { auth } from "$lib/server/auth.js";
import { db } from "$lib/server/db.js";
import { project } from "$lib/server/schema.js";
import { eq, and } from "drizzle-orm";

export async function load({ request, params }) {
	const session = await auth.api.getSession({ headers: request.headers });
	if (!session) {
		throw redirect(302, "/log-in");
	}
	if (session.user.username !== params.username) {
		throw error(403, "Forbidden");
	}

	const [proj] = await db
		.select()
		.from(project)
		.where(
			and(eq(project.userId, session.user.id), eq(project.slug, params.slug))
		)
		.limit(1);

	if (!proj) {
		throw error(404, "Project not found");
	}

	return {
		project: {
			title: proj.title,
			slug: proj.slug,
			description: proj.description,
			url: proj.url,
		},
	};
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
		const newSlug = slugify(title);

		await db
			.update(project)
			.set({
				title,
				slug: newSlug,
				description: description || null,
				url: url || null,
				updatedAt: new Date(),
			})
			.where(
				and(
					eq(project.userId, session.user.id),
					eq(project.slug, params.slug)
				)
			);

		throw redirect(
			302,
			`/profile/${params.username}/projects/${newSlug}`
		);
	},
};
