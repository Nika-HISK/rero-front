import Link from 'next/link';
import styles from './BackgroundAlbumCard.module.scss';
import { BackgroundAlbumCardPropsInterface } from './interfaces/background-album-card-props.interface';

const BackgroundAlbumCard = (props: BackgroundAlbumCardPropsInterface) => {
  return (
    <Link
      className={styles.wrapper}
      style={{
        backgroundImage: `url(${props.albumCover})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      href={`/topalbums/album/${props.id}`}
    >
      <div className={styles.container}>
        <span className={styles.albumName}>{props.name}</span>
        <span className={styles.artistName}>{props.artist.artistName}</span>
        <span className={styles.time}>{props.releaseDate}</span>
      </div>
      <div className={styles.songCountContainer}>
        <span
          className={styles.songCount}
        >{`${props.songCount} ${props.songCount > 1 ? 'songs' : 'song'}`}</span>
      </div>
    </Link>
  );
};

export default BackgroundAlbumCard;
