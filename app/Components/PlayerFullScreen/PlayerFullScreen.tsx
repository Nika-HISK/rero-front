'use client';

import PlayerContent from './components/PlayerContent/PlayerContent';
import { PlayerFullScreenPropsInterface } from './components/interfaces/player-full-screen-props.interface';

const PlayerFullScreen = (props: PlayerFullScreenPropsInterface) => {
  return (
    <PlayerContent
      setOpened={props.setOpened}
      backgroundImage="/playerbackground.png"
    />
  );
};

export default PlayerFullScreen;
