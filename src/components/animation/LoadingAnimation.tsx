"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

export default function LoadingAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(TextPlugin);

    const tl = gsap.timeline({
      onComplete: () => {
        // 로딩 완료 후 메인 콘텐츠로 전환
        gsap.to(containerRef.current, {
          autoAlpha: 0,
          duration: 0.5,
          delay: 0.5,
          onComplete: () => {
            // 로딩 애니메이션 완료 후 상태 업데이트 이벤트
            window.dispatchEvent(new Event("loadingComplete"));
          },
        });
      },
    });

    // 초기 페이드인
    tl.from(containerRef.current, {
      autoAlpha: 0,
      duration: 0.5,
    });

    // 텍스트 타이핑 효과
    tl.to(textRef.current, {
      duration: 2,
      text: "LOADING FECONF 2025",
      ease: "none",
    });

    // 상태 텍스트 애니메이션
    tl.to(
      statusRef.current,
      {
        duration: 3,
        text: "INITIALIZING 3D ENVIRONMENT // LOADING ASSETS // PREPARING INTERFACE",
        ease: "none",
      },
      "-=0.5"
    );

    // 진행률 표시 애니메이션
    tl.from(
      ".progress-bar",
      {
        width: 0,
        duration: 3,
        ease: "power1.inOut",
      },
      "-=2.5"
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50 text-green-400 font-mono"
    >
      <div className="container max-w-4xl p-8">
        <div ref={textRef} className="text-3xl md:text-5xl mb-4"></div>
        <div ref={statusRef} className="text-sm md:text-base opacity-70 mb-8"></div>

        <div className="w-full h-1 bg-gray-800 overflow-hidden">
          <div className="progress-bar h-full bg-green-400"></div>
        </div>

        <div className="mt-8 text-xs opacity-50">© FECONF 2025 // SYSTEM VERSION 2.5.0</div>
      </div>
    </div>
  );
}
