import React from 'react';
import ProgressBar from './Components/MediumControlPanel/MediumControlPanel';
import BigPlayerAdjust from './Components/MediumPlayerTools/MediumPlayerTools';
import styles from './MediumPlayer.module.scss';
import { MediumPlayerPropsInterface } from './interfaces/medium-player-props.interface';

const MediumPlayer = ({
  audioRef,
  audioPlayer,
  progressRef,
  handleProgressChange,
  playMusic,
  toggleLoop,
  handleNextSong,
  handlePreviousSong,
  handleVolumeDown,
  handleVolumeUp,
  isPlaying,
  songs,
}: MediumPlayerPropsInterface) => {
  return (
    <>
      <audio
        ref={audioRef}
        src={songs[audioPlayer.currentSongIndex].audioSrc}
        loop={audioPlayer.loop}
      ></audio>
      <div className={styles.container}>
        <div className={styles.controls}>
          <BigPlayerAdjust
            onVolumeDown={handleVolumeDown}
            onVolumeUp={handleVolumeUp}
            onPreviousSong={handlePreviousSong}
            onNextSong={handleNextSong}
            onPlayMusic={playMusic}
            playing={isPlaying}
          />
          <ProgressBar
            currentTime={audioPlayer.currentTime}
            duration={audioPlayer.duration}
            progressRef={progressRef}
            handleProgressChange={handleProgressChange}
            loop={audioPlayer.loop}
            toggleLoop={toggleLoop}
          />
        </div>
      </div>
    </>
  );
};

export default MediumPlayer;
