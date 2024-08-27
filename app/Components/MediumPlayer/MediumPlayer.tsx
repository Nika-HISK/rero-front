'use client';

import React from 'react';
import { useRecoilValue } from 'recoil';
import songs from '../SmallPlayer/Utils/dummy-musics';
import ProgressBar from './Components/MediumControlPanel/MediumControlPanel';
import BigPlayerAdjust from './Components/MediumPlayerTools/MediumPlayerTools';
import styles from './MediumPlayer.module.scss';
import { MediumPlayerPropsInterface } from './interfaces/medium-player-props.interface';
import { audioPlayerState } from '@/app/Atoms/states';

const MediumPlayer = (props: MediumPlayerPropsInterface) => {
  const audioPlayer = useRecoilValue(audioPlayerState);

  const currentSongIndex = audioPlayer.currentSongIndex;
  const currentSong =
    currentSongIndex !== null &&
    currentSongIndex >= 0 &&
    currentSongIndex < songs.length
      ? songs[currentSongIndex]
      : {
          audioSrc: '',
          src: '',
          music: '',
          artist: '',
        };

  return (
    <>
      <audio
        ref={props.audioRef}
        src={currentSong.audioSrc}
        loop={audioPlayer.loop}
      ></audio>
      <div className={styles.container}>
        <div className={styles.controls}>
          <BigPlayerAdjust
            onVolumeDown={props.handleVolumeDown}
            onVolumeUp={props.handleVolumeUp}
            onPreviousSong={props.handlePreviousSong}
            onNextSong={props.handleNextSong}
            onPlayMusic={props.playMusic}
            playing={props.isPlaying}
          />
          <ProgressBar
            currentTime={audioPlayer.currentTime}
            duration={audioPlayer.duration}
            progressRef={props.progressRef}
            handleProgressChange={props.handleProgressChange}
            loop={audioPlayer.loop}
            toggleLoop={props.toggleLoop}
          />
        </div>
      </div>
    </>
  );
};

export default MediumPlayer;
