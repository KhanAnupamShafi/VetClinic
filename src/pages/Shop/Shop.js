import React, { useEffect, useState } from "react";
import ImageSlider from "../../components/ImageSlider/ImageSlider";

const Shop = () => {
  const [item, setItem] = useState({});
  useEffect(() => {
    fetch("./shop.json")
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);
  return (
    <div className="mx-auto py-24 px-5 pt-4 pb-12  bg-card">
      <div
        className="mx-auto py-24 px-5 pt-4 pb-12 bg-fixed	bg-cover bg-center"
        style={{}}
      >
        <div
          className="lg:w-full mx-auto bg-fixed	bg-cover bg-center"
          style={{
            background: `linear-gradient(180deg, rgba(2,173,231,0.1), rgba(2,173,231,0.3)), url("https://i.ibb.co/SxrrJFf/pet-treat-bones.jpg")`,
          }}
        >
          <div className="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4">
            <div className="text-center m-auto  w-50">
              <h1
                className="text-5xl pt-4 xl:pt-0 text-3x text-center font-extrabold mb-4"
                style={{ color: "#c23b12" }}
              >
                Welcome to Our Shop
              </h1>
              <div className="w-full mb-5">
                <div className="h-2 bg-black mx-auto gradient w-60 opacity-80 my-0 py-0 rounded-t"></div>
              </div>
              <p className="text-xl text-bold text-white text-center xl:w-3/5 mx-auto w-11/12">
                A Totally New Experience for You and Your Pet Choose from the
                most popular dog & cat food brands
              </p>
            </div>
          </div>
        </div>
      </div>
      <ImageSlider foods={item} />
    </div>
  );
};

export default Shop;
