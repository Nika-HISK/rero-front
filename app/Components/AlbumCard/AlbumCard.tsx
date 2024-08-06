import styles from "./AlbumCard.module.scss";
import { Props } from "./interface/albumCard-props.interface";


const AlbumCard = (props: Props) => {
    return (
        <div
            className={styles.albumWrapper}
            style={{ '--background-image': `url(${props.artistImage})` } as React.CSSProperties}
        >
            <div className={styles.captionWrapper} >
                <div className={styles.wrapper} >
                    <span className={styles.albumName} >{props.albumName}</span>
                    <span className={styles.artistName} >{props.artisName}</span>
                    <span className={styles.releaseDate} >{props.releaseDate}</span>
                </div>
                <span className={styles.songQuantity} >{props.songQuantity}</span>
            </div>
        </div>
    )
}

export default AlbumCard;
