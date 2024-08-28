'use client';

import PlayerContent from './components/PlayerContent/PlayerContent';
import { PlayerFullScreenPropsInterface } from './components/interfaces/player-full-screen-props.interface';

const PlayerFullScreen = ({ setOpened }: PlayerFullScreenPropsInterface) => {
  return (
    <PlayerContent
      setOpened={setOpened}
      backgroundImage="/playerbackground.png"
    />
  );
};

export default PlayerFullScreen;
