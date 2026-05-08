"use client";

import { useEffect, useRef, useState } from "react";
import type { Dictionary } from "@/app/[lang]/dictionaries";

type Props = { dict: Dictionary["about"] };

const IMG_PHOTO = "/about-photo.png";

function CornerBracket() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M2 14 L2 2 L14 2"
        stroke="#1f1f1f"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function AboutSection({ dict }: Props) {
  const photoRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = photoRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section data-nav-theme="light" className="bg-[#fafafa] px-4 py-12 lg:px-8 lg:py-20">

      <style>{`
        @keyframes curtain-right {
          from { transform: translateX(0%); }
          to   { transform: translateX(100%); }
        }
        .curtain-reveal {
          animation: curtain-right 1s cubic-bezier(0.77, 0, 0.175, 1) forwards;
        }
      `}</style>

      <div className="lg:hidden flex flex-col gap-5 mb-5">
        <p className="font-[family-name:var(--secondary-family,'Geist_Mono:Regular',sans-serif)] font-normal leading-[1.1] text-[#1f1f1f] text-sm uppercase">
          002
        </p>
        <p className="font-[family-name:var(--secondary-family,'Geist_Mono:Regular',sans-serif)] font-normal leading-[1.1] text-[#1f1f1f] text-sm uppercase">
          {dict.tag}
        </p>
      </div>

      <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">

        <p className="hidden lg:block font-[family-name:var(--secondary-family,'Geist_Mono:Regular',sans-serif)] font-normal leading-[1.1] text-[#1f1f1f] text-sm uppercase whitespace-nowrap shrink-0">
          {dict.tag}
        </p>

        <div className="flex flex-col gap-5 w-full lg:flex-row lg:items-end lg:gap-8 lg:flex-1">

          <div className="flex gap-3 items-center lg:flex-1">
            <div className="flex flex-col justify-between self-stretch w-6 shrink-0">
              <CornerBracket />
              <div className="-rotate-90">
                <CornerBracket />
              </div>
            </div>

            <p className="flex-1 font-sans font-normal leading-[1.3] text-[#1f1f1f] text-sm tracking-[-0.56px] py-3">
              {dict.body}
            </p>

            <div className="flex flex-col justify-between self-stretch w-6 shrink-0 items-end">
              <div className="rotate-90">
                <CornerBracket />
              </div>
              <div className="rotate-180">
                <CornerBracket />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 items-start shrink-0">
            <p className="hidden lg:block font-[family-name:var(--secondary-family,'Geist_Mono:Regular',sans-serif)] font-normal leading-[1.1] text-[#1f1f1f] text-sm uppercase">
              002
            </p>
            <div
              ref={photoRef}
              className="relative w-full overflow-hidden aspect-[436/614] lg:w-[436px] lg:h-[614px] lg:aspect-auto"
            >
              <img
                alt={dict.imageAlt}
                className="absolute h-[101.39%] left-[-0.71%] max-w-none top-[-0.69%] w-[101.42%]"
                src={IMG_PHOTO}
              />
              <div
                className={`absolute inset-0 z-10 bg-black${revealed ? " curtain-reveal" : ""}`}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
