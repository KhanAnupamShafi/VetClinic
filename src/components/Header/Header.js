import React, { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { user, logOut } = useAuth();

  useEffect(() => {
    window.onscroll = function () {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  }, []);

  return (
    <>
      <div className="leading-normal tracking-normal gradient">
        <nav
          id="header"
          className={
            scrolled
              ? "fixed w-full z-30 top-0 text-blue-500 navbar-container floatingNav"
              : "relative w-full z-30 top-0 text-white navbar-container gradient"
          }
        >
          <div className="w-full relative container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
            <div className="pl-4 flex items-center">
              <a
                className="px-3 py-2 flex items-center uppercase leading-snug hover:opacity-75 text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
                href="/"
              >
                <svg
                  className="h-8 fill-current inline"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512.005 512.005"
                >
                  <rect
                    fill="#2a2a31"
                    x="16.539"
                    y="425.626"
                    width="479.767"
                    height="50.502"
                    transform="matrix(1,0,0,1,0,0)"
                  />
                  <path
                    className="plane-take-off"
                    d=" M 510.7 189.151 C 505.271 168.95 484.565 156.956 464.365 162.385 L 330.156 198.367 L 155.924 35.878 L 107.19 49.008 L 211.729 230.183 L 86.232 263.767 L 36.614 224.754 L 0 234.603 L 45.957 314.27 L 65.274 347.727 L 105.802 336.869 L 240.011 300.886 L 349.726 271.469 L 483.935 235.486 C 504.134 230.057 516.129 209.352 510.7 189.151 Z "
                  />
                </svg>
                LANDING
              </a>
            </div>
            <div className="block md:hidden pr-4">
              <button
                id="nav-toggle"
                className="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                onClick={() => setNavbarOpen(!navbarOpen)}
                aria-controls="mobile-menu"
              >
                <svg
                  className="fill-current h-6 w-6"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
              </button>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <NavLink
                  to="/home"
                  className=" hover:bg-gray-700  px-3 py-2 rounded-md text-xl font-medium"
                >
                  Home
                </NavLink>

                <a
                  href="/"
                  className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium"
                >
                  Team
                </a>

                <a
                  href="/"
                  className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium"
                >
                  Projects
                </a>

                <NavLink
                  to="/appointment"
                  className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium"
                >
                  Book Appointment
                </NavLink>

                <div className="py-1">
                  {!user.email ? (
                    <Link to="/login">
                      <button
                        id="navAction"
                        className="bg-transparent border uppercase  tracking-widest font-bold rounded-sm lg:my-2 px-6 shadow-2xl  focus:outline-none focus:shadow-outline transform-gpu transition hover:bg-btnHover hover:delay-150 hover:scale-105 duration-300 ease-in-out"
                      >
                        Sign In
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 ml-2 mb-1 inline"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                          />
                        </svg>
                      </button>
                    </Link>
                  ) : (
                    <>
                      <div className="w-full flex mx-auto justify-center gap-4 items-center">
                        <h1>Welcome, {user?.displayName}</h1>
                        <img
                          className="h-12 w-12 ml-0 rounded-full mx-auto"
                          src={user?.photoURL}
                          alt=""
                        />

                        <button
                          id="navAction"
                          className="bg-btn uppercase tracking-wider font-medium rounded-sm shadow-2xl lg:py-2 px-6  focus:outline-none focus:shadow-outline transform-gpu transition hover:bg-white hover:delay-150 hover:scale-105 duration-300 ease-in-out"
                          onClick={logOut}
                        >
                          Log Out
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 ml-2 mb-1 inline"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                            />
                          </svg>
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
          <Transition
            show={navbarOpen}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-50"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-95 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-50"
          >
            {() => (
              <div className="md:hidden" id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  <a
                    href="/"
                    className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Dashboard
                  </a>

                  <a
                    href="/"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Team
                  </a>

                  <a
                    href="/"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Projects
                  </a>

                  <a
                    href="/"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Calendar
                  </a>

                  <a
                    href="/"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Reports
                  </a>
                </div>
              </div>
            )}
          </Transition>

          <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
        </nav>
      </div>
    </>
  );
};

export default Header;
