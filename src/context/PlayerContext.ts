import type { Song } from "../types/Songs";
import { createContext } from "react";

interface PlayerContext {
  songs: Array<Song> | null;
  currentSong: Song | null;
  isPlaying: boolean;
  currentTime: string;
  duration: string;
  handleNext: () => void;
  handlePrevious: () => void;
  handlePlay: () => void;
}

export const PlayerContext = createContext<PlayerContext | null>(null);
