import { PlayerContext } from "../context/PlayerContext";
import { useEffect, useState, type ReactNode } from "react";
import type { Song } from "../types/Songs";

import { Songs } from "../data/songs";

type PlayerProvider = {
  children: ReactNode;
};

export const PlayerProvider = ({ children }: PlayerProvider) => {
  const [songs, setSongs] = useState<Array<Song> | null>(null);
  const [currentSong, setCurrentSong] = useState<Song | null>(null);

  useEffect(() => {
    setSongs(Songs);
  }, []);

  useEffect(() => {
    if (!songs || songs.length === 0 || currentSong) return;
    setCurrentSong(songs[0]);
  }, [songs]);

  // values
  const values = {
    songs,
    currentSong,
  };

  return (
    <PlayerContext.Provider value={values}>{children}</PlayerContext.Provider>
  );
};
