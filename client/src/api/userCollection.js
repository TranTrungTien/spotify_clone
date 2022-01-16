import axiosConfig from "../Utils/axiosConfig";

const userCollection = {
  GetRecentlyPlayedTracks: () => {
    return axiosConfig.get("me/player/recently-played");
  },
};

export default userCollection;
