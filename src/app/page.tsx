// app/page.tsx
"use client";

import dynamic from "next/dynamic";
import GsapProvider from "@/components/animation/GsapProvider";

// 클라이언트 컴포넌트 동적 임포트
const LoadingAnimation = dynamic(() => import("@/components/animation/LoadingAnimation"), { ssr: false });

const HeroSection = dynamic(() => import("@/components/sections/HeroSection"), { ssr: false });

export default function Home() {
  return (
    <GsapProvider>
      <LoadingAnimation />
      <main className="bg-black text-white min-h-screen">
        <HeroSection />
        {/* 다른 섹션들... */}
      </main>
    </GsapProvider>
  );
}
