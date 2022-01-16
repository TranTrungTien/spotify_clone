import axiosConfig from "../Utils/axiosConfig";

export const search = {
  search: (opt) => {
    return axiosConfig.get("search", {
      params: opt,
    });
  },
};
