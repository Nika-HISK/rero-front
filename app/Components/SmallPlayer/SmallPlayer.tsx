import React from 'react';
import ArrowLink from './Components/Arrow/Arrow';
import MusicPhoto from './Components/MusicPhoto/MusicPhoto';
import Player from './Components/Player/Player';
import styles from './SmallPlayer.module.scss';
import { SmallPlayerPropsInterface } from './interfaces/small-player-props.interace';

const SmallPlayer = ({
  setOpen,
  open,
  audioRef,
  progressRef,
  audioPlayer,
  handleProgressChange,
  playMusic,
  handleTenSecondsBack,
  handleNextSong,
  handlePreviousSong,
  handleVolumeDown,
  handleVolumeUp,
  isPlaying,
  songs,
}: SmallPlayerPropsInterface) => {
  return (
    <>
      <audio
        ref={audioRef}
        src={songs[audioPlayer.currentSongIndex].audioSrc}
      ></audio>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <MusicPhoto
            src={songs[audioPlayer.currentSongIndex].src}
            music={songs[audioPlayer.currentSongIndex].music}
            artist={songs[audioPlayer.currentSongIndex].artist}
          />
          <Player
            playing={isPlaying}
            currentTime={audioPlayer.currentTime}
            duration={audioPlayer.duration}
            progressRef={progressRef}
            onProgressChange={handleProgressChange}
            onTenSecondsBack={handleTenSecondsBack}
            onVolumeDown={handleVolumeDown}
            onVolumeUp={handleVolumeUp}
            onPreviousSong={handlePreviousSong}
            onNextSong={handleNextSong}
            onPlayMusic={playMusic}
          />
          <div onClick={() => setOpen(!open)}><ArrowLink /></div>
        </div>
      </div>
    </>
  );
};

export default SmallPlayer;
