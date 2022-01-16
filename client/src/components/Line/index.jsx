import PropTypes from "prop-types";
import { millisecondToMinutesAndSeconds } from "../../Utils/convertMstoMin";

const Line = ({ track, index, handleCurrentIndex }) => {
  let trackFormat = null;
  if (track) {
    switch (track.type) {
      case undefined: {
        trackFormat = {
          imageUrl:
            track.track?.album?.images?.[2]?.url ??
            "https://m.media-amazon.com/images/I/91PNxrgHBUL._SS500_.jpg",
          name: track.track?.name ?? "",
          info: track?.description ?? "",
          artists: track.track.artists.map((artist, idx) => {
            return (
              <a
                key={artist ? artist.id : idx}
                href="/artist"
                className="text-gray-400 hover:underline text-left w-full"
              >
                {artist && artist.name}
              </a>
            );
          }),
          duration: track.track?.duration_ms ?? 0,
          album: track.track?.album?.name || "",
          date: track.added_at || 0,
        };
        break;
      }
      case "track": {
        trackFormat = {
          imageUrl: null,
          name: track?.name ?? "",
          info: null,
          artists: track.artists.map((artist, idx) => {
            return (
              <a
                key={artist ? artist.id : idx}
                href="/artist"
                className="text-gray-400 hover:underline text-left w-full"
              >
                {artist && artist.name}
              </a>
            );
          }),
          duration: track?.duration_ms ?? 0,
          album: null,
          date: null,
        };
        break;
      }
      default:
        break;
    }
  }

  const handlePlayPlaylist = () => {
    if (!handleCurrentIndex) return;
    handleCurrentIndex(index);
  };
  return (
    <>
      <div
        className="text-gray-300 px-5 py-1 rounded-md hover:bg-gray_34372d group"
        onClick={handlePlayPlaylist}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "16px 6fr 4fr 3fr minmax(120px, 1fr)",
            gap: "0 16px",
          }}
          className=""
        >
          <div className="w-full h-full flex justify-between items-center">
            <span className="inline-block group-hover:hidden">{index + 1}</span>
            <button className="hidden group-hover:inline-block">
              <svg
                height="16"
                role="img"
                width="16"
                viewBox="0 0 24 24"
                className="text-gray-400 hover:text-gray-100"
              >
                <polygon
                  points="21.57 12 5.98 3 5.98 21 21.57 12"
                  fill="currentColor"
                ></polygon>
              </svg>
            </button>
          </div>
          <div className="flex justify-start items-center space-x-3">
            {trackFormat?.imageUrl && (
              <div className="w-10 h-10 rounded-sm">
                <img
                  src={trackFormat && trackFormat.imageUrl}
                  alt="track"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            )}
            <div className="flex flex-col justify-start items-center text-left">
              <span className="font-bold text-gray-100 block w-full">
                {trackFormat && trackFormat.name}
              </span>
              <div className="w-full space-x-1">
                {trackFormat && trackFormat.artists}
              </div>
            </div>
          </div>

          <div className="flex justify-start items-center">
            {trackFormat?.album && (
              <span className="text-sm text-gray-400 font-medium">
                {trackFormat && trackFormat.album}
              </span>
            )}
          </div>
          <div className="flex justify-start items-center">
            {trackFormat?.date && (
              <span className="text-sm text-gray-400 font-medium">
                {trackFormat && trackFormat.date}
              </span>
            )}
          </div>
          <div className="flex justify-around items-center">
            <button className="invisible opacity-0 group-hover:visible group-hover:opacity-100">
              <svg
                role="img"
                height="12"
                width="12"
                aria-hidden="true"
                viewBox="0 0 16 16"
                className="w-4 h-4 text-gray-400 hover:text-gray-100"
                fill="currentColor"
              >
                <path fill="none" d="M0 0h16v16H0z"></path>
                <path d="M13.797 2.727a4.057 4.057 0 00-5.488-.253.558.558 0 01-.31.112.531.531 0 01-.311-.112 4.054 4.054 0 00-5.487.253c-.77.77-1.194 1.794-1.194 2.883s.424 2.113 1.168 2.855l4.462 5.223a1.791 1.791 0 002.726 0l4.435-5.195a4.052 4.052 0 001.195-2.883 4.057 4.057 0 00-1.196-2.883z"></path>
              </svg>
            </button>
            <span className="text-sm text-gray-400 font-medium">
              {trackFormat &&
                millisecondToMinutesAndSeconds(trackFormat.duration)}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

Line.propTypes = {
  track: PropTypes.object,
  index: PropTypes.number,
  handleCurrentIndex: PropTypes.func,
};

export default Line;
