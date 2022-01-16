import { useLocation } from "react-router";
import { useDispatch } from "react-redux";
import { search } from "../../api/search";
import { saveSearchResult } from "./searchResultSlice";

const SearchForm = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  let display = "hidden";
  if (location.pathname.includes("search")) {
    display = "block";
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!e.target[0].value) return;
    try {
      const response = await search.search({
        q: e.target[0].value,
        type: "album,artist,playlist,track,show,episode",
        limit: 6,
      });
      dispatch(saveSearchResult(response.data));
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className={`w-full h-full px-2 ${display}`}>
      <div className="flex justify-center items-center pl-5 py-2 space-x-2 rounded-full bg-white w-full h-full">
        <svg
          height="24"
          role="img"
          width="24"
          viewBox="0 0 512 512"
          className="text-gray-700 hover:text-gray-900 cursor-pointer"
          aria-hidden="true"
        >
          <path
            d="M349.714 347.937l93.714 109.969-16.254 13.969-93.969-109.969q-48.508 36.825-109.207 36.825-36.826 0-70.476-14.349t-57.905-38.603-38.603-57.905-14.349-70.476 14.349-70.476 38.603-57.905 57.905-38.603 70.476-14.349 70.476 14.349 57.905 38.603 38.603 57.905 14.349 70.476q0 37.841-14.73 71.619t-40.889 58.921zM224 377.397q43.428 0 80.254-21.461t58.286-58.286 21.461-80.254-21.461-80.254-58.286-58.285-80.254-21.46-80.254 21.46-58.285 58.285-21.46 80.254 21.46 80.254 58.285 58.286 80.254 21.461z"
            fill="currentColor"
          ></path>
        </svg>
        <form onSubmit={handleSubmit} className="w-full h-full px-2">
          <input
            type="text"
            name="query"
            className="flex-1 h-full w-full bg-transparent focus:outline-none pl-1 pr-5 text-sm font-semibold text-black"
            placeholder="Artists, songs, or podcasts"
          />
        </form>
      </div>
    </div>
  );
};

export default SearchForm;
