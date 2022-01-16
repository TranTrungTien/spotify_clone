import React from "react";
import { Redirect, Switch, Route } from "react-router";
import PodcastsCollection from "../../../components/PodcastsCollection";
import PlaylistsCollection from "../../../components/PlaylistsCollection";
import AlbumsCollection from "../../../components/AlbumsCollection";
import ArtistsCollection from "../../../components/ArtistsCollection";

const Library = () => {
  return (
    <>
      <Redirect from="/browser/collection" to="/browser/collection/playlists" />
      <Switch>
        <Route path="/browser/collection/playlists">
          <PlaylistsCollection />
        </Route>
        <Route path="/browser/collection/podcasts">
          <PodcastsCollection />
        </Route>
        <Route path="/browser/collection/artists">
          <ArtistsCollection />
        </Route>
        <Route path="/browser/collection/albums">
          <AlbumsCollection />
        </Route>
      </Switch>
    </>
  );
};

export default Library;
