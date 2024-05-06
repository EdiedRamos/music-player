import { PlayerBar } from "./PlayerBar";
import { PlayerContainer } from "./PlayerContainer";
import { PlayerInfo } from "./PlayerInfo";
import { Songs } from "../data/songs";

// Its secure, it exits
const firstSong = Songs[0];

export const Player = () => {
  return (
    <PlayerContainer>
      <PlayerInfo
        imgSource={firstSong.preview}
        songAuthor={firstSong.author}
        songName={firstSong.name}
      />
      <PlayerBar />
    </PlayerContainer>
  );
};
