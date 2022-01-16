const UserPlaylist = require("../Models/playlistModel");

module.exports = {
  insert: async (req, res) => {
    try {
      const response = await UserPlaylist.findOne({
        username: req.body.username,
        email: req.body.email,
      });
      if (response) {
        return res.status(204).send();
      }
    } catch (error) {
      return res.status(500).send({ message: "Something went wrong" });
    }
    console.log(req.body);
    const user = UserPlaylist({
      user: {
        username: req.body.username,
        email: req.body.email,
      },
      myplaylist: [],
    });

    user.save(function (err) {
      if (err) {
        return res.status(500).send({ message: "Something went wrong" });
      } else {
        return res.status(201).send({ message: "Successfully" });
      }
    });
  },
};
