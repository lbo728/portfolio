"use client";

import dynamic from "next/dynamic";
import GsapProvider from "./animation/GsapProvider";

// 클라이언트 사이드에서만 로드되는 컴포넌트들
const LoadingAnimation = dynamic(() => import("./animation/LoadingAnimation"), { ssr: false });

const HeroSection = dynamic(() => import("./sections/HeroSection"), { ssr: false });

export default function ClientWrapper() {
  return (
    <GsapProvider>
      <LoadingAnimation />
      <HeroSection />
      {/* 다른 섹션들... */}
    </GsapProvider>
  );
}
