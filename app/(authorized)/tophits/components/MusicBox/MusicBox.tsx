import Image from 'next/image';
import React from 'react';
import styles from './MusicBox.module.scss';
import { MusicBoxPropsInterace } from './interfaces/music-box-props.interface';

const MusicBox = (props: MusicBoxPropsInterace) => {
  return (
    <div
      className={styles.wrapper}
      style={{
        backgroundImage: `url(${props.cover})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'top',
      }}
    >
      <div className={styles.container}>
        <span className={styles.artistName}>{props.artistName}</span>
        <span className={styles.musicName}>{props.musicName}</span>
      </div>
      <Image
        src={props.isPlaying ? '/pausebuttonblue.png' : '/playbuttonblue.png'}
        alt={props.isPlaying ? 'Pause button' : 'Play button'}
        width={64}
        height={64}
        onClick={props.onClick}
      />
    </div>
  );
};

export default MusicBox;
