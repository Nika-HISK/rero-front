import React from 'react';
import InputRange from '../../../AudioPlayer/Components/InputRange/InputRange';
import { formatTime } from '@/app/Helpers/AudioHelpers';
import styles from './MainProgress.module.scss';
import { ProgressBarProps } from '@/app/Interfaces/Interfaces';
import Image from "next/image";

const ProgressBar: React.FC<ProgressBarProps> = ({
    currentTime,
    duration,
    progressRef,
    handleProgressChange,
    loop,
    toggleLoop,
}) => {
    return (
        <div className={styles.progressBar}>
            <div className={styles.icons}>
                <Image src="/shuffle.png" alt='shuffle' width={24} height={22}/>
            </div>
            <p>{formatTime(currentTime)}</p>
            <InputRange
                defaultValue={String((currentTime / duration) * 100)}
                onChange={handleProgressChange}
                progressRef={progressRef}
            />
            <div className={styles.mobileTime}>
                <span>{`${formatTime(currentTime)}/${formatTime(duration)}`}</span>
            </div>
            <p>{formatTime(duration)}</p>
            <div className={styles.icons} onClick={toggleLoop}>
                <Image src={loop ? "/greenLoop.png" : "/disableLoop.png"} alt='loop'  width={28} height={28}/>
            </div>
        </div>
    );
};

export default ProgressBar;
