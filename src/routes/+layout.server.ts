import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async (event) => {
	const session = await event.locals.getSession();
	const url = event.url.pathname;
	return {
		session,
		url
	};
};
