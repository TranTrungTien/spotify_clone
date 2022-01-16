import { useParams } from "react-router";
import categories from "../../../api/categories";
import genre from "../../../api/genre";
import Card from "../../../components/Card";
import useFetch from "../../../customHooks/useFetch";

const SeeAll = () => {
  const params = useParams();
  const categoryPlaylist = useFetch(() => {
    if (params.category_id === "new-releases") {
      return genre.GetNewReleases({ limit: 50 });
    } else
      return categories.GetCategoryPlaylists(params.category_id, { limit: 50 });
  });

  let playlist = null;

  if (categoryPlaylist) {
    playlist =
      categoryPlaylist && categoryPlaylist.playlists
        ? categoryPlaylist.playlists.items
        : categoryPlaylist.albums.items;
  }

  return (
    <div className="w-full min-h-full relative pb-32 pt-8">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(6, 198px)",
        }}
        className="gap-5"
      >
        {playlist &&
          playlist.map((track) => {
            return <Card key={track.id} track={track} />;
          })}
      </div>
    </div>
  );
};

export default SeeAll;
