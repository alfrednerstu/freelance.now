import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { username } from "better-auth/plugins";
import { db } from "./db.js";
import { BETTER_AUTH_SECRET } from "$env/static/private";

export const auth = betterAuth({
	secret: BETTER_AUTH_SECRET,
	trustedOrigins: [
		"http://localhost:5173",
		"https://freelance.now",
		"https://freelancenow.com",
	],
	database: drizzleAdapter(db, {
		provider: "pg",
	}),
	emailAndPassword: {
		enabled: true,
	},
	plugins: [username()],
});
