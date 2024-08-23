import React from 'react';
import ProgressBar from './Components/MediumControlPanel/MediumControlPanel';
import BigPlayerAdjust from './Components/MediumPlayerTools/MediumPlayerTools';
import styles from './MediumPlayer.module.scss';
import { MediumPlayerPropsInterface } from './interfaces/medium-player-props.interface';

const MediumPlayer = (props: MediumPlayerPropsInterface) => {
  return (
    <>
      <audio
        ref={props.audioRef}
        src={props.songs[props.audioPlayer.currentSongIndex].audioSrc}
        loop={props.audioPlayer.loop}
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
            currentTime={props.audioPlayer.currentTime}
            duration={props.audioPlayer.duration}
            progressRef={props.progressRef}
            handleProgressChange={props.handleProgressChange}
            loop={props.audioPlayer.loop}
            toggleLoop={props.toggleLoop}
          />
        </div>
      </div>
    </>
  );
};

export default MediumPlayer;
