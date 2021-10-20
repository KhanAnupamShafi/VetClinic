import React from "react";
import TextLoop from "react-text-loop";
import Intro from "../../components/Intro/Intro";
import Services from "../../components/Services/Services";
import vid from "../../images/video/pet.mp4";
import "./Home.css";

const home = () => {
  return (
    <>
      <div className="">
        <div className="container-video">
          <video
            autoPlay
            loop
            muted
            style={{ opacity: "95%", filter: `brightness(50%)` }}
            className="hero-video hidden lg:block"
            poster="https://www.olathehealth.org/wp-content/themes/olathe/assets/images/Dr.jpg"
          >
            <source src={vid} type="video/mp4" />
          </video>

          <div className="content">
            <div className="sub-content">
              <h1 className="leading-9 lg:leading-1">
                A higher standard of care for your pets.
              </h1>
              <p className="leading-5 py-8 lg:leading-9">
                We strive to practice the highest quality of veterinary services
                using state of the art technology and techniques.
              </p>
              <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold rounded w-60 m-auto">
                Let's go!
              </button>
            </div>
          </div>
        </div>

        <div
          className="hero-container flex lg:hidden px-3 mx-auto  flex-wrap flex-col md:flex-row items-center"
          style={{
            height: "100vh",
          }}
          aria-hidden="true"
        ></div>

        {/* /* ------------------------------ Intro section ----------------------------- */}
        <Intro />

        {/* /* ---------------------------- Services Section ---------------------------- */}

        <section id="services" className="bg-white border-b pt-8">
          <div
            className="mx-auto py-24 px-5 pt-4 pb-12 bg-fixed	bg-cover bg-center"
            style={{
              backgroundImage: `url("https://i.ibb.co/BCDSrNv/bg2-2.jpg")`,
            }}
          >
            <div className="lg:w-full mx-auto">
              <div className="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4">
                <div className="text-center m-auto text-textWhite w-50">
                  <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center">
                    Services
                  </h1>
                </div>
                <div className="w-full mb-5">
                  <div className="h-2 bg-black mx-auto gradient w-60 opacity-80 my-0 py-0 rounded-t"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="container mx-auto flex flex-wrap r px-5 pt-4 pb-12">
            {/* services */}
            <Services />
          </div>

          <div className="container mx-auto flex flex-wrap  px-5 pt-4 pb-12 bg-textWhite text-textWhite">
            <p className=""> </p>
            <h1 className="w-full my-2 text-5xl text-primary font-bold leading-tight text-center text-gray-100">
              A Few Kind Words{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-full text-center text-gray-600 text-5xl md:text-sm pt-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                  clipRule="evenodd"
                />
              </svg>
            </h1>

            <div className="w-full mb-5">
              <div className="h-2 bg-black mx-auto gradient w-64 opacity-95 my-0 py-0 rounded-t"></div>
            </div>
            {/* testimonial */}

            <div className="mx-auto p-6 flex flex-col overflow-hidden">
              <div
                className="lg:h-auto bg-gray  rounded-t rounded-b-none py-3 shadow"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  color: "#224e8d",
                }}
              >
                <TextLoop noWrap={false}>
                  <span className="">
                    <a href="/" className="">
                      <p className="lg:w-full text-gray-800 text-base px-6 mb-5">
                        "Literally the best vet experience I’ve ever had with
                        any of my pets! I was up from St. Clair Shores with my
                        lab who’s ears were bothering him. They squeezed us in
                        same day and were so sweet and nice! Thank you so much!"
                      </p>
                    </a>
                  </span>
                  <span className="">
                    <a href="/" className="">
                      <p className="text-gray-800 text-base px-6 mb-5">
                        "Extremely well! We are moving from the area otherwise
                        we would use Vethouse forever! They loved our dog. They
                        were very responsive and always helpful. So pleasant to
                        work with them. Defintely get to them in future..."
                      </p>
                    </a>
                  </span>
                  <span className="">
                    <a href="/" className="">
                      <p className="text-gray-800 text-base px-6 mb-5">
                        "I have an eight year old Lab who is now finally
                        mellowed out a bit. I also have a two year old puggle
                        who is full of energy! I gives me great piece of mind to
                        know that my dogs are cared for while I am stuck at work
                        during the day.."
                      </p>
                    </a>
                  </span>
                </TextLoop>{" "}
              </div>
              <div className="flex-none mt-auto bg-gray rounded-b rounded-t-none overflow-hidden shadow p-6">
                <div className="flex items-center justify-center">
                  <button className="mx-auto disabled:opacity-10 lg:mx-0 hover:underline gradient text-white font-bold rounded-full  py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline">
                    <TextLoop>
                      <span>- Karen V</span>
                      <span>- Andy M</span>
                      <span>- Debbie K</span>
                    </TextLoop>
                  </button>
                </div>
              </div>
            </div>
            {/* /* ---- end ----- */}
          </div>
          <div className="pt-12 mt-12 text-textWhite" style={{}}>
            <img
              className="mx-auto object-fill"
              src="https://i.ibb.co/f97BdBV/shutterstock-1042071foot-min.jpg"
              alt=""
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default home;
