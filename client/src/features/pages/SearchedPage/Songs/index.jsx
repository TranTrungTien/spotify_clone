import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { savePlaylist } from "../../../Player/playerSlice";

const Songs = ({ song, index }) => {
  const dispatch = useDispatch();

  const handlePlaySong = () => {
    //  type: action.payload.type,
    //     imageUrl: action.payload.imageUrl,
    //     currentIndex: action.payload.currentIndex,
    //     list: [...action.payload.list],
    dispatch(
      savePlaylist({
        type: "album",
        currentIndex: 0,
        list: [song],
      })
    );
  };
  return (
    <div
      className="flex items-center justify-between px-3 group hover:bg-gray_3e3e3e cursor-pointer rounded py-1"
      onClick={handlePlaySong}
    >
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 rounded overflow-hidden">
          <img
            src={song && song.album.images[2].url}
            alt="song"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="flex justify-start items-start flex-col">
          <h1 className="text-gray-200 font-bold">{song?.name ?? ""}</h1>
          <div className="flex items-center justify-start">
            {song &&
              song.artists.map((artist) => {
                return (
                  <Link
                    key={artist.id}
                    to="/artist"
                    className="text-sm text-gray-200"
                  >
                    {artist.name}
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
      <div>
        <div className="text-gray-400 flex justify-center space-x-5 items-center">
          <button className="opacity-0 invisible group-hover:visible group-hover:opacity-100">
            <svg
              role="img"
              height="16"
              width="16"
              viewBox="0 0 16 16"
              className="hover:text-gray-200"
              fill="currentColor"
            >
              <path d="M13.764 2.727a4.057 4.057 0 00-5.488-.253.558.558 0 01-.31.112.531.531 0 01-.311-.112 4.054 4.054 0 00-5.487.253A4.05 4.05 0 00.974 5.61c0 1.089.424 2.113 1.168 2.855l4.462 5.223a1.791 1.791 0 002.726 0l4.435-5.195A4.052 4.052 0 0014.96 5.61a4.057 4.057 0 00-1.196-2.883zm-.722 5.098L8.58 13.048c-.307.36-.921.36-1.228 0L2.864 7.797a3.072 3.072 0 01-.905-2.187c0-.826.321-1.603.905-2.187a3.091 3.091 0 012.191-.913 3.05 3.05 0 011.957.709c.041.036.408.351.954.351.531 0 .906-.31.94-.34a3.075 3.075 0 014.161.192 3.1 3.1 0 01-.025 4.403z"></path>
            </svg>
          </button>
          <div>0:30</div>
          <button className="opacity-0 invisible group-hover:visible group-hover:opacity-100">
            <svg
              role="img"
              height="16"
              width="16"
              viewBox="0 0 16 16"
              className="hover:text-gray-200"
              fill="currentColor"
            >
              <path d="M2 6.5a1.5 1.5 0 10-.001 2.999A1.5 1.5 0 002 6.5zm6 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6 0a1.5 1.5 0 10-.001 2.999A1.5 1.5 0 0014 6.5z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

Songs.propTypes = {
  song: PropTypes.object,
  index: PropTypes.number,
};

export default Songs;
