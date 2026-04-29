export default function AboutIntroSection() {
  return (
    <section className="bg-[#fafafa] flex flex-col items-center justify-center overflow-hidden px-4 py-12 lg:px-8 lg:py-[120px]">
      <div className="flex flex-col gap-6 items-start w-full">

        {/* Label + divider */}
        <div className="flex flex-col gap-3 items-end w-full">
          <p className="font-[family-name:var(--secondary-family,'Geist_Mono:Regular',sans-serif)] font-normal leading-[1.1] text-[#1f1f1f] text-sm text-right uppercase w-full">
            [ 8+ years in industry ]
          </p>
          <div className="h-px w-full bg-black/20" />
        </div>

        {/* Typography block
            Mobile:  32px centered, 001 above, freelancer label below
            Desktop: 6.67vw staggered, 001 inline, freelancer label absolute
        */}
        <div className="flex flex-col gap-2 w-full items-center lg:items-start lg:gap-0">

          {/* 001 — mobile only, sits above text */}
          <p className="font-[family-name:var(--secondary-family,'Geist_Mono:Regular',sans-serif)] font-normal leading-[1.1] text-[#1f1f1f] text-sm lg:hidden">
            001
          </p>

          {/* Line 1: A creative director   / */}
          <div className="flex items-start gap-3 justify-center w-full lg:justify-start">
            <div className="font-sans font-light leading-[0] text-[32px] tracking-[-0.08em] text-black uppercase lg:text-[6.67vw]">
              <p className="leading-[0.84] whitespace-pre">{`A creative director   /`}</p>
            </div>
            {/* 001 — desktop only, inline */}
            <p className="hidden lg:block font-[family-name:var(--secondary-family,'Geist_Mono:Regular',sans-serif)] font-normal leading-[1.1] text-[#1f1f1f] text-sm pt-1">
              001
            </p>
          </div>

          {/* Line 2: Photographer — indented on desktop */}
          <div className="w-full flex justify-center lg:justify-start lg:pl-[14.86vw]">
            <div className="font-sans font-light leading-[0] text-[32px] tracking-[-0.08em] text-black uppercase whitespace-nowrap lg:text-[6.67vw]">
              <p className="leading-[0.84]">Photographer</p>
            </div>
          </div>

          {/* Line 3: Born & raised — deep indent desktop */}
          <div className="w-full flex justify-center lg:justify-start lg:pl-[42.36vw]">
            <div className="font-sans font-light leading-[0] text-[32px] tracking-[-0.08em] text-black uppercase whitespace-nowrap lg:text-[6.67vw]">
              <p className="leading-[0.84]">
                <span>Born </span>
                <span
                  className="font-[family-name:var(--font-playfair)] font-normal italic leading-[0.84]"
                  style={{ fontVariationSettings: "'opsz' 12, 'wdth' 100" }}
                >&</span>
                <span> raised</span>
              </p>
            </div>
          </div>

          {/* Line 4: on the south side — no indent */}
          <div className="w-full flex justify-center lg:justify-start">
            <div className="font-sans font-light leading-[0] text-[32px] tracking-[-0.08em] text-black uppercase whitespace-nowrap lg:text-[6.67vw]">
              <p className="leading-[0.84]">on the south side</p>
            </div>
          </div>

          {/* Line 5: of chicago. + [ creative freelancer ] */}
          {/* Parent is relative so the label can be absolute on desktop */}
          <div className="relative flex flex-col gap-3 items-center w-full uppercase lg:items-start lg:pl-[42.08vw]">
            <div className="font-sans font-light leading-[0] text-[32px] tracking-[-0.08em] text-black uppercase whitespace-nowrap lg:text-[6.67vw]">
              <p className="leading-[0.84]">of chicago.</p>
            </div>
            {/*
              Mobile:  in-flow, centered below "of chicago."
              Desktop: absolute, positioned to the right of "of chicago."
                       left-[75vw] ≈ 1080px from section-content left at 1440px (matches Figma's 1079px)
            */}
            <p className="font-[family-name:var(--secondary-family,'Geist_Mono:Regular',sans-serif)] font-normal leading-[1.1] text-[#1f1f1f] text-sm whitespace-nowrap lg:absolute lg:left-[75vw] lg:top-[26px]">
              [ creative freelancer ]
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
