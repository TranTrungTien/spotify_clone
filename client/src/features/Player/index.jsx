import "./player.css";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import Left from "./Left";
import Center from "./Center";
import Right from "./Right";

const Player = () => {
  let timer = useRef();
  const SONGS = useSelector((state) => state.playlist);
  console.log("Songs : ", SONGS);

  const [currentSong, setCurrentSong] = useState();
  const [isEndedList, setIsEndedList] = useState(false);

  const audioRef = useRef();
  const progressRef = useRef();
  const volumeRef = useRef();
  const currentTimeRef = useRef();
  useEffect(() => {
    audioRef.current = document.querySelector("#audio");
    progressRef.current = document.querySelector("#progress");
    volumeRef.current = document.querySelector("#volume");
    currentTimeRef.current = document.querySelector("#currenttime");
  }, []);

  useEffect(() => {
    setCurrentSong((current) => {
      return {
        ...current,
        currentIndex: SONGS?.currentIndex,
        path: SONGS?.list?.[SONGS?.currentIndex],
      };
    });
  }, [SONGS.currentIndex, SONGS]);
  console.log("current ", currentSong);
  const loadSong = () => {
    console.log("update loadSong");
    if (!audioRef.current || !currentSong?.path) {
      return;
    } else {
      const src =
        currentSong?.path?.track?.preview_url || currentSong?.path?.preview_url;
      audioRef.current.src = src;
      if (src) {
        progressRef.current.value = 0;
        currentTimeRef.current.textContent = 0;
        const percent = 0;
        progressRef.current.style.backgroundImage =
          "-webkit-gradient(linear, left top, right top, " +
          "color-stop(" +
          percent +
          "%, #1eca5b), " +
          "color-stop(" +
          percent +
          "%, #eded)" +
          ")";
      }
      if (SONGS.list.length > 1) {
        audioRef.current.autoplay = true;
      }
      audioRef.current.load();
      audioRef.current.onended = () => {
        clearInterval(timer.current);
        if (currentSong.currentIndex < SONGS.list.length - 1) {
          handleChangeSongPlay(true);
        } else {
          setIsEndedList(true);
        }
      };
    }
  };

  useEffect(() => {
    loadSong();
  }, [currentSong]);

  const handlePlaySong = (play) => {
    console.log("update handlePlaySong");
    if (!audioRef.current || !currentSong?.path) return;
    if (play) {
      timer.current = setInterval(updateProgress, 999);
      audioRef.current.play().catch((err) => console.log(err));
    } else {
      audioRef.current.pause();
      clearInterval(timer.current);
    }
  };

  const handleChangeSongPlay = (next) => {
    if (timer.current) clearInterval(timer.current);
    console.log("update handleChangeSongPlay");
    if (!SONGS.list) return;
    if (next) {
      if (currentSong.currentIndex >= SONGS.list.length - 1) {
        setIsEndedList(true);
      } else {
        if (isEndedList === true) setIsEndedList(false);
        const current_idx = ++currentSong.currentIndex;
        console.log("will update song ", SONGS.list[current_idx]);
        setCurrentSong((current) => {
          return {
            ...current,
            currentIndex: current_idx,
            path: SONGS.list[current_idx],
          };
        });
      }
    } else {
      if (currentSong.currentIndex <= 0) {
        setIsEndedList(true);
      } else {
        if (isEndedList === true) setIsEndedList(false);
        const current_idx = --currentSong.currentIndex;
        setCurrentSong((current) => {
          return {
            ...current,
            currentIndex: current_idx,
            path: SONGS.list[current_idx],
          };
        });
      }
    }
  };

  const handleChangeVolume = (volume) => {
    console.log(" update handleChangeVolume");
    if (!audioRef.current || !currentSong?.path || !volumeRef.current) return;
    audioRef.current.volume = volume / 100;
    const value = (volumeRef.current.value - 0) / (100 - 0);
    const percent = value * 100;

    volumeRef.current.style.backgroundImage =
      "-webkit-gradient(linear, left top, right top, " +
      "color-stop(" +
      percent +
      "%, #1eca5b), " +
      "color-stop(" +
      percent +
      "%, #eded)" +
      ")";
  };

  const handleChangeTime = (time) => {
    console.log("update handleChangeTime");
    if (!audioRef.current || !currentSong?.path) {
      return;
    }
    const percent = audioRef.current.duration * (time / 100);
    audioRef.current.currentTime = percent - 1.5;
  };

  const updateProgress = () => {
    console.log("updateProgress");
    if (
      !audioRef.current ||
      !currentSong?.path ||
      !progressRef.current ||
      !currentTimeRef.current
    )
      return;
    progressRef.current.value =
      audioRef.current.currentTime * (100 / audioRef.current.duration);
    currentTimeRef.current.textContent =
      "0:" + Math.round(audioRef.current.currentTime);
    const value = (progressRef.current.value - 0) / (100 - 0);
    const percent = value * 100;

    progressRef.current.style.backgroundImage =
      "-webkit-gradient(linear, left top, right top, " +
      "color-stop(" +
      percent +
      "%, #1eca5b), " +
      "color-stop(" +
      percent +
      "%, #eded)" +
      ")";
  };

  return (
    <div className="px-5 text-gray-200 h-full">
      <div className="w-full h-full flex justify-between items-center">
        <Left
          track={SONGS?.list?.[currentSong?.currentIndex ?? 0] ?? null}
          imageUrl={SONGS?.imageUrl}
        />
        <Center
          isEndedList={isEndedList}
          handlePlay={handlePlaySong}
          handleChangeSong={handleChangeSongPlay}
          handleChangeTime={handleChangeTime}
          preview_url={
            currentSong?.path?.track?.preview_url ||
            currentSong?.path?.preview_url
          }
        />
        <Right handleChangeVolume={handleChangeVolume} />
      </div>
      <audio src="" id="audio"></audio>
    </div>
  );
};

export default Player;
