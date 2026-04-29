const IMG_DESKTOP = "https://www.figma.com/api/mcp/asset/104aa9e8-de4e-4dac-9647-6acc54d21024";
const IMG_MOBILE = "https://www.figma.com/api/mcp/asset/60d79ff8-b9c2-4027-930b-768ec90cd5f7";

export default function FullBleedPhotoSection() {
  return (
    <section className="relative h-[480px] overflow-hidden lg:h-[680px]">
      {/* Mobile: manually cropped/offset to match Figma framing */}
      <div className="lg:hidden absolute inset-0 overflow-hidden">
        <img
          alt=""
          className="absolute h-full left-[-36.41%] max-w-none top-0 w-[213.34%]"
          src={IMG_MOBILE}
        />
      </div>
      {/* Desktop: simple object-cover fill */}
      <img
        alt=""
        className="hidden lg:block absolute inset-0 max-w-none object-cover size-full"
        src={IMG_DESKTOP}
      />
    </section>
  );
}
