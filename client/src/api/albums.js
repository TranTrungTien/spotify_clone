import axiosConfig from "../Utils/axiosConfig";

const albums = {
  GetAlbum: (id_album, opt) => {
    return axiosConfig.get(`albums/${id_album}`, {
      params: opt,
    });
  },
};

export default albums;
