import Image from "next/image";
import React from "react";
import { useRecoilState } from "recoil";
import InputRange from "../../../SmallPlayer/Components/InputRange/InputRange";
import ShuffleIcon from "../Shuffle/Shuffle";
import styles from "./BigProgress.module.scss";
import { audioPlayerState } from "@/app/Atoms/states";
import { formatTime } from "@/app/Helpers/AudioHelpers";
import { ProgressBarProps } from "@/app/Interfaces/Interfaces";

const BigProgress = (props: ProgressBarProps) => {
  const [audioPlayer, setAudioPlayer] = useRecoilState(audioPlayerState);

  const handleShuffleClick = () => {
    setAudioPlayer((prevState) => ({
      ...prevState,
      shuffle: !prevState.shuffle,
    }));
  };

  return (
    <div className={styles.progressBar}>
      <div className={styles.icons} onClick={handleShuffleClick}>
        <ShuffleIcon color={audioPlayer.shuffle ? "#13828A" : "white"} />
      </div>
      <p>{formatTime(props.currentTime)}</p>
      <InputRange
        defaultValue={String((props.currentTime / props.duration) * 100)}
        onChange={props.handleProgressChange}
        progressRef={props.progressRef}
      />
      <div className={styles.mobileTime}>
        <span>{`${formatTime(props.currentTime)}/${formatTime(props.duration)}`}</span>
      </div>
      <p>{formatTime(props.duration)}</p>
      <div className={styles.icons} onClick={props.toggleLoop}>
        <Image
          src={props.loop ? "/greenLoop.png" : "/disableLoop.png"}
          alt="loop"
          width={28}
          height={28}
        />
      </div>
    </div>
  );
};

export default BigProgress;
