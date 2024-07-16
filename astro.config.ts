import {defineConfig} from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import {remarkReadingTime} from "./src/utils/readTime.ts";

// https://astro.build/config
export default defineConfig({
    site: 'https://historiabdevil.github.io/',
    vite: {
        optimizeDeps: {
            noDiscovery: true,
            include: [] // or simply leave it undefined
        }
    },
    markdown: {
        remarkPlugins: [remarkReadingTime],
        shikiConfig: {
            theme: 'material-theme-palenight',
            wrap: true
        }
    },
    integrations: [mdx({
        syntaxHighlight: 'shiki',
        shikiConfig: {
            experimentalThemes: {
                light: 'vitesse-light',
                dark: 'material-theme-palenight',
            },
            wrap: true
        },
    }), sitemap(), tailwind(), react()]
});