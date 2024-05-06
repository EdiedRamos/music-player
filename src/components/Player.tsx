import { PlayerBar, PlayerContainer, PlayerControl, PlayerInfo } from ".";

import { PlayerProvider } from "../provider";

export const Player = () => {
  return (
    <PlayerProvider>
      <PlayerContainer>
        <PlayerInfo />
        <PlayerBar />
        <PlayerControl />
      </PlayerContainer>
    </PlayerProvider>
  );
};
