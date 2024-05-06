import "../styles/components/PlayerBar.scss";

import { toMinutes } from "../utils";
import { usePlayer } from "../hook";

export const PlayerBar = () => {
  const { currentTime, duration } = usePlayer();

  return (
    <div className="bar bar__container">
      <div className="bar__labels">
        <p>{toMinutes(currentTime)}</p>
        <p>{toMinutes(duration)}</p>
      </div>
      <div className="bar__progress">
        <div
          className="bar__progress--percentage"
          style={{ width: `${(currentTime * 100) / duration}%` }}
        ></div>
      </div>
    </div>
  );
};
