import axiosConfig from "../Utils/axiosConfig";

const artists = {
  GetArtist: (id_artist) => {
    return axiosConfig.get(`artists/${id_artist}`);
  },
  getSeveralArtists: () => {
    return axiosConfig.get("artists", {
      params: {
        ids: "6uothxMWeLWIhsGeF7cyo4,6GUg2fRLklsnSJsG3PrTt0,3aL2O3Ldj5uvG3bL9hsRZx,0l3YAI1xmZKCZBzduST5ft,06HL4z0CvFAxyc27GXpf02,5pKCCKE2ajJHZ9KAiaK11H", // just for getstarted ... artists like anya, taylor, rihanna ,....
      },
    });
  },
  GetanArtistRelatedArtists: (id_artist) => {
    return axiosConfig.get(`artists/${id_artist}/related-artists`);
  },
  GetArtistTopTracks: (id_artist, opt) => {
    return axiosConfig.get(`artists/${id_artist}/top-tracks`, { params: opt });
  },
  GetArtistAlbums: (
    id_artist,
    opt = { include_groups: "album,single,appears_on,compilation", limit: 50 }
  ) => {
    return axiosConfig.get(`artists/${id_artist}/albums`, { params: opt });
  },
};

export default artists;
