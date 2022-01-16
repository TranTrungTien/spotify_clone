import axiosConfig from "../Utils/axiosConfig";

const user = {
  GetCurrentUserProfile: () => {
    return axiosConfig.get("me");
  },
};
export default user;
