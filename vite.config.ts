import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { presetUno, presetIcons, transformerDirectives, extractorSvelte } from 'unocss';
import unocss from 'unocss/vite';

export default defineConfig({
  plugins: [
    unocss({
      presets: [presetUno(), presetIcons()],
      transformers: [transformerDirectives()],
      extractors: [extractorSvelte],
    }),
    sveltekit(),
  ],
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}'],
  },
});
