import axiosConfig from "../Utils/axiosConfig";

const episodes = {
  getSeveralEpisodes: () => {
    return axiosConfig.get("episodes", {
      params: {
        ids: "77o6BIVlYM3msb4MMIL1jH,0Q86acNRm6V9GYx55SXKwf,5XY4IKdUnwKXvYs5qVTq8N,0yHfrnBeqWsxqowXxsnW6K,6fBJc4cCB1c0jRUi0tjY49,7Ip2oTiMEl0ifxjiuwYUno",
      },
    });
  },
  GetanEpisode: (id_episode, opt) => {
    return axiosConfig.get(`episodes/${id_episode}`, { params: opt });
  },
};

export default episodes;
