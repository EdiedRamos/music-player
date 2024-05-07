import { PlayerContext } from "../context/PlayerContext";
import { useEffect, useState, type ReactNode } from "react";
import type { Song } from "../types/Songs";

import { Songs } from "../data/songs";
import { getNextIndex, getPreviousIndex } from "../utils";

type PlayerProvider = {
  children: ReactNode;
};

export const PlayerProvider = ({ children }: PlayerProvider) => {
  const [audio] = useState(new Audio());
  const [songs, setSongs] = useState<Array<Song> | null>(null);
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const handleNext = () => {
    if (!songs || !currentSong) return;
    const currentSongIndex = songs.findIndex(
      (song) => song.id === currentSong.id
    );
    const nextIndex = getNextIndex(currentSongIndex, songs.length);
    setCurrentSong(songs[nextIndex]);
  };

  const handlePrevious = () => {
    if (!songs || !currentSong) return;
    const currentSongIndex = songs.findIndex(
      (song) => song.id === currentSong.id
    );

    const previousIndex = getPreviousIndex(currentSongIndex, songs.length);
    setCurrentSong(songs[previousIndex]);
  };

  const handlePlay = () => {
    if (!currentSong) return;
    audio[isPlaying ? "pause" : "play"]();
    setIsPlaying((prev) => !prev);
  };

  const handleCurrentTime = (time: number) => {
    audio.currentTime = time;
  };

  // Set the songs
  useEffect(() => {
    setSongs(Songs);
  }, []);

  // Set the first song when the app starts and the songs are loaded
  useEffect(() => {
    if (!songs || songs.length === 0 || currentSong) return;
    const [song] = songs;
    setCurrentSong(song);
  }, [songs]);

  // Update the audio source acording to the current song and preserve the isPlaying state
  useEffect(() => {
    if (!currentSong) return;
    audio.src = currentSong.source;
    if (isPlaying) {
      audio.play();
    }
  }, [currentSong]);

  // event listener for updating current time and duration
  useEffect(() => {
    const handleMetadata = () => setDuration(audio.duration);
    const handleUpdate = () => setCurrentTime(audio.currentTime);

    audio.addEventListener("loadedmetadata", handleMetadata);
    audio.addEventListener("timeupdate", handleUpdate);
    audio.addEventListener("ended", handleNext);

    return () => {
      audio.removeEventListener("loadedmetadata", handleMetadata);
      audio.removeEventListener("timeupdate", handleUpdate);
      audio.removeEventListener("ended", handleNext);
    };
  }, [songs, currentSong]);

  // values
  const values = {
    songs,
    currentSong,
    currentTime,
    isPlaying,
    duration,
    handleNext,
    handlePrevious,
    handlePlay,
    handleCurrentTime,
  };

  return (
    <PlayerContext.Provider value={values}>{children}</PlayerContext.Provider>
  );
};
