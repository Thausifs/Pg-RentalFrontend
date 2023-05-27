import { RiMapPin2Fill } from "react-icons/ri";
import { GrMapLocation } from "react-icons/gr";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaPaperPlane } from "react-icons/fa";
import Link from "next/link";

const Footer = () => (
  <footer className="overflow-hidden">
    <div className="pt-[70px]">
      <div className={`container mx-auto 2xl:px-0 px-6`}>
        <div className="sm:grid-cols-12 lg:gap-10 grid grid-cols-1 gap-6">
          <div className="lg:col-span-3 md:col-span-4 sm:col-span-6">
            <div className="h-[100px] relative">
              <img src="images/home/logo.png" className="w-20" />
            </div>
            <h4 className="text-[20px] text-green font-semibold !mb-4 !mt-4">
              Contact Us
            </h4>
            <ul>
              <li className="!mb-4">
                <div className="flex items-start !gap-3">
                  <RiMapPin2Fill size={18} className="shrink-0 text-green" />
                  <p className="text-black font-Gilroy text-[14px] leading-[20px]">
                    Level 12, Rolex Tower, Sheikh Zayed Road, Near Financial
                    Centre Metro Station, Dubai, UAE
                  </p>
                </div>
              </li>
              <li className="!mb-4">
                <div className="flex items-center !gap-3">
                  <GrMapLocation
                    size={18}
                    className="shrink-0 [&_path]:stroke-green"
                  />
                  <p className="text-black font-Gilroy text-[14px] leading-[20px]">
                    Click for the Direction
                  </p>
                </div>
              </li>

              <li className="!mb-4">
                <div className="flex items-center !gap-3">
                  <BsFillTelephoneFill
                    size={18}
                    className="shrink-0 text-green"
                  />
                  <p className="text-black font-Gilroy text-[14px] leading-[20px]">
                    +971 4 2690673
                  </p>
                </div>
              </li>
              <li className="!mb-4">
                <div className="flex items-center !gap-3">
                  <FaPaperPlane size={18} className="shrink-0 text-green" />
                  <p className="text-black font-Gilroy text-[14px] leading-[20px]">
                    sales@aaconsultancy.ae
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-3 md:col-span-4 sm:col-span-6">
            <div className="h-[100px] relative sm:block hidden"></div>
            <h4 className="text-[20px] text-green font-semibold !mb-4 !mt-4">
              Business Setup
            </h4>
            <ul>
              <li className="!mb-4">
                <Link href="/about">
                  <a className="text-black text-[14px] leading-[20px]">
                    About us
                  </a>
                </Link>
              </li>
              <li className="!mb-4">
                <Link href="/">
                  <a className="text-black text-[14px] leading-[20px]">Team</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-3 md:col-span-4 sm:col-span-6">
            <div className="h-[100px] relative md:block hidden"></div>
            <h4 className="text-[20px] text-green font-semibold !mb-4 !mt-4">
              Our Services
            </h4>
          </div>
          <div className="lg:col-span-3 md:col-span-4 sm:col-span-6">
            <div className="h-[100px] relative lg:block hidden"></div>
            <h4 className="text-[20px] text-green font-semibold !mb-4 !mt-4"></h4>
            <img src="images/home/coming_soon.png" className="w-[70%] pt-4" />
          </div>
        </div>
      </div>
    </div>
    <div className="footer">
      <div className="cyclist"></div>
      <div className="car"></div>
    </div>
    <div className="py-[30px] text-center">
      <p className="text-[14px] text-black font-medium">
        Copyright © 2022. Website Designed by XYZ
      </p>
    </div>
  </footer>
);

export default Footer;
