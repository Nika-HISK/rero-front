'use client'

import { useState } from 'react';
import styles from "./ArtistCard.module.scss";
import { Props } from './interface/artistCard-props.interface';

const ArtistCard = (props: Props) => {
    const [isFilled, setIsFilled] = useState<boolean>(false);

    const handleImageClick = () => {
        setIsFilled(!isFilled);
    }

    return (
        <div className={styles.cardWrapper}>
            <div className={styles.captionWrapper}>
                <span className={styles.artistNameStyle}>{props.artisName}</span>
                <span className={styles.musicNameStyle}>{props.musicName}</span>
            </div>
            <div className={styles.imgWrapper} >
                <img
                    className={styles.playerStyling}
                    src={isFilled ? "/player/playerFill.svg" : "/player/playerOutLine.svg"}
                    onClick={handleImageClick}
                />
            </div>
        </div>
    );
}

export default ArtistCard;
