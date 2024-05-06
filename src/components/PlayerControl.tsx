import "../styles/components/PlayerControl.scss";

import { PlayIcon, StopIcon, StopPlay, StopPlayR } from "../assets/icons";

import { usePlayer } from "../hook";

export const PlayerControl = () => {
  const isPlaying = false;
  const { handleNext } = usePlayer();

  return (
    <div className="control control__container">
      <img className="control__previous" src={StopPlay} />
      <div className="control__play-stop">
        {isPlaying ? <img src={StopIcon} /> : <img src={PlayIcon} />}
      </div>
      <button onClick={handleNext}>
        <img className="control__next" src={StopPlayR} />
      </button>
    </div>
  );
};
