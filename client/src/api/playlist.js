import axiosConfig from "../Utils/axiosConfig";

const playlists = {
  GetPlaylistItems: (playlist_id, opt = {}) => {
    return axiosConfig.get(`playlists/${playlist_id}/tracks`, { params: opt });
  },
  GetPlaylistCoverImage: (playlist_id, opt = {}) => {
    return axiosConfig.get(`playlists/${playlist_id}/images`, { params: opt });
  },
  GetAPlaylist: (playlist_id, opt = {}) => {
    return axiosConfig.get(`playlists/${playlist_id}`, { params: opt });
  },
};

export default playlists;
