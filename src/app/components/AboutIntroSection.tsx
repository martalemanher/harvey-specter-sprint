"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Dictionary } from "@/app/[lang]/dictionaries";

type Props = { dict: Dictionary["aboutIntro"] };

export default function AboutIntroSection({ dict }: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);
  const line3Ref = useRef<HTMLDivElement>(null);
  const line4Ref = useRef<HTMLDivElement>(null);
  const line5Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lines = [
      line1Ref.current,
      line2Ref.current,
      line3Ref.current,
      line4Ref.current,
      line5Ref.current,
    ].filter(Boolean);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 55%",
        scrub: 1.5,
      },
    });

    tl.fromTo(
      lines,
      { color: "#d4d4d4" },
      { color: "#0a0a0a", stagger: 0.25, ease: "none" }
    );

    return () => {
      tl.scrollTrigger?.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      data-nav-theme="light"
      className="bg-[#fafafa] flex flex-col items-center justify-center overflow-hidden px-4 py-12 lg:px-8 lg:py-[120px]"
    >
      <div className="flex flex-col gap-6 items-start w-full">

        <div className="flex flex-col gap-3 items-end w-full">
          <p className="font-[family-name:var(--secondary-family,'Geist_Mono:Regular',sans-serif)] font-normal leading-[1.1] text-[#1f1f1f] text-sm text-right uppercase w-full">
            {dict.yearsTag}
          </p>
          <div className="h-px w-full bg-black/20" />
        </div>

        <div className="flex flex-col gap-2 w-full items-center lg:items-start lg:gap-0">

          {/* 001 — mobile only */}
          <p className="font-[family-name:var(--secondary-family,'Geist_Mono:Regular',sans-serif)] font-normal leading-[1.1] text-[#1f1f1f] text-sm lg:hidden">
            001
          </p>

          {/* Line 1 */}
          <div className="flex items-start gap-3 justify-center w-full lg:justify-start">
            <div
              ref={line1Ref}
              className="font-sans font-light leading-[0] text-[32px] tracking-[-0.08em] uppercase lg:text-[6.67vw]"
            >
              <p className="leading-[0.84] whitespace-pre">{dict.titleLine1}</p>
            </div>
            <p className="hidden lg:block font-[family-name:var(--secondary-family,'Geist_Mono:Regular',sans-serif)] font-normal leading-[1.1] text-[#1f1f1f] text-sm pt-1">
              001
            </p>
          </div>

          {/* Line 2 */}
          <div className="w-full flex justify-center lg:justify-start lg:pl-[14.86vw]">
            <div
              ref={line2Ref}
              className="font-sans font-light leading-[0] text-[32px] tracking-[-0.08em] uppercase whitespace-nowrap lg:text-[6.67vw]"
            >
              <p className="leading-[0.84]">{dict.titleLine2}</p>
            </div>
          </div>

          {/* Line 3: Born & raised */}
          <div className="w-full flex justify-center lg:justify-start lg:pl-[42.36vw]">
            <div
              ref={line3Ref}
              className="font-sans font-light leading-[0] text-[32px] tracking-[-0.08em] uppercase whitespace-nowrap lg:text-[6.67vw]"
            >
              <p className="leading-[0.84]">
                <span>{dict.line3Pre}</span>
                <span
                  className="font-[family-name:var(--font-playfair)] font-normal italic leading-[0.84]"
                  style={{ fontVariationSettings: "'opsz' 12, 'wdth' 100" }}
                >{dict.line3Connector}</span>
                <span>{dict.line3Post}</span>
              </p>
            </div>
          </div>

          {/* Line 4 */}
          <div className="w-full flex justify-center lg:justify-start">
            <div
              ref={line4Ref}
              className="font-sans font-light leading-[0] text-[32px] tracking-[-0.08em] uppercase whitespace-nowrap lg:text-[6.67vw]"
            >
              <p className="leading-[0.84]">{dict.line4}</p>
            </div>
          </div>

          {/* Line 5 + freelancer tag */}
          <div className="relative flex flex-col gap-3 items-center w-full uppercase lg:items-start lg:pl-[42.08vw]">
            <div
              ref={line5Ref}
              className="font-sans font-light leading-[0] text-[32px] tracking-[-0.08em] uppercase whitespace-nowrap lg:text-[6.67vw]"
            >
              <p className="leading-[0.84]">{dict.line5}</p>
            </div>
            <p className="font-[family-name:var(--secondary-family,'Geist_Mono:Regular',sans-serif)] font-normal leading-[1.1] text-[#1f1f1f] text-sm whitespace-nowrap lg:absolute lg:left-[75vw] lg:top-[26px]">
              {dict.freelancerTag}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
