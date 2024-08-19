'use client';

import Image from 'next/image';
import songs from '@/app/Components/SmallPlayer/Utils/dummy-musics';
import { PlayerPropsInterface } from './player-props-interface/player-props.interface';
import styles from './PlayerContent.module.scss';
import MediumPlayer from '@/app/Components/MediumPlayer/MediumPlayer';
import Icon from '@/app/Components/Icons/Icon';
import Link from 'next/link';

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
      <Link className={styles.arrow} href=''>
        <Icon name={'arrowdown'} width={18} height={10}/>
      </Link>
      <div className={styles.container}>
        <MediumPlayer songs={songs} />
      </div>
    </div>
  );
};

export default PlayerContent;
