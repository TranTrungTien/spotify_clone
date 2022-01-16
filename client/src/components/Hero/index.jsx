import PropTypes from "prop-types";
import React from "react";

const Hero = (props) => {
  const information = props.information;
  console.log(information);
  return (
    <section
      className={`w-full min-h-340 h-30vh p-8 text-white flex items-end justify-center -mt-62 bg-gradient-to-b from-gray-300 via-gray-500 to-gray-700`}
    >
      <div className="w-full h-full flex items-end space-x-5">
        <div className="">
          <div className="h-232 w-232 shadow-2xl">
            {information?.imageUrl ? (
              <img
                src={information?.imageUrl}
                alt="hero"
                className={`w-full h-full object-cover object-center rounded-sm ${
                  information?.artist && "rounded-full shadow-2xl"
                }`}
              />
            ) : (
              <div className="w-full h-full bg-gray-700 grid place-content-center rounded">
                <svg
                  id="music-note-four"
                  className="text-gray-400"
                  data-name="music-note-four"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 328.05 280.86"
                  fill="currentColor"
                  width="120"
                  height="120"
                >
                  <path
                    d="M287.5,241l20-143-162-5s-15-2-17,8c0,1-21,140-21,140s2,58-51,60-56-42-56-42,2-28,44-36,53,15,53,15l28-198s0-15,20-14l167,4s16-2,15,14c1,0-30,215-30,215s-4,54-64,46-37-56-37-56,9-19,44-22S287.5,241,287.5,241Z"
                    transform="translate(0 -25.45)"
                  />
                  <path
                    d="M314.5,76l-5-3-169-6-9,7s-1,6,4,6l168,4Z"
                    transform="translate(0 -25.45)"
                  />
                  <path d="M247.5,0" transform="translate(0 -25.45)" />
                </svg>
              </div>
            )}
          </div>
        </div>
        <div className="flex-1">
          <div className={`space-y-2 ${information?.artist && "space-y-5"}`}>
            <div>
              <span className="font-semibold text-sm text-gray-300 tracking-tighter">
                {information?.type}
              </span>
            </div>
            <div>
              <h1 className="text-8xl font-bold tracking-tighter max-w-5xl truncate">
                {information && information?.name}
              </h1>
            </div>
            <div className="text-sm font-bold text-gray-200 space-x-1">
              <span className={`${information?.artist && "text-base"}`}>
                {information?.description}
              </span>
              {/* <a href="/artist">xxx</a>
              <a href="/artist">xxx</a>
              <a href="/artist">xxx</a>
              <a href="/artist">xxx</a>
              <span className="text-sm text-gray-300 font-light">any more</span> */}
            </div>
            <div className="text-sm text-gray-300 font-light">
              <a
                href="author"
                className="text-base font-bold text-100 hover:underline"
              >
                {information?.owner?.display_name || information?.owner}
              </a>{" "}
              {information?.more && (
                <>
                  . <span>1234 likes</span> . <span>50 songs</span> .{" "}
                  <span>3hr 11min</span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  information: PropTypes.object,
};

export default Hero;
