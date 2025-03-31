import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import alpinejs from '@astrojs/alpinejs';
import sitemap from "@astrojs/sitemap";
import robots from "astro-robots";
import mdx from "@astrojs/mdx";
import icon from "astro-icon";
import yaml from '@rollup/plugin-yaml';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
	integrations: [
		tailwind({
			configFile: './tailwind.haval.js'
		}),
		sitemap(),
		robots({
			policy: [
				{
					userAgent: "Yandex",
					allow: ["/"],
					disallow: ["/?*"],
					cleanParam: "calltouch_tm"
				},
				{
					userAgent: ["*"],
					allow: ["/"],
					disallow: ["/?*"],
				},
			],
		}),
		alpinejs(),
		mdx(),
		icon(),
		react(),
	],
	redirects: {
		'/new': {
			status: 301,
			destination:'/cars/'
		},
		'/new/haval': {
			status: 301,
			destination:'/cars/'
		},
		'/new/haval/jolion': {
			status: 301,
			destination:'/cars/'
		},
		'/new/haval/f7': {
			status: 301,
			destination:'/cars/'
		},
		'/new/haval/dargo': {
			status: 301,
			destination:'/cars/'
		},
		'/new/haval/m6': {
			status: 301,
			destination:'/cars/'
		},
		'/new/haval/h9-II': {
			status: 301,
			destination:'/cars/'
		},
		'/new/haval/h3': {
			status: 301,
			destination:'/cars/'
		},
		'/new/haval/h5-1': {
			status: 301,
			destination:'/cars/'
		},
		'/new/haval/f7-II': {
			status: 301,
			destination:'/cars/'
		},
		'/new/haval/haval-h5-II': {
			status: 301,
			destination:'/cars/'
		},
		'/new/haval/dargo-x': {
			status: 301,
			destination:'/cars/'
		},
		'/new/haval/great-wall': {
			status: 301,
			destination:'/cars/'
		}
	},
	vite: {
		plugins: [yaml()],
		css: {
			preprocessorOptions: {
			  	scss: {
					silenceDeprecations: ['legacy-js-api'],
				},
			},
		},
	},
	site: 'https://haval-ulyanovsk.ru',
	base: "/"
});
