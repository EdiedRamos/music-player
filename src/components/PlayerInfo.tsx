import "../styles/components/PlayerInfo.scss";

import { usePlayer } from "../hook";

export const PlayerInfo = () => {
  const { currentSong } = usePlayer();

  if (!currentSong) {
    return <p>Song is required</p>;
  }

  return (
    <div className="info info__container">
      <div className="info__image-container">
        <img src={currentSong.preview} alt={`${currentSong.name} img`} />
      </div>
      <p className="info__name">{currentSong.name}</p>
      <p className="info__author">{currentSong.author}</p>
    </div>
  );
};
