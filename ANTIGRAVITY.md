# Antigravity AI 협업 및 작업 가이드

본 문서는 이 Astro 블로그 프로젝트에서 Antigravity AI와 함께 디자인 개선 및 웹사이트 확장 작업을 진행할 때 지켜야 할 규칙과 가이드를 정의합니다.

---

## 1. 프로젝트 스택 및 기술 규칙

- **프레임워크**: Astro v4.x (React 통합 사용 중)
- **스타일링**: Tailwind CSS v3
  - 프로젝트 내에 이미 Tailwind가 도입되어 있으므로 기본 Vanilla CSS보다는 Tailwind 스타일링 클래스를 우선적으로 사용하되, 고도로 일관되고 프리미엄 디자인 감각을 갖춘 유틸리티 클래스를 조합합니다.
- **콘텐츠 관리**: Astro Content Collections (`src/content/config.ts` 정의)
- **TypeScript 규칙**:
  - `tsconfig.json`에서 엄격한 모드(`astro/tsconfigs/strict`)가 적용되어 있습니다.
  - 빌드 전 항상 `pnpm astro sync`를 실행해 `.astro/types.d.ts` 정의가 올바르게 업데이트되었는지 확인합니다.
  - `.astro`가 컴파일될 때 자동으로 타입이 동기화되므로, Types 관련 빌드 에러가 나면 `astro sync`를 통해 캐시를 재갱신하는 단계를 수행합니다.

---

## 2. 디자인 원칙 및 UX 개선 방향

Astro 블로그가 프리미엄하고 생동감 넘치게 느껴지도록 다음 원칙을 적용합니다.

- **Harmonious Color Palette**: 원색(예: 완전한 빨강, 초록, 파랑)의 노출을 줄이고, 정제된 HSL/RGB 테마 색상과 다크 모드에 최적화된 Sleek Gray 톤을 사용합니다.
- **Typography & Font**: 브라우저 기본 폰트를 피하고 가독성이 뛰어난 시스템 폰트 스택이나 구글 폰트(`Inter`, `Roboto`, `Outfit` 등) 조합을 권장합니다.
- **Micro-animations**: 버튼 호버 시의 미세한 스케일 조절, 링크 아래 언더라인의 트랜지션, 리스트 렌더링 시의 부드러운 Fade-in 모션을 적극 활용합니다.
- **Semantic HTML & Clean Markup**: 스크린 리더와 SEO 최적화를 위해 시맨틱 태그(`<article>`, `<header>`, `<main>` 등)를 올바르게 분할해 설계합니다.

---

## 3. 신규 기능 및 디자인 작업 프로세스

1. **디자인/기능 제안**:
   - UI 레이아웃 변경이나 새로운 페이지가 필요할 경우, `generate_image` 툴을 사용하여 미리 프로토타입 시안을 도출하고 검토합니다.
2. **구현 계획**:
   - 변경 사항이 큰 경우 반드시 `implementation_plan.md` 파일을 작성하고 사용자의 승인을 받습니다.
3. **체크리스트 관리**:
   - 진행 중인 작업은 `task.md`를 통해 Task 단위로 진행률을 표기합니다.
4. **검증 (Verify)**:
   - 수정 완료 후에는 로컬 빌드(`pnpm build`) 및 린트(`pnpm astro check`)에 통과하는지 필히 확인합니다.
