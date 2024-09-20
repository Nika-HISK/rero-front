import Link from 'next/link';
import styles from './LongAlbumCover.module.scss';
import { LongAlbumCoverPropsInterface } from './interfaces/long-album-cover-props.interface';

const LongAlbumCover = (props: LongAlbumCoverPropsInterface) => {
  return (
    <Link
      href={`/topalbums/album/${props.id}`}
      className={styles.wrapper}
      style={{
        backgroundImage: `url(${props.cover})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <span className={styles.albumName}>{props.name}</span>
      <span className={styles.artistName}>{props.artistName}</span>
    </Link>
  );
};

export default LongAlbumCover;
