"use client";

import dynamic from "next/dynamic";
import GsapProvider from "./animation/GsapProvider";

const LoadingAnimation = dynamic(() => import("./animation/LoadingAnimation"), {
  ssr: false,
});

const HeroSection = dynamic(() => import("./sections/HeroSection"), {
  ssr: false,
});

export default function ClientWrapper() {
  return (
    <GsapProvider>
      <LoadingAnimation />
      <HeroSection />
    </GsapProvider>
  );
}
