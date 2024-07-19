import Image from "next/image";
import React from "react";
import { ProgressBarsProps } from "../../Interfaces/AudioPlayer-props.interface";
import InputRange from "../InputRange/InputRange";
import styles from "./ProgressBars.module.scss";
import { formatTime } from "@/app/Helpers/AudioHelpers";

const ProgressBars = (props: ProgressBarsProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.progressBar}>
        <p>{formatTime(props.currentTime)}</p>
        <InputRange
          defaultValue={String((props.currentTime / props.duration) * 100)}
          onChange={props.onProgressChange}
          progressRef={props.progressRef}
        />
        <div className={styles.ipadTime}>
          <span>{`${formatTime(props.currentTime)}/${formatTime(props.duration)}`}</span>
        </div>
        <p>{formatTime(props.duration)}</p>
      </div>
      <div className={styles.progressIpad}>
        <div className={styles.mobileProgress}>
          <div onClick={props.onTenSecondsBack}>
            <Image
              src="/gobackten.png"
              alt="tensecondsback"
              width={24}
              height={22}
            />
          </div>
          <div className={styles.mobileTime}>
            <span>{`${formatTime(props.currentTime)}/${formatTime(props.duration)}`}</span>
          </div>
        </div>
        <div className={styles.ipadProgress}>
          <div
            onClick={props.onTenSecondsBack}
            className={styles.tensecondback}
          >
            <Image
              src="/gobackten.png"
              alt="tensecondsback"
              width={24}
              height={24}
            />
          </div>
          <div className={styles.ipadRange}>
            <InputRange
              defaultValue={String((props.currentTime / props.duration) * 100)}
              onChange={props.onProgressChange}
              progressRef={props.ipadProgressRef}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBars;
