import axiosConfig from "../Utils/axiosConfig";

const show = {
  GetShow: (id_show) => {
    return axiosConfig.get(`shows/${id_show}`);
  },
  GetShowEpisode: (id_show, opt) => {
    return axiosConfig.get(`shows/${id_show}/episodes`, { params: opt });
  },
};

export default show;
