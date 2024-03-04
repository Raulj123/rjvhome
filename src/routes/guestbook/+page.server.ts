import type { PageServerLoad, Actions } from './$types';
import prismaClient from '$lib/db.server';
import { fail } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }) => {
	return {
		signs: await prismaClient.message.findMany()
	};
};

export const actions: Actions = {
	sign: async ({ request }) => {
		const { message, name } = Object.fromEntries(await request.formData()) as {
			message: string;
			name: string;
		};
		if (message.length > 50) {
			return fail(400, { message: 'msg too long' });
		}
		try {
			await prismaClient.message.create({
				data: {
					content: message,
					submittedAt: new Date(),
					userName: name
				}
			});

			// You can return a success response or perform additional actions as needed
			return { success: true, message: 'Message signed successfully' };
		} catch (error) {
			// Handle errors, return an appropriate response
			console.error(error);
			return fail(500, { message: 'Failed to sign the message' });
		}
	}
};
