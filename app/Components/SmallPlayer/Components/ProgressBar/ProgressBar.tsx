import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { ProgressBarPropsInterface } from '../../interfaces/progress-bar-props.interface';
import styles from './ProgressBar.module.scss';
import { audioPlayerState } from '@/app/Atoms/states';

const ProgressBar = (props: ProgressBarPropsInterface) => {
  const [audioPlayer, setAudioPlayer] = useRecoilState(audioPlayerState);

  useEffect(() => {
    if (props.progressRef.current) {
      const progressPercentage =
        (audioPlayer.currentTime / audioPlayer.duration) * 100;
      props.progressRef.current.value = String(progressPercentage);
    }
  }, [audioPlayer.currentTime, audioPlayer.duration, props.progressRef]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(e);
    const newTime = (e.target.valueAsNumber / 100) * audioPlayer.duration;
    setAudioPlayer((prev) => ({ ...prev, currentTime: newTime }));
  };

  return (
    <input
      type="range"
      className={styles.range}
      ref={props.progressRef}
      value={
        audioPlayer.currentTime
          ? (audioPlayer.currentTime / audioPlayer.duration) * 100
          : 0
      }
      onChange={handleChange}
    />
  );
};

export default ProgressBar;
