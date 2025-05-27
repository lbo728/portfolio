// components/animation/GsapProvider.tsx
"use client";

import { ReactNode, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

interface GsapProviderProps {
  children: ReactNode;
}

export default function GsapProvider({ children }: GsapProviderProps) {
  useEffect(() => {
    // GSAP 플러그인 등록
    gsap.registerPlugin(ScrollTrigger, TextPlugin);

    // 스크롤 트리거 기본 설정
    ScrollTrigger.config({
      limitCallbacks: true,
      ignoreMobileResize: true,
    });

    return () => {
      // 컴포넌트 언마운트 시 ScrollTrigger 정리
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return <>{children}</>;
}
