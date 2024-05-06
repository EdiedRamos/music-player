import "../styles/components/PlayerBar.scss";

import { usePlayer } from "../hook";

export const PlayerBar = () => {
  const { currentTime, duration } = usePlayer();

  return (
    <div className="bar bar__container">
      <div className="bar__labels">
        <p>{currentTime}</p>
        <p>{duration}</p>
      </div>
      <div className="bar__progress">
        <div className="bar__progress--percentage"></div>
      </div>
    </div>
  );
};
