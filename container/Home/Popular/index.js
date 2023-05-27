import { BsDoorOpenFill, BsGooglePlay } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { MdPayments } from "react-icons/md";
import { SiFoursquarecityguide } from "react-icons/si";
import { FaAddressCard } from "react-icons/fa";
import { VscVerifiedFilled } from "react-icons/vsc";
import { useEffect } from "react";
import AOS from "aos";
import { HiOutlineDeviceMobile } from "react-icons/hi";
export default function Popular() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section>
      <div className="container mt-16">
        <h2 className="xl:text-[6rem] sm:text-[5rem] text-[3rem] font-extrabold  text-center md:px-0 sm:px-6 px-[15px]">
          The Zestos{" "}
          <span className="bg-gradient-to-r font-ananda from-yellow to-green text-transparent bg-clip-text font-extrabold inline-block">
            Corner
          </span>
        </h2>
        <div className="text-center md:min-w-[50vw] md:max-w-[30vw] mx-auto md:px-0 sm:px-6 px-[15px] mt-10 md:mt-20">
          <p className="lg:text-[20px] md:text-[16px] text-[14px] font-normal lg:leading-[30px] leading-[28px] text-black/70">
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum
          </p>
        </div>
      </div>
      <div className="mt-16">
        <div className="container xl:px-0 px-[15px]">
          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-5">
            <div className="transition-all cursor-pointer flex flex-col items-center justify-center hover:lg:scale-105 duration-[800ms] text-center">
              <div className={`max-h-[400px] rounded-[40px] h-full `}>
                <img
                  src="images/home/city_1.webp"
                  className="rounded-lg h-full w-full object-cover"
                />
              </div>
              <p className="mt-6 text-[18px] font-medium font-Lato text-black/70 px-6 mx-auto">
                Bangalore is rightly known as the silicon valley of India for
                all the enhanceme…
              </p>
              <button className="!border-green hover:!bg-green bg-transparent rounded-full hover:!text-white !text-green px-10 py-2 border shadow-lg flex items-center gap-3 mt-5">
                Read More
              </button>
            </div>
            <div className="transition-all cursor-pointer flex flex-col items-center justify-center hover:lg:scale-105 duration-[800ms] text-center">
              <div className={`max-h-[400px] rounded-[40px] h-full `}>
                <img
                  src="images/home/city_2.jpg"
                  className="rounded-lg h-full w-full object-cover"
                />
              </div>
              <p className="mt-6 text-[18px] font-medium font-Lato text-black/70 px-6 mx-auto">
                Bangalore is rightly known as the silicon valley of India for
                all the enhanceme…
              </p>
              <button className="!border-green hover:!bg-green bg-transparent rounded-full hover:!text-white !text-green px-10 py-2 border shadow-lg flex items-center gap-3 mt-5">
                Read More
              </button>
            </div>
            <div className="transition-all cursor-pointer flex flex-col items-center justify-center hover:lg:scale-105 duration-[800ms] text-center">
              <div className={` max-h-[400px] rounded-[40px] h-full `}>
                <img
                  src="images/home/city_3.jpg"
                  className="rounded-lg h-full w-full object-cover"
                />
              </div>
              <p className="mt-6 text-[18px] font-medium font-Lato text-black/70 px-6 mx-auto">
                Bangalore is rightly known as the silicon valley of India for
                all the enhanceme…
              </p>
              <button className="!border-green hover:!bg-green bg-transparent rounded-full hover:!text-white !text-green px-10 py-2 border shadow-lg flex items-center gap-3 mt-5">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
