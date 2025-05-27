"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollAnimation from "../animation/ScrollAnimation";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const dateRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 로딩 애니메이션이 완료된 후 실행
    const handleLoadingComplete = () => {
      const tl = gsap.timeline();

      // 히어로 섹션 애니메이션
      tl.to(sectionRef.current, {
        autoAlpha: 1,
        duration: 0.5,
      });

      // 타이틀 애니메이션
      tl.from(
        titleRef.current,
        {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.2"
      );

      // 날짜 애니메이션
      tl.from(
        dateRef.current,
        {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.5"
      );
    };

    window.addEventListener("loadingComplete", handleLoadingComplete);

    // 초기 상태 설정
    gsap.set(sectionRef.current, { autoAlpha: 0 });

    return () => {
      window.removeEventListener("loadingComplete", handleLoadingComplete);
    };
  }, []);

  return (
    <section ref={sectionRef} className="h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <div className="container px-4 max-w-6xl">
        <h1 ref={titleRef} className="text-5xl md:text-8xl font-bold mb-6">
          FECONF 2025
        </h1>

        <div ref={dateRef} className="text-xl md:text-2xl mb-12">
          Saturday, August 23, Gwanggaeto Building, Sejong University
        </div>

        <ScrollAnimation animation="fadeIn">
          <button className="bg-green-500 text-black px-8 py-4 rounded-md text-lg font-bold transition hover:bg-green-400">
            Register Now
          </button>
        </ScrollAnimation>
      </div>
    </section>
  );
}
