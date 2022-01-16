import React from "react";
import { useParams } from "react-router";
import albums from "../../../api/albums";
import artists from "../../../api/artists";
import episodes from "../../../api/episodes";
import playlists from "../../../api/playlist";
import useFetch from "../../../customHooks/useFetch";
import shows from "../../../api/show";
import Playlist from "./Playlists";
import Albums from "./Albums";
import Artists from "./Artists";
import Show from "./Show";

const RedirectType = () => {
  const params = useParams();
  const type = params.type;
  const result = useFetch(() => {
    switch (type) {
      case "artist":
        return artists.GetArtistTopTracks(params.id, { country: "US" });
      case "playlist":
        return playlists.GetAPlaylist(params.id);
      case "episode":
        return episodes.GetanEpisode(params.id);
      case "album":
        return albums.GetAlbum(params.id);
      case "show":
        return shows.GetShow(params.id);
      default:
        break;
    }
  });
  let heroOpt = null;
  let playlist = null;
  if (result) {
    switch (params.type) {
      case "playlist": {
        heroOpt = {
          type: "Playlist",
          name: result.name?.toUpperCase(),
          imageUrl:
            result.images?.[0].url ??
            "https://askleo.askleomedia.com/wp-content/uploads/2004/06/no_image-300x245.jpg",
          owner: result.owner,
          description: result.description,
        };
        playlist = result.tracks.items;
        break;
      }
      case "album": {
        heroOpt = {
          type: "Album",
          name: result.name?.toUpperCase(),
          imageUrl:
            result.images?.[0].url ??
            "https://askleo.askleomedia.com/wp-content/uploads/2004/06/no_image-300x245.jpg",
          owner: result.label,
          description: "",
        };
        playlist = result.tracks.items;
        break;
      }
      case "show": {
        heroOpt = {
          imageUrl:
            result?.images?.[0]?.url ??
            "https://askleo.askleomedia.com/wp-content/uploads/2004/06/no_image-300x245.jpg",
          type: "Podcast",
          name: result?.name,
          description: result?.description,
          owner: result?.publisher,
        };
        playlist = result?.episodes?.items;
        break;
      }
      default:
        break;
    }
  }
  return (
    <div className="min-w-full min-h-full relative pb-32">
      {type === "playlist" && (
        <Playlist heroOpt={heroOpt} playlist={playlist} />
      )}
      {type === "album" && <Albums heroOpt={heroOpt} playlist={playlist} />}
      {type === "show" && <Show totalEp={playlist} heroOpt={heroOpt} />}
      {type === "episode" && <Show />}
      {type === "artist" && <Artists />}
    </div>
  );
};

export default RedirectType;
