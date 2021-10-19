import React from "react";
import Slider from "react-slick";

const Intro = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2700,
    pauseOnHover: false,
  };

  return (
    <div className="mx-auto px-6 py-12">
      <div className="flex flex-col justify-center items-center w-full">
        <h1 className="f-f-d-s text-2xl lg:text-6xl leading-normal tracking-wide text-gray-800 text-center ">
          Welcome to <span className="text-textRed">Vethouse</span> Animal
          Hospital
        </h1>
      </div>
      <div className="lg:flex items-center justify-center mt-4 lg:mt-32">
        <div className="lg:w-2/3 h-1/3 px-5">
          <Slider {...settings}>
            <div className="pl-5">
              <img
                src="https://i.ibb.co/C2xdP1g/gray-puppy-vet-min.png"
                className="w-full h-full"
                alt="An elegant bathroom with a bathtub,basin and other fancy items"
              />
            </div>

            <div className="pl-5">
              <img
                src="https://i.ibb.co/3sVsHXv/spaniel-puppy-playing-studio-cute-doggy-pet-is-sitting-isolated-blue-background-cavalier-king-charle.png"
                className="w-full h-full"
                alt="An elegant bathroom with a bathtub,basin and other fancy items"
              />
            </div>
            <div className="pl-5">
              <img
                src="https://i.ibb.co/g34NV2H/doctor-testing-animal-with-stethoscope-min.png"
                className="w-full h-full"
                alt="An elegant bathroom with a bathtub,basin and other fancy items"
              />
            </div>
          </Slider>
        </div>
        <div className="mt-4 z-10 lg:mt-0 py-12 px-8 lg:px-12 bg-secondary lg:w-2/5 lg:-ml-12 text-textWhite f-f-l">
          <h2 className="capitalize lg:text-4xl text-2xl font-black leading-9 pb-6 f-f-d-s">
            We are here to help with all of your pet's <br />
            <span className="text-textRed">Needs</span>
          </h2>

          <div className="pb-6 leading-6 f-f-l text-base lg:text-2xl">
            Since 1984, our Clinic has provided the pets and pet owners of the
            Anchorage community with exceptional veterinary care. We truly value
            the trust and continued relationships we have with our clients and
            work to ensure that they feel valued with every visit.
          </div>
          <button className="p-1 border-white  lg:text-2xl text-base leading-6 f-f-l font-bold border-b-8 hover:border-red-700 hover:ring-2 hover:ring-red-700">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Intro;
