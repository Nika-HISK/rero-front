'use client';

import styles from './PlayList.module.scss';
import { useState } from 'react';
import { Props } from './playlistPropsInterface/playlistPropsInterface';

const PlayList = (props: Props) => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const onChangeToggle = () => {
        setIsOpen((prev) => !prev);
    }

    return (
        <>
            <div className={styles.playListWrapper} >
                <div className={styles.wrapper} >
                    <img className={styles.artistCover} src={props.artistPhoto} alt={`${props.playlistName} cover`} />
                    <span className={styles.playlistName}>{props.playlistName}</span>
                    <img onClick={onChangeToggle} src={isOpen ? '/playlist/down.svg' : '/playlist/up.svg'} alt="Toggle" />
                </div>
                <div className={`${styles.afterOpen} ${!isOpen ? styles.collapsed : ''}`} >
                    <div>
                        <div className={styles.looperShuffleWrapper} >
                            <img src='/playlist/looper.svg' alt="Looper" />
                            <img src='/playlist/shuffle.svg' alt="Shuffle" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PlayList;
