import React from "react";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";

const GetStated = () => {
  return (
    <div className="overflow-x-hidden w-screen">
      <Header />
      <section
        className="bg-blue_2941ab w-screen h-850 overflow-x-hidden"
        style={{
          background: "url(	https://www-growth.scdn.co/static/home/bursts.svg)",
          backgroundPosition: "46% 4%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "175%",
          backgroundColor: "#2941ab",
        }}
      >
        <div className="px-14% w-full h-full text-center">
          <div className="flex flex-col items-center justify-center w-full h-full space-y-8">
            <h1
              style={{
                lineHeight: "10rem ",
                fontSize: "8.7rem",
                letterSpacing: "-3px",
              }}
              className="text-green_1ed760 font-bold"
            >
              <span className="pr-56">Listening is</span>{" "}
              <span className="pl-56">everything</span>
            </h1>
            <span className="text-green_1ed760 font-normal">
              Millions of songs and podcasts. No credit card needed.
            </span>
            <button className="bg-green_1ed760 text-blue-700 px-10 py-3 rounded-full font-medium">
              GET SPOTIFY FREE
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default GetStated;
