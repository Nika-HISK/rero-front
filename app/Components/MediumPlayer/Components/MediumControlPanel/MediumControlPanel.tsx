import Image from 'next/image';
import React from 'react';
import { useRecoilState } from 'recoil';
import ProgressBar from '../../../SmallPlayer/Components/ProgressBar/ProgressBar';
import styles from './MediumControlPanel.module.scss';
import { audioPlayerState } from '@/app/Atoms/states';
import { AudioPlayerPropsInterface } from '@/app/Components/SmallPlayer/interfaces/audio-player-props.interface';
import { formatTime } from '@/app/Helpers/AudioHelpers';

const MediumControlPanel = (props: AudioPlayerPropsInterface) => {
  const [, setAudioPlayer] = useRecoilState(audioPlayerState);

  const handleShuffleClick = () => {
    setAudioPlayer((prevState) => ({
      ...prevState,
      shuffle: !prevState.shuffle,
    }));
  };

  return (
    <div className={styles.progressBar}>
      <div className={styles.icons} onClick={handleShuffleClick}>
        <Image src={'/shuffle.png'} alt="shuffle icon" width={24} height={24} />
      </div>
      <p>{formatTime(props.currentTime)}</p>
      <ProgressBar
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
          src={props.loop ? '/greenLoop.png' : '/disableLoop.png'}
          alt="loop"
          width={28}
          height={28}
        />
      </div>
    </div>
  );
};

export default MediumControlPanel;
