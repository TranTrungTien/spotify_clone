import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Browser from "./pages/Browser";
import GetStated from "./pages/GetStated";
import Redirect from "./pages/GetStated/Redirect";

const Routers = () => {
  return (
    <Router>
      <Switch>
        <Route path="/redirect">
          <Redirect />
        </Route>
        <Route path="/browser">
          <Browser />
        </Route>
        <Route exact path="/">
          <GetStated />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routers;
