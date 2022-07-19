import adapter from '@sveltejs/adapter-static'
import preprocess from 'svelte-preprocess'
import Icons from 'unplugin-icons/vite'
import basePath from './src/lib/basePath.js'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
  	postcss: true,
  }),
	kit: {
		adapter: adapter({
			pages: 'build',
      assets: 'build',
      precompress: false,
		}),
		alias: {
			$assets: 'src/assets',
			$components: 'src/components',
		},
		prerender: {
			default: true,
		},
		trailingSlash: 'always',
		vite: {
      plugins: [
        Icons({
          compiler: 'svelte',
					autoInstall: true,
        }),
      ],
    },
	},
}

if (basePath && basePath !== '') {
	config.kit.paths = { base: basePath }
}

export default config
