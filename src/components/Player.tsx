import { PlayerBar } from "./PlayerBar";
import { PlayerContainer } from "./PlayerContainer";
import { PlayerControl } from "./PlayerControl";
import { PlayerInfo } from "./PlayerInfo";

export const Player = () => {
  return (
    <PlayerContainer>
      <PlayerInfo />
      <PlayerBar />
      <PlayerControl />
    </PlayerContainer>
  );
};
