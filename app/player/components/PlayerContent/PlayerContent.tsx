'use client';

import Link from 'next/link';
import styles from './PlayerContent.module.scss';
import { PlayerPropsInterface } from './player-props-interface/player-props.interface';
import Icon from '@/app/Components/Icons/Icon';
import MediumPlayer from '@/app/Components/MediumPlayer/MediumPlayer';
import songs from '@/app/Components/SmallPlayer/Utils/dummy-musics';

const PlayerContent = (props: PlayerPropsInterface) => {
  //TODO Link Href
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
      <Link className={styles.arrow} href="">
        <Icon name={'arrowdown'} width={18} height={10} />
      </Link>
      <div className={styles.container}>
        <MediumPlayer songs={songs} />
      </div>
    </div>
  );
};

export default PlayerContent;
