import type { Song } from "../types/Songs";
import { createContext } from "react";

interface PlayerContext {
  songs: Array<Song> | null;
  currentSong: Song | null;
}

export const PlayerContext = createContext<PlayerContext | null>(null);
