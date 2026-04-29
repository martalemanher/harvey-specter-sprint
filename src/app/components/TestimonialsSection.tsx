const CARDS = [
  {
    logo: "https://www.figma.com/api/mcp/asset/8fa2effc-8d4a-4a42-8227-f12c7a9f48b1",
    logoW: 143, logoH: 19,
    quote: "A brilliant creative partner who transformed our vision into a unique, high-impact brand identity. Their ability to craft everything from custom mascots to polished logos is truly impressive.",
    name: "Marko Stojković",
    desktop: { left: 102, top: 142, rotate: -6.85 },
    mobileRotate: -3.5,
  },
  {
    logo: "https://www.figma.com/api/mcp/asset/580f3677-5fe8-4e07-852d-324413ebbab9",
    logoW: 138, logoH: 19,
    quote: "Professional, precise, and incredibly fast at handling complex product visualizations and templates.",
    name: "Lukas Weber",
    desktop: { left: 676, top: 272, rotate: 2.9 },
    mobileRotate: 2,
  },
  {
    logo: "https://www.figma.com/api/mcp/asset/3a5c1210-6082-49ca-8bf5-6e576662a38a",
    logoW: 109, logoH: 31,
    quote: "A strategic partner who balances stunning aesthetics with high-performance UX for complex platforms. They don't just make things look good; they solve business problems through visual clarity.",
    name: "Sarah Jenkins",
    desktop: { left: 305, top: 553, rotate: 2.23 },
    mobileRotate: -2,
  },
  {
    logo: "https://www.figma.com/api/mcp/asset/8346f8cf-c700-4978-8768-cdea7c94d8cb",
    logoW: 81, logoH: 36,
    quote: "An incredibly versatile designer who delivers consistent quality across a wide range of styles and formats.",
    name: "Sofia Martínez",
    desktop: { left: 987, top: 546, rotate: -4.15 },
    mobileRotate: 3,
  },
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

export default function TestimonialsSection() {
  return (
    <section className="bg-[#fafafa]">

      {/* ── Mobile: title + horizontal scroll strip ── */}
      <div className="lg:hidden px-4 py-16 flex flex-col gap-8">
        <p
          className="font-sans font-medium text-[64px] tracking-[-4.48px] capitalize text-center text-black"
          style={{ lineHeight: 0.8 }}
        >
          Testimonials
        </p>
        {/* Bleed to the left edge so the fan feels full-width */}
        <div className="overflow-x-auto -mx-4 px-4">
          <div className="flex pb-4">
            {CARDS.map((card, i) => (
              <div
                key={card.name}
                className="shrink-0 relative"
                style={{
                  marginRight: i < CARDS.length - 1 ? -10 : 0,
                  transform: `rotate(${card.mobileRotate}deg)`,
                  zIndex: i,
                }}
              >
                <TestimonialCard {...card} width={260} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Desktop: large title with absolute cards floating around it ── */}
      <div className="hidden lg:block relative overflow-hidden min-h-[900px] px-8 py-[120px]">
        {/* Title — in-flow, centered; absolute cards layer on top */}
        <p className="font-sans font-medium text-[198px] tracking-[-13.86px] capitalize text-center text-black leading-[1.1]">
          Testimonials
        </p>
        {CARDS.map((card) => (
          <div
            key={card.name}
            className="absolute"
            style={{
              left: card.desktop.left,
              top: card.desktop.top,
              transform: `rotate(${card.desktop.rotate}deg)`,
            }}
          >
            <TestimonialCard {...card} width={353} />
          </div>
        ))}
      </div>

    </section>
  );
}
