import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const LibraryOpt = () => {
  const location = useLocation();
  let display = "hidden";
  if (location.pathname.includes("collection")) {
    display = "block";
  }

  return (
    <div className={`w-full h-full ${display}`}>
      <div className="p-1">
        <ul className="flex items-center">
          <li className="w-full h-full">
            <NavLink
              activeClassName="bg-gray_3e3e3e text-gray-300"
              to="/browser/collection/playlists"
              className="block py-2 text-sm text-center font-semibold rounded-md text-gray-100"
            >
              Playlists
            </NavLink>
          </li>
          <li className="w-full h-full">
            <NavLink
              activeClassName="bg-gray_3e3e3e text-gray-300"
              to="/browser/collection/podcasts"
              className="block py-2 text-sm text-center font-semibold rounded-md text-gray-100"
            >
              Podcasts
            </NavLink>
          </li>
          <li className="w-full h-full">
            <NavLink
              activeClassName="bg-gray_3e3e3e text-gray-300"
              to="/browser/collection/artists"
              className="block py-2 text-sm text-center font-semibold rounded-md text-gray-100"
            >
              Artists
            </NavLink>
          </li>
          <li className="w-full h-full">
            <NavLink
              activeClassName="bg-gray_3e3e3e text-gray-300"
              to="/browser/collection/albums"
              className="block py-2 text-sm text-center font-semibold rounded-md text-gray-100"
            >
              Albums
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LibraryOpt;
