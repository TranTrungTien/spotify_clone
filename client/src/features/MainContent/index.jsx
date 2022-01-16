import artists from "../../api/artists";
import Categories from "../../components/Categories";
import useFetch from "../../customHooks/useFetch";
import { useFetchCategoryGetStarted } from "../../customHooks/useFetchGetStarted";
import genre from "../../api/genre";
import episodes from "../../api/episodes";

const handleData = (data, type) => {
  if (!data) return;
  else {
    switch (type) {
      case "artists": {
        return {
          id: null,
          category: "Suggested Artists",
          list: data?.artists,
        };
      }
      case "new": {
        return {
          id: "new-releases",
          category: "New Release",
          list: data?.albums?.items,
        };
      }
      case "episodes": {
        return {
          id: null,
          category: "Episodes For You",
          list: data?.episodes,
        };
      }
      default:
        return null;
    }
  }
};

const MainContent = () => {
  console.log("main content re-render");
  const categoryGetStarted = useFetchCategoryGetStarted();
  const artistsGetStarted = useFetch(artists.getSeveralArtists);
  const newReleasesGetStarted = useFetch(() =>
    genre.GetNewReleases({ limit: 6 })
  );
  const episodeGetStarted = useFetch(episodes.getSeveralEpisodes);
  const artistsData = handleData(artistsGetStarted, "artists");
  const newReleaseData = handleData(newReleasesGetStarted, "new");
  const episodesData = handleData(episodeGetStarted, "episodes");

  return (
    <div className="px-7 pt-8 pb-32 grid gap-y-7 min-h-full min-w-full">
      {newReleaseData && <Categories category={newReleaseData} />}
      {episodesData && <Categories category={episodesData} />}
      {artistsData && <Categories category={artistsData} />}
      {categoryGetStarted &&
        categoryGetStarted.map((item) => (
          <Categories key={item.category} category={item} />
        ))}
    </div>
  );
};

export default MainContent;
