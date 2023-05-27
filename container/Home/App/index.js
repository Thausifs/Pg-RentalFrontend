import { BsDoorOpenFill, BsGooglePlay } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { MdPayments } from "react-icons/md";
import { SiFoursquarecityguide } from "react-icons/si";
import { FaAddressCard } from "react-icons/fa";
import { VscVerifiedFilled } from "react-icons/vsc";
import { GoDeviceMobile } from "react-icons/go";
import { useEffect } from "react";
import AOS from "aos";
import { HiOutlineDeviceMobile } from "react-icons/hi";
export default function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section>
      <div className="container">
        <h2 className="xl:text-[6rem] sm:text-[5rem] text-[3rem] font-extrabold  text-center md:px-0 sm:px-6 px-[15px]">
          One Tap{" "}
          <span className="bg-gradient-to-r font-ananda from-yellow to-green text-transparent bg-clip-text font-extrabold inline-block">
            Solutions
          </span>
        </h2>
        <div className="text-center md:min-w-[50vw] md:max-w-[30vw] mx-auto md:px-0 sm:px-6 px-[15px] mt-10 md:mt-20">
          <p className="lg:text-[20px] md:text-[16px] text-[14px] font-normal lg:leading-[30px] leading-[28px] text-black/70">
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum
          </p>
          <div className="flex sm:flex-row flex-col items-center justify-center gap-3 my-10">
            <button className=" border-black/20 hover:opacity-70 rounded-2xl text-black/80 px-10 py-1.5 border shadow-md flex items-center gap-3">
              <div className="flex items-center gap-1">
                <HiOutlineDeviceMobile size={34} />
                <div>
                  <p className="text-xs text-left text-black/80">
                    Available on the
                  </p>
                  <h6 className="text-base text-left">App Store</h6>
                </div>
              </div>
            </button>
            <button className="border-black/20 hover:opacity-70 rounded-2xl text-black/80 px-10 py-1.5 border shadow-md flex items-center gap-3">
              <div className="flex items-center gap-1">
                <BsGooglePlay size={26} />
                <div>
                  <p className="text-xs text-left uppercase text-black/80">
                    Android app on
                  </p>
                  <h6 className="text-base text-left">App Store</h6>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="overflow-hidden md:mt-0 mt-16">
        <div className="container-fluid">
          <div className="grid md:grid-cols-12">
            <div className="grid grid-cols-3 border-t divide-x divide-y col-span-6">
              <div className="min-h-[300px]">
                <div
                  className={`rounded-[40px] h-full transition-all cursor-pointer flex flex-col items-center justify-center hover:lg:scale-105 duration-[800ms] md:p-10 p-4 text-center`}
                >
                  <BsDoorOpenFill
                    size={80}
                    className="mx-auto text-green md:!w-[80px] md:!h-[80px] !h-[40px] !w-[40px]"
                  />
                  <h4 className="mt-6 md:text-[18px] sm:text-[16px] text-[14px] font-semibold md:w-8/12 mx-auto">
                    Online Service Request
                  </h4>
                </div>
              </div>
              <div className="min-h-[300px]">
                <div
                  className={`rounded-[40px] h-full transition-all cursor-pointer flex flex-col items-center justify-center hover:lg:scale-105 duration-[800ms] md:p-10 p-4 text-center`}
                >
                  <SlCalender
                    size={80}
                    className="mx-auto text-green md:!w-[80px] md:!h-[80px] !h-[40px] !w-[40px]"
                  />
                  <h4 className="mt-6 md:text-[18px] sm:text-[16px] text-[14px] font-semibold md:w-8/12 mx-auto">
                    Confirm Joining Dates
                  </h4>
                </div>
              </div>
              <div className="min-h-[300px]">
                <div
                  className={`rounded-[40px] h-full transition-all cursor-pointer flex flex-col items-center justify-center hover:lg:scale-105 duration-[800ms] md:p-10 p-4 text-center`}
                >
                  <MdPayments
                    size={80}
                    className="mx-auto text-green md:!w-[80px] md:!h-[80px] !h-[40px] !w-[40px]"
                  />
                  <h4 className="mt-6 md:text-[18px] sm:text-[16px] text-[14px] font-semibold md:w-8/12 mx-auto">
                    Confirm Joining Dates
                  </h4>
                </div>
              </div>
              <div className="min-h-[300px]">
                <div
                  className={`rounded-[40px] h-full transition-all cursor-pointer flex flex-col items-center justify-center hover:lg:scale-105 duration-[800ms] md:p-10 p-4 text-center`}
                >
                  <SiFoursquarecityguide
                    size={80}
                    className="mx-auto text-green md:!w-[80px] md:!h-[80px] !h-[40px] !w-[40px]"
                  />
                  <h4 className="mt-6 md:text-[18px] sm:text-[16px] text-[14px] font-semibold md:w-8/12 mx-auto">
                    Rent Receipts
                  </h4>
                </div>
              </div>
              <div className="min-h-[300px]">
                <div
                  className={`rounded-[40px] h-full transition-all cursor-pointer flex flex-col items-center justify-center hover:lg:scale-105 duration-[800ms] md:p-10 p-4 text-center`}
                >
                  <FaAddressCard
                    size={80}
                    className="mx-auto text-green md:!w-[80px] md:!h-[80px] !h-[40px] !w-[40px]"
                  />
                  <h4 className="mt-6 md:text-[18px] sm:text-[16px] text-[14px] font-semibold md:w-8/12 mx-auto">
                    Paperless KYC Verification
                  </h4>
                </div>
              </div>
              <div className="min-h-[300px]">
                <div
                  className={`rounded-[40px] h-full transition-all cursor-pointer flex flex-col items-center justify-center hover:lg:scale-105 duration-[800ms] md:p-10 p-4 text-center`}
                >
                  <VscVerifiedFilled
                    size={80}
                    className="mx-auto text-green md:!w-[80px] md:!h-[80px] !h-[40px] !w-[40px]"
                  />
                  <h4 className="mt-6 md:text-[18px] sm:text-[16px] text-[14px] font-semibold md:w-8/12 mx-auto">
                    Digital Check-in
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-span-6 md:block hidden">
              <img
                src="images/home/app.png"
                className="w-full h-full object-cover object-right-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
