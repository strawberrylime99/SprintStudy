import adapter from '@sveltejs/adapter-auto';
import { mdsvex } from 'mdsvex';
import path from 'node:path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.md'],
  preprocess: [
    mdsvex({
      extensions: ['.md'],
      layout: {
        blog: path.resolve('./src/routes/blog/_postLayout.svelte')
      }
    })
  ],
  kit: {
    adapter: adapter(),
    alias: {
      $lib: path.resolve('./src/lib')
    }
  }
};

export default config;