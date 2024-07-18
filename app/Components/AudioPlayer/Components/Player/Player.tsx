import React from 'react';
import AdjustButtons from '../AdjustButtons/AdjustButtons';
import ProgressBars from '../ProgressBars/ProgressBars';
import styles from './Player.module.scss';
import { Player } from '../../../../Interfaces/Interfaces'

const Player: React.FC<Player> = ({ playing, currentTime, duration, progressRef, ipadProgressRef, onProgressChange, onTenSecondsBack, onVolumeDown, onVolumeUp, onPreviousSong, onNextSong, onPlayMusic, }) => {
    return (
        <div className={styles.musicMiddle}>
            <AdjustButtons
                onVolumeDown={onVolumeDown}
                onVolumeUp={onVolumeUp}
                onPreviousSong={onPreviousSong}
                onNextSong={onNextSong}
                onPlayMusic={onPlayMusic}
                playing={playing}
            />
            <ProgressBars
                currentTime={currentTime}
                duration={duration}
                onProgressChange={onProgressChange}
                onTenSecondsBack={onTenSecondsBack}
                progressRef={progressRef}
                ipadProgressRef={ipadProgressRef}
            />
        </div>
    );
};

export default Player;
