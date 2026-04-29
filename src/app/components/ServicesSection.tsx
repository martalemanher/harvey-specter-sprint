const SERVICES = [
  {
    number: "[ 1 ]",
    title: "Brand Discovery",
    description:
      "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.",
    img: "https://www.figma.com/api/mcp/asset/95dcd490-327f-4615-aaed-d2ee5c68714b",
  },
  {
    number: "[ 2 ]",
    title: "Web Design & Dev",
    description:
      "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.",
    img: "https://www.figma.com/api/mcp/asset/50909903-cd8b-4b34-b97f-b383e8abd773",
  },
  {
    number: "[ 3 ]",
    title: "Marketing",
    description:
      "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.",
    img: "https://www.figma.com/api/mcp/asset/a276475d-b427-4df2-8121-871ba4d7cccf",
  },
  {
    number: "[ 4 ]",
    title: "Photography",
    description:
      "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.",
    img: "https://www.figma.com/api/mcp/asset/a94ac94d-dd7e-4f0d-842a-c22384559786",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-black flex flex-col gap-8 px-4 py-12 lg:gap-12 lg:px-8 lg:py-20">

      {/* [ services ] label */}
      <p className="font-[family-name:var(--secondary-family,'Geist_Mono:Regular',sans-serif)] font-normal leading-[1.1] text-white text-sm uppercase whitespace-nowrap">
        [ services ]
      </p>

      {/* [4]   DELIVERABLES header */}
      <div className="flex items-center justify-between font-sans font-light leading-none text-white uppercase whitespace-nowrap text-[32px] tracking-[-2.56px] lg:text-[96px] lg:tracking-[-7.68px]">
        <span>[4]</span>
        <span>Deliverables</span>
      </div>

      {/* Service rows */}
      <div className="flex flex-col gap-12">
        {SERVICES.map((service) => (
          <div key={service.number} className="flex flex-col gap-[9px]">

            {/* Number label + divider */}
            <p className="font-[family-name:var(--secondary-family,'Geist_Mono:Regular',sans-serif)] font-normal leading-[1.1] text-white text-sm uppercase">
              {service.number}
            </p>
            <div className="border-t border-white/30 w-full" />

            {/* Body: stacked on mobile, split row on desktop */}
            <div className="flex flex-col gap-4 pt-2 lg:flex-row lg:items-start lg:justify-between">

              {/* Title */}
              <p className="font-sans font-bold italic leading-[1.1] text-[36px] text-white tracking-[-1.44px] uppercase whitespace-nowrap">
                {service.title}
              </p>

              {/* Description + thumbnail */}
              <div className="flex flex-col gap-4 items-start lg:flex-row lg:gap-6">
                <p className="font-sans font-normal leading-[1.3] text-[14px] text-white tracking-[-0.56px] lg:w-[393px]">
                  {service.description}
                </p>
                <div className="relative size-[151px] shrink-0 overflow-hidden">
                  <img
                    alt=""
                    className="absolute inset-0 max-w-none object-cover size-full"
                    src={service.img}
                  />
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
