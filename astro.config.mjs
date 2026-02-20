// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://pankgeorg.github.io',
	base: '/naval-performance-engineering',
	output: 'static',
	integrations: [
		starlight({
			title: 'Naval Performance Engineering',
			description: 'Course notes for ΠΜΣ-ΑΔΕΠ — Ship Performance Analysis and Management, NTUA',
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/pankgeorg/naval-performance-engineering',
				},
			],
			sidebar: [
				{
					label: 'Notes',
					autogenerate: { directory: 'notes' },
				},
			],
		}),
	],
});
