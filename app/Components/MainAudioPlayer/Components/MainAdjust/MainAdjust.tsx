import React from 'react';
import Image from 'next/image';
import styles from './MainAdjust.module.scss';
import { MainAdjustProps } from '@/app/Interfaces/Interfaces';

const MainAdjust: React.FC<MainAdjustProps> = ({
    onVolumeDown,
    onVolumeUp,
    onPreviousSong,
    onNextSong,
    onPlayMusic,
    playing,
}) => {
    return (
        <div className={styles.adjustButtons}>
            <div className={styles.volumeButton} onClick={onVolumeDown}>
                <Image src="/valumedown.png" alt='volumeDownButton' width={24} height={24} />
            </div>
            <div className={styles.adjustButton} onClick={onPreviousSong}>
                <Image src="/previous.png" alt='previousMusicButton' width={24} height={24} />
            </div>
            <div onClick={onPlayMusic} className={styles.mainButton}>
                <Image src={playing ? "/play.png" : "/pause.png"} alt='playbutton' width={42} height={42} />
            </div>
            <div className={styles.buttonWrapper} onClick={onNextSong}>
                <Image src="/next.png" alt='nextMusicButton' width={24} height={24} />
            </div>
            <div className={styles.volumeButton} onClick={onVolumeUp}>
                <Image src="/valumeup.png" alt='volumeUpButton' width={24} height={24} />
            </div>
        </div>
    );
};

export default MainAdjust;
