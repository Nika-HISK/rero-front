import React from 'react';
import { PlayerPropsInterface } from '../../interfaces/player-props.interface';
import PlayerMediaControl from '../PlayerMediaControl/PlayerMediaControl';
import PlayerTools from '../PlayerTools/PlayerTools';
import styles from './Player.module.scss';

const Player = (props: PlayerPropsInterface) => {
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
        mute={props.mute}
      />
      <PlayerMediaControl
        currentTime={props.currentTime}
        duration={props.duration}
        onProgressChange={props.onProgressChange}
        onTenSecondsBack={props.onTenSecondsBack}
        progressRef={props.progressRef}
      />
    </div>
  );
};

export default Player;
