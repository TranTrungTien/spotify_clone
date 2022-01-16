import { scopes } from "../../Constants/scopes";

export const urlAuth =
  process.env.REACT_APP_SPOTIFY_AUTH_URL +
  "?client_id=" +
  process.env.REACT_APP_CLIENT_ID +
  "&redirect_uri=" +
  encodeURI(process.env.REACT_APP_REDIRECT_URL) +
  "&scope=" +
  encodeURI(scopes) +
  "&response_type=token" +
  "&show_dialog=true";

export const getToken = (hash) => {
  const splitHash = hash.split("&");
  const token = splitHash.reduce((pre, current) => {
    const [key, value] = current.split("=");
    pre[key] = value;
    return pre;
  }, {});
  return _saveToken(token);
};

const _saveToken = (token) => {
  try {
    localStorage.setItem("token", JSON.stringify(token));
    return true;
  } catch (error) {
    return false;
  }
};

export const refreshToken = () => {
  window.location.href = urlAuth;
};
