import Image from 'next/image';
import React from 'react';
import { MediumToolsPropsInterface } from '../../interfaces/medium-tools-props.interface.ts.interface';
import styles from './MediumPlayerTools.module.scss';

const MediumPlayerTools = (props: MediumToolsPropsInterface) => {
  return (
    <div className={styles.adjustButtons}>
      <div className={styles.volumeButton} onClick={props.onVolumeDown}>
        <Image
          src="/valumedown.png"
          alt="volumeDownButton"
          width={24}
          height={24}
        />
      </div>
      <div className={styles.adjustButton} onClick={props.onPreviousSong}>
        <Image
          src="/previous.png"
          alt="previousMusicButton"
          width={24}
          height={24}
        />
      </div>
      <div onClick={props.onPlayMusic} className={styles.mainButton}>
        <Image
          src={props.playing ? '/play.png' : '/pause.png'}
          alt="playbutton"
          width={42}
          height={42}
        />
      </div>
      <div className={styles.buttonWrapper} onClick={props.onNextSong}>
        <Image src="/next.png" alt="nextMusicButton" width={24} height={24} />
      </div>
      <div className={styles.volumeButton} onClick={props.onVolumeUp}>
        <Image
          src="/valumeup.png"
          alt="volumeUpButton"
          width={24}
          height={24}
        />
      </div>
    </div>
  );
};

export default MediumPlayerTools;
