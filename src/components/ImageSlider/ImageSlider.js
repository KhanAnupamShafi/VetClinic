import React, { useState } from "react";

import Slider from "react-slick";
import "./ImageSlider.css";

const NextArrow = ({ onClick }) => {
  return (
    <div className="nextArrow" onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 8l4 4m0 0l-4 4m4-4H3"
        />
      </svg>
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div className="prevArrow" onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
        />
      </svg>
    </div>
  );
};

const ImageSlider = ({ foods, images, slidesToShow = 3 }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    dots: false,
    speed: 300,
    slidesToShow: slidesToShow,
    centerPadding: "0",
    swipeToSlide: true,
    focusOnSelect: true,
    nextArrow: <NextArrow onClick />,
    prevArrow: <PrevArrow onClick />,
    beforeChange: (current, next) => setImageIndex(next),
    responsive: [
      {
        breakpoint: 1490,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const { item } = foods;

  //   console.log(breakfast.photo);
  const templateImages = item?.map((image, idx) => {
    if (image !== null) {
      return (
        <div
          className={idx === imageIndex ? "activeSlide" : "slide"}
          key={image.id}
        >
          <div className="slideWrapper">
            {/* <img src={image.src} alt={image.alt} /> */}
            <div
              tabIndex="0"
              aria-label="group of cards"
              className="w-5/6 mx-auto focus:outline-none flex md:flex sm:flex flex-wrap md:justify-around sm:justify-around pt-8"
            >
              <div
                tabIndex="0"
                aria-label="card 1"
                className="focus:outline-none  sm:w-5/12 sm:max-w-xs relative pb-16 lg:pb-10 xl:max-w-sm lg:w-full w-11/12 mx-auto sm:mx-0"
              >
                <div className="shadow h-64 rounded ">
                  <img
                    className="focus:outline-none h-full w-full object-contain overflow-hidden rounded "
                    src={require(`../../images${image?.photo}`).default}
                    alt={image.alt}
                  />
                </div>

                <div className="relative px-4 -mt-16  ">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="flex flex-col lg:flex-row py-2 items-baseline">
                      <span className="bg-purple-200 text-purple-800 lg:text-sm px-2 lg:px-4 inline-block rounded-full  uppercase font-semibold tracking-wide">
                        New
                      </span>
                      <div className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                        &bull; {image?.stock}{" "}
                        <span className="italic lowercase">
                          remaining stocks
                        </span>
                      </div>
                    </div>

                    <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">
                      {image?.title}
                    </h4>

                    <div className="mt-1">
                      ${image?.price}.00
                      <span className="text-gray-600 text-sm"> /per</span>
                    </div>
                    <div className="mt-4">
                      <span className="text-blue-600 text-md font-semibold">
                        {image?.rating}/5 ratings{" "}
                      </span>
                      <span className="text-sm text-gray-600">
                        (based on {image?.reviews} ratings)
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  className="mt-5 bg-purple-500 text-white active:bg-purple-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return null;
  });

  return <Slider {...settings}>{templateImages}</Slider>;
};

export default ImageSlider;
