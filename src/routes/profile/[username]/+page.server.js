import { error } from "@sveltejs/kit";
import { db } from "$lib/server/db.js";
import { user } from "$lib/server/schema.js";
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

	return {
		profile: {
			name: profile.name,
			username: profile.username,
			displayUsername: profile.displayUsername,
		},
	};
}
