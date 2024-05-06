import "../styles/components/PlayerControl.scss";

import { PlayIcon, StopIcon, StopPlay, StopPlayR } from "../assets/icons";

import { usePlayer } from "../hook";

export const PlayerControl = () => {
  const isPlaying = false;
  const { handleNext } = usePlayer();

  return (
    <div className="control control__container">
      <button className="control__previous">
        <img src={StopPlay} />
      </button>
      <button className="control__play-stop">
        {isPlaying ? <img src={StopIcon} /> : <img src={PlayIcon} />}
      </button>
      <button className="control__next" onClick={handleNext}>
        <img src={StopPlayR} />
      </button>
    </div>
  );
};
