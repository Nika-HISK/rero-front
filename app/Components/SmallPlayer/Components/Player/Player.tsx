import React from "react";
import { PlayerProps } from "../../Interfaces/AudioPlayer-props.interface";
import AdjustButtons from "../AdjustButtons/AdjustButtons";
import ProgressBars from "../ProgressBars/ProgressBars";
import styles from "./Player.module.scss";

const Player = (props: PlayerProps) => {
  return (
    <div className={styles.musicMiddle}>
      <AdjustButtons
        onVolumeDown={props.onVolumeDown}
        onVolumeUp={props.onVolumeUp}
        onPreviousSong={props.onPreviousSong}
        onNextSong={props.onNextSong}
        onPlayMusic={props.onPlayMusic}
        playing={props.playing}
        customStyle={false}
      />
      <ProgressBars
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
