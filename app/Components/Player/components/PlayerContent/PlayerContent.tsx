'use client';

import styles from './PlayerContent.module.scss';
import { PlayerPropsInterface } from './player-props-interface/player-props.interface';
import Icon from '@/app/Components/Icons/Icon';
import MediumPlayer from '@/app/Components/MediumPlayer/MediumPlayer';
import songs from '@/app/Components/SmallPlayer/Utils/dummy-musics';

const PlayerContent = (props: PlayerPropsInterface) => {
  const handleArrowClick = () => {
    props.setOpened(false);
  };

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
      <div className={styles.arrow} onClick={handleArrowClick}>
        <Icon name={'arrowdown'} width={18} height={10} />
      </div>
      <div className={styles.container}>
        <MediumPlayer songs={songs} />
      </div>
    </div>
  );
};

export default PlayerContent;
