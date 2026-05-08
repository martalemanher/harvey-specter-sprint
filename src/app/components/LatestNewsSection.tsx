"use client";

import { useState } from "react";
import type { Dictionary } from "@/app/[lang]/dictionaries";

type Props = { dict: Dictionary["latestNews"] };

const ARTICLE_IMAGES = ["/news-1.png", "/news-2.png", "/news-3.png"];
const imgArrow = "/news-arrow.png";

function ReadMoreLink({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-[10px] border-b border-black py-1 w-fit shrink-0">
      <span className="font-sans font-medium text-[14px] text-black tracking-[-0.56px] whitespace-nowrap leading-normal">
        {label}
      </span>
      <div className="-rotate-90 size-[18px] shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
        <img alt="" src={imgArrow} className="size-full block" />
      </div>
    </div>
  );
}

function ArticleCard({
  image,
  caption,
  readMore,
  imageHeightClass,
}: {
  image: string;
  caption: string;
  readMore: string;
  imageHeightClass: string;
}) {
  return (
    <div className="group flex flex-col gap-4 transition-transform duration-300 ease-out hover:-translate-y-1">
      <div className={`relative w-full overflow-hidden ${imageHeightClass}`}>
        <img
          alt=""
          src={image}
          className="absolute inset-0 size-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>
      <p className="font-sans font-normal leading-[1.3] text-[#1f1f1f] text-[14px] tracking-[-0.56px]">
        {caption}
      </p>
      <ReadMoreLink label={readMore} />
    </div>
  );
}

function MobileSlider({ dict }: { dict: Props['dict'] }) {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c - 1 + dict.articles.length) % dict.articles.length);
  const next = () => setCurrent((c) => (c + 1) % dict.articles.length);

  return (
    <div className="flex flex-col gap-6">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {dict.articles.map((article, i) => (
            <div key={i} className="w-full shrink-0">
              <ArticleCard
                image={ARTICLE_IMAGES[i] ?? ARTICLE_IMAGES[0]}
                caption={article.caption}
                readMore={dict.readMore}
                imageHeightClass="h-[398px]"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          {dict.articles.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-[2px] transition-all duration-300 ${i === current ? "w-8 bg-black" : "w-4 bg-black/30"}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        <div className="flex gap-3">
          <button onClick={prev} className="size-9 border border-black flex items-center justify-center" aria-label="Previous">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 3L5 8L10 13" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button onClick={next} className="size-9 border border-black flex items-center justify-center" aria-label="Next">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 3L11 8L6 13" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function LatestNewsSection({ dict }: Props) {
  return (
    <section data-nav-theme="light" className="bg-[#f3f3f3]">

      <div className="lg:hidden px-4 py-16 flex flex-col gap-8">
        <p
          className="font-sans font-light text-[32px] text-black tracking-[-2.56px] uppercase"
          style={{ lineHeight: 0.86 }}
        >
          {dict.title}
        </p>
        <MobileSlider dict={dict} />
      </div>

      <div className="hidden lg:flex items-end px-8 py-[120px] gap-[31px]">
        <div className="relative w-[110px] h-[706px] shrink-0 overflow-hidden">
          <p
            className="absolute font-sans font-light text-[64px] text-black tracking-[-5.12px] uppercase"
            style={{
              lineHeight: 0.86,
              width: 706,
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%) rotate(-90deg)",
              transformOrigin: "center center",
            }}
          >
            {dict.title}
          </p>
        </div>

        <div className="flex flex-1 items-start gap-[31px]">
          <div className="flex-1">
            <ArticleCard image={ARTICLE_IMAGES[0]} caption={dict.articles[0].caption} readMore={dict.readMore} imageHeightClass="h-[469px]" />
          </div>
          <div className="w-px self-stretch bg-black shrink-0" />
          <div className="flex-1 pt-[120px]">
            <ArticleCard image={ARTICLE_IMAGES[1]} caption={dict.articles[1].caption} readMore={dict.readMore} imageHeightClass="h-[469px]" />
          </div>
          <div className="w-px self-stretch bg-black shrink-0" />
          <div className="flex-1">
            <ArticleCard image={ARTICLE_IMAGES[2]} caption={dict.articles[2].caption} readMore={dict.readMore} imageHeightClass="h-[469px]" />
          </div>
        </div>
      </div>

    </section>
  );
}
