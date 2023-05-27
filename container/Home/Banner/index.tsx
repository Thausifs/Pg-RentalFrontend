import BannerCarousel from "./bannercarousel";
export default function Banner() {
  return (
    <div className="container overflow-hidden">
      <div className="grid grid-cols-1 !gap-5 pb-[60px] lg:pt-[60px] items-center banner">
        <div className="h-full">
          <BannerCarousel />
        </div>
      </div>
    </div>
  );
}
