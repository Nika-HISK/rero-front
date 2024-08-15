import React from 'react';
import ArrowLink from './Components/Arrow/Arrow';
import MusicPhoto from './Components/MusicPhoto/MusicPhoto';
import Player from './Components/Player/Player';
import styles from './SmallPlayer.module.scss';
import { useAudioPlayer } from './hooks/useAudio.hook';
import { SongPropsInterface } from './interfaces/song-props.interface';

const AudioPlayer = (props: SongPropsInterface) => {
  const {
    audioRef,
    progressRef,
    ipadProgressRef,
    audioPlayer,
    handleProgressChange,
    playMusic,
    handleTenSecondsBack,
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
      ></audio>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <MusicPhoto
            src={props.songs[audioPlayer.currentSongIndex].src}
            music={props.songs[audioPlayer.currentSongIndex].music}
            artist={props.songs[audioPlayer.currentSongIndex].artist}
          />
          <Player
            playing={isPlaying}
            currentTime={audioPlayer.currentTime}
            duration={audioPlayer.duration}
            progressRef={progressRef}
            ipadProgressRef={ipadProgressRef}
            onProgressChange={handleProgressChange}
            onTenSecondsBack={handleTenSecondsBack}
            onVolumeDown={handleVolumeDown}
            onVolumeUp={handleVolumeUp}
            onPreviousSong={handlePreviousSong}
            onNextSong={handleNextSong}
            onPlayMusic={playMusic}
          />
          <ArrowLink />
        </div>
      </div>
    </>
  );
};

export default AudioPlayer;
