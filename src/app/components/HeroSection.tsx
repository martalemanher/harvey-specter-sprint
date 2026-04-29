"use client";

import { useState } from "react";

const IMG_HERO_DESKTOP =
  "https://www.figma.com/api/mcp/asset/77e0d1da-533b-4b67-b100-6f657268ca62";
const IMG_HERO_MOBILE =
  "https://www.figma.com/api/mcp/asset/797a3fe2-3d19-431d-9f4a-e79a09ce5377";

const NAV_LINKS = ["About", "Services", "Projects", "News", "Contact"];

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* ── Mobile fullscreen nav ── */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black flex flex-col px-4 pt-6 pb-10">
          <div className="flex items-center justify-between mb-12 shrink-0">
            <span className="capitalize font-sans font-semibold text-base text-white tracking-[-0.64px] leading-none">
              H.Studio
            </span>
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <line x1="4" y1="4" x2="20" y2="20" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <line x1="20" y1="4" x2="4" y2="20" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col flex-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="capitalize font-sans font-light text-[clamp(40px,12vw,64px)] leading-none text-white tracking-[-0.04em] border-b border-white/10 py-5"
              >
                {link}
              </a>
            ))}
          </nav>
          <button className="mt-8 border border-white flex items-center justify-center self-start px-4 py-3 rounded-[24px]">
            <span className="font-sans font-medium text-sm text-white tracking-[-0.56px] leading-none">
              Let&apos;s talk
            </span>
          </button>
        </div>
      )}

      {/* ── Hero ── */}
      <section className="relative h-screen overflow-hidden flex flex-col px-4 pb-6 justify-between lg:px-8 lg:pb-0 lg:gap-[240px] lg:justify-start">

        {/* Background: mobile — inset-0 fills 100vh, right bleed keeps composition */}
        <div className="lg:hidden absolute inset-0 right-[-39.47%] pointer-events-none">
          <img
            alt=""
            className="absolute inset-0 max-w-none object-cover object-top size-full"
            src={IMG_HERO_MOBILE}
          />
        </div>

        {/* Background: desktop */}
        <div className="hidden lg:block -translate-y-1/2 absolute aspect-[2291/1346] left-[-34.79%] right-[-34.79%] top-[calc(50%+88.84px)] pointer-events-none">
          <img
            alt=""
            className="absolute inset-0 max-w-none object-bottom size-full"
            src={IMG_HERO_DESKTOP}
          />
        </div>

        {/* Blur overlay — bottom-anchored, fades upward */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[349px] backdrop-blur-[10px] bg-[rgba(217,217,217,0.01)] pointer-events-none"
          style={{
            WebkitMaskImage: "linear-gradient(to bottom, transparent, black 55%)",
            maskImage: "linear-gradient(to bottom, transparent, black 55%)",
          }}
        />

        {/* Navigation */}
        <nav className="relative z-10 shrink-0 flex items-center justify-between py-6 w-full">
          <span className="capitalize font-sans font-semibold text-base text-black tracking-[-0.64px] leading-none">
            H.Studio
          </span>

          {/* Desktop links */}
          <div className="hidden lg:flex capitalize font-sans font-semibold gap-14 items-center text-base text-black tracking-[-0.64px]">
            {NAV_LINKS.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="leading-none">
                {link}
              </a>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden"
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <line x1="3" y1="5" x2="21" y2="5" stroke="black" strokeWidth="2" strokeLinecap="round" />
              <line x1="3" y1="12" x2="21" y2="12" stroke="black" strokeWidth="2" strokeLinecap="round" />
              <line x1="3" y1="19" x2="21" y2="19" stroke="black" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>

          {/* Desktop CTA */}
          <button className="hidden lg:flex bg-black items-center justify-center px-4 py-3 rounded-[24px]">
            <span className="font-sans font-medium text-sm text-white tracking-[-0.56px] leading-none">
              Let&apos;s talk
            </span>
          </button>
        </nav>

        {/* Hero content */}
        <div className="flex flex-col h-[341px] items-center justify-between relative shrink-0 w-full lg:h-auto lg:justify-start">

          {/* Title */}
          <div className="flex flex-col items-center w-full lg:items-start lg:pb-[15px]">
            <p className="font-[family-name:var(--secondary-family,'Geist_Mono:Regular',sans-serif)] font-normal leading-[1.1] mix-blend-overlay text-sm text-white uppercase whitespace-nowrap lg:px-[18px] lg:mb-[-15px]">
              [ Hello i&apos;m ]
            </p>
            {/*
              Mobile:  96px fixed, wraps at 3-space gap
              Desktop: 13.75vw (= 198px @ 1440px), scales with viewport, never wraps
            */}
            <div className="capitalize font-sans font-medium mix-blend-overlay leading-[0] text-center text-white w-full text-[96px] tracking-[-6.72px] lg:text-[13.75vw] lg:tracking-[-0.07em] lg:mb-[-15px]">
              <p className="leading-[0.8] whitespace-pre-wrap lg:leading-[1.1] lg:whitespace-pre">
                {`Harvey   Specter`}
              </p>
            </div>
          </div>

          {/* Description + CTA */}
          <div className="flex flex-col items-start w-full lg:items-end lg:justify-center">
            <div className="flex flex-col gap-[17px] items-start w-[293px] lg:w-auto">
              <p className="font-sans font-bold italic leading-[0] text-[#1f1f1f] text-sm tracking-[-0.56px] uppercase w-[294px]">
                <span className="leading-[1.1]">H.Studio is a </span>
                <span className="font-sans font-normal leading-[1.1]">full-service</span>
                <span className="leading-[1.1]">
                  {" "}creative studio creating beautiful digital experiences and products. We are an{" "}
                </span>
                <span className="font-sans font-normal leading-[1.1]">award winning</span>
                <span className="leading-[1.1]">
                  {" "}design and art group specializing in branding, web design and engineering.
                </span>
              </p>
              <button className="bg-black flex items-center justify-center px-4 py-3 rounded-[24px]">
                <span className="font-sans font-medium text-sm text-white tracking-[-0.56px] leading-none">
                  Let&apos;s talk
                </span>
              </button>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
