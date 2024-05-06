import { PlayerContext } from "../context/PlayerContext";
import { useEffect, useState, type ReactNode } from "react";
import type { Song } from "../types/Songs";

import { Songs } from "../data/songs";

type PlayerProvider = {
  children: ReactNode;
};

export const PlayerProvider = ({ children }: PlayerProvider) => {
  const [audio] = useState(new Audio());
  const [songs, setSongs] = useState<Array<Song> | null>(null);
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleNext = () => {
    if (!songs || !currentSong) return;
    const currentSongIndex = songs.findIndex(
      (song) => song.id === currentSong.id
    );
    const nextIndex = (currentSongIndex + 1) % songs.length;
    setCurrentSong(songs[nextIndex]);
  };

  const handlePrevious = () => {
    if (!songs || !currentSong) return;
    const currentSongIndex = songs.findIndex(
      (song) => song.id === currentSong.id
    );
    const previousIndex = (currentSongIndex + songs.length - 1) % songs.length;
    setCurrentSong(songs[previousIndex]);
  };

  const handlePlay = () => {
    if (!currentSong) return;
    audio[isPlaying ? "pause" : "play"]();
    setIsPlaying((prev) => !prev);
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

  // values
  const values = {
    songs,
    currentSong,
    handleNext,
    handlePrevious,
    handlePlay,
    isPlaying,
  };

  return (
    <PlayerContext.Provider value={values}>{children}</PlayerContext.Provider>
  );
};
