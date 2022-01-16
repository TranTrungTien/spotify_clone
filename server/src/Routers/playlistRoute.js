const UserPlaylist = require("../Models/playlistModel");

const router = require("express").Router();
const playlist = require("../Controllers/playlistController");

router.post("/:email/:playlist_id", playlist.addSongs);

router.get("/song/:song_id", playlist.getSong);

router.delete("/:email/:playlist_id/:song_id", playlist.deleteSong);

router.post("/create-playlist", playlist.createPlaylist);

router.get("/:email", playlist.getMyplaylist);

router.delete("/:playlist_id", playlist.deletePlaylist);

module.exports = router;
