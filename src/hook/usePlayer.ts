import { PlayerContext } from "../context/PlayerContext";
import { useContext } from "react";

export const usePlayer = () => {
  const context = useContext(PlayerContext);
  if (context === null) {
    throw new Error("usePlayer must to be inside a PlayerProvider");
  }
  return context;
};
