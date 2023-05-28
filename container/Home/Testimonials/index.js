import { BsStarFill, BsStarHalf } from "react-icons/bs";
import Slider from "react-slick";
const settings = {
  className: "center",
  dots: true,
  navigation: false,
  infinite: true,
  slidesToShow: 3,
  autoplay: true,
  speed: 500,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
  ],
};
export default function Testimonials() {
  return (
    <div className=" text-gray-800 text-center md:mt-[100px] md:pb-28 pb-10 overflow-hidden">
      <div className="container [&_ul]:-bottom-[55px] mb-12">
        <hr className="my-10 md:hidden" />
        <h2 className="xl:text-[6rem] md:text-[5rem] sm:text-[2.5rem] text-[2rem]  font-extrabold  text-center md:px-0 sm:px-6 px-[15px] mb-12">
          <span className="bg-gradient-to-r font-ananda from-yellow to-green text-transparent bg-clip-text font-extrabold inline-block">
            Testimonials
          </span>
        </h2>
        <Slider {...settings}>
          <div className="!p-2">
            <div className="bg-white block !rounded-lg !shadow-lg">
              <div className="relative overflow-hidden bg-no-repeat bg-cover">
                <img
                  src="https://mdbootstrap.com/img/new/avatars/6.jpg"
                  className="w-full rounded-t-lg"
                />
                <img
                  src="/images/home/clip_1.svg"
                  className="absolute bottom-0"
                />
              </div>
              <div className="p-6">
                <h5 className="text-lg font-bold mb-2">Halley Frank</h5>
                <h6 className="font-medium text-blue-600 mb-4">
                  Marketing Specialist
                </h6>
                <ul className="flex gap-1 justify-center mb-6">
                  <li>
                    <BsStarFill size={22} className="text-yellow" />
                  </li>
                  <li>
                    <BsStarFill size={22} className="text-yellow" />
                  </li>
                  <li>
                    <BsStarFill size={22} className="text-yellow" />
                  </li>
                  <li>
                    <BsStarFill size={22} className="text-yellow" />
                  </li>
                  <li>
                    <BsStarHalf size={22} className="text-yellow" />
                  </li>
                </ul>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium accusamus voluptatum deleniti atque
                  corrupti.
                </p>
              </div>
            </div>
          </div>
          <div className="!p-2">
            <div className="bg-white block !rounded-lg !shadow-lg">
              <div className="relative overflow-hidden bg-no-repeat bg-cover">
                <img
                  src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                  className="w-full rounded-t-lg"
                />
                <img
                  src="/images/home/clip_2.svg"
                  className="absolute bottom-0"
                />
              </div>
              <div className="p-6">
                <h5 className="text-lg font-bold mb-2">John Doe</h5>
                <h6 className="font-medium text-blue-600 mb-4">
                  Web Developer
                </h6>
                <ul className="flex gap-1 justify-center mb-6">
                  <li>
                    <BsStarFill size={22} className="text-yellow" />
                  </li>
                  <li>
                    <BsStarFill size={22} className="text-yellow" />
                  </li>
                  <li>
                    <BsStarFill size={22} className="text-yellow" />
                  </li>
                  <li>
                    <BsStarFill size={22} className="text-yellow" />
                  </li>
                  <li>
                    <BsStarHalf size={22} className="text-yellow" />
                  </li>
                </ul>
                <p>
                  Ut pretium ultricies dignissim. Sed sit amet mi eget urna
                  placerat vulputate. Ut vulputate est non quam dignissim Donec
                  a ullamcorper diam.
                </p>
              </div>
            </div>
          </div>
          <div className="!p-2">
            <div className="bg-white block !rounded-lg !shadow-lg">
              <div className="relative overflow-hidden bg-no-repeat bg-cover">
                <img
                  src="https://mdbootstrap.com/img/new/avatars/15.jpg"
                  className="w-full rounded-t-lg"
                />
                <img
                  src="/images/home/clip_3.svg"
                  className="absolute bottom-0"
                />
              </div>
              <div className="p-6">
                <h5 className="text-lg font-bold mb-2">Lisa Trey</h5>
                <h6 className="font-medium text-blue-600 mb-4">
                  Public Relations
                </h6>
                <ul className="flex gap-1 justify-center mb-6">
                  <li>
                    <BsStarFill size={22} className="text-yellow" />
                  </li>
                  <li>
                    <BsStarFill size={22} className="text-yellow" />
                  </li>
                  <li>
                    <BsStarFill size={22} className="text-yellow" />
                  </li>
                  <li>
                    <BsStarFill size={22} className="text-yellow" />
                  </li>
                  <li>
                    <BsStarHalf size={22} className="text-yellow" />
                  </li>
                </ul>
                <p>
                  Enim ad minima veniam, quis nostrum exercitationem ullam
                  corporis suscipit laboriosam, nisi ut aliquid commodi quis
                  nostrum minima.
                </p>
              </div>
            </div>
          </div>
          <div className="!p-2">
            <div className="bg-white block !rounded-lg !shadow-lg">
              <div className="relative overflow-hidden bg-no-repeat bg-cover">
                <img
                  src="https://mdbootstrap.com/img/new/avatars/6.jpg"
                  className="w-full rounded-t-lg"
                />
                <img
                  src="/images/home/clip_1.svg"
                  className="absolute bottom-0"
                />
              </div>
              <div className="p-6">
                <h5 className="text-lg font-bold mb-2">Halley Frank</h5>
                <h6 className="font-medium text-blue-600 mb-4">
                  Marketing Specialist
                </h6>
                <ul className="flex gap-1 justify-center mb-6">
                  <li>
                    <BsStarFill size={22} className="text-yellow" />
                  </li>
                  <li>
                    <BsStarFill size={22} className="text-yellow" />
                  </li>
                  <li>
                    <BsStarFill size={22} className="text-yellow" />
                  </li>
                  <li>
                    <BsStarFill size={22} className="text-yellow" />
                  </li>
                  <li>
                    <BsStarHalf size={22} className="text-yellow" />
                  </li>
                </ul>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium accusamus voluptatum deleniti atque
                  corrupti.
                </p>
              </div>
            </div>
          </div>
          <div className="!p-2">
            <div className="bg-white block !rounded-lg !shadow-lg">
              <div className="relative overflow-hidden bg-no-repeat bg-cover">
                <img
                  src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                  className="w-full rounded-t-lg"
                />
                <img
                  src="/images/home/clip_2.svg"
                  className="absolute bottom-0"
                />
              </div>
              <div className="p-6">
                <h5 className="text-lg font-bold mb-2">John Doe</h5>
                <h6 className="font-medium text-blue-600 mb-4">
                  Web Developer
                </h6>
                <ul className="flex gap-1 justify-center mb-6">
                  <li>
                    <BsStarFill size={22} className="text-yellow" />
                  </li>
                  <li>
                    <BsStarFill size={22} className="text-yellow" />
                  </li>
                  <li>
                    <BsStarFill size={22} className="text-yellow" />
                  </li>
                  <li>
                    <BsStarFill size={22} className="text-yellow" />
                  </li>
                  <li>
                    <BsStarHalf size={22} className="text-yellow" />
                  </li>
                </ul>
                <p>
                  Ut pretium ultricies dignissim. Sed sit amet mi eget urna
                  placerat vulputate. Ut vulputate est non quam dignissim Donec
                  a ullamcorper diam.
                </p>
              </div>
            </div>
          </div>
          <div className="!p-2">
            <div className="bg-white block !rounded-lg !shadow-lg">
              <div className="relative overflow-hidden bg-no-repeat bg-cover">
                <img
                  src="https://mdbootstrap.com/img/new/avatars/15.jpg"
                  className="w-full rounded-t-lg"
                />
                <img
                  src="/images/home/clip_3.svg"
                  className="absolute bottom-0"
                />
              </div>
              <div className="p-6">
                <h5 className="text-lg font-bold mb-2">Lisa Trey</h5>
                <h6 className="font-medium text-blue-600 mb-4">
                  Public Relations
                </h6>
                <ul className="flex gap-1 justify-center mb-6">
                  <li>
                    <BsStarFill size={22} className="text-yellow" />
                  </li>
                  <li>
                    <BsStarFill size={22} className="text-yellow" />
                  </li>
                  <li>
                    <BsStarFill size={22} className="text-yellow" />
                  </li>
                  <li>
                    <BsStarFill size={22} className="text-yellow" />
                  </li>
                  <li>
                    <BsStarHalf size={22} className="text-yellow" />
                  </li>
                </ul>
                <p>
                  Enim ad minima veniam, quis nostrum exercitationem ullam
                  corporis suscipit laboriosam, nisi ut aliquid commodi quis
                  nostrum minima.
                </p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}
