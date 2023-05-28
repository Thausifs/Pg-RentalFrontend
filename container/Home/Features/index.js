import { CgWorkAlt } from "react-icons/cg";
import { BsMicrosoftTeams } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { motion } from "framer-motion";

export default function Features({ anime }) {
  return (
    <>
      {anime == "yes" ? (
        <motion.div
          initial={{ opacity: 0, y: "10vh" }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.9 }}
          transition={{ staggerChildren: 0.9, duration: 0.9 }}
        >
          <div className="overflow-hidden 2xl:px-0 px-[15px]">
            <div className="container 2xl:mt-28">
              <div className="grid xl:grid-cols-2 grid-cols-1 !gap-5 items-center">
                <div className="relative">
                  <p className="text-green text-[16px] font-medium leading-[20px] !mb-2">
                    Why choose us
                  </p>
                  <h2 className="md:text-[36px] text-3xl leading-[40px] font-bold lg:text-[50px] lg:leading-[64px]">
                    Lorem ipsum Lorem ipsum ipsum
                  </h2>
                  <p className="text-[16px] leading-[28px] !mb-4 mt-8">
                    {" "}
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                    Lorem ipsum Lorem ipsum
                  </p>
                  <div className="flex sm:flex-row flex-col !text-center sm:!text-left !gap-5 items-center mt-8">
                    <div className="w-[55px] h-[55px] flex-shrink-0 flex items-center justify-center rounded-full bg-green">
                      <CgWorkAlt
                        size={34}
                        className="text-white flex-shrink-0"
                      />
                    </div>
                    <div>
                      <h6 className="text-[20px] leading-[24px] text-[#232728] font-semibold !mb-2">
                        Fast working process
                      </h6>
                      <p className="text-[18px] text-[#232728]/70 font-normal">
                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
                        ipsum Lorem ipsum
                      </p>
                    </div>
                  </div>
                  <div className="flex sm:flex-row flex-col !text-center sm:!text-left !gap-5 items-center mt-8">
                    <div className="w-[55px] h-[55px] flex-shrink-0 flex items-center justify-center rounded-full bg-yellow">
                      <BsMicrosoftTeams
                        size={28}
                        className="text-white flex-shrink-0"
                      />
                    </div>
                    <div>
                      <h6 className="text-[20px] leading-[24px] text-[#232728] font-semibold !mb-2">
                        Dedicated teams
                      </h6>
                      <p className="text-[18px] text-[#232728]/70 font-normal">
                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
                        ipsum Lorem ipsum
                      </p>
                    </div>
                  </div>
                  <div className="flex sm:flex-row flex-col !text-center sm:!text-left !gap-5 items-center mt-8">
                    <div className="w-[55px] h-[55px] flex-shrink-0 flex items-center justify-center rounded-full bg-orange">
                      <BiSupport
                        size={30}
                        className="text-white flex-shrink-0"
                      />
                    </div>
                    <div>
                      <h6 className="text-[20px] leading-[24px] text-[#232728] font-semibold !mb-2">
                        24/7 hours support
                      </h6>
                      <p className="text-[18px] text-[#232728]/70 font-normal">
                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
                        ipsum Lorem ipsum
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative lg:block hidden">
                  <img src="images/home/creative.png" className="w-full" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ) : (
        <div className="overflow-hidden 2xl:px-0 px-[15px]">
          <div className="container 2xl:mt-28">
            <div className="grid xl:grid-cols-2 grid-cols-1 !gap-5 items-center">
              <div className="relative">
                <p className="text-green text-[16px] font-medium leading-[20px] !mb-2">
                  Why choose us
                </p>
                <h2 className="md:text-[36px] text-3xl leading-[40px] font-bold lg:text-[50px] lg:leading-[64px]">
                  Lorem ipsum Lorem ipsum ipsum
                </h2>
                <p className="text-[16px] leading-[28px] !mb-4 mt-8">
                  {" "}
                  Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                  Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                  Lorem ipsum Lorem ipsum
                </p>
                <div className="flex sm:flex-row flex-col !text-center sm:!text-left !gap-5 items-center mt-8">
                  <div className="w-[55px] h-[55px] flex-shrink-0 flex items-center justify-center rounded-full bg-green">
                    <CgWorkAlt size={34} className="text-white flex-shrink-0" />
                  </div>
                  <div>
                    <h6 className="text-[20px] leading-[24px] text-[#232728] font-semibold !mb-2">
                      Fast working process
                    </h6>
                    <p className="text-[18px] text-[#232728]/70 font-normal">
                      Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
                      ipsum Lorem ipsum
                    </p>
                  </div>
                </div>
                <div className="flex sm:flex-row flex-col !text-center sm:!text-left !gap-5 items-center mt-8">
                  <div className="w-[55px] h-[55px] flex-shrink-0 flex items-center justify-center rounded-full bg-yellow">
                    <BsMicrosoftTeams
                      size={28}
                      className="text-white flex-shrink-0"
                    />
                  </div>
                  <div>
                    <h6 className="text-[20px] leading-[24px] text-[#232728] font-semibold !mb-2">
                      Dedicated teams
                    </h6>
                    <p className="text-[18px] text-[#232728]/70 font-normal">
                      Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
                      ipsum Lorem ipsum
                    </p>
                  </div>
                </div>
                <div className="flex sm:flex-row flex-col !text-center sm:!text-left !gap-5 items-center mt-8">
                  <div className="w-[55px] h-[55px] flex-shrink-0 flex items-center justify-center rounded-full bg-orange">
                    <BiSupport size={30} className="text-white flex-shrink-0" />
                  </div>
                  <div>
                    <h6 className="text-[20px] leading-[24px] text-[#232728] font-semibold !mb-2">
                      24/7 hours support
                    </h6>
                    <p className="text-[18px] text-[#232728]/70 font-normal">
                      Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
                      ipsum Lorem ipsum
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
