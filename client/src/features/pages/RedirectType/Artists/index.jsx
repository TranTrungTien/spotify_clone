import { useParams } from "react-router";
import artists from "../../../../api/artists";
import Category from "../../../../components/Categories";
import Hero from "../../../../components/Hero";
import Queue from "../../../../components/Queue";
import useFetch from "../../../../customHooks/useFetch";

const Artists = () => {
  const params = useParams();
  console.log(params);
  const artistData = useFetch(() => {
    return artists.GetArtist(params.id);
  });
  const albumData = useFetch(() => {
    return artists.GetArtistAlbums(params.id, { limit: 6 });
  });
  const topTracksData = useFetch(() => {
    return artists.GetArtistTopTracks(params.id, { market: "US" });
  });
  const relativeArtistData = useFetch(() => {
    return artists.GetanArtistRelatedArtists(params.id, { limit: 6 });
  });

  return (
    <section>
      <div>
        <Hero
          information={{
            artist: "artist",
            imageUrl: artistData?.images?.[1]?.url || "",
            name: artistData?.name || "",
            description: "Followed by " + artistData?.followers?.total || "",
          }}
        />
      </div>
      <section className="text-gray-400 relative">
        <div className="w-full h-56 absolute bg-gradient-to-t from-transparent to-gray-700 -z-10"></div>
        <div className="w-full">
          <Queue
            playlist={topTracksData?.tracks || null}
            imageUrl={artistData?.images?.[1]?.url || ""}
            type="album"
          >
            <div className="pl-8">
              <h1 className="text-2xl text-gray-200 font-bold">Popular</h1>
            </div>
          </Queue>
        </div>
      </section>

      <section className="px-7 pt-8 pb-32 grid gap-y-7 min-h-full min-w-full">
        <Category
          category={{
            id: "album",
            category: "Albums",
            list: albumData?.items,
          }}
        />
        <Category
          category={{
            id: "artist",
            category: "Relative Artists",
            list: relativeArtistData?.artists.slice(0, 6),
          }}
        />
      </section>
    </section>
  );
};

export default Artists;
