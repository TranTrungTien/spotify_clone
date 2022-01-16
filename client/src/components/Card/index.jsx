import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

const Card = ({ track }) => {
  console.log("Card re-render");
  let trackFormat = null;
  if (track) {
    switch (track.type) {
      case "playlist": {
        trackFormat = {
          imageUrl:
            track?.images?.[0]?.url ||
            "https://m.media-amazon.com/images/I/91PNxrgHBUL._SS500_.jpg",
          name: track?.name ?? "",
          info: track?.description || track?.owner?.display_name,
        };
        break;
      }

      case "album": {
        trackFormat = {
          imageUrl:
            track?.images?.[0]?.url ||
            "https://m.media-amazon.com/images/I/91PNxrgHBUL._SS500_.jpg",
          name: track?.name,
          info:
            track?.description ||
            track?.artists.map((artist) => {
              return (
                <Link key={artist.id} to="/artist">
                  {artist?.name + " "}
                </Link>
              );
            }),
        };
        break;
      }
      case "track": {
        trackFormat = {
          imageUrl:
            track?.album?.images?.[0]?.url ||
            "https://m.media-amazon.com/images/I/91PNxrgHBUL._SS500_.jpg",
          name: track?.name,
          info:
            track?.description ||
            track?.artists.map((artist) => {
              return (
                <Link key={artist.id} to="/artist">
                  {artist?.name + " "}
                </Link>
              );
            }),
        };
        break;
      }
      case "artist": {
        trackFormat = {
          imageUrl:
            track.images?.[0]?.url ||
            "https://m.media-amazon.com/images/I/91PNxrgHBUL._SS500_.jpg",
          name: track?.name,
          info: "Artist",
        };
        break;
      }
      case "episode": {
        trackFormat = {
          imageUrl:
            track.images?.[0]?.url ||
            "https://m.media-amazon.com/images/I/91PNxrgHBUL._SS500_.jpg",
          name: track?.name,
          info: track?.description || "Episode",
        };
        break;
      }
      case "show": {
        trackFormat = {
          imageUrl:
            track.images?.[0]?.url ||
            "https://m.media-amazon.com/images/I/91PNxrgHBUL._SS500_.jpg",
          name: track?.name,
          info: track?.description || "Episode",
        };
        break;
      }
      default:
        break;
    }
  }

  const history = useHistory();
  const handleSeeMore = () => {
    history.push(`/browser/${track.type}/${track.id}`);
  };
  return (
    <div
      className="w-198 h-275 bg-black_181818 hover:bg-black_282828 self-center p-4 cursor-pointer rounded-sm group overflow-hidden"
      onClick={handleSeeMore}
    >
      <div className="w-full h-full">
        <div className="mb-4">
          <div className="w-165 h-165 relative overflow-hidden">
            <img
              src={trackFormat && trackFormat.imageUrl}
              alt="artist"
              className={`w-full h-full object-cover object-center ${
                track?.type === "artist" ? "rounded-full" : "rounded"
              }`}
            />
            <button className="absolute bottom-2 right-2 z-20 p-3 bg-green_1ed760 rounded-full opacity-0 invisible group-hover:visible group-hover:opacity-100 hover:transform hover:scale-110">
              <svg
                height="16"
                role="img"
                width="16"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <polygon
                  points="21.57 12 5.98 3 5.98 21 21.57 12"
                  className="text-gray-100"
                  fill="currentColor"
                ></polygon>
              </svg>
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start text-gray-100 space-y-1 w-full overflow-hidden">
          <h1 className="text-base font-bold w-full truncate">
            {trackFormat && trackFormat.name}
          </h1>
          <span className="text-sm text-gray-500 font-medium w-full truncate">
            {trackFormat && trackFormat.info}
          </span>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  track: PropTypes.object,
};

export default Card;
