import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink, useHistory } from "react-router-dom";
import { uuid } from "../../Utils/uuid";
const Nav = () => {
  const currentUser = useSelector((state) => state.user.profile);
  const [myplaylist, setMyplaylist] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchPlaylist = async () => {
      const res = await axios.get(
        `http://localhost:3001/api/playlist/${currentUser.email}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const { myplaylist } = res.data;
      setMyplaylist(myplaylist);
    };
    if (currentUser?.email) {
      fetchPlaylist();
    }
  }, [currentUser?.email]);

  const onCreatePlaylist = async () => {
    const id = uuid();
    if (currentUser) {
      try {
        const res = await axios.post(
          "http://localhost:3001/api/playlist/create-playlist",
          {
            email: currentUser.email,
            playlist_id: id,
            name: "#My playlist",
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (res.data) {
          const res = await axios.get(
            `http://localhost:3001/api/playlist/${currentUser.email}`,
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          const { myplaylist } = res.data;
          setMyplaylist(myplaylist);
          history.push("/browser/myplaylists/" + id);
        }
      } catch (error) {
        console.log({ error });
      }
    }
  };
  return (
    <nav className="sticky w-full h-full z-20 bg-black p-2 flex flex-col justify-between items-start">
      <div className="w-full">
        <div>
          <div className="p-4">
            <Link to="/browser">
              <svg
                className="text-white h-11 w-132 fill-current"
                viewBox="0 0 63 20"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMin meet"
              >
                <g fillRule="evenodd" className="">
                  <path d="M61.842 9.506a1.02 1.02 0 0 1-1.023-1.024c0-.562.453-1.03 1.029-1.03a1.02 1.02 0 0 1 1.023 1.024 1.03 1.03 0 0 1-1.029 1.03m.006-1.952a.915.915 0 0 0-.922.928c0 .51.394.921.916.921a.916.916 0 0 0 .922-.927.908.908 0 0 0-.916-.922m.226 1.027l.29.406h-.244l-.26-.372h-.225v.372h-.204V7.912h.48c.249 0 .413.128.413.343 0 .176-.102.284-.25.326m-.172-.485h-.267v.34h.267c.133 0 .212-.065.212-.17 0-.11-.08-.17-.212-.17m-12.804-3.52a1.043 1.043 0 1 0-.001 2.086 1.043 1.043 0 0 0 0-2.087m.72 2.89h-1.454a.107.107 0 0 0-.106.107v6.346c0 .06.047.107.106.107h1.455a.107.107 0 0 0 .107-.107V7.572a.107.107 0 0 0-.107-.107m3.233.006v-.2c0-.592.227-.856.736-.856.303 0 .546.06.82.152a.106.106 0 0 0 .14-.102V5.24a.107.107 0 0 0-.076-.102 3.993 3.993 0 0 0-1.21-.174c-1.343 0-2.053.757-2.053 2.188v.308h-.699a.107.107 0 0 0-.107.106v1.257c0 .059.048.107.107.107h.699v4.99c0 .058.047.106.106.106h1.455a.107.107 0 0 0 .106-.107v-4.99h1.358l2.081 4.99c-.236.523-.468.628-.785.628-.257 0-.527-.077-.803-.228a.109.109 0 0 0-.084-.008.106.106 0 0 0-.063.058l-.493 1.081a.106.106 0 0 0 .045.138c.515.279.98.398 1.554.398 1.074 0 1.668-.5 2.191-1.847L60.6 7.617a.106.106 0 0 0-.099-.146h-1.514a.107.107 0 0 0-.1.072l-1.552 4.431-1.7-4.434a.106.106 0 0 0-.099-.069h-2.485m-5.577-.006h-1.6V5.828a.106.106 0 0 0-.107-.106h-1.455a.107.107 0 0 0-.106.106v1.637h-.7a.106.106 0 0 0-.106.107v1.25c0 .059.048.107.106.107h.7v3.234c0 1.308.65 1.97 1.934 1.97.522 0 .954-.107 1.362-.338a.106.106 0 0 0 .054-.093v-1.19a.106.106 0 0 0-.154-.096c-.28.141-.551.206-.854.206-.467 0-.675-.211-.675-.686V8.929h1.6a.106.106 0 0 0 .107-.107v-1.25a.106.106 0 0 0-.106-.107m-7.671-.133c-1.96 0-3.497 1.51-3.497 3.437 0 1.907 1.526 3.4 3.473 3.4 1.967 0 3.508-1.504 3.508-3.424 0-1.914-1.53-3.413-3.484-3.413m0 5.362c-1.043 0-1.83-.838-1.83-1.95 0-1.115.76-1.924 1.806-1.924 1.05 0 1.84.838 1.84 1.95 0 1.115-.763 1.924-1.816 1.924m-7.014-5.362c-.82 0-1.492.323-2.046.984v-.744a.107.107 0 0 0-.106-.107h-1.455a.107.107 0 0 0-.106.107v8.27c0 .058.048.106.106.106h1.455a.107.107 0 0 0 .106-.106v-2.61c.555.621 1.227.925 2.046.925 1.522 0 3.063-1.172 3.063-3.412s-1.54-3.413-3.063-3.413m1.372 3.413c0 1.14-.703 1.937-1.709 1.937-.995 0-1.745-.833-1.745-1.937s.75-1.937 1.745-1.937c.99 0 1.71.814 1.71 1.937m-8.437-1.81c-1.624-.388-1.913-.66-1.913-1.231 0-.54.508-.903 1.264-.903.732 0 1.459.275 2.22.843a.107.107 0 0 0 .15-.023l.794-1.119a.107.107 0 0 0-.02-.144c-.906-.728-1.927-1.081-3.12-1.081-1.755 0-2.98 1.052-2.98 2.559 0 1.615 1.057 2.187 2.884 2.628 1.554.358 1.817.658 1.817 1.195 0 .594-.53.963-1.385.963-.948 0-1.721-.32-2.587-1.068a.11.11 0 0 0-.078-.026.105.105 0 0 0-.073.038l-.89 1.058a.105.105 0 0 0 .011.148 5.303 5.303 0 0 0 3.581 1.373c1.89 0 3.112-1.033 3.112-2.631 0-1.351-.807-2.098-2.787-2.58M9.507.305a9.41 9.41 0 1 0 0 18.82 9.41 9.41 0 0 0 0-18.82m4.316 13.572a.586.586 0 0 1-.807.195c-2.21-1.35-4.99-1.655-8.266-.907a.586.586 0 1 1-.261-1.143c3.584-.82 6.659-.467 9.139 1.049.276.169.363.53.195.806m1.15-2.562a.734.734 0 0 1-1.008.242c-2.529-1.555-6.385-2.005-9.377-1.097a.735.735 0 0 1-.426-1.404c3.418-1.037 7.666-.534 10.57 1.25a.734.734 0 0 1 .242 1.01m.1-2.669C12.04 6.846 7.036 6.68 4.141 7.56a.88.88 0 1 1-.511-1.684c3.323-1.01 8.849-.814 12.34 1.258a.88.88 0 0 1-.898 1.514"></path>
                </g>
              </svg>
            </Link>
          </div>
          <div>
            <ul className="text-gray-400">
              <li>
                <NavLink
                  exact
                  to="/browser"
                  activeClassName="bg-black_282828 text-gray-200"
                  className="flex justify-start items-center pl-3 pr-7 py-2 space-x-5 rounded hover:text-gray-200 focus:text-gray-200"
                >
                  <div>
                    <svg
                      viewBox="0 0 512 512"
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M448 463.746h-149.333v-149.333h-85.334v149.333h-149.333v-315.428l192-111.746 192 110.984v316.19z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <span className="text-sm font-bold">Home</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  to="/browser/search"
                  activeClassName="bg-black_282828 text-gray-200"
                  className="flex justify-start items-center pl-3 pr-7 py-2 space-x-5 rounded hover:text-gray-200 focus:text-gray-200"
                >
                  <div>
                    <svg
                      viewBox="0 0 512 512"
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M349.714 347.937l93.714 109.969-16.254 13.969-93.969-109.969q-48.508 36.825-109.207 36.825-36.826 0-70.476-14.349t-57.905-38.603-38.603-57.905-14.349-70.476 14.349-70.476 38.603-57.905 57.905-38.603 70.476-14.349 70.476 14.349 57.905 38.603 38.603 57.905 14.349 70.476q0 37.841-14.73 71.619t-40.889 58.921zM224 377.397q43.428 0 80.254-21.461t58.286-58.286 21.461-80.254-21.461-80.254-58.286-58.285-80.254-21.46-80.254 21.46-58.285 58.285-21.46 80.254 21.46 80.254 58.285 58.286 80.254 21.461z"
                        fill="currentColor"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <span className="text-sm font-bold">Search</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/browser/collection"
                  activeClassName="bg-black_282828 text-gray-200"
                  className="flex justify-start items-center pl-3 pr-7 py-2 space-x-5 rounded hover:text-gray-200 focus:text-gray-200"
                >
                  <div>
                    <svg
                      viewBox="0 0 512 512"
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M291.301 81.778l166.349 373.587-19.301 8.635-166.349-373.587zM64 463.746v-384h21.334v384h-21.334zM192 463.746v-384h21.334v384h-21.334z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <span className="text-sm font-bold">Your Library</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="px-1 mt-8">
          <div className="text-white flex flex-col justify-center items-start">
            <button
              className="flex justify-start items-center pl-2 pr-7 py-2 rounded space-x-4 text-gray-400 hover:text-gray-200 focus:text-gray-200"
              onClick={onCreatePlaylist}
            >
              <div className="">
                <svg
                  role="img"
                  height="12"
                  width="12"
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  className="w-6 h-6"
                  fill="currentColor"
                >
                  <path d="M14 7H9V2H7v5H2v2h5v5h2V9h5z"></path>
                  <path fill="none" d="M0 0h16v16H0z"></path>
                </svg>
              </div>
              <span className="text-sm font-bold">Create Playlist</span>
            </button>
            <button className="flex justify-start items-center pl-2 pr-7 py-2 rounded space-x-4 text-gray-400 hover:text-gray-200 focus:text-gray-200">
              <div className="">
                <svg
                  role="img"
                  height="12"
                  width="12"
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  className="w-6 h-6"
                  fill="currentColor"
                >
                  <path fill="none" d="M0 0h16v16H0z"></path>
                  <path d="M13.797 2.727a4.057 4.057 0 00-5.488-.253.558.558 0 01-.31.112.531.531 0 01-.311-.112 4.054 4.054 0 00-5.487.253c-.77.77-1.194 1.794-1.194 2.883s.424 2.113 1.168 2.855l4.462 5.223a1.791 1.791 0 002.726 0l4.435-5.195a4.052 4.052 0 001.195-2.883 4.057 4.057 0 00-1.196-2.883z"></path>
                </svg>
              </div>
              <span className="text-sm font-bold">Liked Songs</span>
            </button>
          </div>
          <div className="my-3 w-full h-px bg-gray-500"></div>
          <div className="flex flex-col space-y-3 text-gray-400 px-3 text-sm hover:text-gray-100 font-medium">
            {myplaylist.length > 0 &&
              myplaylist.map((item) => {
                return <span key={item?.id}>{item?.name}</span>;
              })}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-start text-gray-400 mb-24 pl-3 hover:text-gray-100 w-full">
        <span className="text-sm text-left w-full">Created by </span>
        <a href="facebook.com" className="text-red-700 w-full text-left">
          Tran Trung Tien ICTU <i className="fa fa-heart"></i>
        </a>
      </div>
    </nav>
  );
};

export default Nav;
