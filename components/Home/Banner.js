import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import Router, { useRouter } from "next/router";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import useRoomTypes from "../../utils/Hooks/useRoomTypes";
import useCities from "../../utils/Hooks/useCities";
import { toast } from "react-hot-toast";

const Banner = () => {
  const { roomTypes } = useRoomTypes();
  const { cities } = useCities();

  const [roomTypeValue, setRoomTypeValue] = useState("select_room_type");
  const [cityValue, setCityValue] = useState("select_city");

  const router = useRouter();

  //Heading view point & Heading animation hook
  const [headingRef, headingInView] = useInView({ threshold: 0.1 });
  const Hanimation = useAnimation();

  //img view point & img animation hook
  const [imgRef, imgInView] = useInView({ threshold: 0.1 });
  const IManimation = useAnimation();

  //search box view point & animation hook
  const [sref, sInview] = useInView({ threshold: 0.01 });
  const SRanimation = useAnimation();

  useEffect(() => {
    // console.log("banner:-",imgInView)

    //heading animation
    if (headingInView) {
      Hanimation.start({
        opacity: 1,
        y: "0",
        transition: {
          ease: "linear",
          duration: 0.8,
        },
      });
    } else {
      Hanimation.start({
        opacity: 0,
        y: "-20vh",
      });
    }

    //img animation
    if (imgInView) {
      IManimation.start({
        x: "0",
        opacity: 1,
        transition: {
          ease: "linear",
          duration: 1,
        },
      });
    } else {
      IManimation.start({
        x: "10vw",
        opacity: 0,
      });
    }

    //search box animation
    if (sInview) {
      SRanimation.start({
        y: "0",
        opacity: 1,
        transition: {
          delay: 0.7,
          ease: "linear",
        },
      });
    } else {
      SRanimation.start({
        y: "-10vh",
        opacity: 0,
      });
    }
  }, [headingInView, imgInView, sInview]);

  const onSearchHandler = (e) => {
    e.preventDefault();
    if (roomTypeValue === "select_room_type") {
      toast.error("Select a Room Type Value");
      return;
    }
    if (cityValue === "select_city") {
      toast.error("Select a city type please");
      return;
    }
    router.push(`/listing?roomType=${roomTypeValue}&city=${cityValue}`);
  };

  return (
    <>
      <section className="banner-area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="banner-content">
                <motion.h1
                  className="banner-two-heading"
                  ref={headingRef}
                  animate={Hanimation}
                >
                  Find Nearby
                  <Swiper
                    className="banner-swiper"
                    autoplay={{
                      delay: 1500,
                      pauseOnMouseEnter: false,
                    }}
                    loop={true}
                    modules={[Autoplay]}
                  >
                    <SwiperSlide>
                      <span className="color-0ec6c6">Pgs</span>
                    </SwiperSlide>

                    <SwiperSlide>
                      <span className="color-0ec6c6">Rooms</span>
                    </SwiperSlide>

                    {/* <SwiperSlide>
                      Find Nearby <span className="color-0ec6c6">Apartments</span>
                    </SwiperSlide> */}
                  </Swiper>
                </motion.h1>

                {/* <p>Expolore top-rated attractions, activities and more...</p> */}

                <motion.form ref={sref} animate={SRanimation}>
                  <div className="row m-0 align-items-center">
                    {/* <div className="col-lg-4 col-md-12 p-0">
                      <div className="form-group">
                        <label>
                          <i className="flaticon-search"></i>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="What are you looking for?"
                        />
                      </div>
                    </div> */}

                    <div className="col-lg-4 col-md-6 p-0">
                      <div className="form-group">
                        {/* <label>
                          <i className="flaticon-pin"></i>
                        </label> */}
                        <select
                          value={cityValue}
                          onChange={(ele) => {
                            setCityValue(ele.target.value);
                          }}
                          className="banner-form-select-two"
                        >
                          <option value="select_city">Select City</option>
                          {cities.map((ele) => (
                            <option value={ele.slug} key={ele.id}>
                              {ele.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6 p-0">
                      <div className="form-group category-select">
                        {/* <label className="category-icon">
                          <i className="flaticon-category"></i>
                        </label> */}
                        <select
                          value={roomTypeValue}
                          onChange={(ele) => {
                            setRoomTypeValue(ele.target.value);
                          }}
                          className="banner-form-select-two"
                        >
                          <option value="select_room_type">
                            Select Room Type
                          </option>
                          {roomTypes.map((ele) => (
                            <option value={ele.slug} key={ele.id}>
                              {ele.typeOfRoom}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-12 p-0">
                      <div className="submit-btn">
                        <button type="submit" onClick={onSearchHandler}>
                          Search Now
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.form>

                {/* <ul className='popular-search-list'>
                  <li>Popular:</li>
                  <li>
                    <Link href="/grid-listings-with-map">
                      <a>Pg's</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/grid-listings-with-map">
                      <a>Hotels</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/grid-listings-with-map">
                      <a>Apartments</a>
                    </Link>
                  </li>
                </ul> */}
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <motion.div className="banner-image">
                <motion.img
                  src="/images/banner-img1.png"
                  alt="image"
                  ref={imgRef}
                  animate={IManimation}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
