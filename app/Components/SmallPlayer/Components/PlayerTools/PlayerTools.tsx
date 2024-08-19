import Image from 'next/image';
import React from 'react';
import { PlayerToolsPropsInterface } from '../../interfaces/player-tools-props.interface';
import styles from './PlayerTools.module.scss';

const PlayerTools = (props: PlayerToolsPropsInterface) => {
  return (
    <div className={styles.adjustButtons}>
      <div className={styles.buttonWrapper}>
        <Image
          src="/valumedown.png"
          alt="volumeDownButton"
          width={24}
          height={24}
          onClick={props.onVolumeDown}
        />
      </div>
      <div className={styles.adjustButton}>
        <Image
          src="/previous.png"
          alt="previousMusicButton"
          width={24}
          height={24}
          onClick={props.onPreviousSong}
        />
      </div>
      <div onClick={props.onPlayMusic} className={styles.mainButton}>
        <Image
          src={props.playing ? '/play.png' : '/Pause.png'}
          alt="playbutton"
          width={42}
          height={42}
        />
      </div>
      <div className={styles.adjustButton}>
        <Image
          src="/next.png"
          alt="nextMusicButton"
          width={24}
          height={24}
          onClick={props.onNextSong}
        />
      </div>
      <div className={styles.buttonWrapper}>
        <Image
          src="/valumeup.png"
          alt="volumeUpButton"
          width={24}
          height={24}
          onClick={props.onVolumeUp}
        />
      </div>
    </div>
  );
};

export default PlayerTools;
