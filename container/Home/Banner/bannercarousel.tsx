import Slider from "react-slick";
import BannerSearch from "./BannerSearch";

const settings = {
  className: "center",
  dots: true,
  navigation: false,
  slidesToShow: 1,
  infinite: true,
  autoplay: true,
  speed: 500,
  nextArrow: false,
  prevArrow: false,
};
export default function bankcarousel() {
  return (
    <div className="banner-carousel relative h-full">
      <Slider {...settings}>
        <div className="banner w-full min-w-full relative text-right max-w-[847px] h-[356px] lg:h-[550px]">
          <div className="banner-text text-left absolute z-10 left-0 md:top-[90px] top-10 max-w-[650px] px-8 lg:top-[71px] xl:px-0 text-black">
            <h2 className="md:text-[36px] text-3xl md:leading-[40px] font-bold lg:text-[58px] lg:leading-[64px]">
              <span> Come, live </span>
              <br />
              <span>the new kind </span>
              <br />
              <span>of Living.</span>
              <br />
            </h2>
            <p className="sort-desc text-[16px] leading-[20px] mt-[12px] lg:text-[20px] lg:leading-[28px] lg:mt-[16px] max-w-[360px] font-normal">
              Life at a
              <span className="font-medium">
                {" "}
                professionally managed accommodation
              </span>
              awaits you.
            </p>
          </div>
          <div className="banner-img absolute right-0 top-0 w-full h-full lg:w-[515px] lg:rounded-[10px] overflow-hidden">
            <img
              alt=""
              className="lg:object-auto object-cover w-full h-full"
              src="images/home/food.webp"
            />
          </div>
        </div>
        <div className="banner w-full min-w-full relative text-right max-w-[847px] h-[356px] lg:h-[550px]">
          <div className="banner-text text-left absolute z-10 left-0 md:top-[90px] top-10 max-w-[650px] px-8 lg:top-[71px] xl:px-0 text-black">
            <h2 className="md:text-[36px] text-3xl md:leading-[40px] font-bold lg:text-[58px] lg:leading-[64px]">
              <span> Facilities that give</span>
              <br />
              <span>local PGs an</span>
              <br />
              <span>inferiority complex. </span>
              <br />
            </h2>
            <p className="sort-desc text-[16px] leading-[20px] mt-[12px] lg:text-[20px] lg:leading-[28px] lg:mt-[16px] max-w-[360px]">
              <span>Get</span>
              <span> daily housekeeping, laundry and more</span>
              <span> at your service. </span>
            </p>
          </div>
          <div className="banner-img absolute right-0 top-0 w-full h-full lg:w-[515px] lg:rounded-[10px] overflow-hidden">
            <img
              alt=""
              className="lg:object-auto object-cover w-full h-full"
              src="images/home/food.webp"
            />
          </div>
        </div>
        <div className="banner w-full min-w-full relative text-right max-w-[847px] h-[356px] lg:h-[550px]">
          <div className="banner-text text-left absolute z-10 left-0 md:top-[90px] top-10 max-w-[650px] px-8 lg:top-[71px] xl:px-0 text-black">
            <h2 className="md:text-[36px] text-3xl md:leading-[40px] font-bold lg:text-[58px] lg:leading-[64px]">
              <span>Homely meals that </span>
              <br />
              <span>make you miss home</span>
              <br />
              <span>a little less. </span>
              <br />
            </h2>
            <p className="sort-desc text-[16px] leading-[20px] mt-[12px] lg:text-[20px] lg:leading-[28px] lg:mt-[16px] max-w-[360px]">
              <span>Prepared by</span>
              <span> expert chefs</span>
              <span> who serve nothing less than yum. </span>
            </p>
          </div>
          <div className="banner-img absolute right-0 top-0 w-full h-full lg:w-[515px] lg:rounded-[10px] overflow-hidden">
            <img
              alt=""
              className="lg:object-auto object-cover w-full h-full"
              src="images/home/food.webp"
            />
          </div>
        </div>
        <div className="banner w-full min-w-full relative text-right max-w-[847px] h-[356px] lg:h-[550px]">
          <div className="banner-text text-left absolute z-10 left-0 md:top-[90px] top-10 max-w-[650px] px-8 lg:top-[71px] xl:px-0 text-black">
            <h2 className="md:text-[36px] text-3xl md:leading-[40px] font-bold lg:text-[58px] lg:leading-[64px]">
              <span>Never run out of</span>
              <br />
              <span>options to chill. </span>
              <br />
            </h2>
            <p className="sort-desc text-[16px] leading-[20px] mt-[12px] lg:text-[20px] lg:leading-[28px] lg:mt-[16px] max-w-[360px]">
              <span>Take time out for yourself. With your</span>
              <span> new circle of friends.</span>
            </p>
          </div>
          <div className="banner-img absolute right-0 top-0 w-full h-full lg:w-[515px] lg:rounded-[10px] overflow-hidden">
            <img
              alt=""
              className="lg:object-auto object-cover w-full h-full"
              src="images/home/food.webp"
            />
          </div>
        </div>
      </Slider>
      <BannerSearch />
    </div>
  );
}
