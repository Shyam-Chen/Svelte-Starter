import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { presetUno, presetIcons, transformerDirectives } from 'unocss';
import unocss from 'unocss/vite';

export default defineConfig({
  plugins: [
    unocss({
      presets: [presetUno(), presetIcons()],
      transformers: [transformerDirectives()],
    }),
    sveltekit(),
  ],
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}'],
  },
});
