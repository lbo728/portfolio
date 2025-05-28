# 이병우 포트폴리오

이병우의 프론트엔드 개발자 포트폴리오 웹사이트입니다.

## 🚀 기술 스택

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel (권장)

## 📋 주요 기능

- **현대적인 디자인**: 조용준님의 포트폴리오 스타일을 참고한 깔끔하고 전문적인 디자인
- **반응형 레이아웃**: 모바일과 데스크톱 모든 환경에서 최적화된 경험
- **섹션별 구성**:
  - Hero Section: 메인 소개 및 개발자 정보
  - Skills: 기술 스택 및 도구
  - Experience: 경력 및 학력 정보
  - Projects: 주요 프로젝트 소개
  - Contact: 연락처 정보

## 🛠️ 개발 환경 설정

### 필수 요구사항

- Node.js 18.0 이상
- npm 또는 yarn

### 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build

# 프로덕션 서버 실행
npm start
```

개발 서버는 [http://localhost:3000](http://localhost:3000)에서 실행됩니다.

## 📁 프로젝트 구조

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
└── components/
    ├── Navigation.tsx
    ├── HeroSection.tsx
    ├── SkillsSection.tsx
    ├── ExperienceSection.tsx
    └── ProjectsSection.tsx
```

## 🎨 커스터마이징

### 개인 정보 수정

1. `src/components/HeroSection.tsx`: 메인 타이틀 및 소개 문구
2. `src/components/SkillsSection.tsx`: 기술 스택 정보
3. `src/components/ExperienceSection.tsx`: 경력 및 학력 정보
4. `src/components/ProjectsSection.tsx`: 프로젝트 정보 및 연락처

### 스타일 수정

- `src/app/globals.css`: 전역 스타일
- 각 컴포넌트의 Tailwind CSS 클래스 수정

## 📱 반응형 브레이크포인트

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: ≥ 1024px

## 🎯 디자인 참고

이 포트폴리오는 [조용준님의 포트폴리오](https://yongjun.site/)를 참고하여 제작되었습니다.

## 🚀 배포

### Vercel (권장)

1. GitHub에 프로젝트 푸시
2. [Vercel](https://vercel.com)에서 프로젝트 import
3. 자동 배포 완료

### 기타 플랫폼

- Netlify
- GitHub Pages
- AWS Amplify

## 📄 라이선스

MIT License

## 📞 문의

프로젝트에 대한 문의사항이 있으시면 언제든 연락주세요.

- Email: byungwoo@example.com
- GitHub: [github.com/byungwoo](https://github.com/byungwoo)
- LinkedIn: [linkedin.com/in/byungwoo](https://linkedin.com/in/byungwoo)
