import axios from "axios";

const axiosConfig = axios.create({
  baseURL: process.env.REACT_APP_SPOTIFY_API_URL,
});

axiosConfig.interceptors.request.use(
  (config) => {
    const token = JSON.parse(localStorage?.getItem("token"));
    config.headers = {
      Authorization: token?.token_type + " " + token?.access_token,
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

axiosConfig.interceptors.response.use((res) => res);

export default axiosConfig;
