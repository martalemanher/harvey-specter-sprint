const SOCIAL_LINKS = ["Facebook", "Instagram", "X.com", "Linkedin"];

export default function FooterSection() {
  return (
    <footer data-nav-theme="dark" className="bg-black text-white">

      {/* ── Mobile ── */}
      <div className="lg:hidden flex flex-col gap-12 pt-12 px-4">

        {/* CTA + socials + divider */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-3">
              <p className="font-sans font-light italic text-[24px] tracking-[-0.96px] uppercase leading-[1.1]">
                Have a <span className="font-black not-italic">project</span> in mind?
              </p>
              <button className="border border-white rounded-[24px] px-4 py-3 w-fit">
                <span className="font-sans font-medium text-[14px] tracking-[-0.56px] leading-normal">
                  Let&apos;s talk
                </span>
              </button>
            </div>
            {SOCIAL_LINKS.map((name) => (
              <p key={name} className="font-sans font-normal text-[18px] tracking-[-0.72px] uppercase leading-[1.1]">
                {name}
              </p>
            ))}
          </div>
          <div className="w-full h-px bg-white shrink-0" />
        </div>

        {/* Legal + H.Studio */}
        <div className="flex flex-col gap-4 items-center">
          <div className="flex gap-[34px] font-sans font-normal text-[12px] tracking-[-0.48px] uppercase leading-[1.1] pb-8">
            <span className="underline">Licences</span>
            <span className="underline">Privacy policy</span>
          </div>
          <div className="overflow-hidden w-full flex flex-col gap-3">
            <p className="font-[family-name:var(--secondary-family,'Geist_Mono:Regular',sans-serif)] font-normal text-[10px] uppercase leading-[1.1]">
              [ Coded By Claude ]
            </p>
            <p
              className="font-sans font-semibold capitalize whitespace-nowrap"
              style={{ fontSize: "91.425px", letterSpacing: "-5.4855px", lineHeight: 0.8 }}
            >
              H.Studio
            </p>
          </div>
        </div>

      </div>

      {/* ── Desktop ── */}
      <div className="hidden lg:flex flex-col gap-[120px] pt-12 px-8">

        {/* Top: CTA + social columns + divider */}
        <div className="flex flex-col gap-12">
          <div className="flex items-start justify-between">
            {/* Left: CTA */}
            <div className="flex flex-col gap-3 w-[298px]">
              <p className="font-sans font-light italic text-[24px] tracking-[-0.96px] uppercase leading-[1.1]">
                Have a <span className="font-black not-italic">project</span> in mind?
              </p>
              <button className="border border-white rounded-[24px] px-4 py-3 w-fit">
                <span className="font-sans font-medium text-[14px] tracking-[-0.56px] leading-normal">
                  Let&apos;s talk
                </span>
              </button>
            </div>
            {/* Center: social */}
            <div className="font-sans font-normal text-[18px] tracking-[-0.72px] uppercase text-center w-[298px]">
              <p className="leading-[1.1]">Facebook</p>
              <p className="leading-[1.1]">Instagram</p>
            </div>
            {/* Right: social */}
            <div className="font-sans font-normal text-[18px] tracking-[-0.72px] uppercase text-right w-[298px]">
              <p className="leading-[1.1]">X.com</p>
              <p className="leading-[1.1]">Linkedin</p>
            </div>
          </div>
          <div className="w-full h-px bg-white shrink-0" />
        </div>

        {/* Bottom: H.Studio + legal links */}
        <div className="flex items-end justify-between">
          {/* H.Studio with rotated [ Coded By Claude ] */}
          <div className="flex-1 h-[219px] overflow-hidden relative">
            <div
              className="absolute left-0 w-[15px] h-[160px] flex items-center justify-center"
              style={{ top: "calc(50% - 80px)" }}
            >
              <div className="-rotate-90 flex-none">
                <p className="font-[family-name:var(--secondary-family,'Geist_Mono:Regular',sans-serif)] font-normal text-[14px] text-white uppercase whitespace-nowrap leading-[1.1]">
                  [ Coded By Claude ]
                </p>
              </div>
            </div>
            <p
              className="absolute left-[5px] font-sans font-semibold capitalize text-white whitespace-nowrap"
              style={{
                fontSize: "min(290px, 20vw)",
                letterSpacing: "-0.06em",
                lineHeight: 0.8,
                top: "calc(50% + 6.5px)",
                transform: "translateY(-50%)",
              }}
            >
              H.Studio
            </p>
          </div>
          {/* Legal links */}
          <div className="flex gap-[34px] font-sans font-normal text-[12px] tracking-[-0.48px] uppercase leading-[1.1] pb-8 shrink-0">
            <span className="underline">Licences</span>
            <span className="underline">Privacy policy</span>
          </div>
        </div>

      </div>

    </footer>
  );
}
