import type {Config} from "tailwindcss";
import defaultTheme from 'tailwindcss/defaultTheme';
import typography from '@tailwindcss/typography'

export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    darkMode: 'class', // 다크모드 활성화
    theme: {
        extend: {
            colors: {
                white: '#ffffff',
                slate: {
                    50: '#f8f9fa',   // 벨로그 리스트 배경
                    100: '#f1f3f5',  // 벨로그 테두리선
                    900: '#212529',  // 벨로그 제목 컬러
                },
                accent: {
                    DEFAULT: '#12b886', // 벨로그 시그니처 틸 그린
                    light: '#20c997',
                }
            },
            fontFamily: {
                body: ['Pretendard', '-apple-system', 'BlinkMacSystemFont', 'system-ui', ...defaultTheme.fontFamily.sans],
                mono: ['ui-monospace', 'monospace']
            },
            gridTemplateColumns: {
                list: 'repeat(auto-fill, minmax(280px, 1fr))' // 벨로그 글 목록 카드형 레이아웃
            }
        }
    },
    plugins: [typography]
} satisfies Config;

