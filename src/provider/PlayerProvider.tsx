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
    audio.play();
  };

  useEffect(() => {
    setSongs(Songs);
  }, []);

  useEffect(() => {
    if (!songs || songs.length === 0 || currentSong) return;
    const [song] = songs;
    audio.src = song.source;
    setCurrentSong(song);
  }, [songs]);

  // values
  const values = {
    songs,
    currentSong,
    handleNext,
    handlePrevious,
    handlePlay,
  };

  return (
    <PlayerContext.Provider value={values}>{children}</PlayerContext.Provider>
  );
};
