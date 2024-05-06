import "../styles/components/PlayerContainer.scss";

import React from "react";

type PlayerContainer = {
  children: React.ReactNode;
};

export const PlayerContainer = ({ children }: PlayerContainer) => {
  return <div className="player player__container">{children}</div>;
};
