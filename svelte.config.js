import adapter from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';
import dotenv from 'dotenv';

dotenv.config();
/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),
	kit: {
		adapter: adapter()
	}
};

export default config;
