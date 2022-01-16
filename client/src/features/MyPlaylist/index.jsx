import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Hero from "../../components/Hero";
import { useSelector } from "react-redux";

const MyPlaylist = () => {
  const params = useParams();
  const currentUser = useSelector((state) => state.user.profile);
  const [music, setMusic] = useState({});

  const onChangeFile = (e) => {
    console.log({ music: e.target.files });
    if (e.target.files?.[0]?.type === "audio/mpeg") {
      setMusic(e.target.files[0]);
    }
  };

  const onSubmitMusic = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("song", music);
    try {
      const response = await axios.post(
        `http://localhost:3001/api/playlist/${currentUser.email}/${params.playlist_id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response.data);
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <div>
      <div>
        <Hero
          information={{
            type: "PLAYLIST",
            name: "My Playlist #1",
            owner: { display_name: "Tien" },
          }}
        />
      </div>
      <div className="relative">
        <div className="p-8">
          <svg
            role="img"
            height="32"
            width="32"
            viewBox="0 0 32 32"
            className="text-gray-400"
            fill="currentColor"
          >
            <path d="M5.998 13.999A2 2 0 105.999 18a2 2 0 00-.001-4zm10.001 0A2 2 0 1016 18a2 2 0 000-4zm10.001 0A2 2 0 1026.001 18 2 2 0 0026 14z"></path>
          </svg>
        </div>
      </div>
      <div className="min-h-600 border-t border-gray-500 space-y-5">
        <div className="flex justify-between items-center px-8 mt-5">
          <div>
            <h1 className="text-3xl text-gray-300 font-bold">
              Let's find something for your playlist
            </h1>
          </div>
          <div className="cursor-pointer">
            <svg
              role="img"
              height="24"
              width="24"
              aria-label="Close"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-gray-400"
            >
              <path d="M20.354 4.353l-.708-.706L12 11.293 4.353 3.647l-.706.706L11.293 12l-7.646 7.646.706.708L12 12.707l7.646 7.647.708-.708L12.707 12z"></path>
            </svg>
          </div>
        </div>
        <div className="px-8 flex items-center space-x-10">
          <div className="flex justify-start items-center space-x-2 bg-gray_3e3e3e rounded w-max">
            <div className="py-3 pl-3">
              <svg
                role="img"
                height="16"
                width="16"
                aria-hidden="true"
                viewBox="0 0 16 16"
                className="text-gray-400"
                fill="currentColor"
              >
                <path d="M11.955 11.157A5.61 5.61 0 107.61 13.22c1.03 0 1.992-.282 2.822-.767l2.956 3.46 1.521-1.299-2.954-3.457zm-4.345.063A3.614 3.614 0 014 7.61 3.614 3.614 0 017.61 4a3.614 3.614 0 013.61 3.61 3.614 3.614 0 01-3.61 3.61z"></path>
              </svg>
            </div>
            <form>
              <input
                type="text"
                name="find-songs"
                placeholder="Search for songs and episodes"
                className="bg-transparent focus:border-transparent focus:outline-none text-gray-200 flex-1 h-full py-3 pr-10 w-96"
                maxLength="80"
              />
            </form>
          </div>
          <form
            className="flex justify-start items-center space-x-3"
            encType="multipart/form-data"
          >
            <div className="relative overflow-hidden w-56 h-10 ">
              <label
                htmlFor="upload-file"
                className="absolute top-0 left-0 w-full h-full rounded bg-pink-700 text-center text-gray-200 font-semibold px-5 py-2 cursor-pointer"
              >
                Choose your's own music
              </label>
              <input
                type="file"
                name="music"
                id="upload-file"
                className="absolute top-0 left-0 opacity-0 w-full h-full px-5 py-2 -z-10"
                onChange={onChangeFile}
              />
            </div>
            <button
              className="px-6 py-2 rounded bg-pink-500 text-gray-100 font-semibold"
              onClick={onSubmitMusic}
            >
              ADD
            </button>
          </form>
          <div className="text-gray-200 font-semibold">
            <p>Your file ( mp3 only ) : {music?.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPlaylist;
