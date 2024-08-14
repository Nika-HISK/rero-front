import styles from './BackgroundAlbumCard.module.scss';
import { BackgroundAlbumCardPropsInterface } from './interfaces/background-album-card-props.interface';

const BackgroundAlbumCard = (props: BackgroundAlbumCardPropsInterface) => {
  return (
    <div
      className={styles.wrapper}
      style={{
        backgroundImage: `url(${props.backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className={styles.container}>
        <span className={styles.albumName}>{props.albumName}</span>
        <span className={styles.artistName}>{props.artistName}</span>
        <span className={styles.time}>{props.albumTime}</span>
      </div>
      <div>
        <span className={styles.songCount}>{props.songCount}</span>
      </div>
    </div>
  );
};

export default BackgroundAlbumCard;
