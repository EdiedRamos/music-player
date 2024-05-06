import "../styles/components/PlayerBar.scss";

const currentTime = "00:39";
const duration = "03:45";

export const PlayerBar = () => {
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
