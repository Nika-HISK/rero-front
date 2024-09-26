import Image from 'next/image';
import React, { useState } from 'react';
import { MediumToolsPropsInterface } from '../../interfaces/medium-tools-props.interface.ts.interface';
import styles from './MediumPlayerTools.module.scss';

const MediumPlayerTools = (props: MediumToolsPropsInterface) => {
  const [mute, setMute] = useState<boolean>(false);

  const toggleMute = () => {
    setMute(!mute);
  };
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
          src={props.playing ? '/play.png' : '/Pause.png'}
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
      <div onClick={props.mute}>
        <Image
          src={!mute ? '/icons/mute.svg' : '/icons/muteactive.svg'}
          alt="mute"
          width={24}
          height={24}
          onClick={toggleMute}
        />
      </div>
    </div>
  );
};

export default MediumPlayerTools;
