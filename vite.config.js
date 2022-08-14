import { sveltekit } from '@sveltejs/kit/vite'
import Icons from 'unplugin-icons/vite'

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		Icons({
      compiler: 'svelte',
      autoInstall: true,
    }),
		sveltekit(),
	],
}

export default config