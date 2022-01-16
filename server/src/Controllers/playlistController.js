const Busboy = require("busboy");
const drive = require("../Utils/GoogledirveConnection");
const { format } = require("../Utils/formatSongStructure");
const { v4 } = require("uuid");

const UserPlaylist = require("../Models/playlistModel");

module.exports = {
  addSongs: async (req, res) => {
    const busboy = new Busboy({ headers: req.headers });

    const { playlist_id, email } = req.params;
    console.log({ email });
    console.log({ playlist_id });

    busboy.on("file", async (field_name, file, filename, encode, mimetype) => {
      try {
        const response1 = await drive.files.create({
          requestBody: {
            name: v4() + "-" + field_name + "-" + filename,
            mimeType: mimetype,
            parents: ["1JXgKnuYJ_FZpvgT5ovOge_GYNNIf01iu"],
          },
          media: {
            mimeType: mimetype,
            body: file,
          },
        });
        const song = format({
          song_name: filename.split(".")[0],
          preview_url: `http://localhost:3001/api/playlist/song/${response1.data.id}`,
        });
        console.log({ song });
        const response2 = await UserPlaylist.findOneAndUpdate(
          { "user.email": email, "myplaylist.id": playlist_id },
          { $push: { "myplaylist.$.songs": song } },
          { upsert: false }
        );
        if (response2) {
          return res.status(200).send({ message: "new song added" });
        }
        return res.status(500).send({ message: "something went wrong" });
      } catch (error) {
        throw error;
      }
    });

    const abort = () => {
      req.unpipe(busboy);
      return res.status(500).send({ message: "Something went wrong" });
    };
    busboy.on("error", abort);
    req.on("abort", abort);

    req.pipe(busboy);
  },
  getSong: async (req, res) => {
    const { song_id } = req.params;

    try {
      drive.files.get(
        {
          fileId: song_id,
          alt: "media",
        },
        {
          responseType: "arraybuffer",
        },
        (err, data) => {
          if (err) {
            return res.status(500).send({ err });
          } else {
            res.writeHead(200, "Ok", {
              "Content-Types": data.headers["content-type"],
              "Content-Length": data.headers["content-length"],
            });

            console.log("data :", data);
            return res.end(Buffer.from(data.data));
          }
        }
      );
    } catch (error) {
      console.log({ error });
      return res.status(500).send({ message: "something went wrong" });
    }
  },
  deleteSong: async (req, res) => {},
  createPlaylist: async (req, res) => {
    console.log(req.body.playlist_id);
    console.log(req.body.email);

    const { playlist_id, email, name } = req.body;

    const newPlaylist = {
      id: playlist_id,
      name: name,
      songs: [],
    };
    const response = await UserPlaylist.findOneAndUpdate(
      { "user.email": email },
      {
        $push: {
          myplaylist: newPlaylist,
        },
      },
      { upsert: false }
    );
    if (response) return res.status(201).send({ message: "Successfully" });
    else return res.status(404).send({ message: "user not found" });
  },
  getMyplaylist: async (req, res) => {
    const { email } = req.params;
    try {
      const response = await UserPlaylist.findOne({ "user.email": email });

      const { myplaylist } = response;
      console.log({ response });
      return res.status(200).send({ myplaylist });
    } catch (error) {
      console.log({ error });
      return res.status(500).send({ message: "Something went wrong" });
    }
  },
  deletePlaylist: async (req, res) => {
    const response = await UserPlaylist.findOneAndDelete(
      {
        "myplaylist.playlist_id": req.params.playlist_id,
      }
      // { $pull: { "myplaylist": {"playlist_id": req.params.playlist_id}} }
    );
    if (response) {
      return res.status(200).send({ message: "delete successfully" });
    } else return res.status(404).send({ message: "Not found playlist" });
  },
};
