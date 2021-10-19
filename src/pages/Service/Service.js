import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const Service = () => {
  const { id } = useParams();

  const [services, setServices] = useState([]);
  const [service, setService] = useState({});

  useEffect(() => {
    fetch("/servicesData.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  //side-effect

  useEffect(() => {
    const serviceFound = services.find((service) => service.id === id); //suiteID is string url

    setService(serviceFound);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [services]);

  return (
    <main>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="md:mx-auto md:container px-4">
          <div className="pt-10 md:pt-40">
            <div className="container mx-auto">
              <div className="flex flex-wrap items-center pb-12">
                <div className="md:w-1/2 lg:w-2/3 w-full xl:pr-20 md:pr-6">
                  <div className="py-2 text-color">
                    <h1 className="text-2xl lg:text-6xl md:leading-snug tracking-tighter f-f-l font-black">
                      {service?.title}
                    </h1>
                    <p
                      role="contentinfo"
                      className="text-lg lg:text-3xl lg:leading-7 md:leading-10 f-f-r py-4 md:py-8"
                    >
                      {service?.info}
                    </p>
                    <Link to="/appointment">
                      <button className="flex items-center cursor-pointer pb-4 md:pb-0 focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:outline-none">
                        <span
                          aria-label="lets get started"
                          role="button"
                          className="focus outline-none f-f-r text-lg lg:text-2xl font-semibold underline text-secondary"
                        >
                          Book Appointment Now
                        </span>
                        <div className="pl-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M13.1719 12L8.22192 7.04999L9.63592 5.63599L15.9999 12L9.63592 18.364L8.22192 16.95L13.1719 12Z"
                              fill="#D53F8C"
                            ></path>
                          </svg>
                        </div>
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="lg:w-1/3 md:w-1/2 w-full relative h-96 flex items-end justify-center">
                  <img
                    className="absolute w-full h-full inset-0 object-cover object-center rounded-md"
                    src={service?.image}
                    alt="A girl enjoying in sunlight"
                  />
                  <div className="relative z-10 bg-white rounded shadow p-6 w-10/12 -mb-20">
                    <div className="flex items-center justify-between w-full sm:w-full mb-8">
                      <div className="flex items-center">
                        <div className="p-4 bg-yellow-200 rounded-md">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-discount"
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z"></path>
                            <line x1="9" y1="15" x2="15" y2="9"></line>
                            <circle cx="9.5" cy="9.5" r=".5"></circle>
                            <circle cx="14.5" cy="14.5" r=".5"></circle>
                            <path d="M5 7.2a2.2 2.2 0 0 1 2.2 -2.2h1a2.2 2.2 0 0 0 1.55 -.64l.7 -.7a2.2 2.2 0 0 1 3.12 0l.7 .7a2.2 2.2 0 0 0 1.55 .64h1a2.2 2.2 0 0 1 2.2 2.2v1a2.2 2.2 0 0 0 .64 1.55l.7 .7a2.2 2.2 0 0 1 0 3.12l-.7 .7a2.2 2.2 0 0 0 -.64 1.55 v1a2.2 2.2 0 0 1 -2.2 2.2h-1a2.2 2.2 0 0 0 -1.55 .64l-.7 .7a2.2 2.2 0 0 1 -3.12 0l-.7 -.7a2.2 2.2 0 0 0 -1.55 -.64h-1a2.2 2.2 0 0 1 -2.2 -2.2v-1a2.2 2.2 0 0 0 -.64 -1.55l-.7 -.7a2.2 2.2 0 0 1 0 -3.12l.7 -.7a2.2 2.2 0 0 0 .64 -1.55 v-1"></path>
                          </svg>
                        </div>
                        <div className="ml-6">
                          <p className="mb-1 leading-5 text-gray-800 font-bold text-2xl">
                            {service?.clients}
                          </p>
                          <p className="text-gray-600 text-sm tracking-normal font-normal leading-5">
                            Happy Clients
                          </p>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center pl-3 text-green-400">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-trending-up text-green-700"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z"></path>
                            <polyline points="3 17 9 11 13 15 21 7"></polyline>
                            <polyline points="14 7 21 7 21 14"></polyline>
                          </svg>
                          <p className="text-green-700 text-xs tracking-wide font-bold leading-normal pl-1">
                            {service?.occupency}%
                          </p>
                        </div>
                        <p className="font-normal text-xs text-right leading-4 text-green-700 tracking-normal">
                          Increase
                        </p>
                      </div>
                    </div>
                    <div className="relative mb-3">
                      <hr className="h-1 rounded-sm bg-gray-200" />
                      <hr className="absolute top-0 h-1 w-11/12 rounded-sm bg-indigo-700" />
                    </div>
                    <h2 className="text-base text-gray-600 font-normal tracking-normal leading-5">
                      Pets Hosted
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Service;
