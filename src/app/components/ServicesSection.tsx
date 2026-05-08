import type { Dictionary } from '@/app/[lang]/dictionaries'

type Props = { dict: Dictionary['services'] }

const SERVICE_IMAGES = ['/service-1.png', '/service-2.png', '/service-3.png', '/service-4.png']
const SERVICE_NUMBERS = ['[ 1 ]', '[ 2 ]', '[ 3 ]', '[ 4 ]']

export default function ServicesSection({ dict }: Props) {
  return (
    <section data-nav-theme="dark" className="bg-black flex flex-col gap-8 px-4 py-12 lg:gap-12 lg:px-8 lg:py-20">

      {/* [ services ] label */}
      <p className="font-[family-name:var(--secondary-family,'Geist_Mono:Regular',sans-serif)] font-normal leading-[1.1] text-white text-sm uppercase whitespace-nowrap">
        {dict.tag}
      </p>

      {/* [4]   DELIVERABLES header */}
      <div className="flex items-center justify-between font-sans font-light leading-none text-white uppercase whitespace-nowrap text-[32px] tracking-[-2.56px] lg:text-[96px] lg:tracking-[-7.68px]">
        <span>[4]</span>
        <span>{dict.deliverables}</span>
      </div>

      {/* Service rows */}
      <div className="flex flex-col gap-12">
        {dict.items.map((service, i) => (
          <div key={service.title} className="group flex flex-col gap-[9px] cursor-pointer -mx-4 px-4 py-3 lg:-mx-8 lg:px-8 rounded-sm transition-colors duration-300 hover:bg-white/[0.04]">

            {/* Number label + divider */}
            <p className="font-[family-name:var(--secondary-family,'Geist_Mono:Regular',sans-serif)] font-normal leading-[1.1] text-white text-sm uppercase">
              {SERVICE_NUMBERS[i]}
            </p>
            <div className="border-t border-white/30 w-full transition-colors duration-300 group-hover:border-white/60" />

            {/* Body: stacked on mobile, split row on desktop */}
            <div className="flex flex-col gap-4 pt-2 lg:flex-row lg:items-start lg:justify-between">

              {/* Title */}
              <p className="font-sans font-bold italic leading-[1.1] text-[36px] text-white tracking-[-1.44px] uppercase whitespace-nowrap transition-transform duration-300 group-hover:translate-x-1">
                {service.title}
              </p>

              {/* Description + thumbnail */}
              <div className="flex flex-col gap-4 items-start lg:flex-row lg:gap-6">
                <p className="font-sans font-normal leading-[1.3] text-[14px] text-white tracking-[-0.56px] lg:w-[393px]">
                  {service.description}
                </p>
                <div className="relative shrink-0 size-[151px] overflow-hidden">
                  <img
                    alt=""
                    className="absolute inset-0 max-w-none object-cover size-full transition-transform duration-500 ease-out group-hover:scale-110"
                    src={SERVICE_IMAGES[i]}
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
