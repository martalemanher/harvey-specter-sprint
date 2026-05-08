"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Dictionary } from "@/app/[lang]/dictionaries";

type Props = { dict: Dictionary["hero"] };

const IMG_HERO = "/hero-bg.png";

export default function HeroSection({ dict }: Props) {
  const sectionEl = useRef<HTMLElement>(null);
  const harveyEl = useRef<HTMLSpanElement>(null);
  const specterEl = useRef<HTMLSpanElement>(null);
  const helloEl = useRef<HTMLParagraphElement>(null);
  const bgDesktopEl = useRef<HTMLDivElement>(null);
  const bgMobileEl = useRef<HTMLImageElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const st = ScrollTrigger.create({
      trigger: sectionEl.current,
      start: "top top",
      end: "bottom top",
      scrub: 1.5,
      onUpdate(self) {
        const p = self.progress;
        if (harveyEl.current) gsap.set(harveyEl.current, { x: `${-38 * p}vw` });
        if (helloEl.current) gsap.set(helloEl.current, { x: `${-38 * p}vw` });
        if (specterEl.current) gsap.set(specterEl.current, { x: `${38 * p}vw` });
        if (bgDesktopEl.current) gsap.set(bgDesktopEl.current, { scale: 1 + 0.22 * p });
        if (bgMobileEl.current) gsap.set(bgMobileEl.current, { scale: 1.15 + 0.23 * p });
      },
    });

    return () => st.kill();
  }, []);

  const onBlackBtnEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget;
    gsap.to(btn, { backgroundColor: "#fff", duration: 0.3, ease: "power2.out" });
    gsap.to(btn.querySelector<HTMLSpanElement>("span"), { color: "#000", duration: 0.3 });
  };
  const onBlackBtnLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget;
    gsap.to(btn, { backgroundColor: "#000", duration: 0.3, ease: "power2.out" });
    gsap.to(btn.querySelector<HTMLSpanElement>("span"), { color: "#fff", duration: 0.3 });
  };

  return (
    <section
      ref={sectionEl}
      data-nav-theme="dark"
      className="relative h-screen overflow-hidden flex flex-col px-4 pb-6 justify-between lg:px-8 lg:pb-0 lg:gap-[240px] lg:justify-start"
    >
      {/* Background: mobile */}
      <div className="lg:hidden absolute inset-0 right-[-39.47%] pointer-events-none overflow-hidden">
        <img
          ref={bgMobileEl}
          alt=""
          className="absolute inset-0 max-w-none object-cover object-top size-full scale-[1.15] origin-top"
          src={IMG_HERO}
        />
      </div>

      {/* Background: desktop */}
      <div
        ref={bgDesktopEl}
        className="hidden lg:block -translate-y-1/2 absolute aspect-[2291/1346] left-[-34.79%] right-[-34.79%] top-[calc(50%+88.84px)] pointer-events-none"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-bottom size-full"
          src={IMG_HERO}
        />
      </div>

      {/* Blur overlay */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[349px] backdrop-blur-[10px] bg-[rgba(217,217,217,0.01)] pointer-events-none"
        style={{
          WebkitMaskImage: "linear-gradient(to bottom, transparent, black 55%)",
          maskImage: "linear-gradient(to bottom, transparent, black 55%)",
        }}
      />

      <div className="shrink-0 h-[72px] lg:h-[84px]" />

      <div className="flex flex-col gap-6 items-center relative shrink-0 w-full lg:h-auto lg:justify-start">

        <div className="flex flex-col items-center w-full lg:items-start lg:pb-[15px]">
          <p
            ref={helloEl}
            className="font-[family-name:var(--secondary-family,'Geist_Mono:Regular',sans-serif)] font-normal leading-[1.1] mix-blend-overlay text-sm text-white uppercase whitespace-nowrap lg:px-[18px] lg:mb-[-15px]"
          >
            {dict.greeting}
          </p>
          <div className="capitalize font-sans font-medium mix-blend-overlay leading-[0] text-white w-full text-[120px] tracking-[-8.4px] lg:text-[15vw] lg:tracking-[-0.07em] lg:mb-[-15px]">
            <p className="leading-[0.8] lg:leading-[1.1] flex flex-col items-center lg:flex-row lg:justify-between lg:items-baseline">
              <span ref={harveyEl} className="inline-block">{dict.firstName}</span>
              <span ref={specterEl} className="inline-block">{dict.lastName}</span>
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center w-full lg:items-end lg:justify-center">
          <div className="flex flex-col gap-[17px] items-start w-[293px] lg:w-auto">
            <p className="font-sans font-bold italic leading-[0] text-[#1f1f1f] text-sm tracking-[-0.56px] uppercase w-[294px]">
              <span className="leading-[1.1]">{dict.descriptionPre}</span>
              <span className="font-sans font-normal leading-[1.1]">{dict.descriptionService}</span>
              <span className="leading-[1.1]">{dict.descriptionMid}</span>
              <span className="font-sans font-normal leading-[1.1]">{dict.descriptionAward}</span>
              <span className="leading-[1.1]">{dict.descriptionPost}</span>
            </p>
            <button
              onMouseEnter={onBlackBtnEnter}
              onMouseLeave={onBlackBtnLeave}
              className="bg-black flex items-center justify-center px-4 py-3 rounded-[24px] border border-black"
            >
              <span className="font-sans font-medium text-sm text-white tracking-[-0.56px] leading-none">
                {dict.cta}
              </span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
