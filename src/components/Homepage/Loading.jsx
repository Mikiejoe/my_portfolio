import React from "react";
import Slider from "react-slick";

function Loading() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const items = [1, 2, 3, 4];
  return (
    <div className="slider-container p-4">
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={item} className="space-y-1 px-2 py-1flex flex-col rounded-md h-64">
            <div className="bg-gray-500 h-48 rounded-md animate-pulse"></div>
            <div className="bg-gray-400 h-4 mt-2 rounded-md w-1/2 animate-pulse"></div>
            <div className="bg-gray-300 h-2 rounded-md animate-pulse"></div>
            <div className="bg-gray-300 h-2 rounded-md animate-pulse"></div>
            <div className="bg-gray-300 h-2 rounded-md w-10/12 animate-pulse"></div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Loading;
