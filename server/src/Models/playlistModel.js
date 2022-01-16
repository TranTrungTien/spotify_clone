const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, default: "" },
  email: { type: String, default: "" },
});
const playlistSchema = new mongoose.Schema({
  user: userSchema,
  myplaylist: {
    type: Array,
    default: [],
  },
});

module.exports = mongoose.model("playlist", playlistSchema);
