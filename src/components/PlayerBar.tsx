import "../styles/components/PlayerBar.scss";

import type { MouseEvent } from "react";
import { toMinutes } from "../utils";
import { usePlayer } from "../hook";

export const PlayerBar = () => {
  const { currentTime, duration, handleCurrentTime } = usePlayer();

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const { offsetWidth } = event.currentTarget;
    const offsetX = Math.max(0, event.clientX - rect.left);
    handleCurrentTime((offsetX / offsetWidth) * duration);
  };

  return (
    <div className="bar bar__container">
      <div className="bar__labels">
        <p>{toMinutes(currentTime)}</p>
        <p>{toMinutes(duration)}</p>
      </div>
      <div className="bar__progress" onClick={handleClick}>
        <div
          className="bar__progress--percentage"
          style={{ width: `${(currentTime * 100) / duration}%` }}
        ></div>
      </div>
    </div>
  );
};
