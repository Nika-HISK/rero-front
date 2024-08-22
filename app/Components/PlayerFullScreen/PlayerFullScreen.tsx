'use client';

import PlayerContent from "./components/PlayerContent/PlayerContent";

interface PlayerProps {
  setOpened: (opened: boolean) => void;
}

const PlayerFullScreen = ({ setOpened }: PlayerProps) => {
  return (
    <PlayerContent setOpened={setOpened} backgroundImage="/playerbackground.png" />
  );
};

export default PlayerFullScreen;
