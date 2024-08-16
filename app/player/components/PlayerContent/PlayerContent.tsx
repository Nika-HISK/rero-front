'use client';

import songs from '@/app/Components/SmallPlayer/Utils/dummy-musics';
import { PlayerPropsInterface } from './player-props-interface/player-props.interface';
import styles from './PlayerContent.module.scss';
import MediumPlayer from '@/app/Components/MediumPlayer/MediumPlayer';

const PlayerContent = (props: PlayerPropsInterface) => {
  return (
    <div
      className={styles.wrapper}
      style={{
        backgroundImage: `url(${props.backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'top',
      }}
    >
      <div className={styles.container}>
        <MediumPlayer songs={songs} />
      </div>
    </div>
  );
};

export default PlayerContent;
