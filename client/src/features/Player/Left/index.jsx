import PropTypes from "prop-types";

const Left = ({ track, imageUrl }) => {
  return (
    <div className="flex-1 self-start flex items-center h-full space-x-4">
      {track ? (
        <>
          <div className="w-58 h-58">
            <img
              src={
                imageUrl ||
                track?.track?.album?.images?.[2]?.url ||
                track?.album?.images?.[2]?.url
              }
              alt="player"
              className="w-full h-full object-cover object-center rounded"
            />
          </div>
          <div className="flex flex-col justify-center items-start">
            <span className="text-white text-sm font-normal">
              {track?.name || track?.track?.name}
            </span>
            <span className="text-xs font-thin">
              {track?.artists?.map(
                (artist) =>
                  (
                    <a key={artist?.id} href="/artirt">
                      {artist?.name}
                    </a>
                  ) ?? ""
              ) ||
                track?.track?.artists?.map(
                  (artist) =>
                    (
                      <a key={artist?.id} href="/artirt">
                        {artist?.name}
                      </a>
                    ) ?? ""
                )}
            </span>
          </div>
          <div>
            <svg
              role="img"
              height="16"
              width="16"
              viewBox="0 0 16 16"
              className="text-gray-400 hover:text-gray-200"
              fill="currentColor"
            >
              <path fill="none" d="M0 0h16v16H0z"></path>
              <path d="M13.797 2.727a4.057 4.057 0 00-5.488-.253.558.558 0 01-.31.112.531.531 0 01-.311-.112 4.054 4.054 0 00-5.487.253c-.77.77-1.194 1.794-1.194 2.883s.424 2.113 1.168 2.855l4.462 5.223a1.791 1.791 0 002.726 0l4.435-5.195a4.052 4.052 0 001.195-2.883 4.057 4.057 0 00-1.196-2.883z"></path>
            </svg>
          </div>
          <div>
            <svg
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              className="text-gray-400 hover:text-gray-200"
              fill="currentColor"
            >
              <g fill="currentColor" fillRule="evenodd">
                <path
                  d="M1 3v9h14V3H1zm0-1h14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"
                  fillRule="nonzero"
                ></path>
                <path d="M10 8h4v3h-4z"></path>
              </g>
            </svg>
          </div>
        </>
      ) : (
        <span>No Content</span>
      )}
    </div>
  );
};

Left.propTypes = {
  track: PropTypes.object,
  imageUrl: PropTypes.string,
};

export default Left;
