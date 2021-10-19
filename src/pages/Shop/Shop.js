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
    <div className="py-16 sm:py-24 md:py-44 lg:py-20 px-4">
      <div className="py-16 sm:py-24 md:py-44 lg:py-20 px-4">
        <div className>
          <h1 className="xl:text-5xl pt-4 xl:pt-0 text-3xl text-gray-800 text-center font-extrabold mb-4">
            Welcome to Our Shop
          </h1>
          <p className="text-xl text-gray-600 text-center xl:w-3/5 mx-auto w-11/12">
            A Totally New Experience for You and Your Pet Choose from the most
            popular dog & cat food brands
          </p>
        </div>
        <ImageSlider foods={item} />
      </div>
    </div>
  );
};

export default Shop;
