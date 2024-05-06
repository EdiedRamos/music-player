import { PlayIcon, StopIcon, StopPlay, StopPlayR } from "../assets/icons";

export const PlayerControl = () => {
  return (
    <div>
      <div>
        <img src={StopPlay} />
        <div>
          <img src={PlayIcon} />
          <img src={StopIcon} />
        </div>
        <img src={StopPlayR} />
      </div>
    </div>
  );
};
