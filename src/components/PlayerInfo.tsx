import "../styles/components/PlayerInfo.scss";

import { Songs } from "../data/songs";

// Its secure, it exits
const firstSong = Songs[0];

export const PlayerInfo = () => {
  return (
    <div className="info info__container">
      <div className="info__image-container">
        <img src={firstSong.preview} alt={`${firstSong.name} img`} />
      </div>
      <p className="info__name">{firstSong.name}</p>
      <p className="info__author">{firstSong.author}</p>
    </div>
  );
};
