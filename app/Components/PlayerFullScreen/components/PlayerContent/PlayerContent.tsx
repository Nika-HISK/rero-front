// PlayerContent.tsx
import React from 'react';
import styles from './PlayerContent.module.scss';
import { PlayerPropsInterface } from './player-props-interface/player-props.interface';
import Icon from '@/app/Components/Icons/Icon';
import MediumPlayer from '@/app/Components/MediumPlayer/MediumPlayer';
import songs from '@/app/Components/SmallPlayer/Utils/dummy-musics';
import { useAudioPlayer } from '@/app/Components/SmallPlayer/hooks/useAudio.hook';

const PlayerContent: React.FC<PlayerPropsInterface> = (props) => {
  const audioPlayerControls = useAudioPlayer(songs);

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
      <div className={styles.arrow} onClick={() => props.setOpened(false)}>
        <Icon name={'arrowdown'} width={18} height={10} />
      </div>
      <div className={styles.container}>
        <MediumPlayer songs={songs} {...audioPlayerControls} />
      </div>
    </div>
  );
};

export default PlayerContent;
