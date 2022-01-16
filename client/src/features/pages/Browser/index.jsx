import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router";
import Nav from "../../../components/Nav";
import TopHeader from "../../../components/TopHeader";
import { fetchCurrentUser } from "../../Auth/userSlice";
import MainContent from "../../MainContent";
import MyPlaylist from "../../MyPlaylist";
import Player from "../../Player";
import Library from "../Library";
import RedirectType from "../RedirectType";
import Search from "../Search";
import SeeAll from "../SeeAll";

const Browser = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentUser());
  });
  return (
    <div className="w-screen h-screen relative">
      <div className="w-full h-full flex justify-between items-center">
        <div className="w-60 h-screen top-0 left-0">
          <Nav />
        </div>
        <div className="flex-1 relative h-full overflow-x-hidden overflow-y-auto">
          <TopHeader />
          <main className="relative z-0 w-full min-h-full bg-black_121212">
            <Switch>
              <Route path="/browser/category/:category_id">
                <SeeAll />
              </Route>
              <Route path="/browser/myplaylists/:playlist_id">
                <MyPlaylist />
              </Route>
              <Route path="/browser/collection">
                <Library />
              </Route>
              <Route path="/browser/:type/:id">
                <RedirectType />
              </Route>
              <Route path="/browser/search">
                <Search />
              </Route>
              <Route exact path="/browser">
                <MainContent />
              </Route>
            </Switch>
          </main>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 z-30 bg-black_181818 text-white min-w-full h-90 shadow-md">
        <Player />
      </div>
    </div>
  );
};

export default Browser;
