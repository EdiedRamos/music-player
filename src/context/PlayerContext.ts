import { createContext } from "react";

interface PlayerContext {}

export const PlayerContext = createContext<PlayerContext | null>(null);