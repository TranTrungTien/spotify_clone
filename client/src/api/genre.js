const { default: axiosConfig } = require("../Utils/axiosConfig");

const genre = {
  GetAvailableGenreSeeds: () => {
    return axiosConfig.get("recommendations/available-genre-seeds");
  },
  GetSeveralBrowseCategories: () => {
    return axiosConfig.get("browse/categories");
  },
  GetCategoryPlaylists: (id) => {
    return axiosConfig.get(`browse/categories/${id}/playlists`);
  },
  GetFeaturedPlaylists: () => {
    return axiosConfig.get(`browse/featured-playlists`);
  },
  GetNewReleases: (opt) => {
    return axiosConfig.get(`browse/new-releases`, {
      params: opt,
    });
  },
  GetRecommendations: () => {
    return axiosConfig.get(`recommendations`);
  },
};

export default genre;
