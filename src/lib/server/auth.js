import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { username } from "better-auth/plugins";
import { db } from "./db.js";
import { BETTER_AUTH_SECRET } from "$env/static/private";

export const auth = betterAuth({
	secret: BETTER_AUTH_SECRET,
	trustedOrigins: [
		"http://localhost:5173",
		"https://freelance-now.vercel.app",
		"https://marketer.now",
		"https://uxwriter.now",
		"https://copywriter.now",
		"https://writer.now",
		"https://freelance.now",
		"https://designer.now",
		"https://creator.now",
		"https://illustrator.now",
		"https://programmer.now",
		"https://choose.studio",
		"https://choose.expert",
	],
	database: drizzleAdapter(db, {
		provider: "pg",
	}),
	emailAndPassword: {
		enabled: true,
	},
	plugins: [username()],
});
