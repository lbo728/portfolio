"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface SplitTextAnimationProps {
  text: string;
  className?: string;
  stagger?: number;
  duration?: number;
  trigger?: boolean;
}

export default function SplitTextAnimation({
  text,
  className = "",
  stagger = 0.05,
  duration = 1,
  trigger = true,
}: SplitTextAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // 텍스트를 문자 단위로 분리하고 각각 span으로 감싸기
    if (containerRef.current) {
      const chars = text.split("");
      containerRef.current.innerHTML = "";

      chars.forEach((char, index) => {
        const span = document.createElement("span");
        span.textContent = char;
        span.style.display = "inline-block";
        span.className = "char";
        span.style.opacity = "0";
        span.style.transform = "translateY(20px)";
        containerRef.current?.appendChild(span);
      });

      const charElements = containerRef.current.querySelectorAll(".char");

      let animation;

      if (trigger) {
        // 스크롤 트리거 애니메이션
        animation = gsap.to(charElements, {
          y: 0,
          opacity: 1,
          duration,
          stagger,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom-=100",
            toggleActions: "play none none none",
          },
        });
      } else {
        // 자동 실행 애니메이션
        animation = gsap.to(charElements, {
          y: 0,
          opacity: 1,
          duration,
          stagger,
          ease: "power3.out",
          delay: 0.5,
        });
      }

      return () => {
        if (animation.scrollTrigger) {
          animation.scrollTrigger.kill();
        }
        animation.kill();
      };
    }
  }, [text, stagger, duration, trigger]);

  return (
    <div ref={containerRef} className={className}>
      {text}
    </div>
  );
}
