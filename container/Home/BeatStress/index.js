import { useEffect } from "react";
import AOS from "aos";
export default function BeatStress() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="container-fluid beat-stress pb-32">
      <hr className="mt-20 mb-10 md:hidden" />
      <div className="grid lg:grid-cols-12 items-center">
        <div className="lg:col-span-5">
          <div className="sm:h-[380px] h-full mb-5 flex items-center justify-center text-center">
            <h3 className="lg:text-[7rem] md:text-[5rem] text-[2.5rem] text-black/90 lg:leading-[6.5rem] md:leading-[4.5rem] font-bold md:px-12">
              beat the{" "}
              <span className="bg-gradient-to-r from-yellow to-green text-transparent bg-clip-text block">
                stress
              </span>
            </h3>
          </div>
          <div>
            <div className="grid sm:grid-cols-2">
              <div className="relative group before:absolute before:content-[''] before:w-full before:h-full before:top-0 before:left-0 before:bg-black/30 hover:before:bg-black/80 before:transition-all before:duration-300">
                <img
                  src="images/home/user_1.jpg"
                  className="w-full max-h-[280px] min-h-[280px] object-cover z-0"
                />
                <p className="text-[22px] font-bold text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 opacity-0 z-10">
                  Fitness Centers
                </p>
              </div>
              <div className="relative group before:absolute before:content-[''] before:w-full before:h-full before:top-0 before:left-0 before:bg-black/30 hover:before:bg-black/80 before:transition-all before:duration-300">
                <img
                  src="images/home/user_2.jpg"
                  className="w-full max-h-[280px] min-h-[280px] object-cover z-0"
                />
                <p className="text-[22px] font-bold text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 opacity-0 z-10">
                  Fun Zone
                </p>
              </div>
              <div className="relative group before:absolute before:content-[''] before:w-full before:h-full before:top-0 before:left-0 before:bg-black/30 hover:before:bg-black/80 before:transition-all before:duration-300">
                <img
                  src="images/home/user_3.jpg"
                  className="w-full max-h-[280px] min-h-[280px] object-cover z-0"
                />
                <p className="text-[22px] font-bold text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 opacity-0 z-10">
                  Indoor Games
                </p>
              </div>
              <div className="relative group before:absolute before:content-[''] before:w-full before:h-full before:top-0 before:left-0 before:bg-black/30 hover:before:bg-black/80 before:transition-all before:duration-300">
                <img
                  src="images/home/user_4.jpg"
                  className="w-full max-h-[280px] min-h-[280px] object-cover z-0"
                />
                <p className="text-[22px] font-bold text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 opacity-0 z-10">
                  Cozy Community
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-7 h-full">
          <div className="flex flex-col h-full">
            <div className="bg-green/50">
              <img
                src="images/home/stress.png"
                className="w-full h-[560px] object-contain object-center opacity-80"
              />
            </div>
            <div className="grow lg:block flex gap-4 items-center">
              <div className="h-full lg:w-2/5 flex items-center justify-center mx-auto relative lg:mt-0 mt-8 lg:px-0 px-[15px]">
                <p className="text-[18px] text-black/70 font-normal z-10 relative">
                  Don't let your workload knock you down. Flush out the stress
                  with our fun amenities and community-based events specially
                  designed to relax and rejuvenate you. Just like a wise man
                  once said, 'relaxation can fuel success in unimaginable ways'.
                </p>
                <img
                  src="images/home/beat_icon.png"
                  className="lg:w-[80px] w-[40px] lg:absolute lg:-right-32 lg:top-1/2 transform lg:-translate-y-1/2 z-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
