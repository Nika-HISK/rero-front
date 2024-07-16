
import styles from "./AlbumCard.module.scss";

interface Props {
    artistImage: string;
    albumName: string;
    artisName: string;
    releaseDate: string;
    songQuantity: string
}

const AlbumCard = (props: Props) => {
    return (
        <div
            className={styles.albumWrapper}
            style={{ backgroundImage: `url(${props.artistImage})` }}
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