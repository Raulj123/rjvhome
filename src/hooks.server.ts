import { SvelteKitAuth } from '@auth/sveltekit';
import GitHub from '@auth/sveltekit/providers/github';
import { GITHUB_ID, GITHUB_SECRET } from "$env/static/private";
import { PrismaAdapter } from '@auth/prisma-adapter';
import prismaClient from './lib/db.server';

export const handle = SvelteKitAuth({
	adapter: PrismaAdapter(prismaClient),
	providers: [
		GitHub({
			clientId: GITHUB_ID,
			clientSecret: GITHUB_SECRET
		})
	],

	callbacks: {
		async session({ session, user }: any) {
			session.user = {
				id: user.id,
				name: user.name,
				email: user.email,
				image: user.image
			};
			return session;
		}
	}
});
