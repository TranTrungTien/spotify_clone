import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { savePlaylist } from "../../features/Player/playerSlice";
import Line from "../Line";

const LineTitle = ({ type }) => {
  return (
    <div className="px-14 border-b border-gray-300 py-2 sticky top-62 left-0 bg-gray_34372d w-full">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "16px 6fr 4fr 3fr minmax(120px, 1fr)",
          gap: "0 16px",
        }}
      >
        <span className="text-sm font-semibold">#</span>
        <span className="text-sm font-semibold">TITLE</span>
        <span className="text-sm font-semibold">ALBUM</span>
        <span className="text-sm font-semibold">DATE ADDED</span>
        <span className="place-self-end py-px pr-6">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path
              d="M7.999 3H6.999V7V8H7.999H9.999V7H7.999V3ZM7.5 0C3.358 0 0 3.358 0 7.5C0 11.642 3.358 15 7.5 15C11.642 15 15 11.642 15 7.5C15 3.358 11.642 0 7.5 0ZM7.5 14C3.916 14 1 11.084 1 7.5C1 3.916 3.916 1 7.5 1C11.084 1 14 3.916 14 7.5C14 11.084 11.084 14 7.5 14Z"
              fill="currentColor"
            ></path>
          </svg>
        </span>
      </div>
    </div>
  );
};

LineTitle.propTypes = {
  type: PropTypes.string,
};

const LineList = ({ playlist, imageUrl, type }) => {
  const dispatch = useDispatch();

  const handleCurrentIndex = (index) => {
    if (type === "album") {
      dispatch(
        savePlaylist({
          type: "album",
          imageUrl: imageUrl,
          currentIndex: index,
          list: playlist,
        })
      );
    } else {
      dispatch(
        savePlaylist({
          type: "playlist",
          imageUrl: null,
          currentIndex: index,
          list: playlist,
        })
      );
    }
  };
  return (
    <>
      {!type === "artist" && <LineTitle />}
      <div className="pt-5 w-full px-8">
        {playlist &&
          playlist.map((track, index) => (
            <Line
              key={index}
              track={track}
              index={index}
              handleCurrentIndex={handleCurrentIndex}
            />
          ))}
      </div>
    </>
  );
};

LineList.propTypes = {
  playlist: PropTypes.array,
  imageUrl: PropTypes.string,
  type: PropTypes.string,
};
export default LineList;
