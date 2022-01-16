const express = require("express");
const app = express();
const cors = require("cors");
const useRouter = require("./Routers/userRouter");
const playlistRouter = require("./Routers/playlistRoute");
const connectDB = require("./Utils/DatabaseConnection");
require("dotenv").config({ path: __dirname + "/../config.env" });
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3001;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

app.use("/api/user", useRouter);
app.use("/api/playlist", playlistRouter);

app.get("/", (req, res) => {
  fs.readFile(path.resolve(__dirname, "anime.jpg"), (err, data) => {
    if (err) {
      res.status(500).send({ err });
    } else {
      console.log({ data });
      res.writeHead(200, "OK", {
        "Content-Types": "image/jpg",
      });
      res.end(data);
    }
  });
});

app.listen(PORT, () => console.log("Server is running on ", PORT));
