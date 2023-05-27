import Link from "next/link";
import React from "react";

import { motion } from "framer-motion";

export default function Products() {
  const data = [
    {
      title: "Clean bathroom",
      img: "images/home/product_1.png",
    },
    {
      title: "Neat environment",
      img: "images/home/product_2.png",
    },
    {
      title: "Cozy beds",
      img: "images/home/product_3.png",
    },
    {
      title: "Spacious cupboard",
      img: "images/home/product_4.png",
    },
    {
      title: "Desks",
      img: "images/home/product_5.png",
    },
    {
      title: "Entertainment area",
      img: "images/home/product_6.png",
    },
    {
      title: "Clean restrooms",
      img: "images/home/product_1.png",
    },
    {
      title: "Clean restrooms",
      img: "images/home/product_2.png",
    },
  ];

  return (
    <motion.div className="container md:mt-12  mt-10 pb-[50px] comfort 2xl:px-0 px-[15px]">
      <motion.div
        initial={{ opacity: 0, y: "10vh" }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.9 }}
        transition={{ staggerChildren: 0.9, duration: 0.9 }}
      >
        <h2 className="xl:text-[86px] lg:text-[66px] md:text-[56px] sm:text-[46px] text-3xl font-extrabold md:mt-[90px] mt-10 md:mb-[80px] mb-5 text-center leading-[1]">
          The Comfort of Your{" "}
          <span className="bg-gradient-to-r font-ananda from-yellow to-green text-transparent bg-clip-text font-extrabold inline-block">
            Home
          </span>
        </h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: "10vh" }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.9 }}
        transition={{ staggerChildren: 0.9, duration: 0.9 }}
      >
        <p className="xl:text-[18px] text-[16px] text-black/50 leading-[30px] xl:w-[50vw] mx-auto text-center mb-24">
          Living in a new city is very challenging for everyone and notably, if
          you’re a young person it will be quite scary as well. Missing your
          comforts of home, the warmness, the emotions and it is difficult to
          adjust. Worry no more because Cozy Stay helps you locate the optimal
          coliving spaces that add comfort and solace to your home by mirroring
          the amenities you call your own.
        </p>
      </motion.div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  md:gap-8 gap-5">
        {data.map((detail, index) => {
          return (
            <motion.div
              initial={{ opacity: 0, y: "10vh" }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.9 }}
              transition={{ staggerChildren: 0.9, duration: 0.9 }}
            >
              <div className={`relative `}>
                <div className="rounded-xl p-3 bg-white md:shadow-none shadow-[0_1px_1rem_#00000026]">
                  <Link href="/product-details">
                    <a>
                      <img
                        src={detail.img}
                        className="rounded-xl w-full hover:scale-105 transition-all duration-300"
                        alt="image"
                      />
                    </a>
                  </Link>
                </div>
                <h4 className="text-[.95rem] text-[#6f726f] font-normal font-work text-center relative md:-top-8 -top-12">
                  {detail.title}
                </h4>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
