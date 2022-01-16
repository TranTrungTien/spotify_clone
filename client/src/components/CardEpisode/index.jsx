import PropTypes from "prop-types";
import { millisecondToMinutesAndSeconds } from "../../Utils/convertMstoMin";

const CardEpisode = ({ ep, index }) => {
  return (
    <div
      style={{ maxWidth: "800px" }}
      className=" border-t border-b border-black_2a2a2a p-3 hover:bg-gray_3e3e3e rounded overflow-hidden"
    >
      <div className="flex justify-start items-center w-full space-x-5 cursor-pointer group">
        <div
          style={{ minWidth: "112px", minHeight: "112px" }}
          className="w-112 h-112"
        >
          <img
            src={ep?.images?.[1]?.url}
            alt="episode"
            className="w-full h-full object-cover object-center rounded-lg"
          />
        </div>
        <div
          style={{ maxWidth: "650px" }}
          className="flex flex-col justify-start items-start space-y-3 flex-1 w-full h-full"
        >
          <div className="flex justify-between items-center w-full">
            <div className="text-gray-100 text-lg font-bold space-x-2">
              <span>#{index || 1}</span>
              <span>{ep?.name}</span>
            </div>
            <button>
              <svg
                role="img"
                height="24"
                width="24"
                viewBox="0 0 24 24"
                className="text-gray-400 hover:text-gray-200 opacity-0 invisible group-hover:visible group-hover:opacity-100"
                fill="currentColor"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M4.5 11c-.8 0-1.5.7-1.5 1.5S3.7 14 4.5 14 6 13.3 6 12.5 5.3 11 4.5 11zm15 0c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5-.7-1.5-1.5-1.5zM12 11c-.8 0-1.5.7-1.5 1.5S11.2 14 12 14s1.5-.7 1.5-1.5S12.8 11 12 11z"></path>
              </svg>
            </button>
          </div>
          <div className="w-full text-base font-normal text-gray-400">
            <p className="truncate">{ep?.description}</p>
          </div>
          <div className="flex justify-between items-center w-full">
            <div className="flex justify-start items-center space-x-5">
              <button className="p-2 rounded-full bg-gray-100">
                <svg
                  height="16"
                  role="img"
                  width="16"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="text-black"
                  fill="currentColor"
                >
                  <polygon
                    points="21.57 12 5.98 3 5.98 21 21.57 12"
                    fill="currentColor"
                  ></polygon>
                </svg>
              </button>
              <div className="space-x-2 text-sm leading-4">
                <span>{ep?.release_date}</span>
                <span>{millisecondToMinutesAndSeconds(ep?.duration_ms)}</span>
              </div>
            </div>
            <div className="flex items-center space-x-5">
              <button>
                <svg
                  role="img"
                  focusable="false"
                  height="28"
                  width="28"
                  viewBox="0 0 24 24"
                  className="text-gray-400 hover:text-gray-200 opacity-0 invisible group-hover:visible group-hover:opacity-100"
                  fill="currentColor"
                >
                  <polyline
                    points="8 7 12 3 16 7"
                    fill="none"
                    stroke="#cccccc"
                  ></polyline>
                  <line
                    x1="12"
                    y1="16"
                    x2="12"
                    y2="3"
                    fill="none"
                    stroke="#cccccc"
                  ></line>
                  <polyline
                    points="16 10.5 19.5 10.5 19.5 21.5 4.5 21.5 4.5 10.5 8 10.5"
                    fill="none"
                    stroke="#cccccc"
                  ></polyline>
                </svg>
              </button>
              <button>
                <svg
                  role="img"
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                  className="text-gray-400 hover:text-gray-200 opacity-0 invisible group-hover:visible group-hover:opacity-100"
                  fill="currentColor"
                >
                  <path d="M12.001 5h-1v6h-6v1h6v6h1v-6h6v-1h-6V5zM11.5 0C5.149 0 0 5.149 0 11.5S5.149 23 11.5 23 23 17.851 23 11.5 17.851 0 11.5 0zm0 22C5.71 22 1 17.29 1 11.5S5.71 1 11.5 1 22 5.71 22 11.5 17.29 22 11.5 22z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CardEpisode.propTypes = {
  ep: PropTypes.object,
  index: PropTypes.number,
};

export default CardEpisode;
