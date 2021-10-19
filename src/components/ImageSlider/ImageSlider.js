import React, { useState } from "react";

import Slider from "react-slick";
import "./ImageSlider.css";

const NextArrow = ({ onClick }) => {
  return (
    <div className="nextArrow" onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 far"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
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
        className="h-6 w-6 z-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
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
        breakpoint: 820,
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
                <div className="shadow h-64 rounded">
                  <img
                    className="focus:outline-none h-full w-full object-contain overflow-hidden rounded-full "
                    src={require(`../../images${image?.photo}`).default}
                    alt={image.alt}
                  />
                </div>
                <div className="p-6 shadow-lg w-11/12 mx-auto -mt-10 bg-primary rounded relative">
                  <h1
                    tabIndex="0"
                    className="focus:outline-none uppercase text-white text-center text-3xl pb-3"
                  >
                    {image.title}
                  </h1>
                  <p
                    tabIndex="0"
                    className="focus:outline-none text-lg text-white text-center pb-3"
                  >
                    {image.subtitle}
                  </p>
                  <p
                    tabIndex="0"
                    className="focus:outline-none text-sm text-white text-center"
                  >
                    Rating: {image.rating}
                  </p>
                  <a
                    className="focus:text-indigo-400 hover:text-indigo-400 text-indigo-300 cursor-pointer"
                    href="/"
                  >
                    <span className=""> {image.reviews} reviews</span>
                  </a>
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
