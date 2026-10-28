import tailwindcss from '@tailwindcss/vite';
import adapter from '@sveltejs/adapter-bun';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig(({ command }) => {
	// Only applied when building: adapter-bun assumes https at runtime, which is
	// wrong when serving plain HTTP directly (for example http://localhost:3000).
	const origin = command === 'build' ? process.env.ORIGIN : undefined;

	return {
		plugins: [
			tailwindcss(),
			sveltekit({
				compilerOptions: {
					// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
					runes: ({ filename }) =>
						filename.split(/[/\\]/).includes('node_modules') ? undefined : true
				},
				paths: origin ? { origin } : undefined,
				adapter: adapter()
			})
		]
	};
});
