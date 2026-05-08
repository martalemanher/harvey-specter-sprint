import type { PortfolioItem } from '@/sanity/client'
import { urlFor } from '@/sanity/image'
import type { Dictionary } from '@/app/[lang]/dictionaries'

type Props = {
  dict: Dictionary['selectedWork']
  items: PortfolioItem[]
}

const CARD_CLASSES = [
  'h-[390px] lg:h-[744px]',
  'h-[390px] lg:h-[699px]',
  'h-[390px] lg:h-[699px]',
  'h-[390px] lg:h-[744px]',
]

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

function ProjectCard({ item, index }: { item: PortfolioItem; index: number }) {
  const cardClass = CARD_CLASSES[index] ?? 'h-[390px] lg:h-[699px]'
  const imgSrc = item.coverImage?.asset
    ? urlFor(item.coverImage).width(800).height(800).fit('crop').url()
    : null

  return (
    <div className="group flex flex-col gap-[10px] cursor-pointer">
      <div className={`relative overflow-hidden flex items-end pb-4 pl-4 ${cardClass} bg-[#e5e5e5]`}>
        {imgSrc && (
          <img
            alt={item.coverImage?.alt ?? item.title}
            className="absolute inset-0 max-w-none object-cover size-full pointer-events-none transition-transform duration-500 ease-out group-hover:scale-105"
            src={imgSrc}
          />
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-500 ease-out" />
        <div className="relative flex gap-3 transition-transform duration-500 ease-out group-hover:-translate-y-1">
          {item.tags?.map((tag: string) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between">
        <p className="font-sans font-black leading-[1.1] text-black uppercase tracking-[-0.96px] text-[24px] lg:text-[36px] lg:tracking-[-1.44px] transition-transform duration-300 ease-out group-hover:translate-x-1">
          {item.title}
        </p>
        <div className="transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-1">
          <ArrowUpRight />
        </div>
      </div>
    </div>
  );
}

function CtaBox({ dict }: { dict: Props['dict'] }) {
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
          {dict.description}
        </p>
        <button className="bg-black flex items-center justify-center px-4 py-3 rounded-[24px]">
          <span className="font-sans font-medium text-[14px] text-white tracking-[-0.56px] leading-none">
            {dict.cta}
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

export default function SelectedWorkSection({ dict, items }: Props) {
  const leftProjects = items.slice(0, 2)
  const rightProjects = items.slice(2, 4)

  return (
    <section data-nav-theme="light" className="bg-[#fafafa] px-4 py-12 lg:px-8 lg:py-20">

      {/* Mobile header */}
      <div className="lg:hidden flex flex-col gap-4 mb-8 uppercase">
        <p className="font-[family-name:var(--secondary-family,'Geist_Mono:Regular',sans-serif)] font-normal leading-[1.1] text-[#1f1f1f] text-sm">
          {dict.tag}
        </p>
        <div className="flex items-start justify-between">
          <div className="font-sans font-light leading-none text-black text-[32px] tracking-[-2.56px]">
            <p className="leading-[0.86]">{dict.title1}</p>
            <p className="leading-[0.86]">{dict.title2}</p>
          </div>
          <p className="font-[family-name:var(--secondary-family,'Geist_Mono:Regular',sans-serif)] font-normal leading-[1.1] text-[#1f1f1f] text-sm">
            {String(items.length).padStart(3, '0')}
          </p>
        </div>
      </div>

      {/* Desktop header */}
      <div className="hidden lg:flex items-start justify-between mb-[61px]">
        <div className="flex gap-[10px] items-start uppercase whitespace-nowrap">
          <div className="font-sans font-light leading-none text-black text-[96px] tracking-[-7.68px]">
            <p className="leading-[0.86]">{dict.title1}</p>
            <p className="leading-[0.86]">{dict.title2}</p>
          </div>
          <p className="font-[family-name:var(--secondary-family,'Geist_Mono:Regular',sans-serif)] font-normal leading-[1.1] text-[#1f1f1f] text-sm pt-2">
            {String(items.length).padStart(3, '0')}
          </p>
        </div>
        <div className="h-[110px] w-[15px] flex items-center justify-center">
          <div className="-rotate-90">
            <p className="font-[family-name:var(--secondary-family,'Geist_Mono:Regular',sans-serif)] font-normal leading-[1.1] text-[#1f1f1f] text-sm uppercase whitespace-nowrap">
              {dict.tag}
            </p>
          </div>
        </div>
      </div>

      {/* Mobile: single column */}
      <div className="lg:hidden flex flex-col gap-6">
        {items.map((item, i) => (
          <ProjectCard key={item._id} item={item} index={i} />
        ))}
        <CtaBox dict={dict} />
      </div>

      {/* Desktop: staggered two-column */}
      <div className="hidden lg:flex gap-6 items-end">
        <div className="flex-1 self-stretch flex flex-col justify-between">
          {leftProjects.map((item, i) => (
            <ProjectCard key={item._id} item={item} index={i} />
          ))}
          <CtaBox dict={dict} />
        </div>
        <div className="flex-1 flex flex-col gap-[117px] pt-[240px]">
          {rightProjects.map((item, i) => (
            <ProjectCard key={item._id} item={item} index={i + 2} />
          ))}
        </div>
      </div>

    </section>
  );
}
