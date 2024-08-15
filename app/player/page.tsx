'use client';

import MediumPlayer from '../Components/MediumPlayer/MediumPlayer';
import songs from '../Components/SmallPlayer/Utils/dummy-musics';
import styles from './page.module.scss';
import { PlayerPropsInterface } from './player-props-interface/player-props.interface';

const Player = (props: PlayerPropsInterface) => {
  return (
    <div
      className={styles.wrapper}
      style={{
        backgroundImage: `url(/playerbackground.png)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className={styles.container}>
        <MediumPlayer songs={songs} />
      </div>
    </div>
  );
};

export default Player;
