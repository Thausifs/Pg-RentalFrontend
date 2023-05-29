import Banner from "./Banner";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Products from "./Products";
import Features from "./Features";
import BeatStress from "./BeatStress";
import LiveLoveLife from "./LiveLoveLife";
import App from "./App";
import Popular from "./Popular";
import Testimonials from "./Testimonials";

export default function Home() {
  const [visibleSections, setVisibleSections] = useState([]);

  useEffect(() => {
    AOS.init();
    const handleScroll = () => {
      const sections = ["devices"];
      const newVisibleSections = [];
      for (let i = 0; i < sections.length; i++) {
        const section = document.getElementsByClassName(sections[i])[0];
        const rect = section.getBoundingClientRect();
        const sectionHeight = rect.height;
        const sectionTop = rect.top;
        const visiblePercentage =
          (Math.min(
            window.innerHeight - Math.max(sectionTop, 0),
            sectionHeight
          ) /
            sectionHeight) *
          100;
        let isVisible = visiblePercentage >= 30;

        if (isVisible) {
          newVisibleSections.push(sections[i]);
        }
      }
      setVisibleSections(newVisibleSections);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);
  return (
    <div>
      {/* Banner */}
      <Banner />
      <div className="container">
        <h2 className="xl:text-[6rem] md:text-[4rem] text-[2.5rem] font-extrabold  text-center md:px-0 sm:px-6 px-[15px]">
          A Place Like{" "}
          <span className="bg-gradient-to-r font-ananda from-yellow to-green bg-clip-text inline-block font-extrabold text-transparent">
            Home
          </span>
        </h2>
        <div className="text-center md:min-w-[40vw] md:max-w-[20vw] mx-auto md:px-0 sm:px-6 px-[15px]">
          <h5 className="md:text-[19px] text-[18px] !my-4 font-semibold text-black">
            Discover Coliving Spaces That Resemble Your Home.
          </h5>
          <p className="lg:text-[23px] md:text-[16px] text-[14px] font-normal lg:leading-[37px] leading-[28px] text-black">
            Finding perfect coliving spaces in a new city can be tiring. If you
            are a new bird in the city, then say no more. Before you say I miss
            my home, hear us out. Cozy Stay offers you a complete co-living
            space with a hassle-free, cost-effective, and peaceful living
            experience, catering to individual needs. Now, no more worries about
            the hygiene or the amenities you might require, coz we got it all
            under covered.
          </p>
          <button className="mt-11 mb-12 bg-green rounded-full text-white px-16 py-3.5 border shadow-lg flex items-center gap-3 mx-auto">
            Book Now
          </button>
        </div>
      </div>
      <div className="relative md:pt-[200px] devices overflow-hidden">
        <img
          src="/images/home/device.png"
          className={`2xl:w-[33%] xl:w-[35%] lg:w-[35%] md:w-[38%] sm:w-[34%] w-[34%] absolute transition-all duration-[800ms] z-30 left-1/2 -translate-x-1/2 ${
            visibleSections.includes("devices") ? "bottom-0" : "-bottom-1/2"
          }`}
        />
        <img
          src="/images/home/device_bg.jpeg"
          className="object-cover w-full h-full"
        />
      </div>
      <Products />
      <div className="xl:block hidden">
        <Features anime="yes" />
      </div>
      <div className="xl:hidden block">
        <Features anime="none" />
      </div>
      <div className="relative md:mt-[200px] cities-bg flex items-end xl:h-screen sm:h-[700px] h-[500px]">
        <div className="container">
          <div className="grid sm:grid-cols-12 grid-cols-1 !gap-5">
            <div className="sm:col-span-4"></div>
            <div className="sm:col-span-8">
              <div className="grid grid-cols-3 !gap-5 relative xl:bottom-[100px] bottom-[100px] items-center">
                <div>
                  <img src="/images/home/kochi.png" className="w-full" />
                </div>
                <div>
                  <img
                    src="/images/home/bang.png"
                    className="animate-bounce w-full"
                  />
                </div>
                <div>
                  <img src="/images/home/chennai.png" className="w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Testimonials />
      <BeatStress />
      <App />
      <LiveLoveLife />
      <Popular />
    </div>
  );
}
