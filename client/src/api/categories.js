import axiosConfig from "../Utils/axiosConfig";

const categories = {
  GetCategoryPlaylists: (category_id, opt = {}) => {
    return axiosConfig.get(`browse/categories/${category_id}/playlists`, {
      params: opt,
    });
  },
  GetSingleBrowseCategory: (category_id, opt = {}) => {
    return axiosConfig.get(`browse/categories/${category_id}`, { params: opt });
  },
};

export default categories;
