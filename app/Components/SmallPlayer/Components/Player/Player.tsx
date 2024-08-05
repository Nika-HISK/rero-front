import React from 'react';
import { PlayerProps } from '../../interfaces/player-props';
import PlayerMediaControl from '../PlayerMediaControl/PlayerMediaControl';
import PlayerTools from '../PlayerTools/PlayerTools';
import styles from './Player.module.scss';

const Player = (props: PlayerProps) => {
  return (
    <div className={styles.musicMiddle}>
      <PlayerTools
        onVolumeDown={props.onVolumeDown}
        onVolumeUp={props.onVolumeUp}
        onPreviousSong={props.onPreviousSong}
        onNextSong={props.onNextSong}
        onPlayMusic={props.onPlayMusic}
        playing={props.playing}
        customStyle={false}
      />
      <PlayerMediaControl
        currentTime={props.currentTime}
        duration={props.duration}
        onProgressChange={props.onProgressChange}
        onTenSecondsBack={props.onTenSecondsBack}
        progressRef={props.progressRef}
        ipadProgressRef={props.ipadProgressRef}
      />
    </div>
  );
};

export default Player;
