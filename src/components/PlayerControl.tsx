import "../styles/components/PlayerControl.scss";

import { PlayIcon, StopIcon, StopPlay, StopPlayR } from "../assets/icons";

import { usePlayer } from "../hook";

export const PlayerControl = () => {
  const { handleNext, handlePrevious, handlePlay, isPlaying } = usePlayer();

  return (
    <div className="control control__container">
      <button className="control__previous" onClick={handlePrevious}>
        <img src={StopPlay} />
      </button>
      <button className="control__play-stop" onClick={handlePlay}>
        {isPlaying ? <img src={StopIcon} /> : <img src={PlayIcon} />}
      </button>
      <button className="control__next" onClick={handleNext}>
        <img src={StopPlayR} />
      </button>
    </div>
  );
};
