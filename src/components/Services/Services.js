import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/servicesData.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  console.log(services);

  return (
    <>
      {/* /* ---------------------------------- Services ---------------------------------- */}

      {services?.map((service) => (
        <div
          key={service?.id}
          tabIndex="0"
          aria-label="card"
          className="w-full bg-card md:w-1/2 p-6 flex flex-col sm:flex-row flex-grow flex-shrink focus:outline-none items-center"
        >
          <div className="lg:w-2/5 w-full">
            <img
              tabIndex="0"
              className="focus:outline-none w-full transform transition duration-500 hover:scale-y-125"
              src={service?.image}
              alt="pineapple"
              srcSet=""
            />
          </div>
          <div className="lg:w-3/5 w-full lg:pl-0 py-2 rounded-xl rounded-b-none overflow-hidden bg-textWhite shadow">
            <div className="lg:px-4 py-2 text-color">
              <h1
                tabIndex="0"
                className="focus:outline-none text-xl xl:text-4xl leading-snug f-f-l font-black"
              >
                {service?.title}
              </h1>
              <h2
                tabIndex="0"
                className="focus:outline-none lg:text-xl text-base leading-6 lg:leading-8 f-f-r py-4 lg:py-8"
              >
                {service?.info}
              </h2>
              <div className="flex items-center">
                <div className="m-auto">
                  <Link
                    className="w-1/2 text-white bg-btn border-l border-solid border-gray-800 hover:bg-btnHover hover:text-white active:bg-purple-600 font-bold uppercase text-base px-8 py-3 outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
                    to={`/service/${service.id}`}
                  >
                    <button
                      tabIndex="0"
                      className="bg-secondary flex text-white active:bg-purple-600 font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-350 transform hover:scale-105 f-f-l lg:text-lg leading-3 tracking-widest"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="#1ef3e5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="pl-2"> Learn More </span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Services;
