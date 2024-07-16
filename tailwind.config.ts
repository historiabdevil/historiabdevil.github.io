import type {Config} from "tailwindcss";
import defaultTheme from 'tailwindcss/defaultTheme';
import typography from '@tailwindcss/typography'

export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                white: '#f8f9fa'
            },
            fontFamily: {
                body: ['Manrope', ...defaultTheme.fontFamily.sans]
            },
            gridTemplateColumns: {
                list: 'repeat(auto-fill, minmax(400px, max-content))'
            }
        }
    },
    plugins: [typography]
} satisfies Config;

