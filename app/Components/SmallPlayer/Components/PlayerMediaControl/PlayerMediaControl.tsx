import Image from 'next/image';
import React from 'react';
import { PlayerMediaControlPropsInterface } from '../../interfaces/player-media-control-props.interface';
import ProgressBar from '../ProgressBar/ProgressBar';
import styles from './PlayerMediaControl.module.scss';
import { formatTime } from '@/app/Helpers/AudioHelpers';

const PlayerMediaControl = (props: PlayerMediaControlPropsInterface) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.progressBar}>
        <p>{formatTime(props.currentTime)}</p>
        <ProgressBar
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
            <ProgressBar
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

export default PlayerMediaControl;
