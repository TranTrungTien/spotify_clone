import { Redirect as Red } from "react-router";
import { getToken } from "../../../Auth/auth";

const Redirect = () => {
  if (window.location.hash) {
    if (getToken(window.location.hash.slice(1))) {
      return <Red to="/browser" />;
    } else {
      return <Red to="/" />;
    }
  } else {
    return <Red to="/" />;
  }
};

export default Redirect;
