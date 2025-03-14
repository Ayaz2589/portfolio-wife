"use client";

import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const YSLProjectView = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // show one image at a time
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    centerPadding: "90px", // spacing around the slides
  };

  return (
    <motion.section
      className="mx-auto mb-28 max-w-[75rem] scroll-mt-28 p-5 text-center leading-8 sm:mb-40 sm:rounded-2xl sm:bg-gray-100/60 sm:leading-10 sm:shadow-sm mt-5"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      {/* Page Title */}
      <h1 className="mb-4 text-4xl font-bold">YSL Architecture Projects</h1>

      {/* Carousel Container */}
      <div className="mx-auto mb-8 max-w-3xl">
        <Slider {...sliderSettings}>
          <div className="px-2">
            <img
              src="https://ayaz2589-images.s3.us-east-1.amazonaws.com/tasnuva/portfolio-site/projects/ysl/2.JPG"
              alt="Architecture Project 1"
              className="h-auto w-full rounded-lg object-cover shadow-md"
            />
          </div>
          <div className="px-2">
            <img
              src="https://ayaz2589-images.s3.us-east-1.amazonaws.com/tasnuva/portfolio-site/projects/ysl/3.JPG"
              alt="Architecture Project 2"
              className="h-auto w-full rounded-lg object-cover shadow-md"
            />
          </div>
          <div className="px-2">
            <img
              src="https://ayaz2589-images.s3.us-east-1.amazonaws.com/tasnuva/portfolio-site/projects/ysl/4.JPG"
              alt="Architecture Project 3"
              className="h-auto w-full rounded-lg object-cover shadow-md"
            />
          </div>
          <div className="px-2">
            <img
              src="https://ayaz2589-images.s3.us-east-1.amazonaws.com/tasnuva/portfolio-site/projects/ysl/5.JPG"
              alt="Architecture Project 4"
              className="h-auto w-full rounded-lg object-cover shadow-md"
            />
          </div>
          <div className="px-2">
            <img
              src="https://ayaz2589-images.s3.us-east-1.amazonaws.com/tasnuva/portfolio-site/projects/ysl/6.JPG"
              alt="Architecture Project 5"
              className="h-auto w-full rounded-lg object-cover shadow-md"
            />
          </div>
        </Slider>
      </div>

      {/* Introductory Text */}
      <p className="mb-8 text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel urna at
        arcu blandit dapibus. Proin vel dignissim metus, at congue massa. Morbi
        lacinia, magna vitae aliquet gravida, nibh metus placerat ex, sed
        egestas dui eros in nibh. Integer sed massa ac ante gravida dignissim.
      </p>

      {/* Additional Text Section */}
      <div className="mt-8">
        <p className="text-lg">
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; In sit amet nisl ac elit cursus facilisis. Sed
          varius, sapien eu convallis tristique, ex lorem porttitor nunc, vel
          consequat ligula justo id ex. Curabitur finibus efficitur turpis, at
          pharetra mauris aliquet sit amet.
        </p>
      </div>
    </motion.section>
  );
};

export default YSLProjectView;
