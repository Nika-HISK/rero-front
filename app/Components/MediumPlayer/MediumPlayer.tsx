import React from 'react';
import { useAudioPlayer } from '../SmallPlayer/Hooks/use-audio.hook';
import ProgressBar from './Components/MediumControlPanel/MediumControlPanel';
import BigPlayerAdjust from './Components/MediumPlayerTools/MediumPlayerTools';
import styles from './MediumPlayer.module.scss';
import { SongProps } from '@/app/Interfaces/Interfaces';

const MediumPlayer = (props: SongProps) => {
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
  } = useAudioPlayer(props.songs);

  const isPlaying = audioRef.current ? audioRef.current.paused : false;

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
