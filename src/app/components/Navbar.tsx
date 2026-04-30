"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";

const NAV_LINKS = ["About", "Services", "Projects", "News", "Contact"];
type Theme = "dark" | "light";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const themeRef = useRef<Theme>("dark");

  // Nav element refs
  const navEl = useRef<HTMLElement>(null);
  const logoEl = useRef<HTMLSpanElement>(null);
  const linkEls = useRef<(HTMLAnchorElement | null)[]>([]);
  const ctaDesktopEl = useRef<HTMLButtonElement>(null);
  const hamburgerEl = useRef<HTMLButtonElement>(null);

  // Mobile menu refs
  const menuEl = useRef<HTMLDivElement>(null);
  const mobileLinkEls = useRef<(HTMLAnchorElement | null)[]>([]);
  const mobileCtaEl = useRef<HTMLButtonElement>(null);

  const applyTheme = useCallback((theme: Theme, animate = true) => {
    const isLight = theme === "light";
    const fg = isLight ? "#000" : "#fff";
    const dur = animate ? 0.55 : 0;
    const ease = "power2.inOut";

    if (logoEl.current) gsap.to(logoEl.current, { color: fg, duration: dur, ease });

    linkEls.current.filter(Boolean).forEach((link) => {
      if (link) gsap.to(link, { color: fg, duration: dur, ease });
      const underline = link?.querySelector(".nav-underline");
      if (underline) gsap.to(underline, { backgroundColor: fg, duration: dur, ease });
    });

    if (ctaDesktopEl.current) {
      gsap.to(ctaDesktopEl.current, {
        backgroundColor: isLight ? "#000" : "rgba(0,0,0,0)",
        borderColor: isLight ? "#000" : "#fff",
        duration: dur,
        ease,
      });
    }

    if (hamburgerEl.current) {
      const lines = hamburgerEl.current.querySelectorAll("line");
      gsap.to(Array.from(lines), { stroke: fg, duration: dur, ease });
    }
  }, []);

  // Initial state
  useEffect(() => {
    gsap.set(menuEl.current, { y: "-100%" });
    const items = [...mobileLinkEls.current.filter(Boolean), mobileCtaEl.current];
    gsap.set(items, { opacity: 0, y: 24 });
    applyTheme("dark", false);
  }, [applyTheme]);

  // Scroll-based theme detection
  useEffect(() => {
    const update = () => {
      const navMid = (navEl.current?.offsetHeight ?? 80) / 2;
      const sections = document.querySelectorAll<HTMLElement>("[data-nav-theme]");

      let next: Theme = "dark";
      sections.forEach((s) => {
        const r = s.getBoundingClientRect();
        if (r.top <= navMid && r.bottom >= navMid) {
          next = (s.dataset.navTheme as Theme) ?? "dark";
        }
      });

      if (next !== themeRef.current) {
        themeRef.current = next;
        applyTheme(next);
      }
    };

    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, [applyTheme]);

  // Mobile menu open / close
  useEffect(() => {
    const items = [...mobileLinkEls.current.filter(Boolean), mobileCtaEl.current];
    if (menuOpen) {
      gsap.to(menuEl.current, { y: 0, duration: 0.55, ease: "power3.inOut" });
      gsap.fromTo(
        items,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, stagger: 0.065, delay: 0.15, duration: 0.45, ease: "power2.out" }
      );
    } else {
      gsap.to(menuEl.current, {
        y: "-100%",
        duration: 0.45,
        ease: "power3.inOut",
        onComplete: () => gsap.set(items, { opacity: 0, y: 24 }),
      });
    }
  }, [menuOpen]);

  // Desktop link underline hover
  const onLinkEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    gsap.to(e.currentTarget.querySelector(".nav-underline"), { width: "100%", duration: 0.3, ease: "power2.out" });
  };
  const onLinkLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    gsap.to(e.currentTarget.querySelector(".nav-underline"), { width: 0, duration: 0.25, ease: "power2.in" });
  };

  // CTA button hover (theme-aware)
  const onCtaEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget;
    gsap.to(btn, { backgroundColor: "#fff", borderColor: "#fff", duration: 0.3, ease: "power2.out" });
    gsap.to(btn.querySelector<HTMLSpanElement>("span"), { color: "#000", duration: 0.3 });
  };
  const onCtaLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget;
    const isLight = themeRef.current === "light";
    gsap.to(btn, {
      backgroundColor: isLight ? "#000" : "rgba(0,0,0,0)",
      borderColor: isLight ? "#000" : "#fff",
      duration: 0.3,
      ease: "power2.out",
    });
    gsap.to(btn.querySelector<HTMLSpanElement>("span"), { color: "#fff", duration: 0.3 });
  };

  // Mobile menu CTA hover
  const onMobileCtaEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    gsap.to(e.currentTarget, { backgroundColor: "#fff", duration: 0.3, ease: "power2.out" });
    gsap.to(e.currentTarget.querySelector<HTMLSpanElement>("span"), { color: "#000", duration: 0.3 });
  };
  const onMobileCtaLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    gsap.to(e.currentTarget, { backgroundColor: "transparent", duration: 0.3, ease: "power2.out" });
    gsap.to(e.currentTarget.querySelector<HTMLSpanElement>("span"), { color: "#fff", duration: 0.3 });
  };

  return (
    <>
      {/* Mobile fullscreen menu */}
      <div
        ref={menuEl}
        className="lg:hidden fixed inset-0 z-50 bg-black flex flex-col px-4 pt-6 pb-10"
        style={{ pointerEvents: menuOpen ? "auto" : "none" }}
      >
        <div className="flex items-center justify-between mb-12 shrink-0">
          <span className="capitalize font-sans font-semibold text-base text-white tracking-[-0.64px] leading-none">
            H.Studio
          </span>
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="transition-opacity duration-200 hover:opacity-50"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <line x1="4" y1="4" x2="20" y2="20" stroke="white" strokeWidth="2" strokeLinecap="round" />
              <line x1="20" y1="4" x2="4" y2="20" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col flex-1">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link}
              ref={(el) => { mobileLinkEls.current[i] = el; }}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="capitalize font-sans font-light text-[clamp(40px,12vw,64px)] leading-none text-white tracking-[-0.04em] border-b border-white/10 py-5 transition-opacity duration-150 hover:opacity-50"
            >
              {link}
            </a>
          ))}
        </nav>

        <button
          ref={mobileCtaEl}
          onMouseEnter={onMobileCtaEnter}
          onMouseLeave={onMobileCtaLeave}
          className="mt-8 border border-white flex items-center justify-center self-start px-4 py-3 rounded-[24px]"
        >
          <span className="font-sans font-medium text-sm text-white tracking-[-0.56px] leading-none">
            Let&apos;s talk
          </span>
        </button>
      </div>

      {/* Fixed navbar */}
      <nav
        ref={navEl}
        className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-4 py-6 lg:px-8"
      >
        <span
          ref={logoEl}
          className="capitalize font-sans font-semibold text-base tracking-[-0.64px] leading-none"
        >
          H.Studio
        </span>

        {/* Desktop links */}
        <div className="hidden lg:flex capitalize font-sans font-semibold gap-14 items-center text-base tracking-[-0.64px]">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link}
              ref={(el) => { linkEls.current[i] = el; }}
              href={`#${link.toLowerCase()}`}
              className="leading-none relative pb-[3px]"
              onMouseEnter={onLinkEnter}
              onMouseLeave={onLinkLeave}
            >
              {link}
              <span className="nav-underline absolute bottom-0 left-0 h-px w-0 block" />
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          ref={hamburgerEl}
          className="lg:hidden transition-opacity duration-150 hover:opacity-60"
          onClick={() => setMenuOpen(true)}
          aria-label="Open navigation menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <line x1="3" y1="5" x2="21" y2="5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="3" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="3" y1="19" x2="21" y2="19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        {/* Desktop CTA */}
        <button
          ref={ctaDesktopEl}
          onMouseEnter={onCtaEnter}
          onMouseLeave={onCtaLeave}
          className="hidden lg:flex items-center justify-center px-4 py-3 rounded-[24px] border"
        >
          <span className="font-sans font-medium text-sm text-white tracking-[-0.56px] leading-none">
            Let&apos;s talk
          </span>
        </button>
      </nav>
    </>
  );
}
