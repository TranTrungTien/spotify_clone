import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Categories from "../../../components/Categories";
import Songs from "./Songs";
import TopResult from "./TopResult";

const SearchedPage = ({ allResult, topResult, songs }) => {
  console.log("res : ", allResult);
  return (
    <div className="w-full h-full px-2% pt-6 pb-28">
      <div className="space-y-12">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 4fr",
            gap: "0 20px",
          }}
        >
          <TopResult topResult={topResult} />
          <div className="w-full h-full space-y-4">
            {songs && (
              <div className="w-full flex justify-between items-center">
                <h1 className="text-2xl text-gray-300 font-bold">Songs</h1>
                <Link
                  to="/see_all"
                  className="hover:underline text-gray-400 hover:text-gray-200 font-semibold text-sm"
                >
                  SEE ALL
                </Link>
              </div>
            )}
            <div className="w-full h-232">
              {songs &&
                songs.map((song, index) => {
                  return <Songs key={song.id} song={song} index={index} />;
                })}
            </div>
          </div>
        </div>
        <div className="space-y-12">
          {allResult &&
            allResult.map((res) => {
              if (!res.list.length) return null;
              return <Categories key={res.id} category={res} />;
            })}
        </div>
      </div>
    </div>
  );
};

SearchedPage.propTypes = {
  allResult: PropTypes.array,
  topResult: PropTypes.object,
  songs: PropTypes.array,
};

export default SearchedPage;
