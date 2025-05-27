"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ScrollAnimationProps {
  children: React.ReactNode;
  animation: "fadeIn" | "slideUp" | "scaleUp";
  delay?: number;
  duration?: number;
}

export default function ScrollAnimation({ children, animation, delay = 0, duration = 1 }: ScrollAnimationProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let animConfig = {};

    // 애니메이션 타입에 따른 설정
    switch (animation) {
      case "fadeIn":
        animConfig = {
          opacity: 0,
          y: 20,
        };
        break;
      case "slideUp":
        animConfig = {
          opacity: 0,
          y: 50,
        };
        break;
      case "scaleUp":
        animConfig = {
          opacity: 0,
          scale: 0.95,
        };
        break;
    }

    // 초기 상태 설정
    gsap.set(elementRef.current, animConfig);

    // 스크롤 트리거 애니메이션
    const anim = gsap.to(elementRef.current, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration,
      delay,
      ease: "power2.out",
      scrollTrigger: {
        trigger: elementRef.current,
        start: "top bottom-=100",
        toggleActions: "play none none none",
      },
    });

    return () => {
      if (anim.scrollTrigger) {
        anim.scrollTrigger.kill();
      }
      anim.kill();
    };
  }, [animation, delay, duration]);

  return <div ref={elementRef}>{children}</div>;
}
