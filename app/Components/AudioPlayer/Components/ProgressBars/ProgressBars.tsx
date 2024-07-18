import Image from "next/image";
import styles from './ProgressBars.module.scss';
import InputRange from '../InputRange/InputRange';
import { formatTime  } from "@/app/Helpers/AudioHelpers";
import { ProgressBarsProps } from "@/app/Interfaces/Interfaces";

const ProgressBars: React.FC<ProgressBarsProps> = ({ currentTime, duration, onProgressChange, onTenSecondsBack, progressRef, ipadProgressRef }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.progressBar}>
                <p>{formatTime(currentTime)}</p>
                <InputRange
                    defaultValue={String((currentTime / duration) * 100)}
                    onChange={onProgressChange}
                    progressRef={progressRef}
                />
                <div className={styles.ipadTime}>
                    <span>{`${formatTime(currentTime)}/${formatTime(duration)}`}</span>
                </div>
                <p>{formatTime(duration)}</p>
            </div>
            <div className={styles.progressIpad}>
                <div className={styles.mobileProgress}>
                    <div onClick={onTenSecondsBack}>
                        <Image src="/gobackten.png" alt='tensecondsback' width={24} height={22} />
                    </div>
                    <div className={styles.mobileTime}>
                        <span>{`${formatTime(currentTime)}/${formatTime(duration)}`}</span>
                    </div>
                </div>
                <div className={styles.ipadProgress}>
                    <div onClick={onTenSecondsBack} className={styles.tensecondback}>
                        <Image src="/gobackten.png" alt='tensecondsback' width={24} height={24} />
                    </div>
                    <div className={styles.ipadRange}>
                        <InputRange
                            defaultValue={String((currentTime / duration) * 100)}
                            onChange={onProgressChange}
                            progressRef={ipadProgressRef}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProgressBars;
