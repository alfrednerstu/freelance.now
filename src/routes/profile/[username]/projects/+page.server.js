import { error } from "@sveltejs/kit";
import { db } from "$lib/server/db.js";
import { user, project } from "$lib/server/schema.js";
import { eq } from "drizzle-orm";

export async function load({ params }) {
	const [profile] = await db
		.select()
		.from(user)
		.where(eq(user.username, params.username))
		.limit(1);

	if (!profile) {
		throw error(404, "User not found");
	}

	const projects = await db
		.select()
		.from(project)
		.where(eq(project.userId, profile.id));

	return {
		username: params.username,
		projects: projects.map((p) => ({
			title: p.title,
			slug: p.slug,
			description: p.description,
		})),
	};
}
