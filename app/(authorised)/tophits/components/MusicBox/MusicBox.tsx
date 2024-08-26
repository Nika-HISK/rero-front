import Image from 'next/image';
import React from 'react';
import styles from './MusicBox.module.scss';
import { MusicBoxPropsInterace } from './music-box-props-interface/music-box-props.interface';

const MusicBox = (props: MusicBoxPropsInterace) => {
  const { artistName, musicName, cover, isPlaying, onClick } = props;

  return (
    <div
      className={styles.wrapper}
      style={{
        backgroundImage: `url(${cover})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'top',
      }}
    >
      <div className={styles.container}>
        <span className={styles.artistName}>{artistName}</span>
        <span className={styles.musicName}>{musicName}</span>
      </div>
      <Image
        src={isPlaying ? '/pausebuttonblue.png' : '/playbuttonblue.png'}
        alt={isPlaying ? 'Pause button' : 'Play button'}
        width={64}
        height={64}
        onClick={onClick}
      />
    </div>
  );
};

export default MusicBox;
