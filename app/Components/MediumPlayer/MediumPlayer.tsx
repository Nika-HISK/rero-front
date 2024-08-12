import React from 'react';
import { useAudioPlayer } from '../SmallPlayer/hooks/useAudio.hook';
import ProgressBar from './Components/MediumControlPanel/MediumControlPanel';
import BigPlayerAdjust from './Components/MediumPlayerTools/MediumPlayerTools';
import styles from './MediumPlayer.module.scss';
import { SongPropsInterface } from '../SmallPlayer/interfaces/song-props.interface';

const MediumPlayer = (props: SongPropsInterface) => {
  const {
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
  } = useAudioPlayer(props.songs);


  return (
    <>
      <audio
        ref={audioRef}
        src={props.songs[audioPlayer.currentSongIndex].audioSrc}
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
