import "../styles/components/PlayerControl.scss";

import { PlayIcon, StopIcon, StopPlay, StopPlayR } from "../assets/icons";

export const PlayerControl = () => {
  const isPlaying = false;

  return (
    <div className="control control__container">
      <img className="control__previous" src={StopPlay} />
      <div className="control__play-stop">
        {isPlaying ? <img src={StopIcon} /> : <img src={PlayIcon} />}
      </div>
      <img className="control__next" src={StopPlayR} />
    </div>
  );
};
