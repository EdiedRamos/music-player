import { PlayerContext } from "../context/PlayerContext";
import type { ReactNode } from "react";

type PlayerProvider = {
  children: ReactNode;
};

export const PlayerProvider = ({ children }: PlayerProvider) => {
  return (
    <PlayerContext.Provider value={null}>{children}</PlayerContext.Provider>
  );
};
