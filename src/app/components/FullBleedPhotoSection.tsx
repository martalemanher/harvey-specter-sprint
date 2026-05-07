const IMG_DESKTOP = "/fullbleed-bg.png";
const IMG_MOBILE  = "/fullbleed-bg.png";

export default function FullBleedPhotoSection() {
  return (
    <section
      data-nav-theme="dark"
      className="blur-on-scroll relative h-[480px] overflow-hidden lg:h-[680px]"
    >
      <style>{`
        @keyframes unblur {
          from { filter: blur(16px); scale: 1.03; }
          to   { filter: blur(0px);  scale: 1;    }
        }
        .blur-on-scroll {
          animation: unblur linear both;
          animation-timeline: view();
          animation-range: entry 0% entry 50%;
        }
      `}</style>

      {/* Mobile */}
      <div className="lg:hidden absolute inset-0 overflow-hidden">
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover object-center size-full"
          src={IMG_MOBILE}
        />
      </div>
      {/* Desktop */}
      <img
        alt=""
        className="hidden lg:block absolute inset-0 max-w-none object-cover size-full"
        src={IMG_DESKTOP}
      />
    </section>
  );
}
