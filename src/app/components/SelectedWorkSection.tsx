const PROJECTS = [
  {
    title: "Surfers Paradise",
    tags: ["Social Media", "Photography"],
    img: "https://www.figma.com/api/mcp/asset/b52324ee-89d2-4d7b-b1c0-8550e31c9c09",
    cardClass: "h-[390px] lg:h-[744px]",
    col: "left" as const,
  },
  {
    title: "Cyberpunk Caffe",
    tags: ["Social Media", "Photography"],
    img: "https://www.figma.com/api/mcp/asset/92422a18-91a8-4e0d-be9d-65f812983afe",
    cardClass: "h-[390px] lg:h-[699px]",
    col: "left" as const,
  },
  {
    title: "Agency 976",
    tags: ["Social Media", "Photography"],
    img: "https://www.figma.com/api/mcp/asset/61a4341c-5e3a-4494-8d9f-60b8b5614faf",
    cardClass: "h-[390px] lg:h-[699px]",
    col: "right" as const,
  },
  {
    title: "Minimal Playground",
    tags: ["Social Media", "Photography"],
    img: "https://www.figma.com/api/mcp/asset/2b5e90d7-dbab-4187-a93d-9c7a7c9c77d8",
    cardClass: "h-[390px] lg:h-[744px]",
    col: "right" as const,
  },
];

function Tag({ label }: { label: string }) {
  return (
    <span className="backdrop-blur-[10px] bg-white/30 px-2 py-1 rounded-[24px] font-sans font-medium text-[14px] text-[#111] tracking-[-0.56px] leading-none whitespace-nowrap">
      {label}
    </span>
  );
}

function ArrowUpRight() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path
        d="M10 22L22 10M22 10H14M22 10V18"
        stroke="#1f1f1f"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

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

function ProjectCard({ title, tags, img, cardClass }: (typeof PROJECTS)[number]) {
  return (
    <div className="flex flex-col gap-[10px]">
      <div className={`relative overflow-hidden flex items-end pb-4 pl-4 ${cardClass}`}>
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover size-full pointer-events-none"
          src={img}
        />
        <div className="relative flex gap-3">
          {tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between">
        <p className="font-sans font-black leading-[1.1] text-black uppercase tracking-[-0.96px] text-[24px] lg:text-[36px] lg:tracking-[-1.44px]">
          {title}
        </p>
        <ArrowUpRight />
      </div>
    </div>
  );
}

function CtaBox() {
  return (
    <div className="flex gap-3 items-stretch w-full lg:w-[465px]">
      <div className="flex flex-col justify-between shrink-0 w-6">
        <CornerBracket />
        <div className="-rotate-90">
          <CornerBracket />
        </div>
      </div>
      <div className="flex flex-col gap-[10px] items-start justify-center py-3 flex-1 min-w-0">
        <p className="font-sans font-normal italic leading-[1.3] text-[#1f1f1f] text-[14px] tracking-[-0.56px]">
          Discover how my creativity transforms ideas into impactful digital
          experiences — schedule a call with me to get started.
        </p>
        <button className="bg-black flex items-center justify-center px-4 py-3 rounded-[24px]">
          <span className="font-sans font-medium text-[14px] text-white tracking-[-0.56px] leading-none">
            Let&apos;s talk
          </span>
        </button>
      </div>
      <div className="flex flex-col justify-between items-end shrink-0 w-6">
        <div className="rotate-90">
          <CornerBracket />
        </div>
        <div className="rotate-180">
          <CornerBracket />
        </div>
      </div>
    </div>
  );
}

const leftProjects = PROJECTS.filter((p) => p.col === "left");
const rightProjects = PROJECTS.filter((p) => p.col === "right");

export default function SelectedWorkSection() {
  return (
    <section className="bg-[#fafafa] px-4 py-12 lg:px-8 lg:py-20">

      {/* Mobile header: [ portfolio ] above, Selected Work + 004 in a row */}
      <div className="lg:hidden flex flex-col gap-4 mb-8 uppercase">
        <p className="font-[family-name:var(--secondary-family,'Geist_Mono:Regular',sans-serif)] font-normal leading-[1.1] text-[#1f1f1f] text-sm">
          [ portfolio ]
        </p>
        <div className="flex items-start justify-between">
          <div className="font-sans font-light leading-none text-black text-[32px] tracking-[-2.56px]">
            <p className="leading-[0.86]">Selected</p>
            <p className="leading-[0.86]">Work</p>
          </div>
          <p className="font-[family-name:var(--secondary-family,'Geist_Mono:Regular',sans-serif)] font-normal leading-[1.1] text-[#1f1f1f] text-sm">
            004
          </p>
        </div>
      </div>

      {/* Desktop header: Selected Work + 004 on left, [ portfolio ] rotated far right */}
      <div className="hidden lg:flex items-start justify-between mb-[61px]">
        <div className="flex gap-[10px] items-start uppercase whitespace-nowrap">
          <div className="font-sans font-light leading-none text-black text-[96px] tracking-[-7.68px]">
            <p className="leading-[0.86]">Selected</p>
            <p className="leading-[0.86]">Work</p>
          </div>
          <p className="font-[family-name:var(--secondary-family,'Geist_Mono:Regular',sans-serif)] font-normal leading-[1.1] text-[#1f1f1f] text-sm pt-2">
            004
          </p>
        </div>
        <div className="h-[110px] w-[15px] flex items-center justify-center">
          <div className="-rotate-90">
            <p className="font-[family-name:var(--secondary-family,'Geist_Mono:Regular',sans-serif)] font-normal leading-[1.1] text-[#1f1f1f] text-sm uppercase whitespace-nowrap">
              [ portfolio ]
            </p>
          </div>
        </div>
      </div>

      {/* Mobile: single column */}
      <div className="lg:hidden flex flex-col gap-6">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
        <CtaBox />
      </div>

      {/* Desktop: staggered two-column — right col offset 240px down.
          Left col self-stretch + justify-between fills the row height and
          distributes items the same way Figma's justify-between does. */}
      <div className="hidden lg:flex gap-6 items-end">
        <div className="flex-1 self-stretch flex flex-col justify-between">
          {leftProjects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
          <CtaBox />
        </div>
        <div className="flex-1 flex flex-col gap-[117px] pt-[240px]">
          {rightProjects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>

    </section>
  );
}
