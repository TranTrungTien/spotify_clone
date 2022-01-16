import LibraryOpt from "../LibraryOpt";
import SearchForm from "../../features/SearchForm";
import User from "./User";

const TopHeader = () => {
  return (
    <header className="sticky top-0 right-0 z-10 bg-black_282828 text-white h-62 w-full">
      <div className="px-10 h-full flex justify-between items-center">
        <div className="flex items-center space-x-5 py-2 w-2/5">
          <div>
            <div className="w-8 h-8 flex justify-center items-center text-gray-500 hover:text-gray-200 cursor-pointer bg-black_181818 rounded-full">
              <i className="fas fa-chevron-left"></i>
            </div>
          </div>
          <div>
            <div className="w-8 h-8 flex justify-center items-center text-gray-500 hover:text-gray-200 cursor-pointer bg-black_181818 rounded-full">
              <i className="fas fa-chevron-right"></i>
            </div>
          </div>
          <SearchForm />
          <LibraryOpt />
        </div>
        <div className="flex items-center space-x-5">
          <button className="px-10 py-2 bg-black_181818 border border-gray-200 rounded-full text-sm font-bold hover:bg-black shadow">
            UPGRADE
          </button>
          <User />
        </div>
      </div>
    </header>
  );
};

export default TopHeader;
