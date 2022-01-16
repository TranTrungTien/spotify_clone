import React from "react";

const PlaylistsCollection = () => {
  return (
    <div className="w-full h-screen text-gray-200 flex flex-col justify-center items-center space-y-4">
      <div>
        <svg
          width="65"
          height="65"
          viewBox="0 0 80 81"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Playlist Icon</title>
          <path
            d="M25.6 11.565v45.38c-2.643-3.27-6.68-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4 14.4-6.46 14.4-14.4v-51.82l48-10.205V47.2c-2.642-3.27-6.678-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4S80 64.17 80 56.23V0L25.6 11.565zm-11.2 65.61c-6.176 0-11.2-5.025-11.2-11.2 0-6.177 5.024-11.2 11.2-11.2 6.176 0 11.2 5.023 11.2 11.2 0 6.174-5.026 11.2-11.2 11.2zm51.2-9.745c-6.176 0-11.2-5.024-11.2-11.2 0-6.174 5.024-11.2 11.2-11.2 6.176 0 11.2 5.026 11.2 11.2 0 6.178-5.026 11.2-11.2 11.2z"
            fill="currentColor"
            fill-rule="evenodd"
          ></path>
        </svg>
      </div>
      <h1 className="text-3xl font-bold">Follow your first Playlists</h1>
      <p className="text-base font-semibold ">
        Follow Playlists you like by tapping the follow button.
      </p>
      <button className="px-10 py-2 rounded-full bg-white text-black font-sm font-semibold">
        FIND PLAYLISTS
      </button>
    </div>
  );
};

export default PlaylistsCollection;
