import React from 'react';
import styles from './MainAudioPlayer.module.scss';
import { useAudioPlayer } from '@/app/Helpers/AudioHelpers';
import { SongProps } from '@/app/Interfaces/Interfaces';
import MainAdjust from './Components/MainAdjust/MainAdjust';
import ProgressBar from './Components/MainProgress/MainProgress';

const MainAudioPlayer: React.FC<SongProps> = ({ songs }) => {
    const { audioRef, audioPlayer, progressRef, handleProgressChange, PlayMusic, toggleLoop, handleNextSong, handlePreviousSong, handleVolumeDown, handleVolumeUp } = useAudioPlayer(songs);

    const isPlaying = audioRef.current ? audioRef.current.paused : false;

    return (
        <>
            <audio ref={audioRef} src={songs[audioPlayer.currentSongIndex].audioSrc} loop={audioPlayer.loop}></audio>
            <div className={styles.container}>
                <div className={styles.controls}>
                    <MainAdjust
                        onVolumeDown={handleVolumeDown}
                        onVolumeUp={handleVolumeUp}
                        onPreviousSong={handlePreviousSong}
                        onNextSong={handleNextSong}
                        onPlayMusic={PlayMusic}
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

export default MainAudioPlayer;
