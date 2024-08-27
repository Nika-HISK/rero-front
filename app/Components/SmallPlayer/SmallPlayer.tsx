import React from 'react';
import ArrowLink from './Components/Arrow/Arrow';
import MusicPhoto from './Components/MusicPhoto/MusicPhoto';
import Player from './Components/Player/Player';
import styles from './SmallPlayer.module.scss';
import { SmallPlayerPropsInterface } from './interfaces/small-player-props.interace';

const SmallPlayer = (props: SmallPlayerPropsInterface) => {
  return (
    <>
      <audio
        ref={props.audioRef}
        src={props.songs[props.audioPlayer.currentSongIndex].audioSrc}
      ></audio>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <MusicPhoto
            src={props.songs[props.audioPlayer.currentSongIndex].src}
            music={props.songs[props.audioPlayer.currentSongIndex].music}
            artist={props.songs[props.audioPlayer.currentSongIndex].artist}
          />
          <Player
            playing={props.isPlaying}
            currentTime={props.audioPlayer.currentTime}
            duration={props.audioPlayer.duration}
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
            onClick={() => props.setOpen(!open)}
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
