import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { MusicBoxPropsInterace } from './music-box-props-interface/music-box-props.interface';
import styles from './MusicBox.module.scss';


const MusicBox = (props: MusicBoxPropsInterace) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const onClick = () => {
    setIsPlaying((prevState) => !prevState);
    if (!isPlaying) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  };

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
        src={isPlaying ? '/pausebuttonblue.png' : '/playbuttonblue.png'}
        alt="playbutton"
        width={64}
        height={64}
        onClick={onClick}
      />
      <audio ref={audioRef} src={props.musicSrc} />
    </div>
  );
};

export default MusicBox;
