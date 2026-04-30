"use client";

import { useState } from "react";

const imgArticle1 = "https://www.figma.com/api/mcp/asset/7f9bfdc5-9f98-4037-a496-fa50ff62643f";
const imgArticle2 = "https://www.figma.com/api/mcp/asset/bb5cce38-be8d-4e75-9c90-b26ff37331b7";
const imgArticle3 = "https://www.figma.com/api/mcp/asset/35999815-7da2-46b6-a0d2-a736fb4b4d47";
const imgArrow = "https://www.figma.com/api/mcp/asset/4016b68a-addf-44f3-b3ee-cde9261bc463";

const ARTICLES = [
  {
    image: imgArticle1,
    caption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    image: imgArticle2,
    caption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    image: imgArticle3,
    caption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

function ReadMoreLink() {
  return (
    <div className="flex items-center gap-[10px] border-b border-black py-1 w-fit shrink-0">
      <span className="font-sans font-medium text-[14px] text-black tracking-[-0.56px] whitespace-nowrap leading-normal">
        Read more
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
  imageHeightClass,
}: {
  image: string;
  caption: string;
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
      <ReadMoreLink />
    </div>
  );
}

function MobileSlider() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + ARTICLES.length) % ARTICLES.length);
  const next = () => setCurrent((c) => (c + 1) % ARTICLES.length);

  return (
    <div className="flex flex-col gap-6">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {ARTICLES.map((article, i) => (
            <div key={i} className="w-full shrink-0">
              <ArticleCard
                image={article.image}
                caption={article.caption}
                imageHeightClass="h-[398px]"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          {ARTICLES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-[2px] transition-all duration-300 ${
                i === current ? "w-8 bg-black" : "w-4 bg-black/30"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <div className="flex gap-3">
          <button
            onClick={prev}
            className="size-9 border border-black flex items-center justify-center"
            aria-label="Previous"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 3L5 8L10 13" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            onClick={next}
            className="size-9 border border-black flex items-center justify-center"
            aria-label="Next"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 3L11 8L6 13" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function LatestNewsSection() {
  return (
    <section data-nav-theme="light" className="bg-[#f3f3f3]">

      {/* ── Mobile: title + slider ── */}
      <div className="lg:hidden px-4 py-16 flex flex-col gap-8">
        <p
          className="font-sans font-light text-[32px] text-black tracking-[-2.56px] uppercase"
          style={{ lineHeight: 0.86 }}
        >
          Keep up with my latest news &amp; achievements
        </p>
        <MobileSlider />
      </div>

      {/* ── Desktop: rotated title + 3 staggered columns ── */}
      <div className="hidden lg:flex items-end px-8 py-[120px] gap-[31px]">

        {/* Rotated title */}
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
            Keep up with my latest<br />news &amp; achievements
          </p>
        </div>

        {/* 3 columns with dividers */}
        <div className="flex flex-1 items-start gap-[31px]">
          <div className="flex-1">
            <ArticleCard
              image={ARTICLES[0].image}
              caption={ARTICLES[0].caption}
              imageHeightClass="h-[469px]"
            />
          </div>

          <div className="w-px self-stretch bg-black shrink-0" />

          <div className="flex-1 pt-[120px]">
            <ArticleCard
              image={ARTICLES[1].image}
              caption={ARTICLES[1].caption}
              imageHeightClass="h-[469px]"
            />
          </div>

          <div className="w-px self-stretch bg-black shrink-0" />

          <div className="flex-1">
            <ArticleCard
              image={ARTICLES[2].image}
              caption={ARTICLES[2].caption}
              imageHeightClass="h-[469px]"
            />
          </div>
        </div>
      </div>

    </section>
  );
}
