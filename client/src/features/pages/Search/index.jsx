import { useSelector } from "react-redux";
import SearchedPage from "../SearchedPage";
import BaseSearches from "./BaseSearchesContents";
const Search = () => {
  const searchResult = useSelector((state) => state.searchResult);
  const topResult =
    searchResult[0] && searchResult[0].list && searchResult[0].list[0]; // just to easy..............
  let songs = null;
  for (let obj of searchResult) {
    if (obj.id === "tracks") songs = obj.list;
  }
  return searchResult.length ? (
    <SearchedPage
      allResult={searchResult}
      topResult={topResult}
      songs={songs.slice(0, 4)}
    />
  ) : (
    <BaseSearches />
  );
};

export default Search;
