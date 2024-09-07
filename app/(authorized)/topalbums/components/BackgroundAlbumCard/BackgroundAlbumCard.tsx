import Link from 'next/link';
import styles from './BackgroundAlbumCard.module.scss';
import { BackgroundAlbumCardPropsInterface } from './interfaces/background-album-card-props.interface';

const BackgroundAlbumCard = (props: BackgroundAlbumCardPropsInterface) => {
  return (
    <Link
      className={styles.wrapper}
      style={{
        backgroundImage: `url(${props.backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      href={`/topalbums/albummusic/${props.id}`}
    >
      <div className={styles.container}>
        <span className={styles.albumName}>{props.albumName}</span>
        <span className={styles.artistName}>{props.artistName}</span>
        <span className={styles.time}>{props.albumTime}</span>
      </div>
      <div className={styles.songCountContainer}>
        <span className={styles.songCount}>{props.songCount}</span>
      </div>
    </Link>
  );
};

export default BackgroundAlbumCard;
