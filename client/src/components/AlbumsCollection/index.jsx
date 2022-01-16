import React from "react";

const AlbumsCollection = () => {
  return (
    <div className="w-full h-screen text-gray-200 flex flex-col justify-center items-center space-y-4">
      <div>
        <svg
          width="65"
          height="65"
          viewBox="0 0 52 52"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Album</title>
          <path
            d="M26 0.00100708C11.641 0.00100708 0 11.642 0 26.001C0 40.36 11.641 52.001 26 52.001C40.36 52 52 40.36 52 26C52 11.64 40.36 0.00100708 26 0.00100708ZM26 50C12.767 50 2 39.234 2 26C2 12.766 12.767 2.00001 26 2.00001C39.234 2.00001 50 12.766 50 26C50 39.234 39.234 50 26 50ZM26 18C21.582 18 18 21.582 18 26C18 30.418 21.582 34 26 34C30.418 34 34 30.418 34 26C34 21.582 30.419 18 26 18ZM26 32C22.692 32 20 29.309 20 26C20 22.691 22.692 20 26 20C29.308 20 32 22.691 32 26C32 29.309 29.309 32 26 32Z"
            fill="currentColor"
            fill-rule="evenodd"
          ></path>
        </svg>
      </div>
      <h1 className="text-3xl font-bold">Follow your first Albums</h1>
      <p className="text-base font-semibold ">
        Follow Albums you like by tapping the follow button.
      </p>
      <button className="px-10 py-2 rounded-full bg-white text-black font-sm font-semibold">
        FIND ALBUMS
      </button>
    </div>
  );
};

export default AlbumsCollection;