import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const TopResult = ({ topResult }) => {
  return (
    <div className="w-full h-full space-y-4">
      <h1 className="text-2xl text-gray-200 font-bold">
        {topResult && "Top Result"}
      </h1>
      <div className="p-5 w-full h-232 bg-black_181818 hover:bg-black_282828 rounded-md">
        <Link to="/browser/song" className="block w-full h-full">
          <div className="w-full h-full flex flex-col justify-between items-start">
            <div className="h-24 w-24">
              <img
                src={
                  topResult?.images?.[0]?.url ||
                  topResult?.album?.images?.[0]?.url
                }
                alt="top result"
                className="w-full h-full object-cover object-center rounded"
              />
            </div>
            <div className="text-left text-gray-200 flex flex-col justify-start items-start space-y-1 w-full">
              <h1 className="text-3xl font-bold max-w-sm truncate">
                {topResult?.name ?? ""}
              </h1>
              <span className="text-sm font-light text-gray-400 leading-4">
                {topResult?.artists?.map((artist) => {
                  return (
                    <button key={artist.id} to="/artist">
                      {artist.name}
                    </button>
                  );
                }) ?? ""}
                <span className="bg-black_121212 rounded-full font-bold text-sm block text-center px-3 py-px">
                  {topResult?.type}
                </span>
              </span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

TopResult.propTypes = {
  topResult: PropTypes.object,
};

export default TopResult;
