import React from 'react';
import styles from './AudioPlayer.module.scss';
import { useAudioPlayer } from '@/app/Helpers/AudioHelpers';
import MusicPhoto from './Components/MusicPhoto/MusicPhoto';
import ArrowLink from './Components/Arrow/Arrow';
import Player from './Components/Player/Player';
import { SongProps } from '@/app/Interfaces/Interfaces';


const AudioPlayer = ({ songs }: SongProps) => {
    const {
        audioRef,
        progressRef,
        ipadProgressRef,
        audioPlayer,
        handleProgressChange,
        PlayMusic,
        handleTenSecondsBack,
        handleNextSong,
        handlePreviousSong,
        handleVolumeDown,
        handleVolumeUp,
    } = useAudioPlayer(songs);

    const isPlaying = audioRef.current ? !audioRef.current.paused : false;

    return (
        <>
            <audio ref={audioRef} src={songs[audioPlayer.currentSongIndex].audioSrc}></audio>
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
                        ipadProgressRef={ipadProgressRef}
                        onProgressChange={handleProgressChange}
                        onTenSecondsBack={handleTenSecondsBack}
                        onVolumeDown={handleVolumeDown}
                        onVolumeUp={handleVolumeUp}
                        onPreviousSong={handlePreviousSong}
                        onNextSong={handleNextSong}
                        onPlayMusic={PlayMusic}
                    />
                    <ArrowLink />
                </div>
            </div>
        </>
    );
};

export default AudioPlayer;
