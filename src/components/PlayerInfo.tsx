import "../styles/components/PlayerInfo.scss";

type PlayerInfo = {
  imgSource: string;
  songName: string;
  songAuthor: string;
};

export const PlayerInfo = ({ imgSource, songAuthor, songName }: PlayerInfo) => {
  return (
    <div className="player__info">
      <div className="info__image-container">
        <img src={imgSource} alt={`${songName} img`} />
      </div>
      <p className="info__name">{songName}</p>
      <p className="info__author">{songAuthor}</p>
    </div>
  );
};
