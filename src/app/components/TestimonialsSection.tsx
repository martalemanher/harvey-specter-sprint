"use client";

import { useEffect, useRef, useState } from "react";
import type { Dictionary } from "@/app/[lang]/dictionaries";

type Props = { dict: Dictionary["testimonials"] };

const SCROLL_PARALLAX = 100;

const CARD_LAYOUT = [
  { logo: "/logo-2.png", logoW: 143, logoH: 19, desktop: { left: 102,  top: 142, rotate: -6.85 }, mobileRotate: -3.5, depth: 0.025 },
  { logo: "/logo-1.png", logoW: 138, logoH: 19, desktop: { right: 411, top: 272, rotate:  2.9  }, mobileRotate:  2,   depth: 0.045 },
  { logo: "/logo-3.png", logoW: 109, logoH: 31, desktop: { left: 305,  top: 553, rotate:  2.23 }, mobileRotate: -2,   depth: 0.035 },
  { logo: "/logo-4.png", logoW: 81,  logoH: 36, desktop: { right: 100, top: 546, rotate: -4.15 }, mobileRotate:  3,   depth: 0.055 },
];

function TestimonialCard({
  logo, logoW, logoH, quote, name, width,
}: {
  logo: string; logoW: number; logoH: number;
  quote: string; name: string; width: number;
}) {
  return (
    <div
      className="bg-[#f1f1f1] border border-[#ddd] rounded-[4px] p-6 flex flex-col gap-4"
      style={{ width }}
    >
      <img alt="" src={logo} className="block" style={{ width: logoW, height: logoH }} />
      <p className="font-sans font-normal leading-[1.3] text-[#1f1f1f] text-[18px] tracking-[-0.72px]">
        {quote}
      </p>
      <p className="font-sans font-black leading-[1.1] text-[16px] text-black tracking-[-0.64px] uppercase whitespace-nowrap">
        {name}
      </p>
    </div>
  );
}

function MobileSlider({ dict }: { dict: Props['dict'] }) {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  function onTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }
  function onTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 40) {
      if (delta > 0) setIndex((i) => Math.min(i + 1, CARD_LAYOUT.length - 1));
      else setIndex((i) => Math.max(i - 1, 0));
    }
    touchStartX.current = null;
  }

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="w-full overflow-hidden py-10" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {CARD_LAYOUT.map((layout, i) => (
            <div
              key={i}
              className="shrink-0 w-full flex justify-center"
              style={{ transform: `rotate(${layout.mobileRotate}deg)` }}
            >
              <TestimonialCard
                {...layout}
                quote={dict.cards[i]?.quote ?? ''}
                name={dict.cards[i]?.name ?? ''}
                width={260}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-2">
        {CARD_LAYOUT.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to testimonial ${i + 1}`}
            className={`w-2 h-2 rounded-full transition-colors ${i === index ? "bg-black" : "bg-[#ccc]"}`}
          />
        ))}
      </div>
    </div>
  );
}

function DesktopParallax({ dict }: { dict: Props['dict'] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [scrollRatio, setScrollRatio] = useState(1);

  useEffect(() => {
    let rafId: number;
    function onScroll() {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const el = containerRef.current;
        if (!el) return;
        const { top } = el.getBoundingClientRect();
        const vh = window.innerHeight;
        const progress = Math.max(0, Math.min(1, (vh - top) / vh));
        setScrollRatio(1 - progress);
      });
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(rafId); };
  }, []);

  function handleMouseMove(e: React.MouseEvent) {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMouse({
      x: e.clientX - (rect.left + rect.width / 2),
      y: e.clientY - (rect.top + rect.height / 2),
    });
  }

  return (
    <div
      ref={containerRef}
      className="hidden lg:block relative overflow-hidden min-h-[900px] px-8 py-[120px]"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMouse({ x: 0, y: 0 })}
    >
      <p className="font-sans font-medium text-[198px] tracking-[-13.86px] capitalize text-center text-black leading-[1.1]">
        {dict.title}
      </p>
      {CARD_LAYOUT.map((layout, i) => {
        const { top, rotate, ...posX } = layout.desktop;
        const scrollTy = scrollRatio * SCROLL_PARALLAX;
        const mouseTx = mouse.x * layout.depth;
        const mouseTy = mouse.y * layout.depth;
        return (
          <div
            key={i}
            className="absolute"
            style={{
              ...posX,
              top,
              transform: `translateY(${scrollTy}px)`,
              transition: "transform 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              willChange: "transform",
            }}
          >
            <div
              style={{
                transform: `translate(${mouseTx}px, ${mouseTy}px) rotate(${rotate}deg)`,
                transition: "transform 0.15s ease-out",
              }}
            >
              <TestimonialCard
                {...layout}
                quote={dict.cards[i]?.quote ?? ''}
                name={dict.cards[i]?.name ?? ''}
                width={353}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function TestimonialsSection({ dict }: Props) {
  return (
    <section data-nav-theme="light" className="bg-[#fafafa]">
      <div className="lg:hidden px-4 py-16 flex flex-col gap-8">
        <p
          className="font-sans font-medium text-[64px] tracking-[-4.48px] capitalize text-center text-black"
          style={{ lineHeight: 0.8 }}
        >
          {dict.title}
        </p>
        <MobileSlider dict={dict} />
      </div>
      <DesktopParallax dict={dict} />
    </section>
  );
}
