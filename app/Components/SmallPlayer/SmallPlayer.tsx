'use client';

import React from 'react';
import { useRecoilValue } from 'recoil';
import ArrowLink from './Components/Arrow/Arrow';
import MusicPhoto from './Components/MusicPhoto/MusicPhoto';
import Player from './Components/Player/Player';
import styles from './SmallPlayer.module.scss';
import songs from './Utils/dummy-musics';
import { SmallPlayerPropsInterface } from './interfaces/small-player-props.interace';
import { audioPlayerState } from '@/app/Atoms/states';

const SmallPlayer = (props: SmallPlayerPropsInterface) => {
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
      <audio ref={props.audioRef} src={currentSong.audioSrc}></audio>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <MusicPhoto
            src={currentSong.src}
            music={currentSong.music}
            artist={currentSong.artist}
          />
          <Player
            playing={props.isPlaying}
            currentTime={audioPlayer.currentTime}
            duration={audioPlayer.duration}
            progressRef={props.progressRef}
            onProgressChange={props.handleProgressChange}
            onTenSecondsBack={props.handleTenSecondsBack}
            onVolumeDown={props.handleVolumeDown}
            onVolumeUp={props.handleVolumeUp}
            onPreviousSong={props.handlePreviousSong}
            onNextSong={props.handleNextSong}
            onPlayMusic={props.playMusic}
          />
          <div
            onClick={() => props.setOpen(!props.open)}
            className={styles.arrowContainer}
          >
            <ArrowLink />
          </div>
        </div>
      </div>
    </>
  );
};

export default SmallPlayer;
