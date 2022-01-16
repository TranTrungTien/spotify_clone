import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";

const Center = ({
  isEndedList,
  handlePlay,
  handleChangeSong,
  handleChangeTime,
  preview_url,
}) => {
  const preRef = useRef();
  const nextRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    preRef.current = document.querySelector("#previous");
    nextRef.current = document.querySelector("#next");
  }, []);
  useEffect(() => {
    if (isEndedList) {
      setIsPlaying((pre) => false);
    }
  }, [isEndedList]);

  const handlePlaySong = (e) => {
    console.log("update handlePlaySong");
    if (!preview_url) {
      console.log("song null");
      return;
    }
    let played = !isPlaying;
    if (handlePlay) {
      if (!e?.target) {
        setIsPlaying((pre) => true);
        played = true;
      } else {
        setIsPlaying((pre) => !pre);
      }
      handlePlay(played);
    }
  };

  useEffect(() => {
    console.log("effect : ", preview_url);
    if (preview_url) {
      handlePlaySong();
    } else {
      setIsPlaying((pre) => false);
    }
  }, [preview_url]);

  const handleChangeSongPlay = (e) => {
    console.log("update handleChangeSongPlay");
    if (preRef.current.contains(e.target)) {
      if (handleChangeSong) {
        handleChangeSong(false);
      }
    } else if (nextRef.current.contains(e.target)) {
      if (handleChangeSong) {
        handleChangeSong(true);
      }
    }
  };

  const handleChangeT = (e) => {
    console.log("update handleChangeT");
    if (!handleChangeTime) return;
    handleChangeTime(e.target.value);
  };

  return (
    <div className="flex-1 self-center h-full">
      <div className="flex flex-col justify-center items-center h-full space-y-2 text-gray-300">
        <div className="flex justify-center items-center space-x-5 ">
          <button className="p-2 ">
            <svg
              role="img"
              height="16"
              width="16"
              viewBox="0 0 16 16"
              className="text-gray-400 hover:text-gray-100"
              fill="currentColor"
            >
              <path d="M4.5 6.8l.7-.8C4.1 4.7 2.5 4 .9 4v1c1.3 0 2.6.6 3.5 1.6l.1.2zm7.5 4.7c-1.2 0-2.3-.5-3.2-1.3l-.6.8c1 1 2.4 1.5 3.8 1.5V14l3.5-2-3.5-2v1.5zm0-6V7l3.5-2L12 3v1.5c-1.6 0-3.2.7-4.2 2l-3.4 3.9c-.9 1-2.2 1.6-3.5 1.6v1c1.6 0 3.2-.7 4.2-2l3.4-3.9c.9-1 2.2-1.6 3.5-1.6z"></path>
            </svg>
          </button>
          <button className="p-2" id="previous" onClick={handleChangeSongPlay}>
            <svg
              role="img"
              height="16"
              width="16"
              viewBox="0 0 16 16"
              className="text-gray-400 hover:text-gray-100"
              fill="currentColor"
            >
              <path d="M13 2.5L5 7.119V3H3v10h2V8.881l8 4.619z"></path>
            </svg>
          </button>
          <button
            className="bg-gray-400 p-2 rounded-full hover:bg-gray-200"
            onClick={handlePlaySong}
          >
            {/* /////////////////////////////// */}

            {!isPlaying ? (
              <svg
                role="img"
                height="16"
                width="16"
                viewBox="0 0 16 16"
                className="text-black"
                fill="currentColor"
              >
                <path d="M4.018 14L14.41 8 4.018 2z"></path>
              </svg>
            ) : (
              <svg
                role="img"
                height="16"
                width="16"
                className="text-black"
                fill="currentColor"
              >
                <path fill="none" d="M0 0h16v16H0z"></path>
                <path d="M3 2h3v12H3zm7 0h3v12h-3z"></path>
              </svg>
            )}

            {/* /////////////////////////// */}
          </button>
          <button className="p-2" id="next" onClick={handleChangeSongPlay}>
            <svg
              role="img"
              height="16"
              width="16"
              viewBox="0 0 16 16"
              className="text-gray-400 hover:text-gray-100"
              fill="currentColor"
            >
              <path d="M11 3v4.119L3 2.5v11l8-4.619V13h2V3z"></path>
            </svg>
          </button>
          <button className="p-2">
            <svg
              role="img"
              height="16"
              width="16"
              viewBox="0 0 16 16"
              className="text-gray-400 hover:text-gray-100"
              fill="currentColor"
            >
              <path d="M5.5 5H10v1.5l3.5-2-3.5-2V4H5.5C3 4 1 6 1 8.5c0 .6.1 1.2.4 1.8l.9-.5C2.1 9.4 2 9 2 8.5 2 6.6 3.6 5 5.5 5zm9.1 1.7l-.9.5c.2.4.3.8.3 1.3 0 1.9-1.6 3.5-3.5 3.5H6v-1.5l-3.5 2 3.5 2V13h4.5C13 13 15 11 15 8.5c0-.6-.1-1.2-.4-1.8z"></path>
            </svg>
          </button>
        </div>
        <div className="flex items-center text-xs w-full font-thin">
          <span id="currenttime" className="w-6 inline-block"></span>
          <div className="flex-1 mx-3 cursor-pointer">
            <div className="w-full flex items-center progressbar">
              <input
                type="range"
                min="0"
                max="100"
                defaultValue="0"
                id="progress"
                onChange={handleChangeT}
              />
            </div>
          </div>
          <span className="w-6 inline-block">0:30</span>
        </div>
      </div>
    </div>
  );
};

Center.propTypes = {
  handleChangeSong: PropTypes.func,
  handlePlay: PropTypes.func,
  handleChangeTime: PropTypes.func,
  isEndedList: PropTypes.bool,
  preview_url: PropTypes.string,
};

export default Center;
