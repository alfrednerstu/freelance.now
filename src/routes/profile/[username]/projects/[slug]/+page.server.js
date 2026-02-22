import { error } from "@sveltejs/kit";
import { db } from "$lib/server/db.js";
import { user, project } from "$lib/server/schema.js";
import { eq, and } from "drizzle-orm";

export async function load({ params }) {
	const [profile] = await db
		.select()
		.from(user)
		.where(eq(user.username, params.username))
		.limit(1);

	if (!profile) {
		throw error(404, "User not found");
	}

	const [proj] = await db
		.select()
		.from(project)
		.where(and(eq(project.userId, profile.id), eq(project.slug, params.slug)))
		.limit(1);

	if (!proj) {
		throw error(404, "Project not found");
	}

	return {
		username: params.username,
		project: {
			title: proj.title,
			slug: proj.slug,
			description: proj.description,
			url: proj.url,
		},
	};
}
